const getData = async (path: string, id?: string) => {
  const data = await fetch(path);
  const articles = await data.json();

  if (id) {
    return articles.find((article: any) => article.id === id);
  }

  return articles;
};

export { getData };
