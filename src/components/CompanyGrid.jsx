import CompanyCard from "./CompanyCard";

function CompanyGrid({ companies, selectedCompany, onSelectCompany }) {
  if (companies.length === 0) {
    return <p>No companies match your search.</p>;
  }

  return (
    <section>
      {companies.map(company => (
        <CompanyCard
          key={company.id}
          company={company}
          onSelect={onSelectCompany}
          isSelected={selectedCompany?.id === company.id}
        />
      ))}
    </section>
  );
}

export default CompanyGrid;