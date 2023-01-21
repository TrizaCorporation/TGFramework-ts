import { TNetClient } from "@trizacorporation/tnet"
import { Middleware } from "@trizacorporation/tnet/out/Dependencies/Types"

let Controllers: Map<string, Controller> = new Map()

export class Controller {
    Name: string
    Initialize?(): void
    Start?(): void
    Middleware?: Middleware
    TNetClient?: TNetClient
    [key: string]: any

    constructor(controllerData: Controller){
        this.Name = controllerData.Name
        for (const [property, value] of pairs(controllerData)){
            if (!this[property]){
                this[property] = value
            }
        }
        Controllers.set(this.Name, this)
    }
}

export function GetController(controllerName: string) {
    assert(Controllers.get(controllerName), string.format("%s isn't a registered controller.", controllerName))
    return Controllers.get(controllerName)
}

export function GetAllControllers(){
    return Controllers
}