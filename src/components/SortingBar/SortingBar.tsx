import React from 'react';

import styles from './SortingBar.module.css';

import SortingType from '../../types/sorting';

interface SortingBarProps {
  sorting: SortingType;
  setSorting: (sorting: SortingType) => void;
}

const SortingBar: React.FC<SortingBarProps> = ({ sorting, setSorting }) => (
  <div className={styles.sorting_bar}>
    <p className={styles.sorting_title}>Sort by:</p>
    <button onClick={() => setSorting('alphabetical')} type="button">Alphabet</button>
    <button onClick={() => setSorting('capitalization')} type="button">Market Cap</button>
    {
      sorting && (
        <button onClick={() => setSorting(undefined)} type="button">Clear</button>
      )
    }
  </div>
);

export default SortingBar;
