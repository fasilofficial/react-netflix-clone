import React, { lazy, Suspense } from "react";
import "./App.css";
import Loading from "./components/Loading/Loading";
import {
  originals,
  trendings,
  horror,
  action,
  comedy,
  documentries,
} from "./constants/urls";

const NavBar = lazy(() => import("./components/NavBar/NavBar"));
const Banner = lazy(() => import("./components/Banner/Banner"));
const Movies = lazy(() => import("./components/Movies/Movies"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="app">
        <NavBar />
        <Banner />
        <Movies url={originals} title={"Originals"} isLarge />
        <Movies url={trendings} title={"Trendings"} />
        <Movies url={action} title={"Action"} />
        <Movies url={horror} title={"Horror"} />
        <Movies url={comedy} title={"Comedy"} />
        <Movies url={documentries} title={"Documentries"} />
      </div>
    </Suspense>
  );
};

export default App;
