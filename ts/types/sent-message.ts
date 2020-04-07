/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	10:09 AM -- January 30th, 2020.
 *	Project: keybase-bot
 */

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export interface SentMessage {

	message: string;
	
	id: number;
	
	outboxID: Buffer;

}