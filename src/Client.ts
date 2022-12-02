import { FrameworkSignal, FrameworkSignalType } from "./Dependencies/FrameworkSignal"

interface Controller {
    Name: string,
    Init?: Callback,
    Start?: Callback
}

export default class FrameworkClient {
    Started: boolean
    Controllers: Map<string, Controller>
    OnStart: FrameworkSignalType
    constructor() {
        this.Controllers = new Map()
        this.Started = false
        this.OnStart = new FrameworkSignal()
    }

    Start(){
        for (const [Controller, Data] of this.Controllers){
            if (Data.Init){
                Data.Init()
            }
            if (Data.Start){
                task.spawn(Data.Start)
            }
        }
        this.OnStart.Fire(true)
    }

    CreateController(controllerName: string, data: Controller){
        assert(!this.Started, "Controllers can't be created after TGFramework has started.")
        this.Controllers.set(controllerName, data)
    }

    CreateSignal(signalType: string){
        assert(signalType === "Event" || signalType === "Function", "Invalid Signal Type.")
        return string.format("SignalPlaceHolder:%s", signalType)
    }
}