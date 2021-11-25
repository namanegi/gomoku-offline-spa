import './App.css';
import { useState } from 'react';

const Chess = (props) => {
  const classType = {
    "0": "plain",
    "1": "white-chess",
    "2": "black-chess"
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

const App = () => {
  const initBoard = [
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
  ]

  const [cb, setCb] = useState(initBoard)
  const [t, setT] = useState(1)

  const playChess = (x, y) => {
    console.log(x, y)
    let newBoard = cb.map((el) => el)
    newBoard[x][y] = String(t)
    let newTurn = 0
    if (t === 1) {
      newTurn = 2
    } else {
      newTurn = 1
    }
    setCb(newBoard)
    setT(newTurn)
  }
  return (
    <PrintBoard board={cb} turn={t} clEvent={playChess}/>
  );
}

export default App;
