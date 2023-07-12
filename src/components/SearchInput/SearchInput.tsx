import React from 'react';

import styles from './SearchInput.module.css';

interface SearchInputProps {
  value: string;
  setValue: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, setValue }) => (
  <div className={styles.search_container}>
    <input
      className={styles.search_input}
      placeholder="Search"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  </div>
);

export default SearchInput;
