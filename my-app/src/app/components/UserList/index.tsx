import Link from "next/link";
import './style.css'

export default function UserList({ userData }: { userData: User }) {
	return (
		<Link href={"user/" + userData.login} replace={true}>
			<li className="user">
				<img src={userData.avatar_url} className="user__avatar" />
				<div className="user__name">{userData.login}</div>
			</li>
		</Link>
	);
}