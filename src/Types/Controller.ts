import { Middleware } from "@trizacorporation/tnet/out/Dependencies/Types"

export interface Controller {
    Name: string,
    Initialize?: Callback,
    Start?: Callback,
    Middleware?: Middleware,
    [key: string]: any
}