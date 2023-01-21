import { Middleware } from "@trizacorporation/tnet/out/Dependencies/Types";

export interface Service {
    Name: string,
    Initialize?(): void,
    Start?(): void,
    Middleware?: Middleware,
    [key: string | number]: any,
    Client?: {
        [key: string | number]: any
    }
}