import Link from "next/link";
import "./style.css"

export default function Pagination(
	{
		pageNumber
	}: {
		pageNumber: number
	}
) {

	const isFirstPage = pageNumber == 0;
	const nextPage = pageNumber + 1;
	const prevPage = pageNumber - 1;

	return (
		<div className="m-2 flex justify-end">
			{isFirstPage
				? ''
				: <Link href={`?page=${prevPage}`} className="pagination-number">Voltar</Link>}
			<Link href={`?page=${nextPage}`} className="pagination-number">Avançar</Link>
		</div>
	)
}