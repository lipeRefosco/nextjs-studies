import Link from 'next/link'

export default function UserPage({ props }: any) {
	console.log(props)
	return <Link href="/">Home</Link>
}