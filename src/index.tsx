import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Activity from "./Activity";
import Products from "./Products";
import Error from "./pages/errorPage/Error";
import LandingPage from "./pages/activity/landingPage/LandingPage";
import ProductPage from "./pages/activity/productPage/ProductPage";
import SubmitFormPage from "./pages/activity/submitFormPage/SubmitFormPage";
import SuccessVerifiedPage from "./pages/activity/successVerifiedPage/SuccessVerifiedPage";
import store from "./redux/store";
import { Provider } from "react-redux";
import HomePage from "./HomePage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/activity"
          element={
            <Provider store={store}>
              <Activity />
            </Provider>
          }
        >
          <Route index element={<LandingPage />}></Route>
          <Route path="product" element={<ProductPage />}></Route>
          <Route path="submit" element={<SubmitFormPage />}></Route>
          <Route path="success" element={<SuccessVerifiedPage />}></Route>
        </Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
