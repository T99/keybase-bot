/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	9:58 AM -- January 30th, 2020.
 *	Project: keybase-bot
 */

/**
 * A static collection of useful string formatting methods.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */

export function bold(content: string): string {
	
	return ("*" + content + "*");
	
}

export function italicize(content: string): string {
	
	return ("_" + content + "_");
	
}

export function monospace(content: string): string {
	
	return ("`" + content + "`");
	
}

export function quote(content: string): string {
	
	return ("> " + content);
	
}