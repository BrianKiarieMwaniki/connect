import styles from "./App.module.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from "./pages/Home";
import { Cats } from "./pages/Cats";
import { Excuse } from "./pages/Excuse";
import { Agify } from "./pages/Agify";
import { Tasks } from "./pages/Tasks";
import { Navbar } from "./components/Navbar";
import { Profile } from "./pages/Profile";
import { useState,createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();

function App() {
  const client = new QueryClient();
  const [username, setUsername] = useState("Kinuthia");
  
  return (
    <div className={styles.App}>
     <AppContext.Provider value={{username, setUsername}}>
      <QueryClientProvider client={client}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/cats" element={<Cats />} />
              <Route path="/excuses" element={<Excuse />} />
              <Route path="/agify" element={<Agify />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
          </Router>
      </QueryClientProvider>
     </AppContext.Provider>
    </div>
  );
}

export default App;
