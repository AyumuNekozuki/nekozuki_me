import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import Date from '../Date';

SwiperCore.use([Autoplay])

export default function Swiper_Newest_items({itemdata} :any) {

	return (
		<Swiper
			pagination={{
				clickable: true,
			}}
		>
		{itemdata.map((item: any, index: any) => (
			<SwiperSlide>
				<a href={item.href} target="_blank" rel="noopener noreferrer" className='block relative max-w-xs'>
					<img src={item.thumbnail.url} alt={item.title} className='z-0 rounded-lg shadow-card' />
					<div className="z-10 absolute top-0 h-full w-full">
						<span className='block bg-orange text-white m-2 rounded-md px-1 absolute top-0'>{item.category}</span>
						{item.date ? 
							<span className='block bg-nicoblack text-white m-2 rounded-md px-1 absolute top-0 right-0'>
								{(item.type[0]=='スタート' ? <Date dateString={item.date} /> : null)}
								{(item.type[0]=='締切' ? <>~<Date dateString={item.date} /></> : null)}
							</span>
						:null}
						<h3 className="text-lg font-medium text-nicoblack absolute bottom-0 px-3 py-1 backdrop-blur-sm backdrop-brightness-150 w-full rounded-b-lg h-16">{item.title}</h3>
					</div>
				</a>
			</SwiperSlide>
		))}
			
		</Swiper>
	);
}