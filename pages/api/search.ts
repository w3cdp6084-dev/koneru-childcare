const getSearchBlogs = async ( req: NextApiRequest, res: NextApiResponse ) => {
    const { keyword } = req.query as { keyword: string };
    const searchBlogs = await fetch(
      `https://koneru-childcare.microcms.io/api/v1/myblog?q=${encodeURI(keyword)}`,
      key
    )
      .then((res) => res.json())
      .catch(() => null);
  
    return res.status(200).json(searchBlogs);
  };
  
  export default getSearchBlogs;