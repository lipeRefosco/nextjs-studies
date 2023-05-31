import Pagination from "./components/Pagination"
import UsersList from "./components/UsersList"

export default async function Home(
    {searchParams} :
    {searchParams:PaginationInfo}
  ) {
  const defaultUsersPerPage = 5;
  const userDataStartSplice = searchParams.page
                              ? Number.parseInt(searchParams.page) * defaultUsersPerPage
                              : 0;

  const usersData: User[] = await fetch("https://api.github.com/users").then(res => res.json());
  const reducedUsers: User[] = usersData.splice(userDataStartSplice, defaultUsersPerPage);

  return (
    <>
      <Pagination
                  searchParams={searchParams}
                  totalUsers={usersData.length}
                  usersPerPage={defaultUsersPerPage} />
      <UsersList users={reducedUsers} />
    </>
  )
}
