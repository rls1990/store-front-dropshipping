import { query } from "./strapi";

export interface SocialNetworksData {
  id: string;
  name: string;
  icon: string;
  url: string;
}

export const getSocialNetworks = async () => {
  return query(
    "social-networks?fields[0]=id&fields[1]=name&fields[2]=icon&fields[3]=url"
  ).then((res) => {
    const data: SocialNetworksData[] = res.data.map(
      (item: SocialNetworksData) => ({
        ...item,
        icon: `${process.env.STRAPI_HOST}${item.icon}`,
      })
    );
    return data;
  });
};
