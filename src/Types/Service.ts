import { Middleware } from "@rbxts/tnet";

export interface Service {
    Name: string,
    Dependencies?: [string],
    Initialize?(): void,
    Start?(): void,
    Middleware?: Middleware,
    [key: string | number]: any,
    Client?: {
        [key: string | number]: any
    }
}