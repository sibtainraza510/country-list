export const Searchfilter = ({
    search,
    setSearch,
    filter,
    setFilter,
    countries,
    setcountries,
  }) => {
    const handleInputChange = (event) => {
      event.preventDefault();
      setSearch(event.target.value);
    };
  
    const handleSelectChange = (event) => {
      event.preventDefault();
      setFilter(event.target.value);
    };
  
    const sortCountries = (value) => {
      const sortCountry = [...countries].sort((a, b) => {
        return value === "asc"
          ? a.name.common.localeCompare(b.name.common)
          : b.name.common.localeCompare(a.name.common);
      });
      setcountries(sortCountry);
    };
  
    return (
      <div className="searchfilterdiv grid grid-cols-4 justify-items-center content-start pt-12">
        <div style={{border:"2px solid black", borderRadius:"4px"}} className="searchinput">
            <input
            type="text"
            placeholder="search"
            value={search}
            onChange={handleInputChange}
            />
        </div>
  
        <div>
          <button style={{border:"1.5px solid black", borderRadius:"2px"}} onClick={() => sortCountries("asc")}>Asc</button>
        </div>
  
        <div>
          <button style={{border:"1.5px solid black", borderRadius:"2px"}}  onClick={() => sortCountries("des")}>Desc</button>
        </div>
  
        <div style={{border:"1.5px solid black", borderRadius:"4px"}}>
            <select
            className=""
            value={filter}
            onChange={handleSelectChange}
            >
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            {/* <option value="Asia">Asia</option> */}
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            </select>
        </div>
      </div>
    );
  };