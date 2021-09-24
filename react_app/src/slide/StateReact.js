import React, { useState, useEffect } from 'react'

function StateReact (props) {
  let type = props.type;

  const [name, setName] = useState('chaos');
  const [title, setTitle] = useState('chaos');
  const [keyword, setKeyword] = useState('');
  const [test, setTest] = useState('test');


  const listeners = document.querySelectorAll('[data-model]');
  
  const doAction = ()=>{
    // 目標要素にイベント付与
    listeners.forEach((listener) => {
      const label = listener.dataset.model;
      // 未解決問題：コードを適当に修正して保存し直さないと機能しない
      console.log(1);
      if (listener.value) { // 見えない重複のオブジェクト問題を解消するため
        if (label === 'name') setName(listener.value);
        if (label === 'title') setTitle(listener.value);
        if (label === 'keyword') setKeyword(listener.value);
        if (label === 'test') setTest(listener.value);
      }
    });    
  }
   
  return ( 
        <div className="container w-25 float-right m-5">
        <h3 className="bg-primary p-2 text-white text-center w-25">
          {type}</h3>
          <main className="main">
            <div className="field">
              <label className="m-2 text-primary" for="name">Enter your name:</label>
              <input id="name_react" className="my-3" type="text" name="name" data-model="name" onKeyUp={doAction} />
            </div>
      
            <div className="field">
               <label className="m-2 text-primary" for="title">Enter your title:</label>
               <input id="title_react" type="text" name="title" data-model="title" onKeyUp={doAction} />
            </div>
    
            <div className="field">
              <label className="m-2 text-primary" for="keyword">keyword:</label>
              <input id="keyword_react" type="text" name="keyword" data-model="keyword" onKeyUp={doAction} />
            </div>
            
            <div className="field">
              <label className="m-2 text-primary" for="test">test:</label>
              <input id="test_react" type="text" name="test" data-model="test" onKeyUp={doAction} />
            </div>
            
            <h3>{test}</h3>

          </main>
       </div>
    )  
  }

export default StateReact