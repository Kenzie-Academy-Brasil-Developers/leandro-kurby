import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import { RoutesMain } from "./routes";
import { GlobalReset } from "./styles/reset";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <GlobalReset />
      <ToastContainer />

      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </div>
  );
}

export default App;
