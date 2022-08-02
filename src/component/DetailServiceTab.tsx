import { v4 as uuid } from "uuid";
import { Col, Row } from "antd";
import { StyleH6, StyleLine, StyleTileCard } from "./ServiceTab";
import styled, { StyledProps } from "styled-components";
import ImgCustomAfter from "../asset/service/imgCustomBefore.png";
import ImgCustomBefore from "../asset/service/imgCustomAffter.png";
import ImgSuaBefore from "../asset/service/imgSuaBefore.png";
import ImgSuaAfter from "../asset/service/imgSuaAfter.png";
import ImgPhucBefore from "../asset/service/imgPhucBefore.png";
import ImgPhucAfter from "../asset/service/imgPhucAfter.png";
import ImgChuaBefore from "../asset/service/imgChuaBefore.png";
import ImgChuaAfter from "../asset/service/imgChuaAfter.png";
import ImgBaoBefore from "../asset/service/imgBaoBefore.png";
import ImgBaoAfter from "../asset/service/imgBaoAfter.png";
import { useState } from "react";

const dataService = [
  {
    title: "Vệ sinh - Bảo dưỡng",
    description:
      "Làm sạch các vết dơ, bụi bẩn kể cả ẩm mốc bên trong sản phẩm hoàn toàn bằng tay. Sử dụng dung dịch vệ sinh và bàn chải chuyên dụng cùng công nghệ sấy phơi hiện đại.",
    imageAfter: `${ImgSuaAfter}`,
    imageBefore: `${ImgSuaBefore}`,
  },
  {
    title: "Sửa chữa",
    description:
      "Dịch vụ sửa chữa uy tín chuyên nghiệp tại TP Lào Cai. Khâu may đế, dán đế vá thân sản phẩm,… và mọi dịch vụ chăm sóc sản phẩm khác mà bạn cần. Giao nhận, bảo hành miễn phí tại nhà.",
    imageAfter: `${ImgChuaAfter}`,
    imageBefore: `${ImgChuaBefore}`,
  },
  {
    title: "Phục hồi",
    description:
      "Phục hồi các vết trầy xước, bong tróc hay lão hóa da sản phẩm. Cứu cánh cho sản phẩm bị ố vàng, bạc màu, bong tróc logo... Mang đến diện mạo mới cho sản phẩm của bạn.",
    imageAfter: `${ImgPhucAfter}`,
    imageBefore: `${ImgPhucBefore}`,
  },
  {
    title: "Bảo vệ",
    description:
      "Bảo vệ sản phẩm khỏi nấm mốc hay bị oxy hóa. Gia tăng tuổi thọ, độ bền cho sản phẩm.",
    imageAfter: `${ImgBaoAfter}`,
    imageBefore: `${ImgBaoBefore}`,
  },
  {
    title: "Custom",
    description:
      "Custom theo yêu cầu thể hiện cá tính của riêng bạn. Thực hiện thủ công 100% với màu vẽ Angelus chuyên dụng cho từng chất liệu.",
    imageAfter: `${ImgCustomAfter}`,
    imageBefore: `${ImgCustomBefore}`,
  },
];

const ImageService = styled.div`
  width: 165px;
  height: 120px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const StyleTitleDetailService = styled.h2`
  margin: 0;
  font-family: inherit;
  font-size: 20px;
  line-height: 1.5;
  color: #b65a5a;
  font-weight: 700;
  margin-bottom: 8px;
`;
const ViewImageService = styled(Col)<StyledProps<any>>`
   {
    padding: 10px 0px 10px 0px;
    background-color: #ffe4e4;
  }
  & > div {
    background-image: url(${(props) => props.imagebefore});
  }
  &:hover > div {
    background-image: url(${(props) => props.imageafter});
  }
  & > h5 {
    padding: 15px 5px 0px 5px;
    font-size: 20px;
    font-weight: 900;
    color: #b65a5a !important;
  }
  #txtImgAfter {
    display: none;
    text-align: right;
  }
  #txtImgBefore {
    display: revert;
  }
  &:hover #txtImgBefore {
    display: none;
  }
  &:hover #txtImgAfter {
    display: revert;
  }
`;
export const CardDetail = styled(Col)`
  padding: 0px 32px 0px 32px;
  @media (max-width: 480px) {
    padding: 15px;
  }
`;
const CardDescription = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 24px;
  @media (max-width: 480px) {
    padding-left: 0;
  }
`;
const DetailServiceTab = () => {
  return (
    <>
      {dataService.map((detail: any) => (
        <CardDetail key={uuid()} xs={24} lg={12}>
          <Row>
            <ViewImageService
              imageafter={detail.imageAfter}
              imagebefore={detail.imageBefore}
              xs={24}
              md={8}
            >
              <ImageService />
              <h5 id={"txtImgBefore"}>Before</h5>
              <h5 id={"txtImgAfter"}>After</h5>
            </ViewImageService>
            <CardDescription xs={24} md={16}>
              <StyleTitleDetailService>{detail.title}</StyleTitleDetailService>
              <StyleH6>{detail.description}</StyleH6>
            </CardDescription>
          </Row>
        </CardDetail>
      ))}
    </>
  );
};

export default DetailServiceTab;
