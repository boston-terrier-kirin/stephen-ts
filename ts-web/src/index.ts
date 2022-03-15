import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'kirin', age: 13 });
console.log(user.get('name'));

const root = document.getElementById('root');

if (root) {
	const userForm = new UserForm(root, user);
	userForm.render();
}
