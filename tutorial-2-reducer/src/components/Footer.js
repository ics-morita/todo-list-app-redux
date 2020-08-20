import React from "react";
import { FooterButton } from "../containers/FooterButtonContainer";

export const Footer = () => (
  <div className="footer">
    <span>ステータスを変更: </span>
    <FooterButton name="all">すべて</FooterButton>
    <FooterButton name="active">アクティブ</FooterButton>
    <FooterButton name="completed">完了</FooterButton>
  </div>
);
