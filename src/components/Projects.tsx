export default function Projects() {
  return (
    <div className='flex w-full flex-col gap-4'>
      <h2 className='scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight text-primary sm:text-3xl'>
        PROJECTS
      </h2>
      <div className='flex w-full flex-col gap-10'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col justify-between gap-2 lg:flex-row xl:flex-col'>
            <div className='flex flex-col'>
              <h4 className='text-xl font-semibold sm:text-2xl xl:text-xl'>
                Bitcoin Price Prediction by Sentiment Analysis and Network Data
              </h4>
            </div>
          </div>
          <p className='leading-7'>
            This is my master thesis project , using NLP and machine learning algorithms to predict BTC price
            with sentiment analysis from Twitter and Google.
          </p>
        </div>
      </div>
    </div>
  )
}
