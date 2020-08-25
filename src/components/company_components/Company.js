import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JobCard from '../job_components/JobCard';
import JoblyApi from '../../util/JoblyApi';
import {
  CardColumns,
} from 'react-bootstrap'

const Companies = () => {
  const [company, setCompany] = useState([]);
  const [jobs, setJobs] = useState([]);
  const { handle } = useParams();

  useEffect(() => {
    async function request() {
      const request = await JoblyApi.getCompany(handle);
      setCompany(request);
      setJobs(request.jobs);
    }
    request();
  }, []);

  return (
    <>
      <div className="m-5">
        <h1>{company.name}</h1>
        <p>{company.description}</p>
        <p>Number of Employees: {company.num_employees}</p>
      </div>
      <CardColumns className="m-5">
        {jobs.map(job =>
          <JobCard
            key={job.id}
            id={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
            state={job.state} />
        )}
      </CardColumns  >
    </>
  );
};

export default Companies;