import React from 'react';

const UpdatePostForm = props => {
  return (
    <form>
      <input placeholder={props.post.author} />
      <input placeholder={props.post.content} />
    </form>
  );
};

export default UpdatePostForm;