const fetcher = (url: string, value: string): Promise<ApiTypes> => {
    return fetch(`${url}?keyword=${value}`)
      .then((res) => res.json() );
  };
  
  export const Search: VFC = () => {
    const router = useRouter();
  
    // apiから検索結果の受け取り
    const { data,error } = useSWR<ApiTypes,Error>(["api/search",router.query.keyword],fetcher);
  
    if (error) return <div>failed to load</div>
    if (!data) return (
      <>
        <Header />
        <Spinner />
        <Footer/>
      </>
    )
      return (
      <>
        <Head>
          <title>「{router.query.keyword}」の検索結果</title>
          <link rel="icon" href="/images/android-chrome-36x36.png" />
        </Head>
        <Header />
        <SearchField />
        <h1 className="text-center font-bold text-2xl my-4">{router.query.keyword} の検索結果</h1>
        <div className="mb-6 px-5 md:flex md:items-start">
          <Blog blogData={data} />
          <SideMenu />
        </div>
        <Footer />
      </>
    );
   }