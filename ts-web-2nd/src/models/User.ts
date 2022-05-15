import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';

const rootUrl = 'http://localhost:3001/users';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps) {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }
}

/**
 * User extends Model<UserProps>にする理由
 * ModelとUserの関係をcompose(delegete)にすると、user.model.fetch になってしまうので、
 * ModelとUserは継承にする。
 */
// const user = User.buildUser({ id: 1 });
// user.fetch();
// console.log(user);
