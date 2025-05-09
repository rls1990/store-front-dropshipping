const { STRAPI_HOST, STRAPI_TOKEN_READ_ONLY } = process.env;

export async function query(url: string) {
  return await fetch(`${STRAPI_HOST}/api/${url}`, {
    headers: {
      Autorization: `Bearer ${STRAPI_TOKEN_READ_ONLY}`,
    },
  }).then((res) => res.json());
}
