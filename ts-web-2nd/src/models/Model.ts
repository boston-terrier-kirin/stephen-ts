import { AxiosPromise, AxiosResponse } from 'axios';

interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];

  set(update: T): void;

  getAll(): T;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;

  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;

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
    /**
     * ここを getter にすることで、使う側は、user.on("click", ()=> console.log("do something")) にすることができる。
     */
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: T) {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    // this.getはgetterのgetを呼んでいる。
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data);
    });
  }

  save(): void {
    const attrs = this.attributes.getAll();
    this.sync
      .save(attrs)
      .then((res: AxiosResponse): void => {
        this.events.trigger('save');
      })
      .catch(() => {
        this.events.trigger('error');
      });
  }
}
