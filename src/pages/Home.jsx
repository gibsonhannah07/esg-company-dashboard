import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <h2>Welcome to the ESG Dashboard</h2>
      <p>Browse and compare companies based on selected Environmental, Social, and Governance (ESG) metrics.</p>
      <Link to="/dashboard">Browse Companies</Link>
    </section>
  );
}

export default Home;