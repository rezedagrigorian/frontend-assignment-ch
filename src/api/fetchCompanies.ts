import axios from 'axios';
import Company from '../types/Company';

const API_URL = 'https://api.npoint.io/71f89217a977fde7a80b';

export const fetchCompanies = async () => {
  const response = await axios.get(API_URL);
  if (response.status !== 200) {
    throw new Error('Fetch failed');
  }
  return response.data;
};

export const postCompanies = async (companies: Company[]) => {
  const response = await axios.post(API_URL, companies);
  if (response.status !== 200) {
    throw new Error('Fetch failed');
  }
  return companies;
};