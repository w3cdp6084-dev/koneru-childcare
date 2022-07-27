import { client } from '../libs/client';
import type { Article } from '../types/article';
import Moment from 'react-moment'
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
type Props = {
  articles: Array<Article>;
  pickups: Array<Pickups>;
};

export default function Home({ articles,pickups }: Props) {
  return (
    <>
      <section>
        <h1 className="dark:text-white block-title container mx-auto pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 text-2xl font-bold">Pick up</h1>

        <div className='container mx-auto pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
          {pickups.map(pickups => (
          <Link href={`/pickups/${pickups.id}`} passHref>
            <div className="dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg" key={pickups.id}>
              <img
                className="w-full"
                src={pickups.banner.url}
                alt="Sunset in the mountains"
              />
            </div>
          </Link>
          ))}

        </div>

      </section>
      <section>
      <h1 className="dark:text-white block-title container mx-auto pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 text-2xl font-bold">
      Sleep record
      </h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
      {articles.map(article => (
        <Link href={`/article/${article.id}`} passHref>
          <div className="dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg" key={article.id}>
            <img
              className="w-full"
              src={article.eye_catch.url}
              alt="Sunset in the mountains"
            />
            <div className='flex justify-between items-center pt-3 px-3'>
            <div className='category py-1 px-2.5 text-white rounded-md'>{article.category.name}</div>
              <Moment format="YYYY/MM/DD" className='text-xs font-bold date dark:text-white '>
                  {article.publishedAt}
              </Moment>
            </div>
            <div className="dark:text-white card-title pt-4 px-3 pb-6 font-bold line-clamp-5">
                <p>{article.title}</p>
            </div>
            <div className="px-3 pb-3">
            {article.tag && (
              <span className="inline-block rounded-full text-sm font-semibold card-tag mr-2">
                #{article.tag}
              </span>
              )}
            </div>
          </div>
        </Link>
        ))}
      </div>
    </section>
    </>
  )
}
export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: 'articles',queries: { limit: 4, offset: 0}});
  const pick = await client.get({ endpoint: 'picks',queries: { limit: 4, offset: 0}});
  return {
    props: {
      articles: data.contents,
      pickups: pick.contents,
    },
  };
};