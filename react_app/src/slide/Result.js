// import React, { useState, useEffect } from 'react'

function Result (props) {
  return ( 
       <div className="results float-left m-5 p-5">
         <h1 data-binding="name"></h1>
         <h2 data-binding="title"></h2>
         <h3 data-binding="keyword"></h3>
       </div>
    )  
  }

export default Result