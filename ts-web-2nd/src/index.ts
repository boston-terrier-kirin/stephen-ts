import { User } from './models/User';

const user = User.buildUser({ id: 1 });

user.on('change', () => {
  console.log('CHANGE');
});

user.fetch();
console.log(user);
