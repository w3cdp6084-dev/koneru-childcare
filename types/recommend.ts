export type Recommend = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    content: string;
    banner: {
      url: string;
      height: number;
      width: number;
    }
    eye_catch: {
      url: string;
      height: number;
      width: number;
    }
    tag: string;
     category: {
      name: string;
    }
    toc_visible: string;
  }