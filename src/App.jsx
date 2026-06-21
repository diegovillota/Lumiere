import { useState } from "react";
import Navbar from "./components/Navbar";
import TabNav from "./components/TabNav";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { useTheme } from "./hooks/useTheme";
import { useCatalog } from "./hooks/useCatalog";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [vista, setVista] = useState("catalogo");
  const catalog = useCatalog();

  return (
    <>
      <Navbar stats={catalog.stats} theme={theme} onToggleTheme={toggleTheme} />

      <main className="app-shell">
        <TabNav vista={vista} onChangeVista={setVista} />

        {vista === "catalogo" ? <Home catalog={catalog} /> : <Profile stats={catalog.stats} />}

        <footer className="app-footer">
          <span>Lumiere · maqueta v0.1</span>
          <span>datos de ejemplo · TMDB pendiente de integrar</span>
        </footer>
      </main>
    </>
  );
}
