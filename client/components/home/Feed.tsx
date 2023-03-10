import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from '../Post'
import { useContext, useEffect } from 'react'
import { Context } from '../../context/Context'

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] no-scrollbar overflow-y-scroll`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

interface Tweet {
    author: TweetAuthor
    tweet: string
    timestamp: string
}

interface TweetAuthor {
    name: string
    walletAddress: string
    profileImage: string
    isProfileImageNft: boolean
}

function Feed() {
    const { tweets } = useContext(Context)

    return (
        <div className={`${style.wrapper}`}>
            <div className={style.header}>
                <div className={style.headerTitle}>Home</div>
                    <BsStars />
                </div>
                <TweetBox />
                {tweets.map((tweet: Tweet, index: number) => (
                    <Post
                        key={index}
                        displayName={
                            tweet.author.name === 'Unnamed'
                                ? `${tweet.author.walletAddress.slice(0,4,)}...${tweet.author.walletAddress.slice(-5)}`
                                : tweet.author.name
                            }
                        userName={`${tweet.author.walletAddress.slice(0,4,)}...${tweet.author.walletAddress.slice(-5)}`}
                        text={tweet.tweet}
                        avatar={tweet.author.profileImage}
                        isProfileImageNft={tweet.author.isProfileImageNft}
                        timestamp={tweet.timestamp}
                    />
                ))}
        </div>
    )
}

export default Feed