import React from 'react';
import styles from './TabTitle.module.css';

export type TabTitleProps = {
  title: string;
  isActive: boolean;

  select: () => void;
};

const TabTitle: React.FC<TabTitleProps> = ({
  title, isActive, select
}) => (
  <li className={`${styles.title} ${isActive && styles.active}`}>
    <button type="button" onClick={select}>{title}</button>
  </li>
);

export default TabTitle;
