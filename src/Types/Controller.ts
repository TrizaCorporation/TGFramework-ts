import { Middleware } from "@rbxts/tnet"

export interface Controller {
    Name: string,
    Dependencies?: [string],
    Initialize?(): void,
    Start?(): void,
    Middleware?: Middleware,
    [key: string | number]: any
}