export const fetchProductsName = () => {
  const url = "https://randomuser.me/api/";

  return fetch(url)
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      data.results.map((user: any) => {
        return user.name.first;
      });
    });
};
