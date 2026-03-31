import CompanyCard from "./CompanyCard";

function CompanyGrid({ companies, selectedCompany, onSelectCompany }) {
  if (companies.length === 0) {
    return <p>No companies match your search.</p>;
  }

  return (
    <div className="company-grid">
      {companies.map(company => (
        <CompanyCard
          key={company.id}
          company={company}
          onSelect={onSelectCompany}
          isSelected={selectedCompany?.id === company.id}
        />
      ))}
    </div>
  );
}

export default CompanyGrid;