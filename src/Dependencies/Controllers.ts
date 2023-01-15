import { Middleware } from "@trizacorporation/tnet/out/Dependencies/Types"

let Controllers: Map<string, Controller> = new Map()

export class Controller {
    Name: string
    Initialize?: Callback
    Start?: Callback
    Middleware?: Middleware
    [key: string]: any

    constructor(name: string){
        this.Name = name
        Controllers.set(name, this)
    }
}

export function GetController(controllerName: string) {
    assert(Controllers.get(controllerName), string.format("%s isn't a registered controller.", controllerName))
    return Controllers.get(controllerName)
}