import { AxiosResponse } from 'axios';

interface ModelAttributes<T> {
	get<K extends keyof T>(key: K): T[K];
	set(update: T): void;
	getAll(): T;
}

interface Sync<T> {
	fetch(id: number): Promise<AxiosResponse>;
	save(data: T): Promise<void>;
}

interface Events {
	on(eventName: string, call: () => void): void;
	trigger(eventName: string): void;
}

interface HasId {
	id?: number;
}

export class Model<T extends HasId> {
	constructor(
		private attributes: ModelAttributes<T>,
		private events: Events,
		private sync: Sync<T>
	) {}

	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	get get() {
		return this.attributes.get;
	}

	set(update: T): void {
		this.attributes.set(update);
		this.events.trigger('change');
	}

	async fetch(): Promise<void> {
		const id = this.attributes.get('id');

		if (typeof id !== 'number') {
			throw new Error('Cannot fetch without an id.');
		}

		const response = await this.sync.fetch(id);
		this.attributes.set(response.data);
	}

	async save(): Promise<void> {
		await this.sync.save(this.attributes.getAll());
		this.trigger('save');
	}
}
