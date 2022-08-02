import { Col, Row } from "antd";
import styled from "styled-components";
import imgLogo from "../asset/logoSTTAuth.jpeg";
const StyleNav = styled(Col)`
   {
    padding: 5px 0px;
    background-color: #ffc9c9;
    text-align: center;
  }
`;
const StyleNavLogo = styled(Col)`
   {
    height: 37px;
    background-color: #ffc9c9;
    text-align: center;
  }
  @media (max-width: 1440px) {
    height: 37px;
  }
  @media (max-width: 1024px) {
    height: 33px;
  }
  @media (max-width: 768px) {
    height: 30px;
  }
`;
const StyleRow = styled(Row)`
  align-items: center;
  padding: 70px 0px;
  @media (max-width: 1440px) {
    padding: 45px 0px;
  }
  @media (max-width: 1024px) {
    padding: 30px 0px;
  }
  @media (max-width: 768px) {
    padding: 20px 0px;
  }
`;
const StyleImage = styled.img`
  position: absolute;
  width: 100%;
  border-radius: 100px;
  left: 0px;
  transform: translate(0, -40%);
  border: 2px solid #ffc9c9;

  @media (max-width: 1440px) {
    transform: translate(0, -34%);
  }

  @media (max-width: 1024px) {
    transform: translate(0, -29%);
  }

  @media (max-width: 768px) {
    transform: translate(0, -24%);
  }
`;

const StyleTitlePage = styled.h3`
  font-size: 16px;
  color: #b65a5a;
  font-weight: 700;
  margin: 0px;
  @media (max-width: 1440px) {
    font-size: 16px;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const HeaderNav = () => {
  return (
    <>
      <StyleRow>
        <StyleNav xs={0} md={5}>
          <StyleTitlePage>TRANG CHỦ</StyleTitlePage>
        </StyleNav>
        <StyleNav xs={0} md={6}>
          <StyleTitlePage>SẢN PHẨM</StyleTitlePage>
        </StyleNav>
        <StyleNavLogo xs={0} md={2}>
          <StyleImage src={imgLogo} />
        </StyleNavLogo>
        <StyleNav xs={0} md={6}>
          <StyleTitlePage>GIÁ THÀNH</StyleTitlePage>
        </StyleNav>
        <StyleNav xs={0} md={5}>
          <StyleTitlePage>GIỚI THIỆU</StyleTitlePage>
        </StyleNav>
      </StyleRow>
    </>
  );
};
export default HeaderNav;
