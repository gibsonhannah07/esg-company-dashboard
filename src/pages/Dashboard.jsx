import { useState } from "react";
import "../styles/pages/Dashboard.css";
import companies from "../data/companyData";
import CompanyGrid from "../components/CompanyGrid";
import FilterBar from "../components/FilterBar";
import DetailPanel from "../components/DetailPanel";
import ComparePanel from "../components/ComparePanel";
import AddCompany from "../components/AddCompany";

export default function Dashboard() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [filterIndustry, setFilterIndustry] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const [compared, setCompared] = useState([]);

  const [userCompanies, setUserCompanies] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  const allCompanies = [...companies, ...userCompanies];

  const filteredCompanies = allCompanies.filter((company) => {
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

  function handleAddToCompare(company) {
    setCompared((prev) => {
      if (prev.length >= 2) return prev;
      if (prev.find((c) => c.name === company.name)) return prev;
      return [...prev, company];
    });
  }

  function handleRemoveFromCompare(company) {
    setCompared((prev) => prev.filter((c) => c.name !== company.name));
  }

  function handleClearCompare() {
    setCompared([]);
  }

  function handleAddUserCompany(newCompany) {
    setUserCompanies((prev) => [...prev, newCompany]);

    setCompared((prev) => {
      if (prev.length >= 2) return prev;
      return [...prev, newCompany];
    });

    setShowAddModal(false);
  }

  function openAddCompanyModal() {
    setShowAddModal(true);
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

      <div className="dashboard-actions">
        <button
          className="btn-add-company"
          onClick={() => setShowAddModal(true)}
        >
        + Add & Compare Companies
        </button>
      </div>

      {compared.length > 0 && (
        <ComparePanel
          companies={compared}
          onRemove={handleRemoveFromCompare}
          onClear={handleClearCompare}
          onOpenAddModal={openAddCompanyModal}
        />
      )}

      <CompanyGrid
        companies={filteredCompanies}
        selectedCompany={selectedCompany}
        onSelectCompany={handleSelectCompany}
        onCompare={handleAddToCompare}
        comparedCompanies={compared}
      />

      {selectedCompany && (
        <div className="modal-overlay" onClick={handleCloseDetail}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <DetailPanel
              company={selectedCompany}
              onClose={handleCloseDetail}
              onCompare={handleAddToCompare}
            />
          </div>
        </div>
      )}

      {showAddModal && (
        <AddCompany
          onAdd={handleAddUserCompany}
          onClose={() => setShowAddModal(false)}
        />
      )}
    </section>
  );
}
