import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import RootLayOut from "./components/roots/RootLayOut";
import Contact from "./pages/contacts/Contact";
import About from "./pages/about/About";
import Services from "./pages/services/Services";

import Gallery from "./pages/gallery/Gallery";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />

        <Route path="contact" element={<Contact />} />

        <Route path="gallery" element={<Gallery />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
