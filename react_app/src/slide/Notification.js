// import React, { useState, useEffect } from 'react'

function Notification (props) {
    let title = props.title;
    let sub_title = '以下の問題は未解決';
    let note = [
        "ステートを説明するページでは手動でStatePure.jsやStateReact.jsを更新しないと、結果は表示されない", 
        "差分はないと、ReactではDOMの再描画しない仕組みと関係があるではないと予測するが、詳しい理由は不明",
        "解決できる方をPRください"];

    return (
      <div>
        <h1 className="bg-primary px-3 text-white display-4 text-right">
            {title}</h1>
        <div className="container">
          <div className="position-relative mb-5">　</div>
          <div className="position-relative mb-5">　</div>
          <div className="position-relative mb-5">　</div>
          <h1 className="position-relative w-100 translate-middle text-primary text-center my-3">
            {sub_title}</h1>
          <ul className="text-primary w-75 m-auto">
            { note.map( (value) => <li>{value}</li>) }
          </ul>
        </div>
      </div>
    )
}

export default Notification