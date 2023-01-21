import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import Feed from '../components/home/Feed'
import Widgets from '../components/Widgets'

const style ={
  wrapper: `flex justify-center h-screen select-none bg-[#15202b] text-white `,
  content: `max-w-[1400px] w-2/3 flex justify-between`
}

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Adica</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={style.wrapper}>
          <div className={style.content}>
            <Sidebar/>  
            <Feed />
            <Widgets />
          </div>
      </div>

      {/* <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer> */}
    </div>
  )
}

export default Home
