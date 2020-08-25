import React, { useState, useEffect } from 'react';
import Search from '../Search';
import JobCard from './JobCard';
import JoblyApi from '../../util/JoblyApi';
import {
  CardColumns,
} from 'react-bootstrap'

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function request() {
      const response = await JoblyApi.getAllJobs();
      setJobs(response);
    }
    request();
  }, []);

  async function handleSubmit(term) {
    const response = await JoblyApi.getJobSearch(term);
    setJobs(response);
  };

  return (
    <>
      <Search handleSubmit={handleSubmit} />
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

export default Jobs;