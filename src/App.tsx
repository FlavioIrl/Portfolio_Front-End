import "./App.css";
import Home from "./pages/Home/indes";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { GlobalStyle } from "./styles";

const App = () => {
  
  return (
    <div>
       <GlobalStyle  />
      <Home />
    </div>
  );
};

export default App;
