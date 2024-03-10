import JobItem from "./JobItem";

function JobList({
  jobs,
  onSetFilters,
  onFilterRole,
  onFilterLevel,
  onFilterLang,
  onFilterTools,
}) {
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobItem
          job={job}
          key={job.id}
          onSetFilters={onSetFilters}
          onFilterRole={onFilterRole}
          onFilterLevel={onFilterLevel}
          onFilterLang={onFilterLang}
          onFilterTools={onFilterTools}
        />
      ))}
    </div>
  );
}

export default JobList;
