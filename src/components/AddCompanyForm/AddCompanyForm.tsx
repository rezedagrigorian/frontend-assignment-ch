/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Company from '../../types/company';
import styles from './AddCompanyForm.module.css';

interface AddCompanyFormProps {
  addCompany: (company: Company) => void;
}

const AddCompanyForm: React.FC<AddCompanyFormProps> = ({ addCompany }) => {
  const [name, setName] = useState<string>('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    addCompany({
      id: uuidv4(),
      name,
      capitalization: Math.floor(Math.random() * 10000)
    });
    setName('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} className={styles.add_company}>
      <label htmlFor="name" className={styles.add_company_name}>Name:</label>
      <input name="name" onChange={handleChange} value={name} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddCompanyForm;
