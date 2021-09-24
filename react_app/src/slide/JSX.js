// import React, { useState, useEffect } from 'react'

function JSX (props) {
  let title = props.title;
  let sub_title ="JSXが動作する理由";
  let message = "トランスコンパイラ Babel";
  let reason = ["ダウンコンパイル", "一時的な構文変換"];
  // https://qiita.com/soarflat/items/b251caf9cb59b72beb9b
  // https://qiita.com/riversun/items/6c30a0d0897194677a37
  
  return (
    <div>
      <h1 className="bg-primary px-3 text-white display-4 text-right">
          {title}</h1>
      <div className="container">
        <h2 className="my-3 text-primary text-center">
          {sub_title}</h2>
        <div className="alert alert-primary text-center">
          <p className="h5">{message}</p>
          <ul>
            { reason.map( (value) => <li>{value}</li>) }
          </ul>
        </div>
        <iframe id="inlineFrameExample"
          title="Inline Frame Example"
          width="1100"
          height="500"
          src="https://babeljs.io/">
        </iframe>
      </div>
    </div>
  )
}

export default JSX