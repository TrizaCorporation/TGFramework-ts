import { BetterSignal, BetterSignalType } from "@trizacorporation/bettersignal"
import { TNetClient } from "@trizacorporation/tnet"
import { Middleware } from "@trizacorporation/tnet/out/Dependencies/Types"
import { Controller } from "./Dependencies"

export default class FrameworkClient {
    Started: boolean = false
    Controllers: Map<string, Controller> = new Map()
    OnStart: BetterSignalType = new BetterSignal()
    ClientNetwork: TNetClient = new TNetClient()
    MiddlewareHandlers: Map<string, TNetClient> = new Map()
    Middleware?: Middleware


    Start(Middleware?: Middleware){
        this.Middleware = Middleware
        const Controllers = this.Controllers
        const OnStart = this.OnStart
        return Promise.try(function(){
            for (const [_, Data] of Controllers){
                if (Data.Initialize){
                    Data.Initialize()
                }
                if (Data.Start){
                    task.spawn(Data.Start)
                }
                if(Data.Middleware){
                    let ControllerNetworkClient = new TNetClient(Data.Middleware)
                    Data.TNetClient = ControllerNetworkClient
                }
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