import UserList from '../UserList';
import './style.css'

export default function UsersList(
	{ users }:
		{ users: IUser[] }
) {
	return (
		<>
			<ul className="users">
				{users.map((user: IUser) => {
					return <UserList userData={user} />;
				})}
			</ul>
		</>
	);
}