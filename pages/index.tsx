import { client } from '../libs/client';
import type { Article } from '../types/article';
type Props = {
  articles: Array<Article>;
};

export default function Home({ articles }: Props) {
  return (
    <>
      <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 text-2xl font-bold">
      Sleep record
      </h1>
      <div className="container mx-auto p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {articles.map(article => (
        <div className="rounded-xl overflow-hidden shadow-lg" key={article.id}>
          <img
            className="w-full"
            src={article.eye_catch.url}
            alt="Sunset in the mountains"
          />
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
  const data = await client.get({ endpoint: 'articles' });

  return {
    props: {
      articles: data.contents,
    },
  };
};