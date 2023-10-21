import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import MainLayout from "./layout/MainLayout";

function App() {
  const { state, dispatch } = useContext(GlobalContext);

  const onClik = () => {
    dispatch({ type: "setGState" });
  };
  return (
    <div>
      <MainLayout>
        <button onClick={onClik}>Click me</button>
      </MainLayout>
    </div>
  );
}

export default App;
