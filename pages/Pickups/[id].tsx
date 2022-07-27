import { GetServerSideProps } from 'next';
import type { Pickups } from '../../types/pickups';
import { client } from '../../libs/client';
import Moment from 'react-moment'
import { renderToc } from '../../libs/render-toc'; 
import { TableOfContents } from '../../components/TableOfContent';
import ReturnTopButton from '../../components/ReturnTopButton';
type Props = {
    pickups: Pickups;
};

export default function Pickups({ pickups }: Props) {
  const toc = renderToc(pickups.content);
  return (
    <div>
      <div className="px-10 py-6 mx-auto relative">
        <div className="main-img max-w-6xl px-10 py-6 mx-auto">
        {pickups.tag && (
          <div className="flex items-center justify-between mt-4 mb-4">
            <div className="px-2 py-1 bg-red-400 text-white rounded-lg text-xs">
              #{pickups.tag}
            </div>
            <Moment format="YYYY/MM/DD" className='text-xs font-bold date'>
              {pickups.publishedAt}
            </Moment>
          </div>
        )}
        <div className='items-center justify-between'>
          <div className="dark:text-white font-bold text-3xl text-black">
              {pickups.title}
          </div>
        </div>
          <img
            className="my-10 rounded-2xl object-cover w-full shadow-sm h-full"
            src={pickups.eye_catch.url}
          />
          {pickups.toc_visible && (
          <TableOfContents toc={toc} />
          )}
          <div className="mt-2">
            <div dangerouslySetInnerHTML={{ __html: pickups.content }} />
          </div>
        </div>
          <ReturnTopButton />
      </div>

    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: 'picks',
    contentId: idExceptArray,
  });

  return {
    props: {
        pickups: data,
    },
  };
};