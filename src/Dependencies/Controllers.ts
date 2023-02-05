import { TNetClient, Middleware } from "@rbxts/tnet"

let Controllers: Map<string, Controller> = new Map()

export class Controller {
    Name: string
    Dependencies?: [string]
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

/**
 * Returns all of the currently registered controllers.
 * @returns {Map<string, Controller>}
 * @deprecated
 */

export function GetAllControllers(){
    return Controllers
}