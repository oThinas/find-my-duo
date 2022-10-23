interface GameBannerProps {
  title: string,
  adsCount: number,
  bannerUrl: string,
}

export function GameBanner(props: GameBannerProps) {
  return(
    <div className='relative rounded-lg overflow-hidden'>
      <img src={props.bannerUrl} alt={`${props.title} banner`} />

      <div className="absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4 bg-gradient-to-t from-black">
        <strong className='block text-white font-bold'>
          {props.title}
        </strong>
        <span className='block text-zinc-300 text-sm'>
          {props.adsCount} anúncio{props.adsCount > 1 ? 's' : ''}
        </span>
      </div>
    </div>
  )
}