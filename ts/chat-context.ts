/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	9:49 AM -- January 30th, 2020.
 *	Project: keybase-bot
 */

import { KeybaseBot } from "./keybase-bot";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class ChatContext {
	
	protected readonly bot: KeybaseBot;
	
	protected readonly channel: string;
	
	protected active: boolean;
	
	public constructor(bot: KeybaseBot, channel: string) {
	
		this.bot = bot;
		this.channel = channel;
		this.active = true;
	
	}
	
	public async send(message: string): Promise<void> {
		
		return;
	
	}
	
	public isActive(): boolean {
		
		return this.active;
		
	}
	
}