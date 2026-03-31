import styles from "./CompanyCard.module.css";

function CompanyCard({ company, onSelect, isSelected }) {
  return (
    <div className="company-card"
    onClick={() => onSelect(company)}>
      <h3>{company.name}</h3>
      <p>{company.industry}</p>
      <ul>
        <li>Renewable Energy: {company.renewableEnergyPct}</li>
        <li>Women in Leadership: {company.womenInLeadershipPct}</li>
        <li>CEO Pay Ratio: {company.ceoPayRatio}</li>
      </ul>
    </div>
  );
}

export default CompanyCard;