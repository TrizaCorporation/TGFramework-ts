import { BetterSignal, BetterSignalType } from "@rbxts/bettersignal"
import { TNetServer, Middleware } from "@rbxts/tnet"
import { Service } from "./Dependencies"

export default class FrameworkServer {
    Started: boolean
    Services: Map<string, Service>
    OnStart: BetterSignal
    Middleware?: Middleware

    constructor(){
        this.Services = new Map()
        this.Started = false
        this.OnStart = new BetterSignal()
    }


    Start(Middleware?: Middleware){
        this.Middleware = Middleware
        const Services = this.Services
        const OnStart = this.OnStart
        return Promise.try(function(){
            const MainServiceFolder = new Instance("Folder")
            MainServiceFolder.Name = "Services"
            MainServiceFolder.Parent = script.Parent

            const InitializationQueue: string[] = []

            for (const [ServiceName, _] of pairs (Services)){
                InitializationQueue.push(ServiceName)
            }

            for (const [_, ServiceName] of InitializationQueue){
                const ServiceData = Services.get(ServiceName)
                const DependencyNumber = ServiceData?.Dependencies && ServiceData.Dependencies.size() || 0
                const LastPos = InitializationQueue.indexOf(ServiceName)
                let NewIndex = 0
                if (DependencyNumber > 0){
                    assert(ServiceData?.Dependencies)
                    for (const [_, Dependency] of pairs(ServiceData?.Dependencies)){
                        const DependencyIndex = InitializationQueue.indexOf(Dependency)
                        if (DependencyIndex > NewIndex){
                            NewIndex = DependencyIndex + 1
                        }
                    }
                }else{
                    NewIndex = 1
                }
                InitializationQueue.remove(LastPos)
                InitializationQueue.insert(NewIndex, ServiceName)
            }

            for (const [_, ServiceName] of InitializationQueue){
                const ServiceData = Services.get(ServiceName)
                if (!ServiceData) return
                if(Middleware){
                    if(!ServiceData?.Middleware){
                        ServiceData.Middleware = {
                            Inbound: [],
                            Outbound: []
                        }
                    }else{
                        if(!ServiceData.Middleware.Inbound){
                            ServiceData.Middleware.Inbound = []
                        }
                        if(!ServiceData.Middleware.Outbound){
                            ServiceData.Middleware.Outbound = []
                        }
                    }
                    if(Middleware.Inbound){
                        for (const Handler of Middleware.Inbound){
                            ServiceData.Middleware.Inbound?.push(Handler)
                        }
                    }
                    if(Middleware.Outbound){
                        for (const Handler of Middleware.Outbound){
                            ServiceData.Middleware.Outbound?.push(Handler)
                        }
                    }
                }
                const ServerNetworkServer = new TNetServer(ServiceData.Middleware)
                if (ServiceData) ServiceData.TNetServer = ServerNetworkServer
                if (ServiceData.Client && ServiceData?.Client){
                    const ServiceFolder = new Instance("Folder")
                    ServiceFolder.Name = ServiceData.Name
                    ServiceFolder.Parent = MainServiceFolder
                    const SignalsFolder = new Instance("Folder")
                    SignalsFolder.Name = "Signals"
                    SignalsFolder.Parent = ServiceFolder
                    const FunctionsFolder = new Instance("Folder")
                    FunctionsFolder.Name = "Functions"
                    FunctionsFolder.Parent = ServiceFolder
                    for (const [itemName, item] of pairs(ServiceData.Client)){
                        const Name = itemName as string
                        const ItemData = item as Callback | string

                        if (typeIs(ItemData, "string")){
                            const Type = string.match(ItemData, "%p(%w+)")[0] as string
                            
                            if (Type === "Event"){
                                const Remote = new Instance("RemoteEvent")
                                Remote.Name = Name
                                Remote.Parent = SignalsFolder
                                
                                ServiceData?.Client[Name] === ServiceData.TNetServer?.HandleRemoteEvent(Remote)
                            }else{
                                const Remote = new Instance("RemoteFunction")
                                Remote.Name = Name
                                Remote.Parent = SignalsFolder
                                
                                ServiceData?.Client[Name] === ServiceData.TNetServer?.HandleRemoteFunction(Remote)
                            }

                        }else{
                            const Remote = new Instance("RemoteFunction")
                            Remote.Name = Name
                            Remote.Parent = FunctionsFolder
                            const Handler = ServiceData?.TNetServer?.HandleRemoteFunction(Remote)

                            Handler?.Connect(function(...args: unknown[]){
                                return ItemData(...args)
                            })
                        }
                    }
                }
                ServiceData.Initialize && ServiceData.Initialize()
                ServiceData.Start && ServiceData.Start()
            }
            OnStart.Fire(true)
            return true
        })
    }

    AddServices(directory: Instance, deep?: boolean){
        const files = deep? directory.GetDescendants() : directory.GetChildren()
        for (const service of files){
            if (service.IsA("ModuleScript")){
                const data = require(service) as {default: Service}
                const serviceData = data.default
                if (serviceData instanceof Service){
                    this.Services.set(serviceData.Name, serviceData)
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