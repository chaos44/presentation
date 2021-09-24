// import React, { useState, useEffect } from 'react'

function Component (props) {
    let title = props.title;
    let sub_title = 'ガンプラを組みてるようにコードを書く';
    let merit = ['再利用しやすくなる', '古いコードの見直しに繋がる'];

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
          <ul className="text-primary w-25 m-auto">
            { merit.map( (value) => <li>{value}</li>) }
          </ul>
        </div>
      </div>
    )
}

export default Component