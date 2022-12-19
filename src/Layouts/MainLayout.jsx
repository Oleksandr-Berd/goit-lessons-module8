import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer.styled';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
