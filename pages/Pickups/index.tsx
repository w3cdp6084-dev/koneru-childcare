import type { Pickups } from '../../types/pickups';
import { client } from '../../libs/client';
import Link from 'next/link';

type Props = {
    pickups: Array<Pickups>;
};
export default function Pickup({ pickups }: Props) {
    return (
      <>
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
      </>
    );
  }
  export const getServerSideProps = async () => {
    const data = await client.get({ endpoint: 'picks',queries: { limit: 4, offset: 0}});
    return {
      props: {
        pickups: data.contents,
      },
    };
  };