import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>teami</title>
        <meta name="application-name" content="teami" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className="text-3xl underline">teami</h1>
        <nav>
          <ul className="flex items-center">
            <li>
              <Link href={"#"}>トップ</Link>
            </li>
            <li>
              <Link href={"#"}>teamiについて</Link>
            </li>
            <li>
              <Link href={"#"}>商品一覧</Link>
            </li>
            <li>
              <Link href={"#"}>ブログ</Link>
            </li>
            <li>
              <Link href={"#"}>お問合せ</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>teami</h2>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
