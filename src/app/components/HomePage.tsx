'use client'
import useTicker from '@/hooks/useTicker'
import CoinCard from './CoinCard'

const HomePage = () => {
  const { coins } = useTicker()
  return (
    <div className="h-screen-minus-60 flex flex-col justify-center items-center p-4">
      <div className="w-3/4 flex justify-center items-center p-4">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="text-center font-bold text-4xl">
            Live Stock and Crypto Prices
          </h1>

          <p className="text-center text-gray-500">
            Welcome to our cutting-edge financial platform, where you can track
            real-time prices of stocks and cryptocurrencies. Our app provides
            you with the most up-to-date information, empowering you to make
            informed investment decisions.
          </p>
        </div>
      </div>

      <div className="w-[90%] flex flex-col sm:flex-row justify-between sm:flex-wrap gap-y-2">
        {Object.keys(coins).map((crypto: any, index) => {
          return <CoinCard {...coins[crypto]} key={index} />
        })}
      </div>
    </div>
  )
}

export default HomePage
