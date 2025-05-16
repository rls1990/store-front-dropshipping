import { query } from "./strapi";

export interface ContactData {
  id: string;
  name: string;
  icon: string;
  value: string;
}

export const getContact = async () => {
  return query("contacts").then((res) => {
    const data: ContactData[] = res.data.map((item: ContactData) => ({
      id: item.id,
      name: item.name,
      value: item.value,
      icon: `${process.env.STRAPI_HOST}${item.icon}`,
    }));
    console.log(data);
    return data;
  });
};
