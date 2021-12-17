import "./styles.css";
import React from "react";
import MyFeature from "./MyFeature";
import ArticleList from "./ArticleList";
import AddArticle from "./AddArticle";

export default function App() {
  return (
    <MyFeature
      addArticle={({
        title,
        summary,
        onChangeTitle,
        onChangeSummary,
        onClickAdd
      }) => (
        <AddArticle
          name="Articles"
          title={title}
          summary={summary}
          onChangeTitle={onChangeTitle}
          onChangeSummary={onChangeSummary}
          onClickAdd={onClickAdd}
        />
      )}
      articleList={({ articles, onClickToggle, onClickRemove }) => (
        <ArticleList
          articles={articles}
          onClickToggle={onClickToggle}
          onClickRemove={onClickRemove}
        />
      )}
    />
  );
}
