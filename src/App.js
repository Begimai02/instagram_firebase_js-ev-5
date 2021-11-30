import { BrowserRouter } from "react-router-dom";
import PostContext from "./contexts/PostContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div style={{ backgroundColor: "#fafafa", height: "100vh" }}>
      <BrowserRouter>
        <PostContext>
          <AppRoutes />
        </PostContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
