import "./App.css";
import Layout from "./components/Layout";
import { createContext } from "react";
import CounterProvider from "./context/CounterProvider";
import Counter from "./components/Counter";

//  Context API :  It is a way to pass data through the component tree without having to pass props down manually at every level. It allows you to share values between components without having to explicitly pass a prop through every level of the tree.

// createContext , useContext , Provider , Consumer

export const UserContext = createContext();
export const AgeContext = createContext();

function App() {

  let name = "Monalisa";
  let age = "3000"

  let profile = {
    name:"Monalisa",
    age:"3000"
  }

  return (
    <>
      {/* <div className="center">
        <UserContext.Provider value={name}>
          <AgeContext.Provider value={age}>
          <Layout />
          </AgeContext.Provider>
        </UserContext.Provider>
      </div> */}

       <div className="center">
        <UserContext.Provider value={profile}>
          <Layout/>
        </UserContext.Provider>

        <CounterProvider>
          <Counter/>
        </CounterProvider>
      </div>
    </>
  );
}

export default App;
