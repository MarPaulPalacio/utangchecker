import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import './GiftWrap.css';

export default function GiftWrap() {
  const [isOpened, setIsOpened] = useState(false);
  const [config, setConfig] = useState({ amount: '239', message: 'Thank you!' });

  useEffect(() => {
    fetch('/api/qr-config')
      .then(res => res.json())
      .then(data => setConfig(data))
      .catch(() => setConfig({ amount: '239', message: 'Thank you!' }));
  }, []);

  // Ribbon animation
  const ribbonVariants = {
    initial: { scaleX: 1, opacity: 1 },
    unwrapped: { scaleX: 0.5, opacity: 0, transition: { duration: 0.6 } }
  };

  // Bow animation
  const bowVariants = {
    initial: { scale: 1, rotate: 0 },
    unwrapped: { scale: 0.3, rotate: 180, opacity: 0, y: -50, transition: { duration: 0.6 } }
  };

  // Gift box sides animation
  const boxSideVariants = {
    initial: { rotateX: 0, rotateY: 0 },
    unwrapped: { rotateX: 45, rotateY: 45, opacity: 0, transition: { duration: 0.8 } }
  };

  // QR code reveal animation
  const qrVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { delay: 0.3, duration: 0.5 } }
  };

  // Confetti animation
  const confettiVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: [1, 0],
      y: -100,
      transition: { duration: 1.5, ease: 'easeOut' }
    }
  };

  return (
    <div className="gift-container">
      <motion.div
        className="gift-wrapper"
        onClick={() => setIsOpened(true)}
        initial="initial"
        animate={isOpened ? 'unwrapped' : 'initial'}
      >
        {/* Horizontal Ribbon */}
        <motion.div
          className="ribbon ribbon-horizontal"
          variants={ribbonVariants}
        />

        {/* Vertical Ribbon */}
        <motion.div
          className="ribbon ribbon-vertical"
          variants={ribbonVariants}
        />

        {/* Bow */}
        <motion.div
          className="bow"
          variants={bowVariants}
        >
          <div className="bow-left" />
          <div className="bow-right" />
          <div className="bow-center" />
        </motion.div>

        {/* Gift Box Sides */}
        <motion.div
          className="gift-box"
          variants={boxSideVariants}
        >
          <div className="box-top" />
          <div className="box-bottom" />
          <div className="box-left" />
          <div className="box-right" />
          <div className="box-front" />
          <div className="box-back" />
        </motion.div>

        {/* Content Inside */}
        <motion.div
          className="gift-content"
          initial={{ opacity: 0 }}
          animate={isOpened ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* Fun pointer */}
          <motion.div
            className="pointer"
            animate={isOpened ? { opacity: 0, y: -50 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            👆 Tap to reveal!
          </motion.div>

          {/* Surprise Text */}
          {!isOpened && (
            <motion.div
              className="surprise-text"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              Surprise! 🎉
            </motion.div>
          )}

          {/* QR Code Section */}
          {!isOpened && <p>Made with ❤️</p>}

          {isOpened && (
            <>
              <motion.div
                className="qr-section"
                variants={qrVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="qr-placeholder">
                  <img src="/gcash.jfif" alt="GCash QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>

                {/* Caption with Nailong Avatar */}
                <div className="caption-with-avatar">
                  <motion.img
                    src="/nailong.jpg"
                    alt="Nailong"
                    className="nailong-avatar"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  />
                  <motion.div
                    className="caption"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <p className="caption-title">💰 Froyo <FaArrowRight style={{ display: 'inline', marginLeft: '8px', marginRight: '8px' }} /> ${config.amount}</p>
                    <p className="caption-subtitle"> Updated Salamat 🙏</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Confetti */}
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="confetti"
                  variants={confettiVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    left: `${Math.random() * 100}%`,
                    delay: i * 0.1,
                  }}
                >
                  {['🎊', '✨', '🎉', '🎈', '💝'][Math.floor(Math.random() * 5)]}
                </motion.div>
              ))}
            </>
          )}
        </motion.div>
      </motion.div>

      {/* Help text */}
      {!isOpened && (
        <motion.div
          className="help-text"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Click the gift to unwrap! 🎁
        </motion.div>
      )}
    </div>
  );
}
