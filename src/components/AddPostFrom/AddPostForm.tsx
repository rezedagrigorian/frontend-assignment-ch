/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Post from '../../types/post';
import styles from './AddPostForm.module.css';

interface AddPostFormProps {
  addPost: (post: Post) => void;
}

const AddPostForm: React.FC<AddPostFormProps> = ({ addPost }) => {
  const [title, setTitle] = useState<string>('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    addPost({
      id: uuidv4(),
      title
    });
    setTitle('');
  };

  return (
    <form onSubmit={onSubmit} className={styles.add_post}>
      <label htmlFor="name" className={styles.add_post_name}> Fun facts: </label>
      <input name="name" onChange={(e) => setTitle(e.target.value)} value={title} />
      <button type="submit"> Add </button>
    </form>
  );
};

export default AddPostForm;
