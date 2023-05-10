import { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from "react-router-dom";
import { Spinner } from 'react-bootstrap';
const LazyApp = lazy(() => import("./App"));

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
            <LazyApp />
         
      </Suspense>
    </Provider>
  </BrowserRouter>
);
