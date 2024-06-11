import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
// import "animate.css";

// react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Home from "./pages/Home";
import ProptyPage from "./pages/Home/proptyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/proptype_sectoin",
    element: <ProptyPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
