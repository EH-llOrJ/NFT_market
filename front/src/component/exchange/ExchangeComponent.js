import React from "react";
import {
  NFTBox,
  NFTPicture,
  NFTNumber,
  NFTPrice,
  NFTPictureSize,
  NFTBuyBtn,
} from "./ExchangeStyled";
function ExchangeComponent(props) {
  return (
    <NFTBox onClick={props.onClick}>
      <NFTPictureSize>
        <NFTPicture src={props.img} />
      </NFTPictureSize>
      <NFTNumber>123</NFTNumber>
      <NFTPrice>0.8ETH</NFTPrice>
      <NFTBuyBtn>⚡️Buy Now</NFTBuyBtn>
    </NFTBox>
  );
}

export default ExchangeComponent;
