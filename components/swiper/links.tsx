import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { SiNiconico } from 'react-icons/si';

SwiperCore.use([Autoplay])

export default function Swiper_links() {

	return (
		<Swiper
			slidesPerView={'auto'}
			centeredSlides={true}
			pagination={{
				clickable: true,
			}}
			autoplay={{
				delay: 2500,
			}}
			loop={true}
			className='max-w-full'
		>
			<SwiperSlide className='max-w-xs mx-5'>
				<a href="https://twitter.com/nekozuki_2525" target="_blank" rel="noopener noreferrer" className="block max-w-xs bg-twitter text-white rounded-lg shadow-card md:mx-auto m-3 p-2 w-full text-center tracking-widest">
					<FaTwitter className='inline-block' /> @nekozuki_2525
				</a>
			</SwiperSlide>
			<SwiperSlide className='max-w-xs mx-5'>
				<a href="https://twitter.com/nekozuki_2525" target="_blank" rel="noopener noreferrer" className="block max-w-xs bg-discord text-white rounded-lg shadow-card md:mx-auto m-3 p-2 w-full text-center tracking-widest">
				<FaDiscord className='inline-block' /> コミュニティサーバー
				</a>
			</SwiperSlide>
			<SwiperSlide className='max-w-xs mx-5'>
				<a href="https://twitter.com/nekozuki_dev" target="_blank" rel="noopener noreferrer" className="block max-w-xs bg-twitter text-white rounded-lg shadow-card md:mx-auto m-3 p-2 w-full text-center tracking-widest">
					<FaTwitter className='inline-block' /> @nekozuki_dev
				</a>
			</SwiperSlide>
			<SwiperSlide className='max-w-xs mx-5'>
				<a href="https://www.nicovideo.jp/user/45048152" target="_blank" rel="noopener noreferrer" className="block max-w-xs bg-nicoblack text-white rounded-lg shadow-card md:mx-auto m-3 p-2 w-full text-center tracking-widest">
					<SiNiconico className='inline-block' /> ニコニコ
				</a>
			</SwiperSlide>
		</Swiper>
	);
}