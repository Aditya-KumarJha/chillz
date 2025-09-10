import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-all duration-500 bg-gradient-to-br ${theme.gradient}`}>
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;