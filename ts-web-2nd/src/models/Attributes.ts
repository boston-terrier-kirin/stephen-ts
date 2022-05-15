import { UserProps } from './User';

export class Attributes<T> {
  constructor(private data: T) {}

  // 元はこれで、これだと戻りがstring or numberになって、他の型に対応できない。
  // get(key: string): string | number {
  //   return this.data[key];
  // }
  //   ↓
  // ・paramterのK
  //   keyは、Tのキーをextendsしたものとして定義できる。
  // ・returnは、T[K] した結果になる。T[K]は、lookup-type。
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set = (update: T): void => {
    Object.assign(this.data, update);
  };
}

/**
 * ここでもthis問題が発生。
 *
 * index.tsから、user.get('name')で呼び出すと、
 * return this.data[key] の this が user になってしまうので、user.data は存在しないのでエラーになる。
 */

/**
 * Generic Constraints + Lookup Type の良い例
 */
// const attrs = new Attributes<UserProps>({ id: 1, name: 'Stephen', age: 32 });
//
// namesだと、UserPropsにないキーなので、コンパイルエラー
// const name = attrs.get('names');
//
// nameは、UserPropsでstring型になっているので、これでstringとして認識できる
// const myName = attrs.get('name');
// console.log(myName);
//
// ageは、UserPropsでnumber型になっているので、 これでnumberとして認識できる
// const myAge = attrs.get('age');
// console.log(myAge);
