import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link';

console.log('Generating nav bar here.');
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/products'>Products</Link>
          </li>
        </ul>
        <span>The Soap Factory</span>
      </nav>
      <header></header>
      <Component {...pageProps} />
      <footer></footer>
    </>
  )
  return <Component {...pageProps} />
}
