import { useState } from "react";
import jobsObj from "../data.json";
import JobList from "./JobList";
import JobSearch from "./JobSearch";

function JobListContainer() {
  const [jobs, setJobs] = useState(jobsObj);
  const [filters, setFilters] = useState([]);

  function handleFilters(newFilter) {
    if (!filters.includes(newFilter))
      setFilters((filters) => [...filters, newFilter]);
  }

  function handleDeleteFilters(filterName) {
    setFilters((filters) => filters.filter((filter) => filter !== filterName));
  }

  function handleClearFilters() {
    setFilters([]);
    setJobs(jobsObj);
  }

  function handleFilterRole(f) {
    setJobs((jobs) => jobs.filter((job) => job.role === f));
  }

  function handleFilterLevel(f) {
    setJobs((jobs) => jobs.filter((job) => job.level === f));
  }

  function handleFilterLang(f) {
    setJobs((jobs) => jobs.filter((job) => job.languages.includes(f)));
  }

  function handleFilterTools(f) {
    setJobs((jobs) => jobs.filter((job) => job.tools.includes(f)));
  }

  return (
    <div className="container">
      <JobSearch
        filters={filters}
        onDeleteFilters={handleDeleteFilters}
        onClearFilters={handleClearFilters}
      />
      <JobList
        onSetFilters={handleFilters}
        jobs={jobs}
        onFilterRole={handleFilterRole}
        onFilterLevel={handleFilterLevel}
        onFilterLang={handleFilterLang}
        onFilterTools={handleFilterTools}
      />
    </div>
  );
}

export default JobListContainer;
