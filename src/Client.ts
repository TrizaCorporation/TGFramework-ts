import { BetterSignal, BetterSignalType } from "@rbxts/bettersignal"
import { TNetClient, Middleware } from "@rbxts/tnet"
import { Controller, GetController } from "./Dependencies"

export default class FrameworkClient {
    Started: boolean
    Controllers: Map<string, Controller>
    OnStart: BetterSignal
    //ClientNetwork: TNetClient = new TNetClient()
    //MiddlewareHandlers: Map<string, TNetClient> = new Map()
    Middleware?: Middleware

    constructor(){
        this.Started = false
        this.Controllers = new Map()
        this.OnStart = new BetterSignal()
    }


    Start(Middleware?: Middleware){
        this.Middleware = Middleware
        const Controllers = this.Controllers
        const OnStart = this.OnStart
        return new Promise(function(resolve){
            const InitializationQueue: string[] = []

            for (const [ControllerName, _] of pairs (Controllers)){
                InitializationQueue.push(ControllerName)
            }

            for (const [_, ControllerName] of InitializationQueue){
                const ControllerData = Controllers.get(ControllerName)
                const DependencyNumber = ControllerData?.Dependencies && ControllerData.Dependencies.size() || 0
                const LastPos = InitializationQueue.indexOf(ControllerName)
                let NewIndex = 0
                if (DependencyNumber > 0){
                    assert(ControllerData?.Dependencies)
                    for (const [_, Dependency] of pairs(ControllerData?.Dependencies)){
                        const DependencyIndex = InitializationQueue.indexOf(Dependency)
                        if (DependencyIndex > NewIndex){
                            NewIndex = DependencyIndex + 1
                        }
                    }
                }else{
                    NewIndex = 1
                }
                InitializationQueue.remove(LastPos)
                InitializationQueue.insert(NewIndex, ControllerName)
            }

            const InitializationPromises: Array<Promise<void>> = []

            for (const [_, ControllerName] of InitializationQueue){
                const ControllerData = Controllers.get(ControllerName)
                if (!ControllerData) return
                if(Middleware){
                    if(!ControllerData?.Middleware){
                        ControllerData.Middleware = {
                            Inbound: [],
                            Outbound: []
                        }
                    }else{
                        if(!ControllerData.Middleware.Inbound){
                            ControllerData.Middleware.Inbound = []
                        }
                        if(!ControllerData.Middleware.Outbound){
                            ControllerData.Middleware.Outbound = []
                        }
                    }
                    if(Middleware.Inbound){
                        for (const Handler of Middleware.Inbound){
                            ControllerData.Middleware.Inbound?.push(Handler)
                        }
                    }
                    if(Middleware.Outbound){
                        for (const Handler of Middleware.Outbound){
                            ControllerData.Middleware.Outbound?.push(Handler)
                        }
                    }
                }
                const ControllerNetworkClient = new TNetClient(ControllerData.Middleware)
                if (ControllerData) ControllerData.TNetClient = ControllerNetworkClient
                ControllerData.Initialize && InitializationPromises[InitializationPromises.size()] === new Promise(function(controllerResolve){
                    debug.setmemorycategory(ControllerData.Name)
                    ControllerData.Initialize && ControllerData.Initialize()
                    controllerResolve(undefined)
                })
            }

            resolve(Promise.all(InitializationPromises))
        }).then(() => {
            for (const [_, Controller] of Controllers){
                Controller.Start && task.spawn(() => {
                    debug.setmemorycategory(Controller.Name)
                    Controller.Start && Controller.Start()
                })
            }
            
            this.Started = true
            OnStart.Fire(true)
        })
    }

    AddControllers(directory: Instance, deep?: boolean){
        const files = deep? directory.GetDescendants() : directory.GetChildren()
        for (const controller of files){
            if (controller.IsA("ModuleScript")){
                const data = require(controller) as {default: Controller}
                const controllerData = data.default
                if (controllerData instanceof Controller){
                    this.Controllers.set(controllerData.Name, controllerData)
                }
            }
        }
    }

    /*
    GetController(controllerName: string){
        assert(this.Controllers.get(controllerName), string.format("%s isn't a registered controller.", controllerName))
        return this.Controllers.get(controllerName)
    }
    */

    /*
    CreateController(controllerName: string, data: Controller){
        assert(!this.Started, "Controllers can't be created after TGFramework has started.")
        this.Controllers.set(controllerName, data)
        return data
    }
    */

    /*
    CreateNetSignal(signalType: string){
        assert(signalType === "Event" || signalType === "Function", "Invalid Signal Type.")
        return string.format("SignalPlaceHolder:%s", signalType)
    }
    */
}