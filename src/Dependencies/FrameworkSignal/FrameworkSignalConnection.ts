export interface FrameworkSignalConnectionType {
  Callback?: Callback,
  Disconnect?: Callback
}

export default class FrameworkSignalConnection {
  Callback?: Callback
  constructor(Callback: Callback){
    this.Callback = Callback
  }

  Disconnect(){
    this.Callback = undefined
    setmetatable(this, {})
  }
}