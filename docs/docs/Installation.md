---
---

This will guide will show you how to install, and begin using TGFramework-ts.

## Download from NPM

To get started using TGFramework-ts, first download the package off of NPM using the following command.

```bash
npm install @rbxts/tgframework
```
## Initializing a Server

To initialize a Server, simply import the module like so:

```ts
import { FrameworkServer } from "@rbxts/tgframework"
```

And then create a new Instance of it like so:

```ts
import { FrameworkServer } from "@rbxts/tgframework"

const TGFramework = new FrameworkServer()
```

## Initializing a Client

:::info
Initializing a Client, works the same as initializing a server, but we included this for examples sake.
:::

To initialize a Client, simply import the module like so:

```ts
import { FrameworkClient } from "@rbxts/tgframework"
```

And then create a new Instance of it like so:

```ts
import { FrameworkClient } from "@rbxts/tgframework"

const TGFramework = new FrameworkClient()
```

## Loading Services/Controllers 

:::caution
The .AddServices and .AddControllers methods, both have a **deep** option which can be specified with a boolean.

Using the **deep** option will load all Descendants which are controllers/services in the specific directory.
:::

To load Services/Controllers, just simply call the .AddServices / .AddControllers Method.<br></br>
This can be done like so:

```ts
import { FrameworkServer } from "@rbxts/tgframework"

const TGFramework = new FrameworkServer()

const Directory = script.Parent

TGFramework.AddServices(Directory)
```

