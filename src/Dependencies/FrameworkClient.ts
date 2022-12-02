interface ControllerInterface {
    [key: string]: {};
  }
  

export default class FrameworkClient {
    Started: boolean
    Controllers: ControllerInterface
    constructor() {
        this.Controllers = {}
        this.Started = false
    }

    CreateController(controllerName: string, data: {}){
        assert(!this.Started, "Controllers can't be created after TGFramework has started.")
        this.Controllers[controllerName] = data
    }
}