import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GiftWrap from './GiftWrap';
import './App.css';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <motion.div
      className="app-container"
      initial={{ opacity: 0 }}
      animate={showContent ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h1>🎁 Surprise 🎁</h1>
        <p>Click the gift box to reveal your surprise!</p>
        <p></p>
      </motion.div>
    
    
      <GiftWrap />

      <motion.footer
        className="footer"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >

        
      </motion.footer>
    </motion.div>
  );
}

export default App;
