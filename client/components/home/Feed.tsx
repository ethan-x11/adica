import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from '../Post'

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

const tweets = [
    {
        displayName: 'John Doe',
        userName: '0xdfsdfjdvfhsdbfabsdhfadhfhgfaefdfbdahfbdafb',//wallet address
        avatar: 'https://thecatapi.com/api/images/get?format=src&type=gif',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2021-03-01T00:00:00.000Z',
    },
    {
        displayName: 'John Doe',
        userName: '0xdfsdfjdvfhsdbfabsdhfadhfhgfaefdfbdahfbdafb',//wallet address
        avatar: 'https://thecatapi.com/api/images/get?format=src&type=gif',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2021-03-01T00:00:00.000Z',
    },
]

function Feed () {
    return (
        <div className={`${style.wrapper},no-scrollbar`}>
            <div className={style.header}>
                <div className={style.headerTitle}>Home</div>
                <BsStars />
            </div>
            <TweetBox />
            {tweets.map((tweet, index) =>(
                <Post 
                    key={index}
                    displayName={tweet.displayName}
                    userName={`${tweet.userName.slice(0, 5)}...${tweet.userName.slice(tweet.userName.length - 5, tweet.userName.length)}`}
                    avatar={tweet.avatar}
                    text={tweet.text}
                    isProfileImageNft={tweet.isProfileImageNft}
                    timestamp={tweet.timestamp}
                />
            ))}
        </div>
    )
}

export default Feed