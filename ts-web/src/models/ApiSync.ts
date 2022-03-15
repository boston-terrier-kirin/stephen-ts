import axios, { AxiosResponse } from 'axios';

interface HasId {
	id?: number;
}

export class ApiSync<T extends HasId> {
	constructor(public rootUrl: string) {}

	async fetch(id: number): Promise<AxiosResponse> {
		const response: AxiosResponse = await axios.get(
			`${this.rootUrl}/${id}`
		);

		return response;
	}

	async save(data: T): Promise<void> {
		const { id } = data;

		if (id) {
			await axios.put(`${this.rootUrl}/${id}`, data);
		} else {
			await axios.post(this.rootUrl, data);
		}
	}
}
