import React from "react";

import { Provider } from "react-redux";
import { store } from "./store";

import Header from "./components/Header";
import VisibilityOptions from "./components/VisibilityOptions";
import CountersList from "./containers/CountersList";
import Footer from "./containers/Footer";

import "./styles/App.scss";

const App = () => (
  <Provider store={store}>
    <div className="counter-app">
      <Header />
      <VisibilityOptions />
      <CountersList />
      <Footer />
    </div>
  </Provider>
);

export default App;
