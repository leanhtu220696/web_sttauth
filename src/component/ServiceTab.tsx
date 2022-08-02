import { Col, Row } from "antd";
import styled from "styled-components";
import DetailServiceTab, { CardDetail } from "./DetailServiceTab";

export const StyleCard = styled(Row)`
  width: 1184px;
  padding: 32px;
  @media (max-width: 768px) {
    width: 100vw;
    padding: 0;
  } ;
`;
export const StyleBackgroud = styled.div`
  background-color: #ffe4e4;
  width: 100vw;
  display: flex;
  margin: 32px 0px 32px 0px;
  padding: 32px 0px 32px 0px;
  justify-content: center;
`;
export const StyleTileCard = styled.h1`
  margin: 0;
  font-family: inherit;
  font-size: 36px;
  line-height: 1;
  color: #b65a5a;
  font-weight: 900;
  padding-bottom: 4px;
  margin-bottom: 16px;
`;
export const StyleLine = styled.span`
  padding: 0px;
  margin: 0px;
  width: 85px;
  border-bottom: 8px solid #b65a5a;
  display: block;
  margin-bottom: 16px;
`;

export const StyleH6 = styled.h6`
  margin: 0;
  padding: 0;
  font-family: ui-monospace;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  color: #b65a5a;
`;
const ServiceTab = () => {
  return (
    <StyleBackgroud>
      <StyleCard>
        <CardDetail xs={24} lg={12}>
          <StyleTileCard>CÁC DỊCH VỤ</StyleTileCard>
          <StyleLine></StyleLine>
          <StyleH6>
            Extrim cung cấp đa dạng dịch vụ: từ Vệ Sinh - Bảo Dưỡng - Sửa Chữa
            đến Phục Hồi - Bảo Vệ dành cho mọi loại giày trong gia đình bạn.
            100% thao tác đều được thực hiện thủ công, cam kết đem đến vẻ ngoài
            hoàn hảo cho từng đôi giày.
          </StyleH6>
        </CardDetail>
        <DetailServiceTab />
      </StyleCard>
    </StyleBackgroud>
  );
};

export default ServiceTab;
