enum SignalType {
  "Event" = "Event",
  "Function" = "Function"
}

export function CreateNetSignal(signalType: SignalType){
  return string.format("SignalPlaceHolder:%s", signalType)
}

export {SignalType}