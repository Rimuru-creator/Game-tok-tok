<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AnimeFlix - Streaming & Download Anime</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --bg-color: #f8f9fa;
            --text-color: #212529;
            --primary-color: #6c5ce7;
            --secondary-color: #a8a8a8;
            --card-bg: #ffffff;
            --input-bg: #ffffff;
            --navbar-bg: #ffffff;
            --player-bg: #ffffff;
            --progress-bg: #e0e0e0;
            --progress-fill: #6c5ce7;
            --mod-color: #ff7675;
        }

        .dark-mode {
            --bg-color: #121212;
            --text-color: #e0e0e0;
            --primary-color: #a78bfa;
            --secondary-color: #757575;
            --card-bg: #1e1e1e;
            --input-bg: #2d2d2d;
            --navbar-bg: #1a1a1a;
            --player-bg: #1a1a1a;
            --progress-bg: #333333;
            --progress-fill: #a78bfa;
            --mod-color: #e84393;
        }

        body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            background-color: var(--bg-color);
            color: var(--text-color);
            transition: background-color 0.3s, color 0.3s;
        }

        /* Navbar */
        .navbar {
            background-color: var(--navbar-bg);
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--primary-color);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .logo i {
            font-size: 1.5rem;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
        }

        .nav-links a {
            color: var(--text-color);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }

        .nav-links a:hover {
            color: var(--primary-color);
        }

        .nav-right {
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }

        .theme-toggle {
            background: none;
            border: none;
            color: var(--text-color);
            cursor: pointer;
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .user-profile {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            position: relative;
        }

        .user-avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: var(--primary-color);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }

        .mod-badge {
            position: absolute;
            top: -5px;
            right: -5px;
            background-color: var(--mod-color);
            color: white;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            font-size: 0.7rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .dropdown-menu {
            position: absolute;
            top: 50px;
            right: 0;
            background-color: var(--card-bg);
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            width: 200px;
            overflow: hidden;
            display: none;
            z-index: 1000;
        }

        .dropdown-menu.show {
            display: block;
        }

        .dropdown-item {
            padding: 0.8rem 1rem;
            display: flex;
            align-items: center;
            gap: 0.7rem;
            text-decoration: none;
            color: var(--text-color);
            transition: background-color 0.2s;
        }

        .dropdown-item:hover {
            background-color: rgba(0,0,0,0.05);
        }

        .dropdown-item i {
            width: 20px;
            text-align: center;
        }

        .dropdown-divider {
            height: 1px;
            background-color: var(--secondary-color);
            margin: 0.3rem 0;
        }

        /* Main Container */
        .container {
            max-width: 1400px;
            margin: 2rem auto;
            padding: 0 2rem;
        }

        /* Login Modal */
        .login-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.7);
            z-index: 1001;
            justify-content: center;
            align-items: center;
        }

        .login-modal.show {
            display: flex;
        }

        .login-content {
            background-color: var(--card-bg);
            border-radius: 12px;
            width: 90%;
            max-width: 400px;
            overflow: hidden;
            box-shadow: 0 5px 30px rgba(0,0,0,0.3);
        }

        .login-header {
            padding: 1.5rem;
            background-color: var(--primary-color);
            color: white;
            text-align: center;
        }

        .login-title {
            margin: 0;
            font-size: 1.5rem;
        }

        .login-body {
            padding: 1.5rem;
        }

        .form-group {
            margin-bottom: 1.2rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }

        .form-group input {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid var(--secondary-color);
            border-radius: 6px;
            background-color: var(--input-bg);
            color: var(--text-color);
            font-size: 1rem;
        }

        .login-btn {
            width: 100%;
            padding: 0.8rem;
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            margin-top: 1rem;
        }

        .login-footer {
            text-align: center;
            padding: 0 1.5rem 1.5rem;
            font-size: 0.9rem;
        }

        .close-login {
            position: absolute;
            top: 15px;
            right: 15px;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
        }

        /* Moderator Panel */
        .mod-panel {
            display: none;
            background-color: var(--card-bg);
            border-radius: 12px;
            padding: 2rem;
            margin-bottom: 3rem;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .mod-panel.show {
            display: block;
        }

        .panel-title {
            font-size: 1.5rem;
            margin-top: 0;
            margin-bottom: 1.5rem;
            color: var(--mod-color);
            display: flex;
            align-items: center;
            gap: 0.7rem;
        }

        .panel-title i {
            font-size: 1.3rem;
        }

        .tabs {
            display: flex;
            border-bottom: 1px solid var(--secondary-color);
            margin-bottom: 1.5rem;
        }

        .tab-btn {
            padding: 0.7rem 1.5rem;
            background: none;
            border: none;
            border-bottom: 3px solid transparent;
            font-weight: 500;
            cursor: pointer;
            color: var(--text-color);
            transition: all 0.3s;
        }

        .tab-btn.active {
            border-bottom-color: var(--mod-color);
            color: var(--mod-color);
        }

        .tab-content {
            display: none;
        }

        .tab-content.show {
            display: block;
        }

        .upload-form {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
        }

        .form-full-width {
            grid-column: span 2;
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, var(--primary-color) 0%, #8a2be2 100%);
            color: white;
            padding: 3rem 2rem;
            border-radius: 12px;
            margin-bottom: 3rem;
            text-align: center;
        }

        /* Anime Sections */
        .section-title {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .view-all {
            color: var(--primary-color);
            text-decoration: none;
            font-size: 0.9rem;
        }

        .anime-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 1.5rem;
            margin-bottom: 3rem;
        }

        .anime-card {
            background-color: var(--card-bg);
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
            cursor: pointer;
        }

        .anime-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .anime-thumbnail {
            width: 100%;
            height: 0;
            padding-bottom: 140%;
            position: relative;
            overflow: hidden;
        }

        .anime-thumbnail img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s;
        }

        .anime-card:hover .anime-thumbnail img {
            transform: scale(1.05);
        }

        .anime-info {
            padding: 1rem;
        }

        .anime-title {
            font-size: 1rem;
            margin: 0 0 0.3rem 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: 600;
        }

        .anime-meta {
            display: flex;
            justify-content: space-between;
            font-size: 0.8rem;
            color: var(--secondary-color);
            margin-bottom: 0.5rem;
        }

        .anime-actions {
            display: flex;
            gap: 0.5rem;
            margin-top: 0.8rem;
        }

        .action-btn {
            flex: 1;
            padding: 0.5rem;
            border: none;
            border-radius: 6px;
            font-size: 0.8rem;
            font-weight: 500;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.3rem;
            transition: opacity 0.3s;
        }

        .action-btn:hover {
            opacity: 0.9;
        }

        .stream-btn {
            background-color: var(--primary-color);
            color: white;
        }

        .download-btn {
            background-color: #4CAF50;
            color: white;
        }

        /* Video Player Modal */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.8);
            z-index: 1000;
            justify-content: center;
            align-items: center;
        }

        .modal-content {
            width: 80%;
            max-width: 1000px;
            background-color: var(--card-bg);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 5px 30px rgba(0,0,0,0.3);
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            background-color: var(--primary-color);
            color: white;
        }

        .modal-title {
            margin: 0;
            font-size: 1.2rem;
        }

        .close-btn {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
        }

        .video-container {
            position: relative;
            padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
            height: 0;
            overflow: hidden;
        }

        .video-container video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        /* Music Player */
        .music-player {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: var(--player-bg);
            box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
            padding: 1rem;
            display: flex;
            align-items: center;
            z-index: 100;
            transition: transform 0.3s;
        }

        .player-hidden {
            transform: translateY(100%);
        }

        .player-controls {
            display: flex;
            align-items: center;
            gap: 1rem;
            width: 200px;
        }

        .player-btn {
            background: none;
            border: none;
            color: var(--text-color);
            font-size: 1.2rem;
            cursor: pointer;
        }

        .player-info {
            flex: 1;
            padding: 0 1rem;
            min-width: 0;
        }

        .song-title {
            font-weight: 600;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 0.2rem;
        }

        .song-artist {
            font-size: 0.8rem;
            color: var(--secondary-color);
        }

        .progress-container {
            flex: 2;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .progress-bar {
            flex: 1;
            height: 4px;
            background-color: var(--progress-bg);
            border-radius: 2px;
            cursor: pointer;
            position: relative;
        }

        .progress-fill {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 0%;
            background-color: var(--progress-fill);
            border-radius: 2px;
        }

        .time {
            font-size: 0.8rem;
            color: var(--secondary-color);
            min-width: 40px;
            text-align: center;
        }

        .player-volume {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            width: 120px;
        }

        .volume-slider {
            flex: 1;
            -webkit-appearance: none;
            height: 4px;
            background-color: var(--progress-bg);
            border-radius: 2px;
        }

        .volume-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 12px;
            height: 12px;
            background-color: var(--primary-color);
            border-radius: 50%;
            cursor: pointer;
        }

        /* Playlist Modal */
        .playlist-modal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            max-width: 500px;
            max-height: 80vh;
            background-color: var(--card-bg);
            border-radius: 12px;
            box-shadow: 0 5px 30px rgba(0,0,0,0.3);
            z-index: 1001;
            overflow: hidden;
            display: none;
        }

        .playlist-header {
            padding: 1rem;
            background-color: var(--primary-color);
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .playlist-title {
            margin: 0;
            font-size: 1.2rem;
        }

        .playlist-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
        }

        .playlist-content {
            padding: 1rem;
            overflow-y: auto;
            max-height: 60vh;
        }

        .playlist-item {
            display: flex;
            align-items: center;
            padding: 0.8rem 0;
            border-bottom: 1px solid var(--secondary-color);
            cursor: pointer;
            transition: background-color 0.2s;
        }

        .playlist-item:hover {
            background-color: rgba(0,0,0,0.05);
        }

        .playlist-item.active {
            color: var(--primary-color);
        }

        .playlist-item-img {
            width: 40px;
            height: 40px;
            border-radius: 4px;
            margin-right: 1rem;
            object-fit: cover;
        }

        .playlist-item-info {
            flex: 1;
            min-width: 0;
        }

        .playlist-item-title {
            font-weight: 500;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 0.2rem;
        }

        .playlist-item-artist {
            font-size: 0.8rem;
            color: var(--secondary-color);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .navbar {
                padding: 1rem;
            }
            
            .nav-links {
                display: none;
            }
            
            .container {
                padding: 0 1rem;
            }
            
            .hero {
                padding: 2rem 1rem;
            }
            
            .hero h1 {
                font-size: 2rem;
            }
            
            .anime-grid {
                grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            }
            
            .music-player {
                flex-wrap: wrap;
                padding: 0.5rem;
            }
            
            .player-info {
                order: 1;
                width: 100%;
                padding: 0.5rem 0;
            }
            
            .progress-container {
                order: 2;
                width: 100%;
            }

            .upload-form {
                grid-template-columns: 1fr;
            }

            .form-full-width {
                grid-column: span 1;
            }
        }
    </style>
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar">
        <div class="logo">
            <i class="fas fa-play-circle"></i>
            <span>AnimeFlix</span>
        </div>
        
        <div class="nav-links">
            <a href="#">Beranda</a>
            <a href="#">Anime Terbaru</a>
            <a href="#">Genre</a>
            <a href="#">Daftar</a>
        </div>
        
        <div class="nav-right">
            <button class="theme-toggle" id="themeToggle">
                <i class="fas fa-moon" id="themeIcon"></i>
            </button>
            
            <div class="user-profile" id="userProfile">
                <div class="user-avatar" id="userAvatar">G</div>
                <div class="dropdown-menu" id="dropdownMenu">
                    <a href="#" class="dropdown-item" id="modPanelBtn">
                        <i class="fas fa-user-shield"></i> Panel Moderator
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item">
                        <i class="fas fa-cog"></i> Pengaturan
                    </a>
                    <a href="#" class="dropdown-item" id="logoutBtn">
                        <i class="fas fa-sign-out-alt"></i> Keluar
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Login Modal -->
    <div class="login-modal" id="loginModal">
        <div class="login-content">
            <div class="login-header">
                <h2 class="login-title">Masuk ke Akun</h2>
                <button class="close-login" id="closeLogin">&times;</button>
            </div>
            <div class="login-body">
                <div class="form-group">
                    <label for="loginUsername">Nama Pengguna</label>
                    <input type="text" id="loginUsername" placeholder="Masukkan nama pengguna">
                </div>
                <div class="form-group">
                    <label for="loginPassword">Kata Sandi</label>
                    <input type="password" id="loginPassword" placeholder="Masukkan kata sandi">
                </div>
                <button class="login-btn" id="loginBtn">Masuk</button>
            </div>
            <div class="login-footer">
                Belum punya akun? <a href="#" style="color: var(--primary-color);">Daftar sekarang</a>
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="container">
        <!-- Moderator Panel -->
        <div class="mod-panel" id="modPanel">
            <h2 class="panel-title">
                <i class="fas fa-user-shield"></i> Panel Moderator
            </h2>
            
            <div class="tabs">
                <button class="tab-btn active" data-tab="anime-tab">Upload Anime</button>
                <button class="tab-btn" data-tab="music-tab">Upload Musik</button>
            </div>
            
            <div class="tab-content show" id="anime-tab">
                <form class="upload-form" id="animeUploadForm">
                    <div class="form-group">
                        <label for="animeTitle">Judul Anime</label>
                        <input type="text" id="animeTitle" placeholder="Contoh: Jujutsu Kaisen" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="animeEpisode">Episode</label>
                        <input type="number" id="animeEpisode" placeholder="Nomor episode" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="animeSeason">Musim</label>
                        <input type="number" id="animeSeason" placeholder="Nomor musim (jika ada)">
                    </div>
                    
                    <div class="form-group">
                        <label for="animeYear">Tahun Rilis</label>
                        <input type="number" id="animeYear" placeholder="Tahun rilis">
                    </div>
                    
                    <div class="form-group form-full-width">
                        <label for="animeDescription">Deskripsi</label>
                        <textarea id="animeDescription" rows="3" placeholder="Deskripsi singkat tentang episode ini" style="width: 100%; padding: 0.8rem; border: 1px solid var(--secondary-color); border-radius: 6px; background-color: var(--input-bg); color: var(--text-color); font-family: inherit;"></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="animeGenre">Genre</label>
                        <select id="animeGenre" style="width: 100%; padding: 0.8rem; border: 1px solid var(--secondary-color); border-radius: 6px; background-color: var(--input-bg); color: var(--text-color);">
                            <option value="">Pilih genre</option>
                            <option value="action">Action</option>
                            <option value="adventure">Adventure</option>
                            <option value="comedy">Comedy</option>
                            <option value="drama">Drama</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                            <option value="sci-fi">Sci-Fi</option>
                            <option value="slice-of-life">Slice of Life</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="animeQuality">Kualitas</label>
                        <select id="animeQuality" style="width: 100%; padding: 0.8rem; border: 1px solid var(--secondary-color); border-radius: 6px; background-color: var(--input-bg); color: var(--text-color);">
                            <option value="480p">480p</option>
                            <option value="720p" selected>720p</option>
                            <option value="1080p">1080p</option>
                            <option value="4K">4K</option>
                        </select>
                    </div>
                    
                    <div class="form-group form-full-width">
                        <label for="animeVideo">File Video</label>
                        <input type="file" id="animeVideo" accept="video/*" required style="width: 100%; padding: 0.5rem; border: 1px solid var(--secondary-color); border-radius: 6px; background-color: var(--input-bg); color: var(--text-color);">
                    </div>
                    
                    <div class="form-group form-full-width">
                        <label for="animeThumbnail">Thumbnail (Opsional)</label>
                        <input type="file" id="animeThumbnail" accept="image/*" style="width: 100%; padding: 0.5rem; border: 1px solid var(--secondary-color); border-radius: 6px; background-color: var(--input-bg); color: var(--text-color);">
                    </div>
                    
                    <div class="form-group form-full-width">
                        <button type="submit" style="width: 100%; padding: 0.8rem; background-color: var(--mod-color); color: white; border: none; border-radius: 6px; font-size: 1rem; font-weight: 500; cursor: pointer;">
                            <i class="fas fa-upload"></i> Upload Anime
                        </button>
                    </div>
                </form>
            </div>
            
            <div class="tab-content" id="music-tab">
                <form class="upload-form" id="musicUploadForm">
                    <div class="form-group">
                        <label for="musicTitle">Judul Lagu</label>
                        <input type="text" id="musicTitle" placeholder="Contoh: Gurenge" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="musicArtist">Artis</label>
                        <input type="text" id="musicArtist" placeholder="Contoh: LiSA" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="musicAnime">Anime (Opsional)</label>
                        <input type="text" id="musicAnime" placeholder="Anime terkait (jika ada)">
                    </div>
                    
                    <div class="form-group">
                        <label for="musicType">Jenis Lagu</label>
                        <select id="musicType" style="width: 100%; padding: 0.8rem; border: 1px solid var(--secondary-color); border-radius: 6px; background-color: var(--input-bg); color: var(--text-color);">
                            <option value="opening">Opening</option>
                            <option value="ending">Ending</option>
                            <option value="ost">OST</option>
                            <option value="insert-song">Insert Song</option>
                        </select>
                    </div>
                    
                    <div class="form-group form-full-width">
                        <label for="musicFile">File Audio</label>
                        <input type="file" id="musicFile" accept="audio/*" required style="width: 100%; padding: 0.5rem; border: 1px solid var(--secondary-color); border-radius: 6px; background-color: var(--input-bg); color: var(--text-color);">
                    </div>
                    
                    <div class="form-group form-full-width">
                        <label for="musicCover">Cover Art (Opsional)</label>
                        <input type="file" id="musicCover" accept="image/*" style="width: 100%; padding: 0.5rem; border: 1px solid var(--secondary-color); border-radius: 6px; background-color: var(--input-bg); color: var(--text-color);">
                    </div>
                    
                    <div class="form-group form-full-width">
                        <button type="submit" style="width: 100%; padding: 0.8rem; background-color: var(--mod-color); color: white; border: none; border-radius: 6px; font-size: 1rem; font-weight: 500; cursor: pointer;">
                            <i class="fas fa-upload"></i> Upload Musik
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Hero Section -->
        <section class="hero">
            <h1>Streaming Anime Berkualitas Tinggi</h1>
            <p>Temukan ribuan judul anime favorit Anda dengan kualitas HD dan subtitle Indonesia</p>
            <div class="search-bar">
                <input type="text" placeholder="Cari anime...">
                <button><i class="fas fa-search"></i></button>
            </div>
        </section>

        <!-- Anime Terbaru -->
        <section>
            <h2 class="section-title">
                <span>Anime Terbaru</span>
                <a href="#" class="view-all">Lihat Semua</a>
            </h2>
            
            <div class="anime-grid" id="animeGrid">
                <!-- Anime cards will be dynamically added here -->
                <div class="anime-card" data-video="https://example.com/video1.mp4" data-title="Jujutsu Kaisen Episode 24">
                    <div class="anime-thumbnail">
                        <img src="https://via.placeholder.com/300x170/6c5ce7/ffffff?text=Jujutsu+Kaisen" alt="Anime Thumbnail">
                    </div>
                    <div class="anime-info">
                        <h3 class="anime-title">Jujutsu Kaisen Episode 24</h3>
                        <div class="anime-meta">
                            <span>Action, Supernatural</span>
                            <span>1080p</span>
                        </div>
                        <div class="anime-actions">
                            <button class="action-btn stream-btn">
                                <i class="fas fa-play"></i> Stream
                            </button>
                            <button class="action-btn download-btn">
                                <i class="fas fa-download"></i> Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!-- Video Player Modal -->
    <div class="modal" id="videoModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title" id="modalTitle">Judul Anime</h3>
                <button class="close-btn" id="closeModal">&times;</button>
            </div>
            <div class="video-container">
                <video controls id="videoPlayer">
                    <source src="" type="video/mp4">
                    Browser Anda tidak mendukung pemutaran video.
                </video>
            </div>
        </div>
    </div>

    <!-- Music Player -->
    <div class="music-player" id="musicPlayer">
        <div class="player-controls">
            <button class="player-btn" id="prevBtn">
                <i class="fas fa-step-backward"></i>
            </button>
            <button class="player-btn" id="playBtn">
                <i class="fas fa-play"></i>
            </button>
            <button class="player-btn" id="nextBtn">
                <i class="fas fa-step-forward"></i>
            </button>
        </div>
        
        <div class="player-info">
            <div class="song-title" id="songTitle">Tidak ada lagu yang diputar</div>
            <div class="song-artist" id="songArtist">-</div>
        </div>
        
        <div class="progress-container">
            <span class="time" id="currentTime">0:00</span>
            <div class="progress-bar" id="progressBar">
                <div class="progress-fill" id="progressFill"></div>
            </div>
            <span class="time" id="duration">0:00</span>
        </div>
        
        <div class="player-volume">
            <button class="player-btn" id="volumeBtn">
                <i class="fas fa-volume-up"></i>
            </button>
            <input type="range" class="volume-slider" id="volumeSlider" min="0" max="1" step="0.1" value="0.7">
        </div>
        
        <button class="player-btn" id="playlistBtn">
            <i class="fas fa-list"></i>
        </button>
    </div>

    <!-- Playlist Modal -->
    <div class="playlist-modal" id="playlistModal">
        <div class="playlist-header">
            <h3 class="playlist-title">Daftar Putar</h3>
            <button class="playlist-close" id="playlistClose">&times;</button>
        </div>
        <div class="playlist-content" id="playlistContent">
            <!-- Playlist items will be added here -->
        </div>
    </div>

    <script>
        // Theme toggle functionality
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const body = document.body;
        
        // Check for saved theme preference or use preferred color scheme
        const savedTheme = localStorage.getItem('theme') || 
                         (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            
            if (isDark) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            }
        });
        
        // Login Functionality
        const loginModal = document.getElementById('loginModal');
        const closeLogin = document.getElementById('closeLogin');
        const loginBtn = document.getElementById('loginBtn');
        const userProfile = document.getElementById('userProfile');
        const userAvatar = document.getElementById('userAvatar');
        const dropdownMenu = document.getElementById('dropdownMenu');
        const logoutBtn = document.getElementById('logoutBtn');
        const modPanelBtn = document.getElementById('modPanelBtn');
        const modPanel = document.getElementById('modPanel');
        
        // Check if user is logged in (in a real app, this would be from session)
        let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        let isModerator = localStorage.getItem('isModerator') === 'true';
        
        function updateLoginState() {
            if (isLoggedIn) {
                userAvatar.textContent = 'R'; // First letter of Rimuru
                if (isModerator) {
                    userAvatar.innerHTML += '<div class="mod-badge"><i class="fas fa-shield-alt"></i></div>';
                }
                loginModal.classList.remove('show');
            } else {
                userAvatar.textContent = 'G'; // Guest
                loginModal.classList.add('show');
            }
        }
        
        // Show login modal if not logged in
        if (!isLoggedIn) {
            loginModal.classList.add('show');
        } else {
            updateLoginState();
        }
        
        // Login button click
        loginBtn.addEventListener('click', () => {
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            
            // Check for moderator credentials
            if (username === 'Rimuru' && password === 'Rimuru 091626') {
                isLoggedIn = true;
                isModerator = true;
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('isModerator', 'true');
                updateLoginState();
            } else if (username && password) {
                // Regular user login (demo)
                isLoggedIn = true;
                isModerator = false;
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('isModerator', 'false');
                updateLoginState();
            } else {
                alert('Silakan masukkan nama pengguna dan kata sandi');
            }
        });
        
        closeLogin.addEventListener('click', () => {
            loginModal.classList.remove('show');
        });
        
        // User profile dropdown
        userProfile.addEventListener('click', () => {
            if (isLoggedIn) {
                dropdownMenu.classList.toggle('show');
            } else {
                loginModal.classList.add('show');
            }
        });
        
        // Logout functionality
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            isLoggedIn = false;
            isModerator = false;
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('isModerator');
            dropdownMenu.classList.remove('show');
            modPanel.classList.remove('show');
            updateLoginState();
            loginModal.classList.add('show');
        });
        
        // Moderator panel toggle
        modPanelBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modPanel.classList.toggle('show');
            dropdownMenu.classList.remove('show');
        });
        
        // Tab switching in moderator panel
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                
                // Update active tab button
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Show corresponding tab content
                tabContents.forEach(content => {
                    content.classList.remove('show');
                    if (content.id === tabId) {
                        content.classList.add('show');
                    }
                });
            });
        });
        
        // Anime upload form submission
        const animeUploadForm = document.getElementById('animeUploadForm');
        animeUploadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const title = document.getElementById('animeTitle').value;
            const episode = document.getElementById('animeEpisode').value;
            const season = document.getElementById('animeSeason').value;
            const year = document.getElementById('animeYear').value;
            const description = document.getElementById('animeDescription').value;
            const genre = document.getElementById('animeGenre').value;
            const quality = document.getElementById('animeQuality').value;
            
            // In a real app, you would upload files to server here
            alert(`Anime berhasil diupload!\nJudul: ${title} Episode ${episode}\nGenre: ${genre}\nKualitas: ${quality}`);
            
            // Reset form
            animeUploadForm.reset();
        });
        
        // Music upload form submission
        const musicUploadForm = document.getElementById('musicUploadForm');
        musicUploadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const title = document.getElementById('musicTitle').value;
            const artist = document.getElementById('musicArtist').value;
            const anime = document.getElementById('musicAnime').value;
            const type = document.getElementById('musicType').value;
            
            // In a real app, you would upload files to server here
            alert(`Musik berhasil diupload!\nJudul: ${title}\nArtis: ${artist}\nJenis: ${type}`);
            
            // Reset form
            musicUploadForm.reset();
        });
        
        // Video Player Functionality
        const videoModal = document.getElementById('videoModal');
        const videoPlayer = document.getElementById('videoPlayer');
        const modalTitle = document.getElementById('modalTitle');
        const closeModal = document.getElementById('closeModal');
        const streamButtons = document.querySelectorAll('.stream-btn');
        
        streamButtons.forEach(button => {
            button.addEventListener('click', () => {
                const animeCard = button.closest('.anime-card');
                const videoUrl = animeCard.getAttribute('data-video');
                const title = animeCard.getAttribute('data-title');
                
                modalTitle.textContent = title;
                videoPlayer.src = videoUrl;
                videoModal.style.display = 'flex';
                videoPlayer.play();
            });
        });
        
        closeModal.addEventListener('click', () => {
            videoPlayer.pause();
            videoModal.style.display = 'none';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                videoPlayer.pause();
                videoModal.style.display = 'none';
            }
        });
        
        // Music Player Functionality
        const musicPlayer = document.getElementById('musicPlayer');
        const playBtn = document.getElementById('playBtn');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const progressBar = document.getElementById('progressBar');
        const progressFill = document.getElementById('progressFill');
        const currentTimeEl = document.getElementById('currentTime');
        const durationEl = document.getElementById('duration');
        const volumeBtn = document.getElementById('volumeBtn');
        const volumeSlider = document.getElementById('volumeSlider');
        const playlistBtn = document.getElementById('playlistBtn');
        const playlistModal = document.getElementById('playlistModal');
        const playlistContent = document.getElementById('playlistContent');
        const playlistClose = document.getElementById('playlistClose');
        const songTitle = document.getElementById('songTitle');
        const songArtist = document.getElementById('songArtist');
        
        // Sample playlist data
        const playlist = [
            {
                title: "Gurenge",
                artist: "LiSA",
                src: "https://example.com/music1.mp3",
                cover: "https://via.placeholder.com/100/6c5ce7/ffffff?text=LiSA"
            },
            {
                title: "Kaikai Kitan",
                artist: "Eve",
                src: "https://example.com/music2.mp3",
                cover: "https://via.placeholder.com/100/ff4757/ffffff?text=Eve"
            },
            {
                title: "Idol",
                artist: "YOASOBI",
                src: "https://example.com/music3.mp3",
                cover: "https://via.placeholder.com/100/1e90ff/ffffff?text=YOASOBI"
            },
            {
                title: "Kick Back",
                artist: "Kenshi Yonezu",
                src: "https://example.com/music4.mp3",
                cover: "https://via.placeholder.com/100/2ed573/ffffff?text=Kenshi"
            },
            {
                title: "Silhouette",
                artist: "KANA-BOON",
                src: "https://example.com/music5.mp3",
                cover: "https://via.placeholder.com/100/ffa502/ffffff?text=KANA-BOON"
            }
        ];
        
        const audio = new Audio();
        let currentSongIndex = 0;
        let isPlaying = false;
        
        // Initialize playlist
        function initPlaylist() {
            playlistContent.innerHTML = '';
            
            playlist.forEach((song, index) => {
                const playlistItem = document.createElement('div');
                playlistItem.className = 'playlist-item';
                if (index === currentSongIndex) {
                    playlistItem.classList.add('active');
                }
                playlistItem.innerHTML = `
                    <img src="${song.cover}" alt="${song.title}" class="playlist-item-img">
                    <div class="playlist-item-info">
                        <div class="playlist-item-title">${song.title}</div>
                        <div class="playlist-item-artist">${song.artist}</div>
                    </div>
                `;
                
                playlistItem.addEventListener('click', () => {
                    loadSong(index);
                    playSong();
                });
                
                playlistContent.appendChild(playlistItem);
            });
        }
        
        // Load song
        function loadSong(index) {
            currentSongIndex = index;
            const song = playlist[currentSongIndex];
            
            audio.src = song.src;
            songTitle.textContent = song.title;
            songArtist.textContent = song.artist;
            
            // Update active item in playlist
            const playlistItems = document.querySelectorAll('.playlist-item');
            playlistItems.forEach(item => item.classList.remove('active'));
            playlistItems[currentSongIndex].classList.add('active');
        }
        
        // Play song
        function playSong() {
            isPlaying = true;
            audio.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }
        
        // Pause song
        function pauseSong() {
            isPlaying = false;
            audio.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
        
        // Next song
        function nextSong() {
            currentSongIndex++;
            if (currentSongIndex >= playlist.length) {
                currentSongIndex = 0;
            }
            loadSong(currentSongIndex);
            if (isPlaying) {
                playSong();
            }
        }
        
        // Previous song
        function prevSong() {
            currentSongIndex--;
            if (currentSongIndex < 0) {
                currentSongIndex = playlist.length - 1;
            }
            loadSong(currentSongIndex);
            if (isPlaying) {
                playSong();
            }
        }
        
        // Update progress bar
        function updateProgress() {
            const { duration, currentTime } = audio;
            const progressPercent = (currentTime / duration) * 100;
            progressFill.style.width = `${progressPercent}%`;
            
            // Update time display
            const durationMinutes = Math.floor(duration / 60);
            let durationSeconds = Math.floor(duration % 60);
            if (durationSeconds < 10) {
                durationSeconds = `0${durationSeconds}`;
            }
            
            // Avoid NaN display
            if (durationSeconds) {
                durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
            }
            
            const currentMinutes = Math.floor(currentTime / 60);
            let currentSeconds = Math.floor(currentTime % 60);
            if (currentSeconds < 10) {
                currentSeconds = `0${currentSeconds}`;
            }
            currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
        }
        
        // Set progress when clicked on progress bar
        function setProgress(e) {
            const width = this.clientWidth;
            const clickX = e.offsetX;
            const duration = audio.duration;
            audio.currentTime = (clickX / width) * duration;
        }
        
        // Event listeners
        playBtn.addEventListener('click', () => {
            if (isPlaying) {
                pauseSong();
            } else {
                playSong();
            }
        });
        
        nextBtn.addEventListener('click', nextSong);
        prevBtn.addEventListener('click', prevSong);
        
        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('ended', nextSong);
        
        progressBar.addEventListener('click', setProgress);
        
        // Volume control
        volumeSlider.addEventListener('input', () => {
            audio.volume = volumeSlider.value;
            
            // Update volume icon
            if (audio.volume == 0) {
                volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            } else if (audio.volume < 0.5) {
                volumeBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
            } else {
                volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            }
        });
        
        volumeBtn.addEventListener('click', () => {
            if (audio.volume > 0) {
                audio.volume = 0;
                volumeSlider.value = 0;
                volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            } else {
                audio.volume = 0.7;
                volumeSlider.value = 0.7;
                volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            }
        });
        
        // Playlist modal
        playlistBtn.addEventListener('click', () => {
            playlistModal.style.display = 'block';
        });
        
        playlistClose.addEventListener('click', () => {
            playlistModal.style.display = 'none';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === playlistModal) {
                playlistModal.style.display = 'none';
            }
        });
        
        // Initialize
        loadSong(0);
        initPlaylist();
        
        // Show music player when page loads
        setTimeout(() => {
            musicPlayer.classList.remove('player-hidden');
        }, 2000);
    </script>
</body>
</html>
