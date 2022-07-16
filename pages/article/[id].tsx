import { GetServerSideProps } from 'next';
import type { Article } from '../../types/article';
import { client } from '../../libs/client';
import Moment from 'react-moment'
type Props = {
  article: Article;
};

export default function Article({ article }: Props) {
  return (
    <div>
      <div className="px-10 py-6 mx-auto">
        <div className="main-img max-w-6xl px-10 py-6 mx-auto">
            <Moment format="YYYY/MM/DD" className='text-xs font-bold date'>
                {article.publishedAt}
            </Moment>
          <img
            className="rounded-2xl object-cover w-full shadow-sm h-full"
            src={article.eye_catch.url}
          />
          <div className="mt-2">
            <div className="dark:text-white font-bold text-3xl text-black">
              {article.title}
            </div>
          </div>
          {article.tag && (
            <div className="flex items-center justify-start mt-4 mb-4">
              <div className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg">
                #{article.tag}
              </div>
            </div>
          )}
          <div className="mt-2">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: 'articles',
    contentId: idExceptArray,
  });

  return {
    props: {
      article: data,
    },
  };
};