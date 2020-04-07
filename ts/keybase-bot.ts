/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	11:49 PM -- January 29th, 2020.
 *	Project: keybase-bot
 */

import { AventNotifier } from "avents";
import BaseKeybaseBot from "keybase-bot";
import { MsgSummary, SendRes } from "keybase-bot/lib/types/chat1";
import { SentMessage } from "./types/sent-message";
import { KeybaseBotConfig } from "./keybase-bot-config";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class KeybaseBot {
	
	private static readonly USERNAME: string = "";
	
	private static readonly PAPER_KEY: string = "";
	
	private readonly internalBot: BaseKeybaseBot;
	
	private readonly events: KeybaseBotEvents;
	
	protected constructor(internalBot: BaseKeybaseBot, config: KeybaseBotConfig) {
	
		this.internalBot = internalBot;
		this.events = new KeybaseBotEvents();
	
	}
	
	public static async create(config: KeybaseBotConfig): Promise<KeybaseBot> {
	
		let result: KeybaseBot = new KeybaseBot(new BaseKeybaseBot(), config);
		
		await result.internalBot.init(KeybaseBot.USERNAME, KeybaseBot.PAPER_KEY, {
			verbose: false
		});
		
		result.internalBot.chat.watchAllChannelsForNewMessages((message: MsgSummary): void => {
			
			result.getEvents().MESSAGE_RECEIVED.notify(message);
			
		});
		
		console.log("Your bot is initialized. It is logged in as '" + result.getUsername() + "' from device: '" + result.getDeviceName() + "'.");
		
		return result;
	
	}
	
	protected static getDefaultConfig(): Required<KeybaseBotConfig> {
		
		return {
		
		
		
		};
		
	};
	
	public getUsername(): string {
		
		return (this.internalBot.myInfo()?.username as string);
		
	}
	
	public getDeviceName(): string {
		
		return (this.internalBot.myInfo()?.devicename as string);
		
	}
	
	public async sendMessage(channel: string, message: string): Promise<SentMessage> {
		
		let result: SendRes = await this.internalBot.chat.send({ name: channel }, { body: message });
		
		return {
			
			message: result.message,
			id: result.id as number,
			outboxID: result.outboxId as Buffer
			
		};
		
	}
	
	public getEvents(): KeybaseBotEvents {
	
		return this.events;
	
	}
	
	public async stop(): Promise<void> {
	
		await this.internalBot.deinit();
	
	}
	
}

export class KeybaseBotEvents {
	
	public readonly MESSAGE_RECEIVED: AventNotifier<MsgSummary>;
	
	public constructor() {
	
		this.MESSAGE_RECEIVED = new AventNotifier<MsgSummary>();
	
	}
	
}
