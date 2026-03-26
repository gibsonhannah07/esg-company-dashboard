import { useState } from "react";
import companies from "../data/companyData";
import CompanyGrid from "../components/CompanyGrid";
import FilterBar from "../components/FilterBar"
import DetailPanel from "../components/DetailPanel";

export default function Dashboard() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [filterIndustry, setFilterIndustry] = useState("All");
  const filteredCompanies = filterIndustry === "All"
    ? companies
    : companies.filter((company) => company.industry === filterIndustry);
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
      <h2>Company Dashboard</h2>
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
        <DetailPanel
          company={selectedCompany}
          onClose={handleCloseDetail}
        />
      )}
    </section>
    )
}