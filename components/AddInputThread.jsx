import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function AddInputThread({ onThread }) {
  const [title, onChangeTitle, setTitle] = useInput('');
  const [category, onChangeCategory, setCategory] = useInput('');
  const [body, onChangeBody, setBody] = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle('');
    setCategory('');
    setBody('');
    onThread({ title, body, category });
  };

  return (
    <form className="container-input" onSubmit={handleSubmit}>
      <input className="input__field" type="text" placeholder="title" value={title} onChange={onChangeTitle} />
      <input className="input__field" type="text" placeholder="category" value={category} onChange={onChangeCategory} />
      <textarea className="input__field" type="text" placeholder="Your Threads.." rows={30} value={body} onChange={onChangeBody} />
      <button type="submit">Buat</button>
    </form>
  );
}

AddInputThread.propTypes = {
  onThread: PropTypes.func.isRequired,
};

export default AddInputThread;
