import { BetterSignal, BetterSignalType } from "@trizacorporation/bettersignal"
import { TNetClient } from "@trizacorporation/tnet"
import { Middleware } from "@trizacorporation/tnet/out/Dependencies/Types"
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
        return Promise.try(function(){
            for (const [ControllerName, Info] of Controllers){
                const ControllerNetworkClient = new TNetClient(Info.Middleware)
                const ControllerData = GetController(ControllerName)
                if (!ControllerData) return
                if (ControllerData) ControllerData.TNetClient = ControllerNetworkClient
                if(Info.Middleware){
                    if (Middleware){
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
                }
                Info.Initialize && Info.Initialize()
                Info.Start && Info.Start()
            }
            OnStart.Fire(true)
            return true
        })
    }

    AddControllers(directory: Instance, deep?: boolean){
        const files = deep? directory.GetDescendants() : directory.GetChildren()
        for (const controller of files){
            if (controller.IsA("ModuleScript")){
                const data = require(controller) as {default: Controller}
                const controllerData = data.default
                if (controllerData){
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