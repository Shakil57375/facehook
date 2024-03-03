import Header from "../Components/common/Header";
import useAuth from "../hooks/useAuth/useAuth";

const HomePage = () => {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div>
      <Header />
      <h1>HomePage</h1>
    </div>
  );
};

export default HomePage;
