import React from 'react';

import { FaTrash } from 'react-icons/fa';
import Post from '../../types/post';
import styles from './PostRow.module.css';

interface PostRowProps {
  post: Post;
  deletePost: (id: string) => void;
}

const PostRow: React.FC<PostRowProps> = ({ post, deletePost }) => (
  <li key={post.id} className={styles.post_item}>
    <p className={styles.post_item_name}>{post.title}</p>
    <button onClick={() => deletePost(post.id)} type="button">
      <FaTrash />
    </button>
  </li>
);

export default PostRow;
