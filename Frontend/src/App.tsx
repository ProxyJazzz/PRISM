import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { AppRoutes } from './router/routes';
import { AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-prism-bg text-white selection:bg-prism-accent/30">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <AppRoutes />
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
