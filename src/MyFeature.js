import React, { useState } from "react";

const id = (function* () {
  let i = 1;
  while (true) {
    yield i;
    i += 1;
  }
})();
export default function MyFeature({ addArticle, articleList }) {
  const [articles, setArticles] = useState([
    {
      id: id.next().value,
      title: "Article 1",
      summary: "Article 1 Summary",
      display: "none"
    },
    {
      id: id.next().value,
      title: "Article 2",
      summary: "Article 2 Summary",
      display: "none"
    },
    {
      id: id.next().value,
      title: "Article 3",
      summary: "Article 3 Summary",
      display: "none"
    },
    {
      id: id.next().value,
      title: "Article 4",
      summary: "Article 4 Summary",
      display: "none"
    }
  ]);

  console.log("articles list", articles[0].id);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const onChangeTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const onChangeSummary = (e) => {
    e.preventDefault();
    setSummary(e.target.value);
  };
  const onClickAdd = (e) => {
    setArticles([
      ...articles,
      {
        id: id.next().value,
        title,
        summary,
        display: "none"
      }
    ]);
    setTitle("");
    setSummary("");
  };
  const onClickToggle = (id) => {
    setArticles(
      articles.map((a) =>
        a.id !== id ? a : { ...a, display: a.display === "none" ? "" : "none" }
      )
    );
  };
  const onClickRemove = (id) => {
    console.log("click remove:", id);
    setArticles(articles.filter((a) => a.id !== id));
  };
  return (
    <section>
      {addArticle({
        name: "Article list",
        title,
        summary,
        onChangeTitle,
        onChangeSummary,
        onClickAdd
      })}
      {articleList({ articles, onClickToggle, onClickRemove })}
    </section>
  );
}
