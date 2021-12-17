import React from "react";

export default function ArticleItem({ article, onClickToggle, onClickRemove }) {
  console.log("article:", article);
  return (
    <li key={article.id}>
      <a
        href={`#${article.id}`}
        title="Toggle Summary"
        onClick={() => onClickToggle(article.id)}
      >
        {article.title}
      </a>
      &nbsp;
      <a
        href={`#${article.id}`}
        title="Remove"
        onClick={() => onClickRemove(article.id)}
      >
        &#10007;
      </a>
      <p style={{ display: article.display }}>{article.summary}</p>
    </li>
  );
}
