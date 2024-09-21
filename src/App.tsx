import { TanstackQueryProvider } from "provider/TanstackQueryProvider";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "router/Router";

function App() {
  return (
    <div>
      <TanstackQueryProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </TanstackQueryProvider>
    </div>
  );
}

export default App;
