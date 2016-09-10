import React, { PropTypes } from 'react';

export const Question = ({ data }) => {
  const body2 = data.body2 ? <p>{data.body2}</p> : '';

  return (
    <div>
      <h3>{data.heading}</h3>
      <p>{data.body}</p>
      {body2}
    </div>
  );
};

Question.propTypes = {
  data: PropTypes.object
};
