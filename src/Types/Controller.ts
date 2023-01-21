import { Middleware } from "@trizacorporation/tnet/out/Dependencies/Types"

export interface Controller {
    Name: string,
    Initialize?(): void,
    Start?(): void,
    Middleware?: Middleware,
    [key: string | number]: any
}