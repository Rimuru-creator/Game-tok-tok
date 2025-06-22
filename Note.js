// app.js
const express = require('express');
const multer = require('multer');
const app = express();

// Setup upload video
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/videos/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Endpoint upload anime
app.post('/api/upload-anime', 
  upload.fields([
    { name: 'video', maxCount: 1 },
    { name: 'thumbnail', maxCount: 1 }
  ]), 
  (req, res) => {
    const { title, episode } = req.body;
    const videoUrl = '/videos/' + req.files['video'][0].filename;
    
    // Simpan ke database
    res.json({ 
      success: true,
      videoUrl 
    });
  }
);

app.listen(3000, () => console.log('Server running on port 3000'))
