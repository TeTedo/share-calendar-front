import { TanstackQueryProvider } from "provider/TanstackQueryProvider";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Router } from "router/Router";

function App() {
  return (
    <div>
      <RecoilRoot>
        <TanstackQueryProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </TanstackQueryProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
