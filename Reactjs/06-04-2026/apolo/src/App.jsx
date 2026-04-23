import "./App.css";
import ThemeProvider from "./context/ThemeContext";
import Theme from "./components/Theme";

function App() {
  return (
    <>
      <ThemeProvider>
        <Theme />
      </ThemeProvider>
    </>
  );
}

export default App;
