import React from "react";
import { FooterButton } from "../containers/FooterButtonContainer";

export const FooterComponent = ({ handleFetchData }) => (
  <div className="footer">
    <span>ステータスを変更: </span>
    <FooterButton name="all">すべて</FooterButton>
    <FooterButton name="active">アクティブ</FooterButton>
    <FooterButton name="completed">完了</FooterButton>
    <button onClick={handleFetchData}>データを読み込む</button>
  </div>
);
