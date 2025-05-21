import { query } from "./strapi";

export interface ItemSlider {
  id: string;
  message: string;
  icon: string;
}

export interface ItemSliderResponse {
  id: string;
  message: string;
  image: Image;
}

export interface Image {
  id: string;
  url: string;
}

export const getNewsInfo = async () => {
  return query("news?populate[image][fields]=url").then((res) => {
    const data: ItemSlider[] = res.data.map((item: ItemSliderResponse) => ({
      id: item.id,
      message: item.message,
      icon: `${process.env.STRAPI_HOST}${item.image.url}`,
    }));
    return data;
  });
};
