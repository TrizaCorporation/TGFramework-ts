import { FrameworkSignalConnectionType } from "./FrameworkSignalConnection";
import FrameworkSignalConnection from "./FrameworkSignalConnection";

export interface FrameworkSignalType {
    Connect?: Callback,
    Fire: Callback,
    Connections: FrameworkSignalConnectionType[]
}
  

export default class FrameworkSignal {
    Connections: FrameworkSignalConnectionType[]
    constructor(){
        this.Connections = []
    }
    
    Connect(Callback: Callback){
        let Connection = new FrameworkSignalConnection(Callback)
        this.Connections.push(Connection)
        return Connection
    }

    Fire(...args: []){
        for(const Connection of this.Connections){
            if (Connection.Callback){
                task.spawn(Connection.Callback, ...args)
            }
        }
    }
}