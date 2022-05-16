import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'Steph', age: 35 });
const userForm = new UserForm(document.getElementById('root'), user);

userForm.render();
