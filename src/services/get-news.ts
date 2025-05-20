import { query } from "./strapi";

export interface ItemSlider {
  message: string;
  icon: string;
}

export const getNewsInfo = async () => {
  return query("news?fields[0]=id&fields[1]=message&fields[2]=icon").then(
    (res) => {
      console.log(res);
      const data: ItemSlider[] = res.data.map((item: any) => ({
        message: item.message,
        icon: `${process.env.STRAPI_HOST}${item.icon}`,
      }));
      return data;
    }
  );
};
