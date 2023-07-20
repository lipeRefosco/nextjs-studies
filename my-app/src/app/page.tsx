import FetchUsers from "@/utils/FetchUsers";
import parseIntForced from "@/utils/parseIntForced";
import Pagination from "./components/Pagination"
import UsersList from "./components/UsersList"

export default async function Home(
    {
      searchParams
    } : {
      searchParams: PaginationInfo
    }
  ) {

  const pageNumberParsed: number = parseIntForced(searchParams.page);
  
  const usersData: User[] = await FetchUsers.getUsersOfPage(pageNumberParsed);
  
  return (
    <>
      <Pagination pageNumber={pageNumberParsed} />
      <UsersList users={usersData} />
    </>
  )
}
