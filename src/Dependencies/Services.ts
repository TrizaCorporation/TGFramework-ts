import { RunService } from "@rbxts/services"
import { TNetServer, Middleware } from "@rbxts/tnet"
import { Controller, GetController } from "./Controllers"

let Services: Map<string, Service> = new Map()

interface ClientServiceMarker {
    [key: string]: any
}

export class Service {
    Name: string
    Dependencies?: [string]
    Initialize?(): void
    Start?(): void
    Middleware?: Middleware
    TNetServer?: TNetServer
    [key: string]: any
    Client?: {
        [key: string | number]: any
    }

    constructor(serviceData: Service){
        this.Name = serviceData.Name
        for (const [property, value] of pairs(serviceData)){
            if (!this[property]){
                this[property] = value
            }
        }
        Services.set(this.Name, serviceData)
    }
}

function formatService(controller: Controller, serviceName: string){
    const ServiceFolder = script.Parent?.Parent?.FindFirstChild("Services") as Folder
    const ServiceEvents = ServiceFolder?.FindFirstChild(serviceName) as Folder
    const ServiceSignals = ServiceEvents?.FindFirstChild("Signals") as Folder
    const ServiceFunctions = ServiceEvents?.FindFirstChild("Functions") as Folder

    const Service: ClientServiceMarker = {}

    for (const [_, Event] of pairs(ServiceSignals.GetChildren())){
        const SignalEvent = Event as RemoteEvent | RemoteFunction

        if(SignalEvent.IsA("RemoteEvent")){
            const Handler = controller.TNetClient?.HandleRemoteEvent(SignalEvent)
            if(!Handler) return
            Handler.Middleware = controller.Middleware || {}
            Service[Event.Name] = Handler
        }else{
            const Handler = controller.TNetClient?.HandleRemoteFunction(SignalEvent)
            if(!Handler) return
            Handler.Middleware = controller.Middleware || {}
            Service[Event.Name] = Handler
        }
    }

    for(const [_, Event] of pairs(ServiceFunctions.GetChildren())){
        const ServiceFunction = Event as RemoteFunction
        const Handler = controller.TNetClient?.HandleRemoteFunction(ServiceFunction)
        if(!Handler) return
        Handler.Middleware = controller.Middleware || {}
        Service[Event.Name] = function(...args: unknown[]){
            return Handler.InvokeServer(...args)
        }
    } 

    table.freeze(Service)

    return Service
}

/**
 * Returns the requested service, if there is one.
 * @param serviceName 
 * @returns {(Service|ClientServiceMarker)}
 */

export function GetService(serviceName: string): (Service | ClientServiceMarker){
    if(RunService.IsClient()){
        const ServiceFolder = script.Parent?.Parent?.FindFirstChild("Services") as Folder
        assert(ServiceFolder?.FindFirstChild(serviceName), "This service doesn't exist.")
        const pathItems = debug.traceback().split("GetService")[1].split(":")[0].split(".")
        const controllerName = pathItems[pathItems.size() - 1]
        let FoundController = GetController(controllerName)
        assert(FoundController, "A Controller Wasn't Found")
        return formatService(FoundController, serviceName) as ClientServiceMarker
    }else{
        assert(Services.get(serviceName), string.format("%s isn't a registered service.", serviceName))
        return Services.get(serviceName) as Service
    }
}

export {
    ClientServiceMarker
}