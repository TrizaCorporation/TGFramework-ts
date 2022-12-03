import { BetterSignal, BetterSignalType } from "@trizacorporation/bettersignal"

interface Controller {
    Name: string,
    Init?: Callback,
    Start?: Callback
}

export default class FrameworkClient {
    Started: boolean
    Controllers: Map<string, Controller>
    OnStart: BetterSignalType
    constructor() {
        this.Controllers = new Map()
        this.Started = false
        this.OnStart = new BetterSignal()
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
        })
    }

    CreateController(controllerName: string, data: Controller){
        assert(!this.Started, "Controllers can't be created after TGFramework has started.")
        this.Controllers.set(controllerName, data)
        return data
    }

    CreateSignal(signalType: string){
        assert(signalType === "Event" || signalType === "Function", "Invalid Signal Type.")
        return string.format("SignalPlaceHolder:%s", signalType)
    }
}