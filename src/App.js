import './App.css';
import { useState } from 'react';

const Chess = (props) => {
  const classType = {
    "0": "plain",
    "1": "white chess",
    "2": "black chess"
  }
  return (
    <span className={classType[props.value]} />
  )
}

const PrintCell = (props) => {
  return (
    <div className="cell" onClick={() => props.clEvent(props.x, props.y)}>
      <Chess value={props.value} />
    </div>
  )
}

const PrintBoard = (props) => {
  return (
    <div id="board">
      {
        props.board.map((element, i) => {
          return (
            element.map((it, j) => {
              return (
                <PrintCell value={it} key={String(i)+String(j)} x={i} y={j} clEvent={props.clEvent}/>
              )
            })
          )
        })
      }
    </div>
  )
}

const ResultScreen = (props) => {
  const endCheck = {
    0: "not_end",
    1: "end",
    2: "end",
    3: "end"
  }
  return (
    <div id="result_back" className={endCheck[props.player]}>
      <div id="result">
        <div id="result_text">{props.player}</div>
        <div id="restart">
          <button id="rt_but" onClick={() => window.location.reload()}>Restart</button>
        </div>
      </div>
    </div>
  )
} 

const App = () => {
  const scale = 12
  let initBoard = []
  for (let i=0;i<scale;i++) {
    let row = []
    for (let j=0;j<scale;j++) {
      row.push("0")
    }
    initBoard.push(row)
  }

  const [cb, setCb] = useState(initBoard)
  const [t, setT] = useState(1)
  const [res, setRes] = useState(0)

  const playChess = (x, y) => {
    if (cb[x][y] === "0") {
      let newBoard = cb.map((el) => el)
      newBoard[x][y] = String(t)
      let newTurn = 0
      let newRes = 1
      if (t === 1) {
        newTurn = 2
      } else {
        newTurn = 1
      }


      setCb(newBoard)
      setT(newTurn)
      setRes(newRes)
    }
  }

  return (
    <>
      <PrintBoard board={cb} turn={t} clEvent={playChess}/>
      <ResultScreen player={res} />
    </>
  );
}

export default App;
