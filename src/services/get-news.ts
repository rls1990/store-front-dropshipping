import { query } from "./strapi";

export const GetNewsInfo = async () => {
  return query(
    "home?fields=id&populate[header][populate][news][populate][icon][fields]=url"
  ).then((res) => {
    const data = res.data.header[0].news.map((item: any) => ({
      message: item.message,
      icon: `${process.env.STRAPI_HOST}${item.icon.url}`,
    }));
    return data;
  });
};
