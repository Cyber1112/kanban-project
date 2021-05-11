import React, { useContext } from "react";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import DrgDrpContext from "./components/information/DrgDrpContext";
function App() {
  const { state, onDragEnd } = useContext(DrgDrpContext);
  return (
    <div className="App">
      <Header />
      <Body state={state} onDragEnd={onDragEnd} />
      <Footer state={state}/>
    </div>
  );
}

export default App;
