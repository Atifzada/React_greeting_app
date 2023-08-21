import { Route, Routes } from "react-router-dom";
import Greeting from "./Greeting";
const App = () => {
  return (
    <>
      <h1>
        Greetings App
      </h1>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </>
  );
};
export default App;