import { BetterSignal, BetterSignalType } from "@trizacorporation/bettersignal"
import { TNetClient } from "@trizacorporation/tnet"
import { Middleware } from "@trizacorporation/tnet/out/Dependencies/Types"

interface Controller {
    Name: string,
    Init?: Callback,
    Start?: Callback,
    [key: string]: any
}

export default class FrameworkClient {
    Started: boolean
    Controllers: Map<string, Controller>
    OnStart: BetterSignalType
    ClientNetwork: TNetClient
    constructor(Middleware?: Middleware) {
        this.Controllers = new Map()
        this.Started = false
        this.OnStart = new BetterSignal()
        this.ClientNetwork = new TNetClient(Middleware)
    }

    Start(){
        const Controllers = this.Controllers
        const OnStart = this.OnStart
        return Promise.try(function(){
            for (const [ControllerName, Data] of Controllers){
                if (Data.Init){
                    Data.Init()
                }
                if (Data.Start){
                    task.spawn(Data.Start)
                }
            }
            OnStart.Fire(true)
            return true
        })
    }

    GetController(controllerName: string){
        assert(this.Controllers.get(controllerName), string.format("%s isn't a registered controller.", controllerName))
        return this.Controllers.get(controllerName)
    }

    CreateController(controllerName: string, data: Controller){
        assert(!this.Started, "Controllers can't be created after TGFramework has started.")
        this.Controllers.set(controllerName, data)
        return data
    }

    CreateNetSignal(signalType: string){
        assert(signalType === "Event" || signalType === "Function", "Invalid Signal Type.")
        return string.format("SignalPlaceHolder:%s", signalType)
    }
}

export {
    BetterSignal,
    BetterSignalType
}