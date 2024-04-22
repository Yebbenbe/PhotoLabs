import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { id, slug, title } = props.data;
  const { selectedTopic } = props;

  return (
    <div className="topic-list__item" onClick={() => selectedTopic(id)}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
