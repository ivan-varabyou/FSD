import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const TestPage = lazy(() => import("./test"));

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<TestPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Routing;
