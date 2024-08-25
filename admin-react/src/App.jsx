import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Router from "./Router";
import { DarkModeProvider } from "./context/DarkModeContext";
import Login from "./pages/Login";
import NotAuthorized from "./ui/NotAuthorized";
import CustomToaster from "./ui/CustomToaster"

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <DarkModeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Router />} />
            <Route path="/login" element={<Login />} />
            <Route path="/not-authorized" element={<NotAuthorized />} />
          </Routes>
        </BrowserRouter>
        <CustomToaster />
      </DarkModeProvider>
    </QueryClientProvider>
  );
}

export default App;
