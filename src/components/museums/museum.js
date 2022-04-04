/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";

function Post(props) {
  const [title] = useState(props.post.name);
  const [content] = useState(props.post.city);
  const [image] = useState(props.post.image);

  return (
    <div className="col-3">
      <div className="card" onClick={() => props.onDelete(props.post.id)}>
        <img className="card-img-top rel" src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title name">{title}</h5>
          <p className="card-text city">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
