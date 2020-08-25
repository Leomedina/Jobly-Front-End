import React, { useState, useEffect } from 'react';
import Search from '../Search';
import CompanyCard from './CompanyCard';
import JoblyApi from '../../util/JoblyApi';
import {
  CardColumns,
} from 'react-bootstrap'

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function request() {
      const request = await JoblyApi.getAllCompanies();
      setCompanies(request);
    }
    request();
  }, []);

  return (
    <>
      <Search />
      <CardColumns className="m-5">
        {companies.map(company =>
          <CompanyCard
            key={company.handle}
            handle={company.handle}
            name={company.name}
            description={company.description} />
        )}
      </CardColumns  >
    </>
  );
};

export default Companies;