import Link from 'next/link';

export default function NotFound() {
  return <main className="main"><h1>page not found</h1><Link href="/">back home</Link></main>;
}
