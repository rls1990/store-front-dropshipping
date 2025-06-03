import { ReactNode } from "react";
import { query } from "./strapi";

export interface ItemSlider {
  id: string;
  message: string;
  icon: string;
}

export interface ItemSliderResponse {
  id: string;
  message: string;
  image: ImageRes;
}

export interface ImageRes {
  id: string;
  url: string;
}

export const getNewsInfo = async () => {
  return query("news?populate[image][fields]=url").then((res) => {
    const data: ItemSlider[] = res.data.map((item: ItemSliderResponse) => {
      const datares: ItemSlider = {
        id: item.id,
        message: item.message,
        icon: `${process.env.STRAPI_HOST}${item.image.url}`,
      };
      return datares;
    });
    return data;
  });
};
