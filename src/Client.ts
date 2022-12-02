import { DataStoreService } from "@rbxts/services"

interface Controller {
    Name: string,
    Init?: Callback,
    Start?: Callback
}

export default class FrameworkClient {
    Started: boolean
    Controllers: Map<string, Controller>
    constructor() {
        this.Controllers = new Map()
        this.Started = false
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
    }

    CreateController(controllerName: string, data: Controller){
        assert(!this.Started, "Controllers can't be created after TGFramework has started.")
        this.Controllers.set(controllerName, data)
    }
}