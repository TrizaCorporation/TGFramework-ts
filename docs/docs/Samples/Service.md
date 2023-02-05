---
tags: [sample]
---

A sample service example using TGFramework-ts.

Code:

```ts
import { Service } from "@rbxts/tgframework"

export default new class TestService extends Service {
  constructor(){
    super({
      Name: "TestService",
      Client: {
        Hello: () => {
          return this.Hello()
        }
      }
    })
  }

  Initialize(): void {
    // This runs on Initialization
  }

  Start(): void {
    // This runs on Start
  }

  Hello(): string {
    return "Hello from TestService"
  }
}

```