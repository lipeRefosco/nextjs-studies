import UserList from '../UserList';
import './style.css'

export default function UsersList(
	{ users }:
		{ users: User[] }
) {
	return (
		<>
			<ul className="users">
				{users.map((user: User) => {
					return <UserList key={user.id} userData={user} />;
				})}
			</ul>
		</>
	);
}