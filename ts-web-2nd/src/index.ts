import { User } from './models/User';

const user = new User({ id: 1 });

user.on('change', () => {
  console.log(user);
});

user.on('save', () => {
  console.log(user);
});

user.fetch();

user.set({ age: 35 });
user.save();
