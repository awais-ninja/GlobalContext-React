import Nav from "../components/Nav";
import FooterObj from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Nav v1="NAMRAH" v2="Awais" />
      {children}
      <FooterObj v1="Awais" v2="Namrah" />
    </div>
  );
};

export default MainLayout;
