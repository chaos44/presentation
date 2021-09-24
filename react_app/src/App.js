import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Start from "./slide/Start";
import JSX from "./slide/JSX";
import StatePure from "./slide/StatePure";
import StateReact from "./slide/StateReact";
import Result from "./slide/Result";
import Component_1 from "./slide/Component";
import End from "./slide/End";
import Notification from "./slide/Notification";
import { Component } from "react";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  // 日付取得
  const today = new Date();
  const date = `${today.getFullYear()}/${today.getMonth()+1}/${today.getDate()}`;

  return (
    <Slider {...settings}>
      <div>
        <Notification title="お詫び"/> 
      </div>
      <div>
        <Start title="React書籍の読後感"/> 
      </div>
      <div>
        <JSX title="JSXに使われる技術について"/> 
      </div>
      <div>
        <StatePure title="ステートについて" type="pure" />
        <Result />
        <StateReact title="ステートについて" type="react" />
      </div>
      <div>
        <Component_1 title="コンポーネントについて" />
      </div>
      <div>
        <End title="終わり" date={date}/> 
      </div>
    </Slider>
  );
}