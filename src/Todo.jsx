import { useState } from "react";
import './styles.css';

export const Todo = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["TODOです1", "TODOです2"]);
  const [completeTodos, setcompleteTodos] = useState(["TODOでした1", "TODOでした2"]);
  return (
    <>
    <div className = "input-area">
      <input placeholder="TODOを入力" />
      <button>追加</button>
    </div>
    <div className = "incomplete-area">
      <p className = "title">未完了のTODO</p>
      <ul>
        { incompleteTodos.map((todo) => (
            <li key={todo}>
            <div className = "list-row ">
              <p className ="todo-item">{todo}</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div className = "complete-area">
      <p className = "title">完了のTODO</p>
      <ul>
      { completeTodos.map((todo) => (
            <li key={todo}>
            <div className = "list-row ">
              <p className ="todo-item">{todo}</p>
              <button>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}



// import logo from './logo.svg';
// import './styles.css';

// export const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
