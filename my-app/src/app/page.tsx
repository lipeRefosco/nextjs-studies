import UsersList from "./components/UsersList"

export default async function Home() {
  const usersData: Array<User> = await fetch("https://api.github.com/users").then(res => res.json())

  return (
    <>
      <h1>Hello World</h1>
      <UsersList users={usersData} />
    </>
  )
}
