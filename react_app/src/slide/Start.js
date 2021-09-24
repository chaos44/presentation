// import React, { useState, useEffect } from 'react'

function Start (props) {
    let title = props.title;
    let sub_title = 'ピュアなJSしか使ったことのない人がReactを触った後の感想';
    let author = 'by Chaos';

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
          <h3 className="position-relative w-100 translate-middle text-primary text-center">
            {author}</h3>
        </div>
      </div>
    )
}

export default Start