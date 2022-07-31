import React from "react";
import Head from "./components/Head";
import Main from "./components/Main";
import data from "./data";
function App() {
  const MainEl = data.map((dataStatus) => {
    return <Main dataStatus={dataStatus} />;
  });
  return (
    <div>
      <Head />
      <section>{MainEl}</section>
    </div>
  );
}

export default App;
