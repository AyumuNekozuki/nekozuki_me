import { client } from "../libs/client";
import Link from "next/link";
import Date from '../components/Date';
import Userbox from '../components/Userbox';
import { FaCalendarAlt, FaPencilAlt, FaFolderOpen, FaTag } from "react-icons/fa";
import Seo from '../components/Seo';
import Swiper_links from '../components/swiper/links';

export default function BlogId({ ar, recentdata }: any) {

	return (
		<>
			{/* <Seo pageTitle='About - ねこづきあゆむとは' pageDescription='ねこづきあゆむとは' pagePath='/about' /> */}
			{/* <div className='flex flex-wrap max-w-screen-lg mx-auto'>
				<main className='w-full p-2'>
					<article className="mb-3 transition-all bg-white pages_about rounded-xl shadow-card text-nicoblack">
						<img className="object-cover w-full aspect-video rounded-t-xl" src='/ogp.png' width='960' height="540" alt='' />
						<div className="p-2 pb-5">
							<h2 className="mt-2 mb-5 text-2xl font-medium">About - ねこづきあゆむとは</h2>
							<div className="flex items-center mb-2 text-sm opacity-80">
								<div className="inline-flex items-center px-3 py-1 text-sm rounded-full leading-sm bg-themepurple_bg">
									<FaPencilAlt className="mr-1" />2022/09/02 17:00
								</div>
							</div>
						</div>
						<div className="px-3 pt-2 pb-3">
							<div className="w-full max-w-full prose">
								<p>
									ニコ厨。動画投稿・生配信・大百科編集など、ニコニコで幅広く活動するクリエイター。WEBサイトなども制作中。
								</p>
								<h3>活動</h3> <p>
									Webページ・Webアプリ制作、ブラウザ拡張機能の制作をはじめ、動画制作、生配信、コンテンツ制作など、多岐にわたって活動を行っています。
								</p> <h3>合格・受賞歴</h3> <table><thead><tr><th>受賞年月</th> <th>内容</th></tr></thead> <tbody><tr><td>2019/03</td> <td><span className="dic">記事</span>ニコニコ大百科より「百ッカデミー賞(2018年度)」受賞
								</td></tr> <tr><td>2020/06</td> <td><span className="dic">記事</span>ニコニコ大百科より「百ッカデミー賞(2019年度)」受賞
								</td></tr> <tr><td>2020/10</td> <td><span>WEB</span>「N予備校
									動くWebページコンテスト2020夏」にて『シベリア送り』が「N高部門
									優秀賞」受賞
								</td></tr> <tr><td>2021/03</td> <td><span className="dic">記事</span>ニコニコ大百科より「百ッカデミー賞(2020年度)」受賞
								</td></tr> <tr><td>2021/04</td> <td><span className="music">音楽</span>「The VOCALOID Collection -2021
									Spring-」にてREMIXランキング 11位ランクイン
								</td></tr> <tr><td>2021/08</td> <td><span>WEB</span>CG-ARTS Webデザイナー検定 ベーシック　合格
								</td></tr> <tr><td>2021/10</td> <td><span className="movie">動画</span>「ニコニコ動画プレミアムアワード2021秋」1次ノミネート
								</td></tr> <tr><td>2021/10</td> <td><span>WEB</span>某都内専門学校「美しいWEBデザイン学内コンペ」にて「独創力賞」受賞
								</td></tr> <tr><td>2021/12</td> <td><span>WEB</span>CG-ARTS Webデザイナー検定 エキスパート　合格
								</td></tr> <tr><td>2022/03</td> <td><span className="movie">動画</span>「ニコニコ動画プレミアムアワード2022春」1次ノミネート
								</td></tr> <tr><td>2022/03</td> <td><span>WEB</span>某都内専門学校 進級制作展にて「企画力賞」受賞
								</td></tr> <tr><td>2022/03</td> <td><span className="dic">記事</span>ニコニコ大百科より「百ッカデミー賞(2022)」受賞
								</td></tr></tbody></table> <h3>掲載など</h3> <table><thead><tr><th>年月</th> <th>内容</th></tr></thead> <tbody><tr><td>2020/10</td> <td><span className="live">生放送</span>投稿動画がニコニコ公式番組『週刊ニコニコインフォ』内で紹介されました
								</td></tr> <tr><td>2020/11</td> <td><span className="dic">記事</span><a target='_blank' href="https://originalnews.nico/281983">投稿動画がニコニコニュースオリジナルで紹介されました</a></td></tr> <tr><td>2021/03</td> <td><span className="movie">ニコニコ総合TOP</span>投稿動画が「推し枠
									Supported by SmileS 掲載」に掲載されました
								</td></tr> <tr><td>2021/03</td> <td><span className="movie">ニコニコ総合TOP</span>投稿動画が「推し枠
									Supported by SmileS 掲載」に掲載されました
								</td></tr> <tr><td>2021/03</td> <td><span className="movie">ニコニコ総合TOP</span>投稿動画がニコニコDAYLY_TOPICS/ニコニコビジョンに掲載されました
								</td></tr> <tr><td>2021/03</td> <td><span className="twitter">Twitter</span> <a href="https://twitter.com/nico_nico_info/status/1376500635491688455">投稿動画がニコニコ公式Twitterにて紹介されました</a></td></tr> <tr><td>2021/04</td> <td><span className="music">ニコニコ / The VOCALOID Collection</span>
									投稿作品がランキング上位にランクインしました
								</td></tr> <tr><td>2021/06</td> <td><span className="movie">ニコニコ総合TOP</span>投稿動画が「推し枠
									Supported by SmileS 掲載」に掲載されました
								</td></tr> <tr><td>2021/08</td> <td><span className="movie">ニコニコ総合TOP</span>投稿動画が「推し枠
									Supported by SmileS 掲載」に掲載されました
								</td></tr> <tr><td>2021/10</td> <td><span className="movie aword">ニコニコ / プレミアムアワード</span>投稿動画がアワードにノミネートされました
								</td></tr> <tr><td>2022/03</td> <td><span className="movie aword">ニコニコ / プレミアムアワード</span>投稿動画がアワードにノミネートされました
								</td></tr> <tr><td>2022/03</td> <td><span className="movie aword">ニコニコ / プレミアムアワード</span>投稿動画がアワードにノミネートされました
								</td></tr> <tr><td>2022/03</td> <td><span className="live">生放送</span>投稿動画がニコニコ公式番組『ソフトウェアトーク動画投稿祭応援しまくる祭』内で紹介されました
								</td></tr></tbody></table> <h3>経歴</h3> <table><thead><tr><th>年月</th> <th>内容</th></tr></thead> <tbody><tr><td>2002/09</td> <td>鹿児島県で生まれる</td></tr> <tr><td>小4</td> <td>プログラミングに興味を持つ</td></tr> <tr><td>2016/10</td> <td>中学校で生徒会長に就任</td></tr> <tr><td>2017/02</td> <td>ニコニコ生放送で生配信を始める</td></tr> <tr><td>2017/12</td> <td>ニコニコ大百科で記事編集を始める</td></tr> <tr><td>2018/03</td> <td>初めて動画を投稿する（初投稿動画は現在非公開）</td></tr> <tr><td>2018/04</td> <td>鹿児島県内の全日制高校に入学するも、鬱で不登校に</td></tr> <tr><td>2019/04</td> <td>角川ドワンゴ学園 N高等学校 に転入学</td></tr> <tr><td>2020/08</td> <td>
									ニコニコをダークモード化する拡張機能「niconico
									Darkmode」リリース
								</td></tr> <tr><td>2020/10</td> <td>「niconico Darkmode」の紹介動画がバズる</td></tr> <tr><td>2021/04</td> <td>N高等学校を卒業、東京都内の専門学校に入学</td></tr> <tr><td>2021/12</td> <td>「niconico Darkmode」ユーザー１万人突破</td></tr> <tr><td></td> <td>現在、東京都内の専門学校に通学中。</td></tr></tbody></table>
							</div>
						</div>
					</article>
				</main>
			</div> */}
		</>
	);
}
