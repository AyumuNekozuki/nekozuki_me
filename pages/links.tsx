import { client } from "../libs/client";
import Link from "next/link";
import Date from '../components/Date';
import Userbox from '../components/Userbox';
import { FaCalendarAlt, FaPencilAlt, FaFolderOpen, FaTag } from "react-icons/fa";
import Seo from '../components/Seo';
import Swiper_links from '../components/swiper/links';

export default function Links({ ar, recentdata }: any) {

	return (
		<>
			<Seo pageTitle='Links - ねこづきあゆむの関連リンク' pageDescription='ねこづきあゆむの関連リンク' pagePath='/links' />
			{/* <div className='flex flex-wrap max-w-screen-lg mx-auto'>
				<iframe id="profIframe" className='w-full p-2' src="https://prof.nekozuki.me">
				</iframe>
			</div> */}
		</>
	);
}
