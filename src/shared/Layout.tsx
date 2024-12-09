import { Container } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Header } from "../entities/header/Header";
import { Footer } from "../entities/footer/Footer";

const Layout = () => {
  return (
    <Container
      style={{
        display: "grid",
        gridTemplateRows: "min-content 1fr min-content",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;
