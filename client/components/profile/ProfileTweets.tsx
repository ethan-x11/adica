import { useEffect, useContext, useState } from 'react'
import Post from '../Post'

const style = {
    wrapper: `no-scrollbar`,
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

const ProfileTweets = () => {
    return (
        <div className={style.wrapper}>
            {tweets.map((tweet, index) => (
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

export default ProfileTweets