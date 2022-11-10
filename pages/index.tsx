import type { NextPage } from 'next'
import Head from 'next/head'
import { client } from "../libs/client";
import Seo from '../components/Seo'
import Swiper_links from '../components/swiper/links'
import Swiper_topics_items from '../components/swiper/topics_items'
import Swiper_newest_items from '../components/swiper/newest_items'

const Home: NextPage = ({topics_items} :any) => {

  return (
    <>
			{/* <Seo /> */}
			{/* <main className="flex flex-wrap max-w-screen-xl mx-auto pxs-5">
				<Swiper_topics_items itemdata={topics_items} />
				<Swiper_links />
				<Swiper_newest_items itemdata={topics_items} />
			</main> */}
			{/* <main>
				
			</main> */}
    </>
  )
}

export default Home

export const getStaticProps = async () => {
	const [topics_items] = await Promise.all([
    client.get({
      endpoint: "schedule",
    }),
  ]);

	return {
    props: {
      topics_items: topics_items.contents,
    },
    revalidate: 10
  };
}