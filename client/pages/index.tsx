import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import Feed from '../components/home/Feed'
import Widgets from '../components/Widgets'
import { useContext } from 'react'
import { Context } from '../context/Context'
import metamaskLogo from '../assets/metamask.png'
import errorImg from '../assets/error.png'

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
  loginContainer: `w-full h-full flex flex-col justify-center items-center pb-48`,
  walletConnectButton: `text-2xl text-black bg-white font-bold mb-[-3rem] mt-[3rem] px-6 py-4 rounded-full cursor-pointer hover:bg-[#d7dbdc]`,
  loginContent: `text-3xl font-bold text-center mt-24`,
}

const Home: NextPage = () => {

  const { appStatus, connectWallet } = useContext(Context)

  const app = (status = appStatus) => {
    switch (status) {
      case 'connected':
        return userLoggedIn

      case 'notConnected':
        return noUserFound

      case 'noMetaMask':
        return noMetaMaskFound

      case 'error':
        return error

      default:
        return loading
    }
  }

  const userLoggedIn = (
    <div className={style.content}>
      <Sidebar initialSelectedIcon={'Home'} />
      <Feed />
      <Widgets />
    </div>
  )

  const noUserFound = (
    <div className={style.loginContainer}>
      <Image src={metamaskLogo} alt="MetamaskLogo" width={200} height={200} />
      <div
        className={style.walletConnectButton}
        onClick={() => connectWallet()}
      >
        Connect Wallet
      </div>
      <div className={style.loginContent}>Connect to Metamask.</div>
    </div>
  )

  const noMetaMaskFound = (
    <div className={style.loginContainer}>
      <Image src={metamaskLogo} alt="MetamaskLogo" width={200} height={200} />
      <div className={style.loginContent}>
        <a
          target='_blank'
          rel='noreferrer'
          href={`https://metamask.io/download.html`}
        >
          You must install Metamask, a <br /> virtual Ethereum wallet, in your
          browser.
        </a>
      </div>
    </div>
  )

  const error = (
    <div className={style.loginContainer}>
      <Image src={errorImg} alt="ErrorImage" width={250} height={200} />
      <div className={style.loginContent}>
        An error occurred. Please try again later or from another browser.
      </div>
    </div>
  )

  const loading = (
    <div className={style.loginContainer}>
      <div className={style.loginContent}>Loading...</div>
    </div>
  )
  return (
    <div>
      <Head>
        <title>Adica</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={style.wrapper}>{app(appStatus)}</div>

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
