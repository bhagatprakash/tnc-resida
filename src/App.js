import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { useEffect } from "react";

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
  useEffect(() => {
    let htmlClasses = document.querySelector("html").classList;
    if (localStorage.theme === "dark") {
      htmlClasses.add("dark");
    }
  }, []);
  return (
    <div className="App dark:bg-gulf-blue">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
