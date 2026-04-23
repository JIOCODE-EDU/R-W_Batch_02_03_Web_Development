import "./App.css";
import Layout from "./pages/Layout";
import {Check} from "@untitledui/icons";

function App() {
  return (
    <>
      <Layout />
      <Button color="primary-destructive" size="md">
        Delete project
      </Button>
      <Button color="secondary" size="md">
        Stage for publish
      </Button>
      <Button color="primary" size="md" iconLeading={<Check data-icon />}>
        Publish now
      </Button>
    </>
  );
}

export default App;
