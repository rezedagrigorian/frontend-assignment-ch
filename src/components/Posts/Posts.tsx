import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../../api/companies';
import companyListStyles from '../CompanyList/CompanyList.module.css';
import Post from '../../types/posts';
import companyListItemStyles from '../CompanyListItem/CompanyListItem.module.css';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts().then((data) => setPosts(data));
  }, []);

  return (
    <div className={companyListStyles.company_container}>
      <h2 className={companyListStyles.company_container_title}>Posts</h2>
      <div className={companyListStyles.company_search}>
        hey
      </div>
      <ul className={companyListStyles.company_list}>
        {posts.map((post) => (
          <li key={post.id} className={companyListItemStyles.company_item}>
            <p className={companyListItemStyles.company_item_name}>{post.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
