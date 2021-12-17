import React from "react";
import ArticleItem from "./ArticleItem";

export default function ArticleList(props) {
  const { articles, onClickToggle, onClickRemove } = props;
  console.log("articles: ", articles[0].id);
  return (
    <ul>
      {articles.map((i) => (
        <ArticleItem
          article={i}
          onClickToggle={onClickToggle}
          onClickRemove={onClickRemove}
        />
      ))}
    </ul>
  );
}
