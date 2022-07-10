import { client } from '../libs/client';
import type { Article } from '../types/article';
import Moment from 'react-moment'
import Link from 'next/link';
type Props = {
  articles: Array<Article>;
};

export default function Home({ articles }: Props) {
  return (
    <>
      <h1 className="dark:text-white block-title container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 text-2xl font-bold">
      Sleep record
      </h1>
      <div className="container mx-auto p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
      {articles.map(article => (
        <Link href={`/article/${article.id}`} passHref>
          <div className="rounded-xl overflow-hidden shadow-lg" key={article.id}>
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
    <section>
      <h1 className="block-title container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 text-2xl font-bold">
      Excrement record
      </h1>
      <div className="container mx-auto p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
      {articles.map(article => (
        <Link href={`/article/${article.id}`} passHref>
          <div className="rounded-xl overflow-hidden shadow-lg" key={article.id}>
            <img
              className="w-full"
              src={article.eye_catch.url}
              alt="Sunset in the mountains"
            />
            <div className='flex justify-between items-center pt-3 px-3'>
            <div className='category py-1 px-2.5 text-white rounded-md'>{article.category.name}</div>
              <Moment format="YYYY/MM/DD" className='text-xs font-bold date'>
                  {article.publishedAt}
              </Moment>
            </div>
            <div className="card-title pt-4 px-3 pb-6 font-bold line-clamp-5">
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

  return {
    props: {
      articles: data.contents,
    },
  };
};