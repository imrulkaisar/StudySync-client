import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[500px] bg-[url('https://tinyurl.com/43zukuj9')] bg-center bg-cover bg-fixed">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
