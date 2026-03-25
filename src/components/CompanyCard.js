function CompanyCard({ company, onSelect, isSelected }) {
  return (
    <div onClick={() => onSelect(company)}>
      <h3>{company.name} ({company.ticker})</h3>
      <p>{company.industry} — {company.region}</p>
      <ul>
        <li>Renewable Energy: {company.renewableEnergy}%</li>
        <li>Women in Leadership: {company.womenInLeadership}%</li>
        <li>CEO Pay Ratio: {company.ceoPayRatio}:1</li>
      </ul>
    </div>
  );
}

export default CompanyCard;