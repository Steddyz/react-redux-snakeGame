import { useDispatch } from "react-redux";
import { saveKey } from "./store/gameSlice";
import Board from "./components/Board/Board";
import ButtonStatus from "./components/ButtonStatus/ButtonStatus";

function App() {
  const dispatch = useDispatch();

  const setDirectionHandler = (event) => {
    dispatch(saveKey(event.key));
  };

  return (
    <div className="App" onKeyDownCapture={setDirectionHandler}>
      <Board />
      <ButtonStatus />
    </div>
  );
}

export default App;
