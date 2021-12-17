import React from "react";

export default function AddArticle(props) {
  const {
    name,
    title,
    summary,
    onChangeTitle,
    onChangeSummary,
    onClickAdd
  } = props;

  return (
    <section>
      <h1>{name}</h1>
      <input placeholder="title" value={title} onChange={onChangeTitle} />
      <input placeholder="Summary" value={summary} onChange={onChangeSummary} />
      <button onClick={onClickAdd}>Add</button>
    </section>
  );
}
