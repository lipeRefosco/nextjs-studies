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
    const numbersOfPages = totalUsers / usersPerPage + 1;
    const totalPages: Array<number> = [...new Array(numbersOfPages).keys()];
    return (
        <div className="m-2 flex justify-end">
            {totalPages.map((page:number) => {
                const onFirstPage = searchParams.page === undefined && page === 0
                const onPage = parseInt(searchParams.page) === page;

                return onPage || onFirstPage
                        ? <span key={page} className="pagination-number pagination-number--disabled">{page + 1}</span>
                        : <Link key={page} href={'?page=' + page} className="pagination-number">{page + 1}</Link>
            })}
        </div>
    )
}