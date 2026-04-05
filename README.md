# 🎁 Gift Wrap QR Code Reveal App

A fun and interactive web application built with React, Node.js, and Framer Motion that reveals a QR code wrapped in an animated gift box!

## Features ✨

- 🎁 **Animated Gift Wrap** - Beautiful gift box with ribbon and bow
- ✨ **Smooth Animations** - Powered by Framer Motion
- 📱 **QR Code Reveal** - Click to unwrap and reveal the QR code
- 🎉 **Confetti Animation** - Celebratory confetti when unwrapped
- 💬 **Dynamic Captions** - "Surprise!!" before, "Please pay $___ to this QR code" after
- 📍 **Fun Pointer** - Animated pointer showing where to click
- 📱 **Responsive Design** - Works on desktop and mobile

## Tech Stack 🛠️

- **Frontend**: React 18 + Vite + Framer Motion
- **Backend**: Node.js + Express
- **Styling**: CSS3 with animations
- **Package Manager**: npm

## Installation & Setup 📦

### Prerequisites
- Node.js (v14 or higher)
- npm

### Steps

1. **Clone or navigate to the project directory**:
   ```bash
   cd "c:/Users/Mar Paul R Palacio/OneDrive/Documents/Mar_Paul/Personal Hobby/hello"
   ```

2. **Install root dependencies**:
   ```bash
   npm install
   ```

3. **Install client dependencies**:
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Start the development server** (runs both backend and frontend):
   ```bash
   npm run dev
   ```
   
   Or run them separately:
   - **Terminal 1 - Backend**:
     ```bash
     npm run server
     ```
   - **Terminal 2 - Frontend**:
     ```bash
     cd client
     npm run dev
     ```

5. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

## Usage 🎮

1. **See the gift box** with a red gradient, golden ribbons, and a red bow
2. **Click/Tap the gift** to unwrap it
3. **Watch the animation** as the gift unwraps
4. **See the QR code** with the caption "Please pay $50 to this QR code. Thank you!"
5. **Enjoy the confetti** 🎉

## Customization 🎨

### Change the Amount
Edit `/server.js` and update the `amount` in the QR config:
```javascript
app.get('/api/qr-config', (req, res) => {
  res.json({
    amount: '100', // Change this value
    message: 'Thank you for your support! 🎉',
    qrValue: 'upi://pay?pa=yourname@bank&pn=YourName&am=100&tn=Gift&tr=123456'
  });
});
```

### Colors
- Edit `/client/src/GiftWrap.css` for gift box colors (look for `linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%)`)
- Edit `/client/src/App.jsx` for background gradient

### Animations
- Framer Motion configuration in `/client/src/GiftWrap.jsx`
- CSS animations in corresponding `.css` files

## Building for Production 🚀

1. **Build the React app**:
   ```bash
   npm run build
   ```

2. **Start the production server**:
   ```bash
   npm start
   ```

The app will be served on `http://localhost:5000`

## File Structure 📁

```
hello/
├── server.js              # Express backend
├── package.json           # Root dependencies
├── client/
│   ├── vite.config.js     # Vite configuration
│   ├── index.html         # HTML entry point
│   ├── package.json       # Client dependencies
│   └── src/
│       ├── main.jsx       # React entry point
│       ├── App.jsx        # Main app component
│       ├── App.css        # App styles
│       ├── GiftWrap.jsx   # Gift wrap component
│       ├── GiftWrap.css   # Gift wrap styles
│       └── index.css      # Global styles
└── .gitignore
```

## Troubleshooting 🔧

- **Port already in use**: Change the port in `client/vite.config.js` or `server.js`
- **API not working**: Make sure the backend is running on port 5000
- **Animations not smooth**: Update Framer Motion: `npm install framer-motion@latest`

## Have Fun! 🎉

This app is purely for fun and learning! Customize it, add more features, and enjoy! 

---

Made with ❤️ and lots of fun 🚀
