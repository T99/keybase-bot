/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	10:53 PM -- June 11th, 2019.
 *	Project: @T99/my-keybase-bot
 */

/**
 * NPM main class used for exporting this package's contents.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */

// export { ClassName } from "./class-location";

import * as delicate from "@t99/delicate";
import { KeybaseBot } from "./keybase-bot";
import { MsgSummary } from "keybase-bot/lib/types/chat1";

const main: () => Promise<void> = async (): Promise<void> => {
	
	let gene: KeybaseBot = await KeybaseBot.create();
	
	gene.getEvents().MESSAGE_RECEIVED.subscribe((message: MsgSummary): void => {
		
		console.log("[" + message.sender.username + "] " + message.content.text?.body);
		
	});
	
	delicate.prompt(async (): Promise<void> => {
		
		console.log("Exiting...");
		
		await gene.stop();
	
	});
	
};

main();