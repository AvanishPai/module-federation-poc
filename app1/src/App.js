import React from "react";
import { useMount } from "ahooks";

const RemoteButton = React.lazy(() => import("app2/Button"));

const App = () => {
  console.log(useMount);
  return (
    <div>
      <h1>Basic Host-Remote</h1>
      <h2>App 1</h2>
      <React.Suspense fallback="Loading Button">
        <RemoteButton />
      </React.Suspense>
    </div>
  );
};

export default App;
