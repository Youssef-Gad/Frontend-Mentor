function JobSearch({ filters, onClearFilters }) {
  if (!filters.length) return;

  return (
    <div className="search">
      <ul>
        {filters.map((filter) => (
          <li key={filter}>
            <span>{filter}</span>
            {/* <span onClick={() => onDeleteFilters(filter)}>
              <img src="/images/icon-remove.svg" alt="icon" />
            </span> */}
          </li>
        ))}
      </ul>
      <span className="clear" onClick={onClearFilters}>
        Clear
      </span>
    </div>
  );
}

export default JobSearch;
