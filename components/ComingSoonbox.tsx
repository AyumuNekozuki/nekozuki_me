import Link from 'next/link';
import { FaGlobe, FaBlog, FaCalendar } from 'react-icons/fa';
import { SiNiconico } from 'react-icons/si';

export default function ComingSoonbox() {
  return (
    <div className="w-full max-w-sm mb-3 bg-white rounded-lg shadow-card md:mx-auto">
      <div className="flex flex-col items-center p-5">
				<img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/favicon.png" alt="" />
        <h5 className="mb-2 text-xl font-medium text-nicoblack">AyumuNekozuki</h5>
				{/* ================= */}
				<hr className="w-full h-px my-4 bg-themepurple border-themepurple "></hr>
				{/* ================= */}
				<a href="https://prof.nekozuki.me/" rel="me" className='flex items-center justify-between w-full px-4 py-3 my-4 text-base text-white transition-all rounded-md shadow-lg hover:shadow-none bg-themepurple '>
					<FaGlobe />リンク集・連絡先
				</a>
				<a href="https://blog.nekozuki.me/" rel="me" className='flex items-center justify-between w-full px-4 py-3 my-4 text-base text-white transition-all rounded-md shadow-lg hover:shadow-none bg-themepurple '>
					<FaBlog />ブログ
				</a>
      </div>
    </div>
  );
}