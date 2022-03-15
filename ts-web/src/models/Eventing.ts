type Callback = () => void;

export class Eventing {
	events = new Map<string, Callback[]>();

	on = (eventName: string, callback: Callback): void => {
		const handers = this.events.get(eventName) || [];
		handers.push(callback);
		this.events.set(eventName, handers);
	};

	trigger = (eventName: string): void => {
		const handers = this.events.get(eventName);

		if (!handers || handers.length === 0) {
			return;
		}

		handers.forEach((callback) => {
			callback();
		});
	};
}
