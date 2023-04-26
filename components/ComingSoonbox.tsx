import Link from 'next/link';
import { FaGlobe, FaBlog, FaCalendar } from 'react-icons/fa';
import { SiNiconico } from 'react-icons/si';

export default function ComingSoonbox() {
  return (
    <div className="w-full max-w-sm mb-3 rounded-lg bg-theme_bg2 shadow-card md:mx-auto">
      <div className="flex flex-col items-center p-5">
				<img className="w-24 h-24 mb-3 rounded-full shadow-lg shadow-theme_bg2" src="/favicon.png" alt="" />
        <h5 className="mb-2 text-xl font-medium text-theme">AyumuNekozuki</h5>
				{/* ================= */}
				<hr className="w-full h-px my-4 bg-theme_but border-theme "></hr>
				{/* ================= */}
				<a href="https://prof.nekozuki.me/" rel="me" className='flex items-center justify-between w-full px-4 py-3 my-4 text-base transition-all rounded-md shadow-lg text-theme hover:shadow-none bg-theme_but '>
					<FaGlobe />Profile Card
				</a>
				<a href="https://blog.nekozuki.me/" rel="me" className='flex items-center justify-between w-full px-4 py-3 my-4 text-base transition-all rounded-md shadow-lg text-theme hover:shadow-none bg-theme_but '>
					<FaBlog />Blog
				</a>
      </div>
    </div>
  );
}