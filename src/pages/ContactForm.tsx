import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const ContactForm = () => {
  return (
    <div>
      <Head>
        <title>teami</title>
        <meta name="application-name" content="teami" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header></header>
    <main>
    <div className="bg-yellow-50
                      relative 
                      w-full h-20">
        <p className="absolute top-10
                      text-3xl
                      z-10">te.a.mi</p></div>
    

      <div className="relative
                      w-full h-screen">

        <div className="text-5xl
                        absolute top-16 left-[42%]">お問い合わせ</div>

        <p className="absolute top-40 left-28
                      text-2xl">お名前</p>
        <input className="w-1/3 box-border
                          absolute top-40 left-1/2
                          border-2 border-black rounded-lg"></input>

        <p className="absolute top-1/3 left-28
                      text-2xl">メールアドレス</p>
        <input className="w-1/3 box-border
                          absolute top-1/3 left-1/2
                          border-2 border-black rounded-lg"></input>

        <p className="absolute top-1/2 left-28
                      text-2xl">お問い合わせ内容</p>
        <textarea className="w-1/3 h-72 box-border
                             absolute top-1/2 left-1/2
                             border-2 border-black rounded-lg"></textarea>

        <a className="bg-yellow-50 px-8 py-4
                      absolute bottom-8 left-1/2
                      hover:underline">送信</a>
        </div>


        <div className="bg-yellow-600
                         w-full h-96
                         realtive">
                         </div>
       
      </main>

      <footer></footer>
    </div>
  );
};

export default ContactForm;
