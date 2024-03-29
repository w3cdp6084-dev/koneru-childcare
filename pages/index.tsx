import { client } from '../libs/client';
import type { Article } from '../types/article';
import type { Pickups } from '../types/pickups';
import type { Recommend } from '../types/recommend';
import Moment from 'react-moment'
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {
  articles: Array<Article>;
  pickups: Array<Pickups>;
  recommend: Array<Recommend>;
};

export default function Home({ pickups,recommend }: Props) {
  return (
    <div>
      <section className='py-7 dark:bg-gray-800 pickUp'>
        <h1 className="dark:text-white block-title container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 text-2xl font-bold">Pick up</h1>
        <div className='mx-auto pt-4'>
        <Carousel infiniteLoop={true} autoPlay={true} showArrows={true} showThumbs={true} showIndicators={false} showStatus={false} className="custom">
          {pickups.map(pickups => (
          <Link href={`/pickups/${pickups.id}`} passHref>
            <div className="dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg" key={pickups.id}>
              <img
                className=""
                src={pickups.banner.url}
                alt="thumbnail"
              />
            </div>
          </Link>
          ))}
        </Carousel>
        </div>
      </section>

      <section>
      <h1 className="dark:text-white block-title container mx-auto pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 text-2xl font-bold">
      Sleep record
      </h1>
      
    </section>
    <section>
      <h1 className="dark:text-white block-title container mx-auto pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 text-2xl font-bold">
      Recommend
      </h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
      {recommend.map(recommend => (
        <Link href={`/recommend/${recommend.id}`} passHref>
          <div className="dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg" key={recommend.id}>
            <img
              className="w-full"
              src={recommend.eye_catch.url}
              alt="Sunset in the mountains"
            />
            <div className='flex justify-between items-center pt-3 px-3'>
            <div className='category py-1 px-2.5 text-white rounded-md'>{recommend.category.name}</div>
              <Moment format="YYYY/MM/DD" className='text-xs font-bold date dark:text-white '>
                  {recommend.publishedAt}
              </Moment>
            </div>
            <div className="dark:text-white card-title pt-4 px-3 pb-6 font-bold line-clamp-5">
                <p>{recommend.title}</p>
            </div>
            <div className="px-3 pb-3">
            {recommend.tag && (
              <span className="inline-block rounded-full text-sm font-semibold card-tag mr-2">
                #{recommend.tag}
              </span>
              )}
            </div>
          </div>
        </Link>
        ))}
      </div>
    </section>
    </div>
  )
}
export const getServerSideProps = async () => {
  const pick = await client.get({ endpoint: 'picks',queries: { limit: 4, offset: 0}});
  const recommend = await client.get({ endpoint: 'recommend',queries: { limit: 4, offset: 0}});
  return {
    props: {
      pickups: pick.contents,
      recommend: recommend.contents,
    },
  };
};