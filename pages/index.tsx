import { client } from '../libs/client';
import type { Article } from '../types/article';
import Moment from 'react-moment'
type Props = {
  articles: Array<Article>;
};

export default function Home({ articles }: Props) {
  return (
    <>
      <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 text-2xl font-bold">
      Sleep record
      </h1>
      <div className="container mx-auto p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
      {articles.map(article => (
        <div className="rounded-xl overflow-hidden shadow-lg" key={article.id}>
          <img
            className="w-full"
            src={article.eye_catch.url}
            alt="Sunset in the mountains"
          />
          <Moment format="YYYY/MM/DD">
              {article.publishedAt}
          </Moment>
          <div className="p-3 py-3">{article.title}</div>
          <div className="p-3 ">
          {article.tag && (
            <span className="inline-block rounded-full text-sm font-semibold card-tag mr-2">
              #{article.tag}
            </span>
            )}
          </div>
        </div>
        ))}
      </div>
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