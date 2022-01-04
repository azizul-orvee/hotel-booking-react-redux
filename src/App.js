import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes/Routes';
import { Suspense } from "react";
import Loading from './components/Loading/Loading';
import Header from "./components/Header/Header";



function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Header />
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            ></Route>
          );
        })}
      </Routes>
      </BrowserRouter>
      </Suspense>
  );
}

export default App;
