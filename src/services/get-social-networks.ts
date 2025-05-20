import { query } from "./strapi";

export interface SocialNetworksData {
  id: string;
  name: string;
  url: string;
  image: string;
}

export interface SocialNetworksResponse {
  id: string;
  documentId: string;
  name: string;
  url: string;
  image: Image;
}

export interface Image {
  id: number;
  documentId: string;
  url: string;
}

export const getSocialNetworks = async () => {
  return query("social-networks?populate[image][fields]=url").then((res) => {
    const data: SocialNetworksData[] = res.data.map(
      (item: SocialNetworksResponse) => {
        const data: SocialNetworksData = {
          id: item.id,
          url: item.url,
          name: item.name,
          image: `${process.env.STRAPI_HOST}${item.image.url}`,
        };
        return data;
      }
    );
    return data;
  });
};
