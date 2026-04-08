import "../styles/components/CompanyCard.css";

export default function CompanyCard({ company, onSelect, isSelected }) {
  return (
    <div
      className={`company-card ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(company)}
    >
      <div className="card-header">
        <div>
          <p className="card-name">{company.name}</p>
        </div>
        <span className="card-industry">{company.industry}</span>
      </div>
      <p className="card-prompt">Learn more →</p>
    </div>
  );
}