// import React, { useState, useEffect } from 'react'

function StatePure (props) {
  let title = props.title;
  let type = props.type;
  
  const createState = (state) => {
      return new Proxy(state, {
        // target: 元のオブジェクト、property：操作したパラメター、この例ではnameとtitle、valeu：変更した後の値
        set(target, property, value) {
          target[property] = value; // 変更した後の値を、元のオブジェクトに代入
          render(); // setの後にrender()は実行されるため、オブジェクトを変更したらvalueなどの表示も変更される。
          return true;
        }
      });
    };
    
  const test = 'test';

  const state = createState({
    name: 'chaos',
    title: 'most popular language',
    key : ['model', 'user', 'rank'],
    header: {'model' : 'language', 'user' : 'user', 'rank' : 'rank'},
    body: [ 
             {'model' : 'javascript', 'user' : 'c', 'rank' : '1'},
             {'model' : 'python', 'user' : 'b', 'rank' :  '2'},
             {'model' : 'C++', 'user' : 'a', 'rank' :  '3'},
           ],
    keyword: '',
  });
  
  const listeners = document.querySelectorAll('[data-model]');
  
  // 目標要素にイベント付与
  listeners.forEach((listener) => {
    const name = listener.dataset.model;
    listener.addEventListener('keyup', (event) => {
      state[name] = listener.value; // keyupイベントが発火されるたびにstate -> createState -> renderの順に実行されるため、双方向の監視ができる
    });
  });
  
  // テーブル作成参考：https://teratail.com/questions/137966
  const html = () => {
    // キーワードの含まれる行で新しい配列を生成する (value, indexの順番を変えられない)
    // headrは保留のため、header以外の要素をフィルターに掛け、最後headerを追加する
    const table = state.body.filter( (obj, index) => {
        for (const key of state.key) {
          if (obj[key].indexOf(state.keyword) >= 0) return true;
        } 
    });
    // headerを挿入する
    table.unshift(state.header);
    const text = table
    .map(item => state.key
      .map(key => `<td>${item[key]}</td>`)
      .join('')
    )
    .map(item => `<tr>${item}</tr>`)
    .join('');
  
     const table_block = document.createElement('table');
     table_block.className = 'table-bordered';
     table_block.innerHTML = text;
     return table_block;
  };
  
  const render = () => {
    const bindings = Array.from(document.querySelectorAll('[data-binding]')).map(
      e => e.dataset.binding // data-xxxで指定した要素はdatasetで取得できる
    );

    bindings.forEach((binding) => {
      if (binding == 'keyword') {
        document.querySelector(`[data-binding='${binding}']`).innerHTML = '';
        document.querySelector(`[data-binding='${binding}']`).appendChild(html());
      } else {
        document.querySelector(`[data-binding='${binding}']`).innerHTML = state[binding]; // 表示の変更
        document.querySelector(`[data-model='${binding}']`).value = state[binding]; // 元のinput要素のvalue(表示)も変更する
      }
    });
  };
  
  // 未解決問題：コードを適当に修正して保存し直さないとresult部分が表示されない
  render();

  return ( 
      <div>
        <h1 className="bg-primary px-3 text-white display-4 text-right">
          {title}</h1>
        <div className="container w-25 float-left m-5">
        <h3 className="bg-primary p-2 text-white text-center w-25">
          {type}</h3>
          <main className="main">
            <div className="field">
              <label className="m-2 text-primary" for="name">Enter your name:</label>
              <input id="name_pure" className="my-3" type="text" name="name"  data-model="name" />
            </div>
      
            <div className="field">
               <label className="m-2 text-primary" for="title">Enter your title:</label>
               <input id="title_pure" type="text" name="title" data-model="title" />
            </div>
    
            <div className="field">
              <label className="m-2 text-primary" for="keyword">keyword:</label>
              <input id="keyword_pure" type="text" name="keyword" data-model="keyword" />
            </div>
          
            <div className="field">
              <label className="m-2 text-primary" for="test">test:</label>
              <input id="test_pure" type="text" name="test" />
            </div>

            <h3>{test}</h3>

          </main>
       </div>
     </div>
    )  
  }

export default StatePure