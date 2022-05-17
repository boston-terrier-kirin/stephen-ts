import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

/**
 * Generic Constraints
 * ApiSync<T extends HasId>で、
 * Tはidを持った何かとして定義できる。
 */
export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
