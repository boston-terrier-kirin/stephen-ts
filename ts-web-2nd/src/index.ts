// ■UserEdit
// import { User } from './models/User';
// import { UserEdit } from './views/UserEdit';

// const user = User.buildUser({ name: 'Steph', age: 35 });
// const root = document.getElementById('root');

// if (root) {
//   const userEdit = new UserEdit(root, user);
//   userEdit.render();
// }

// ■CollectionView
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const users = new Collection('http://localhost:3001/users', (json: UserProps) =>
  User.buildUser(json)
);

users.on('change', () => {
  const root = document.getElementById('root');
  if (root) {
    const userList = new UserList(root, users);
    userList.render();
  }
});

users.fetch();
