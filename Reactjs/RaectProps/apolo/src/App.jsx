import "./App.css";
import Layout from "./components/Layout";

function App() {

  let name = 'monalisa'

  return (
    <>
      <div className="center">
        <Layout name={name}/>
      </div>
    </>
  );
}

export default App;
