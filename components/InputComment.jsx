import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function InputComment({ toComment }) {
  const [content, onContentChange, setContent] = useInput('');

  const onComment = () => {
    if (content.trim()) {
      toComment(content);
      setContent('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onComment();
  };

  return (
    <form className="container-input" onSubmit={handleSubmit}>
      <textarea
        type="text"
        className="input__field"
        rows="7"
        value={content}
        onChange={onContentChange}
      />
      <button type="button" onClick={onComment}>
        Kirim
      </button>
    </form>
  );
}

InputComment.propTypes = {
  toComment: PropTypes.func.isRequired,
};

export default InputComment;
