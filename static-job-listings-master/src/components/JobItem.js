function JobItem({
  job,
  onSetFilters,
  onFilterRole,
  onFilterLevel,
  onFilterLang,
  onFilterTools,
}) {
  return (
    <div className={`job-item ${job.featured ? "featured" : ""}`}>
      <div className="info">
        <img className="info-logo" src={job.logo} alt="logo" />
        <div className="info-content">
          <div className="content-header">
            <span>{job.company}</span>
            {job.new && <span>NEW!</span>}
            {job.featured && <span>FEATURED</span>}
          </div>

          <p className="content-body">{job.position}</p>
          <p className="content-footer">
            {job.postedAt} . {job.contract} . {job.location}
          </p>
        </div>
      </div>

      <ul className="tag-list">
        <li
          onClick={() => {
            onSetFilters(job.role);
            onFilterRole(job.role);
          }}
        >
          {job.role}
        </li>
        <li
          onClick={() => {
            onSetFilters(job.level);
            onFilterLevel(job.level);
          }}
        >
          {job.level}
        </li>
        {job.languages.map((lang) => (
          <li
            key={lang}
            onClick={() => {
              onSetFilters(lang);
              onFilterLang(lang);
            }}
          >
            {lang}
          </li>
        ))}
        {job.tools.map((tool) => (
          <li
            key={tool}
            onClick={() => {
              onSetFilters(tool);
              onFilterTools(tool);
            }}
          >
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobItem;
