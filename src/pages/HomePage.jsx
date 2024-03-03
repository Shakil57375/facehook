import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth/useAuth";

const HomePage = () => {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/me">Go to Profile</Link>
    </div>
  );
};

export default HomePage;
