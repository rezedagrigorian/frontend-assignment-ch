import React, { useEffect, useState } from 'react';

import {
  fetchCompanies,
  postCompanies
} from '../../api/companies';

import styles from './CompanyList.module.css';

import SortingType from '../../types/sorting';

import AddCompanyForm from '../AddCompanyForm/AddCompanyForm';
import Company from '../../types/company';
import SearchInput from '../SearchInput/SearchInput';
import CompanyListItem from '../CompanyListItem/CompanyListItem';
import SortingBar from '../SortingBar/SortingBar';

const CompanyList: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [rawCompanies, setRawCompanies] = useState<Company[]>([]);
  const [sorting, setSorting] = useState<SortingType>();
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    fetchCompanies().then((data) => setRawCompanies(data));
  }, []);

  useEffect(() => {
    let result = [...rawCompanies];
    if (sorting === 'alphabetical') {
      result = [...rawCompanies].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sorting === 'capitalization') {
      result = [...rawCompanies].sort((a, b) => a.capitalization - b.capitalization);
    }

    if (search) {
      result = [...result].filter((company) => company.name.toLowerCase()
        .includes(search.toLowerCase()));
    }

    setCompanies(result);
  }, [rawCompanies, sorting, search]);

  const handleAddCompany = (company: Company) => {
    postCompanies([...rawCompanies, company]).then((updated) => setRawCompanies(updated));
  };

  return (
    <div className={styles.company_container}>
      <h2 className={styles.company_container_title}>Company List</h2>
      <SortingBar sorting={sorting} setSorting={setSorting} />
      <div className={styles.company_search}>
        <SearchInput value={search} setValue={setSearch} />
        <AddCompanyForm addCompany={handleAddCompany} />
      </div>
      <ul className={styles.company_list}>
        {companies.map((company) => CompanyListItem(company))}
      </ul>
    </div>
  );
};

export default CompanyList;
