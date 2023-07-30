import React, { useState, useEffect } from 'react';

import { fetchPosts, addPost, deletePost } from '../../api/posts';

import Post from '../../types/post';
import AddPostForm from '../AddPostFrom/AddPostForm';
import PostRow from './PostRow';

import styles from '../CompanyList/CompanyList.module.css';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const loadPosts = async () => {
    const data = await fetchPosts();
    setPosts(data);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleAddPost = (post: Post) => {
    addPost(post)
      .then(() => loadPosts())
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeletePost = (id: string) => {
    deletePost(id)
      .then(() => loadPosts())
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={styles.company_container}>
      <h2 className={styles.company_container_title}>Posts</h2>
      <div className={styles.company_search}>
        hey
      </div>
      <AddPostForm addPost={handleAddPost} />
      <ul className={styles.company_list}>
        {posts.map((post) => <PostRow post={post} deletePost={handleDeletePost} />)}
      </ul>
    </div>
  );
};

export default Posts;
