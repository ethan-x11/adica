import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const style ={
  wrapper: `flex justify-center h-screen select-none bg-[#15202b] text-white min-h-screen flex-col items-center justify-center py-2`,
  content: `max-w-[1400px] w-2/3 flex justify-between`
}

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <Head>
        <title>Meow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="flex w-full flex-1 flex-col items-center px-20 text-center">
          <div className={style.content}>
            <h2>SideBar</h2>
            <h2>Feed</h2>
            <h2>Widgets</h2>
          </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
