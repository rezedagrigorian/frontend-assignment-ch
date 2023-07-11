import React, { useEffect, useState } from 'react';
import {
  fetchCompanies,
  postCompanies
} from '../api/fetchCompanies';
import styles from '../styles/companyList.module.css';
import AddCompanyForm from './AddCompanyForm';
import Company from '../types/Company';

const CompanyList: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    fetchCompanies().then((data) => setCompanies(data));
  }, []);

  const handleAddCompany = (company: Company) => {
    postCompanies([...companies, company]).then((updated) => setCompanies(updated));
  };

  return (
    <div className={styles['company-container']}>
      <h2 className={styles['company-container__title']}>Company List</h2>
      <div className={styles['search-container']}>
        <input
          className={styles['search-input']}
          placeholder="What needs to be done?"
        />
      </div>
      <AddCompanyForm addCompany={handleAddCompany} />
      <ul className={styles['company-list']}>
        {companies.map((company) => (
          <li key={company.id} className={styles.item}>
            <p className={styles.name}>{company.name}</p>
            <p className={styles.capitalization}>{company.capitalization}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
