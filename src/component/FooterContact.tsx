import { Col, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const StyleBackground = styled.div`
  background-color: #ffc9c9;
  border-top: 10px solid #db8f8f;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0 30px 0;
`;
const StyleViewBackground = styled(Row)`
  width: 90vw;
`;
const StyleLine = styled(Col)`
  display: flex;
  align-items: center;
  margin: 5px 0 5px 0;
  justify-content: start;
  @media (max-width: 768px) {
    justify-content: center;
  }
  @media (max-width: 425px) {
    justify-content: start;
  }
`;
const StyleText = styled.h3`
  margin: 0 0 0 10px;
  color: #b65a5a;
`;
const FooterContact = () => {
  return (
    <StyleBackground>
      <StyleViewBackground>
        <StyleLine xl={10} lg={11} xs={24}>
          <FontAwesomeIcon
            icon={faLocationDot}
            size={"lg"}
            style={{ color: "#b65a5a" }}
          />
          <StyleText>
            Địa chỉ: 033 Trần Hưng Đạo, tp. Lào Cai (dãy bitexco){" "}
          </StyleText>
        </StyleLine>
        <StyleLine xl={8} lg={6} xs={24}>
          <FontAwesomeIcon
            icon={faGlobe}
            size={"lg"}
            style={{ color: "#b65a5a" }}
          />
          <StyleText>Website: sttauth.vn</StyleText>
        </StyleLine>
        <StyleLine xl={6} lg={7} xs={24}>
          <FontAwesomeIcon
            icon={faPhone}
            size={"lg"}
            style={{ color: "#b65a5a" }}
          />
          <StyleText>Số điện thoại: 032-701-1117 </StyleText>
        </StyleLine>
        <StyleLine xl={10} lg={11} xs={24}>
          <FacebookOutlined style={{ fontSize: "20px", color: "#b65a5a" }} />
          <StyleText>Facebook: STT.auth - spa đồ hiệu</StyleText>
        </StyleLine>
        <StyleLine xl={8} lg={6} xs={24}>
          <InstagramOutlined style={{ fontSize: "20px", color: "#b65a5a" }} />
          <StyleText>Instagram: sttthao</StyleText>
        </StyleLine>
        <StyleLine xl={6} lg={7} xs={24}>
          <MailOutlined style={{ fontSize: "20px", color: "#b65a5a" }} />
          <StyleText>Gmail: thaothusan98@gmail.com</StyleText>
        </StyleLine>
      </StyleViewBackground>
    </StyleBackground>
  );
};

export default FooterContact;
