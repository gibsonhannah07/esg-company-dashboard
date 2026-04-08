import { useState } from "react";
import "../styles/pages/Dashboard.css";
import companies from "../data/companyData";
import CompanyGrid from "../components/CompanyGrid";
import FilterBar from "../components/FilterBar"
import DetailPanel from "../components/DetailPanel";

export default function Dashboard() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [filterIndustry, setFilterIndustry] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCompanies = companies.filter((company) => {
    const matchesIndustry =
      filterIndustry === "All" || company.industry === filterIndustry;

    const matchesSearch = company.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesIndustry && matchesSearch;
  }); 

  const industryOptions = [
    "All",
    ...new Set(companies.map((c) => c.industry)),
  ];

  function handleSelectCompany(company) {
    setSelectedCompany(company);
  }

  function handleCloseDetail() {
    setSelectedCompany(null);
  }

  return ( 
    <section>
      <div className="dashboard-header">
        <h2>Company Dashboard</h2>
      </div>
      <div className="search-bar">
         <input
          type="text"
          placeholder="Search a company..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <FilterBar 
        industries={industryOptions}
        selected={filterIndustry}
        onFilterChange={setFilterIndustry}
      />

      <CompanyGrid
        companies={filteredCompanies}
        selectedCompany={selectedCompany}
        onSelectCompany={handleSelectCompany}
      />

      {selectedCompany && (
        <div className="modal-overlay" onClick={handleCloseDetail}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <DetailPanel
              company={selectedCompany}
              onClose={handleCloseDetail}
            />
          </div>
        </div>
      )}
    </section>
  );
}
