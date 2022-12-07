/*	__________________                                             __  
   /_  __/ ____/ ____/________ _____ ___  ___ _      ______  _____/ /__
	/ / / / __/ /_  / ___/ __ `/ __ `__ \/ _ \ | /| / / __ \/ ___/ //_/
   / / / /_/ / __/ / /  / /_/ / / / / / /  __/ |/ |/ / /_/ / /  / ,<   
  /_/  \____/_/   /_/   \__,_/_/ /_/ /_/\___/|__/|__/\____/_/  /_/|_|  
									  
  
  TGFramework(ts)

  Programmer(s): CodedJimmy
  
*/
  
import { RunService } from "@rbxts/services";
import Client from "./Client";
import Server from "./Server"

export default function(){
	if (RunService.IsServer()){
		return Server
	}else{
		return Client
	}
}