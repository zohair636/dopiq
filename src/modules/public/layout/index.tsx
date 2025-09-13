import { Outlet } from "react-router-dom";
import Header from "../components/shared/header";
import Footer from "../components/shared/footer";

const PublicLayout = () => {
  return (
    <div className="lg:mx-44 my-4">
      <Header />
      <main className="lg:translate-y-24 lg:ml-44">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
