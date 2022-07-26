export type Pickups = {
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
  }