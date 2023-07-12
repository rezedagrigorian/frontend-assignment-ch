import React from 'react';

import styles from './CompanyListItem.module.css';

import Company from '../../types/company';

const CompanyListItem: React.FC<Company> = ({ id, name, capitalization }) => (
  <li key={id} className={styles.company_item}>
    <p className={styles.company_item_name}>{name}</p>
    <p className={styles.company_item_capitalization}>{capitalization}</p>
  </li>
);

export default CompanyListItem;
