import React from "react";
import SuperHeader from "./components/SuperHeader";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer/MainContainer";

function App() {
  const [title, setTitle] = React.useState("Lifestyle");

  return (
    <div className="App">
      <header className="App-header">
        <SuperHeader />
        <Header />
        <MainContainer title={title} setTitle={setTitle} />
      </header>
      <GlobalStyles />
    </div>
  );
}

export default App;
