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
      <div className="bg-yellow-50 
                      w-full h-20
                      relative">
        <a className="text-3xl
                      absolute top-10
                      z-10">te.a.mi</a></div>
      </header>


      <main>
      <div className="bg-green-200
                      w-full h-screen
                      relatve">
      <p className="text-3xl
                    absolute top-[103%] left-[93%] z-10">te.a.mi</p></div>


      <div className="w-full h-[1000px]
                      relative">
                    
        <a className="text-6xl
                      absolute top-[8%] left-[46%]">te.a.mi</a>
        <a className="text-3xl overline
                      absolute top-[3%] left-[25%]
                      hover:underline">About</a>
        <a className="text-3xl overline
                      absolute top-[15%] left-[25.5%]
                      hover:underline">Blog</a>
        <a className="text-3xl overline
                      absolute top-[3%] left-[70%]
                      hover:underline">Product</a>
        <a className="text-3xl overline
                      absolute top-[15%] left-[71%]
                      hover:underline"
                      href="./ContactForm">Form</a>
          

      <div className="bg-yellow-700
                      w-[70%] h-[60%]
                      absolute top-[25%] left-[15%] right-[15%]">
      




      <div className="bg-red-500
                      w-[45%] h-[90%]
                      absolute top-[18%] left-[8%]"></div>
        




        <p className="underline
                      absolute top-[10%] left-[71%]">ABOUT</p>
        <p className="text-3xl
                      absolute top-[13%] left-[68%]">本人紹介</p>
        <p className="text-xl
                      absolute top-[21%] left-[65%]">子供の頃から編み物が</p>
        <p className="text-xl
                      absolute top-[27%] left-[65%]">大好きだった主婦ニータ。</p>
        <p className="text-xl
                      absolute top-[33%] left-[65%]">子育てが一段落したので</p>    
        <p className="text-xl
                      absolute top-[39%] left-[68%]">趣味の幅を広げ、</p>
        <p className="text-xl
                      absolute top-[45%] left-[64%]">かぎ針編みの可愛い小物を、</p> 
        <p className="text-xl
                      absolute top-[51%] left-[68%]">一つ一つ手編み、</p>    
        <p className="text-xl
                      absolute top-[57%] left-[68%]">販売しています。</p>
        
        <a className="underline
                    absolute bottom-[5%] right-[5%]">view more⇛</a></div></div>


      <div className="bg-yellow-50
                      w-full h-screen
                      relative">
        <p className="text-2xl underline
                      absolute top-[10%] left-[50%]">Product</p>
        <p className="text-4xl
                      absolute top-[13%] left-[50.5%]">作品</p>




        <img className="
                        w-[30%] h-[42%]
                        absolute top-[20%] left-[20%]"
             src="../../../src/image/image12"></img>
        <div className="bg-red-500
                        w-[30%] h-[42%]
                        absolute top-[45%] left-[49%]"></div>
        <div className="bg-yellow-700
                        w-[20%] h-[29%]
                        absolute top-[68%] left-[28%]"></div>



        <a className="underline
                      absolute bottom-[5%] right-[5%]">view more⇛</a>
        </div>             

      </main>

      <footer>
        <div className="bg-yellow-600
                        w-full h-96
                        relative"></div>
      </footer>
    </div>
  );
};

export default Home;
