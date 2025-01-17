import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  ContactButton,
  Label,
  Outline,
  Span,
} from "./styles";

// Import your local image
import logoImage from "../../../src/Assets/Asthetic.jpg"; // Update this path according to your directory structure

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    console.log(element);  // This will help debug the issue
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      console.error(`Element with id ${id} not found.`);
    }
  };

  const MenuItem = () => (
    <Row justify="space-between" align="middle">
      <Col>
        <CustomNavLinkSmall onClick={() => scrollTo("home")}>
          <Span>{t("Home")}</Span>
        </CustomNavLinkSmall>
      </Col>
      <Col>
        <CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <Span>{t("Services")}</Span>
        </CustomNavLinkSmall>
      </Col>
      {/* <Col>
        <CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <Span>{t("About Us")}</Span>
        </CustomNavLinkSmall>
      </Col> */}
      <Col>
        <ContactButton onClick={() => scrollTo("contact")}>
          {t("Contact Us")}
        </ContactButton>
      </Col>
    </Row>
  );

  return (
    <HeaderSection style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: "#ccfeac" }}>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage" style={{ textAlign: "center" }}>
            {/* Image */}
            {/* <img src={logoImage} alt="Aesthetic-Prosculpt Logo" width="200px" height="104px" /> */}
            {/* Text below the image */}
            <div style={{ fontWeight: "800", color: "#171717 ", fontSize: "40px", marginTop: "10px" }}>
              Aesthetic Prosculpt
            </div>
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
