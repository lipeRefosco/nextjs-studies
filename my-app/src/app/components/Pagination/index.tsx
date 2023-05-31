import Link from "next/link";
import "./style.css"

export default function Pagination(
    {
        searchParams,
        totalUsers,
        usersPerPage
    } : {
        searchParams: PaginationInfo
        totalUsers: number,
        usersPerPage: number
    }
) {
    const totalPages: Array<number> = [...new Array(totalUsers / usersPerPage).keys()];

    return (
        <div className="m-2 flex justify-end">
            {totalPages.map((val) => {

                const onPage = parseInt(searchParams.page) === val

                return onPage
                        ? <span key={val} className="pagination-number pagination-number--disabled">{val + 1}</span>
                        : <Link key={val} href={'?page=' + val} className="pagination-number">{val + 1}</Link>
            })}
        </div>
    )
}