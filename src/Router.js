import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Question from "./components/Question";
import PageNotFound from "./components/PageNotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/question" element={<Question />} />

      {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
