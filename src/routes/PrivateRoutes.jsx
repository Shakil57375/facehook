import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth/useAuth";
import Header from "../Components/common/Header";

const PrivateRoutes = () => {
  const { auth } = useAuth();
  return (
    <>
      {auth.user ? (
        <div>
          <Header />
          <main className="mx-auto max-w-[1020px] py-8">
            <div className="container">
              <Outlet />
            </div>
          </main>
        </div>
      ) : (
        <>
          <Navigate to="/login" />
        </>
      )}
    </>
  );
};

export default PrivateRoutes;
