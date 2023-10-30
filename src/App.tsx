import React, { Suspense, lazy } from "react";

const LazyMainPage = lazy(() => import("./Pages/MainPage"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyMainPage />
      </Suspense>
    </>
  );
}

export default App;
