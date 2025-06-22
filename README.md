<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AnimeFlix - Streaming Anime</title>
    <style>
        :root {
            --bg-color: #f5f5f5;
            --text-color: #333;
            --primary-color: #ff4757;
            --secondary-color: #57606f;
            --card-bg: #ffffff;
            --input-bg: #ffffff;
        }

        .dark-mode {
            --bg-color: #1e272e;
            --text-color: #f5f6fa;
            --primary-color: #ff6b81;
            --secondary-color: #a4b0be;
            --card-bg: #2f3542;
            --input-bg: #2f3542;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            transition: all 0.3s ease;
        }

        header {
            background-color: var(--primary-color);
            color: white;
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
        }

        nav ul {
            display: flex;
            list-style: none;
        }

        nav ul li {
            margin-left: 1.5rem;
        }

        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: 500;
        }

        .container {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 1rem;
        }

        .mode-toggle {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 1rem;
        }

        .auth-form {
            max-width: 400px;
            margin: 2rem auto;
            padding: 2rem;
            background-color: var(--card-bg);
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .auth-form h2 {
            margin-bottom: 1.5rem;
            text-align: center;
            color: var(--primary-color);
        }

        .form-group {
            margin-bottom: 1rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }

        .form-group input {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #ddd;
            border-radius: 4px;
            background-color: var(--input-bg);
            color: var(--text-color);
        }

        .btn {
            display: inline-block;
            padding: 0.75rem 1.5rem;
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 500;
            text-align: center;
            text-decoration: none;
            transition: background-color 0.3s;
        }

        .btn:hover {
            background-color: #ff6b81;
        }

        .btn-block {
            display: block;
            width: 100%;
        }

        .hidden {
            display: none !important;
        }

        .video-player {
            width: 100%;
            margin: 2rem 0;
            background-color: #000;
        }

        .video-player video {
            width: 100%;
            height: auto;
        }

        .video-info {
            margin: 1rem 0;
        }

        .video-info h2 {
            margin-bottom: 0.5rem;
        }

        .video-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
        }

        .video-card {
            background-color: var(--card-bg);
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s;
            cursor: pointer;
        }

        .video-card:hover {
            transform: translateY(-5px);
        }

        .video-thumbnail {
            width: 100%;
            height: 150px;
            object-fit: cover;
        }

        .video-card-content {
            padding: 1rem;
        }

        .video-card h3 {
            margin-bottom: 0.5rem;
            font-size: 1rem;
        }

        .video-card p {
            color: var(--secondary-color);
            font-size: 0.875rem;
        }

        .music-player {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: var(--card-bg);
            padding: 1rem;
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            z-index: 1000;
        }

        .music-info {
            flex: 1;
            margin-left: 1rem;
        }

        .music-controls {
            display: flex;
            align-items: center;
        }

        .music-controls button {
            background: none;
            border: none;
            color: var(--primary-color);
            font-size: 1.5rem;
            margin: 0 0.5rem;
            cursor: pointer;
        }

        .music-progress {
            width: 100%;
            height: 4px;
            background-color: #ddd;
            margin-top: 0.5rem;
            border-radius: 2px;
            overflow: hidden;
        }

        .music-progress-bar {
            height: 100%;
            background-color: var(--primary-color);
            width: 0%;
        }

        .music-list {
            margin-bottom: 100px;
        }

        .music-item {
            display: flex;
            align-items: center;
            padding: 1rem;
            background-color: var(--card-bg);
            margin-bottom: 0.5rem;
            border-radius: 4px;
            cursor: pointer;
        }

        .music-item:hover {
            background-color: rgba(255, 107, 129, 0.1);
        }

        .music-item-playing {
            background-color: rgba(255, 107, 129, 0.2);
        }

        .music-item-icon {
            margin-right: 1rem;
            color: var(--primary-color);
        }

        .tab-container {
            margin: 2rem 0;
        }

        .tabs {
            display: flex;
            border-bottom: 1px solid #ddd;
            margin-bottom: 1rem;
        }

        .tab {
            padding: 0.75rem 1.5rem;
            cursor: pointer;
            border-bottom: 3px solid transparent;
        }

        .tab.active {
            border-bottom: 3px solid var(--primary-color);
            font-weight: 500;
        }

        .tab-content {
            display: none;
        }

        .tab-content.active {
            display: block;
        }

        .admin-panel {
            margin: 2rem 0;
        }

        .admin-form {
            background-color: var(--card-bg);
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .admin-form h3 {
            margin-bottom: 1rem;
            color: var(--primary-color);
        }

        .logout-btn {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            font-weight: 500;
        }
    </style>
</head>
<body>
    <header>
        <div class="logo">AnimeFlix</div>
        <nav>
            <ul>
                <li><a href="#" class="nav-link" data-tab="home">Home</a></li>
                <li><a href="#" class="nav-link" data-tab="anime">Anime</a></li>
                <li><a href="#" class="nav-link" data-tab="music">Music</a></li>
                <li id="admin-link" class="hidden"><a href="#" class="nav-link" data-tab="admin">Admin</a></li>
                <li id="login-li"><a href="#" class="nav-link" data-tab="login">Login</a></li>
                <li id="logout-li" class="hidden"><button class="logout-btn">Logout</button></li>
            </ul>
        </nav>
        <button class="mode-toggle" id="modeToggle">Dark Mode</button>
    </header>

    <div class="container">
        <!-- Login Form -->
        <div id="login" class="tab-content auth-form">
            <h2>Moderator Login</h2>
            <form id="loginForm">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" required>
                </div>
                <button type="submit" class="btn btn-block">Login</button>
            </form>
        </div>

        <!-- Home Tab -->
        <div id="home" class="tab-content active">
            <h1>Welcome to AnimeFlix</h1>
            <p>Stream your favorite anime and music in one place.</p>
            
            <div class="video-list" id="featured-anime">
                <!-- Featured anime will be loaded here -->
            </div>
        </div>

        <!-- Anime Tab -->
        <div id="anime" class="tab-content">
            <h1>Anime Collection</h1>
            
            <div class="video-player hidden" id="videoPlayerContainer">
                <video id="videoPlayer" controls></video>
                <div class="video-info">
                    <h2 id="videoTitle"></h2>
                    <button class="btn" id="downloadBtn">Download</button>
                </div>
            </div>
            
            <div class="video-list" id="animeList">
                <!-- Anime list will be loaded here -->
            </div>
        </div>

        <!-- Music Tab -->
        <div id="music" class="tab-content">
            <h1>Anime Music</h1>
            
            <div class="music-list" id="musicList">
                <!-- Music list will be loaded here -->
            </div>
        </div>

        <!-- Admin Panel -->
        <div id="admin" class="tab-content">
            <h1>Admin Panel</h1>
            
            <div class="admin-panel">
                <div class="admin-form">
                    <h3>Add New Anime</h3>
                    <form id="addAnimeForm">
                        <div class="form-group">
                            <label for="animeTitle">Title</label>
                            <input type="text" id="animeTitle" required>
                        </div>
                        <div class="form-group">
                            <label for="animeDescription">Description</label>
                            <input type="text" id="animeDescription" required>
                        </div>
                        <div class="form-group">
                            <label for="animeThumbnail">Thumbnail URL</label>
                            <input type="url" id="animeThumbnail" required>
                        </div>
                        <div class="form-group">
                            <label for="animeVideoUrl">Video URL</label>
                            <input type="url" id="animeVideoUrl" required>
                        </div>
                        <button type="submit" class="btn btn-block">Add Anime</button>
                    </form>
                </div>
                
                <div class="admin-form" style="margin-top: 2rem;">
                    <h3>Add New Music</h3>
                    <form id="addMusicForm">
                        <div class="form-group">
                            <label for="musicTitle">Title</label>
                            <input type="text" id="musicTitle" required>
                        </div>
                        <div class="form-group">
                            <label for="musicArtist">Artist</label>
                            <input type="text" id="musicArtist" required>
                        </div>
                        <div class="form-group">
                            <label for="musicCover">Cover URL</label>
                            <input type="url" id="musicCover" required>
                        </div>
                        <div class="form-group">
                            <label for="musicUrl">Audio URL</label>
                            <input type="url" id="musicUrl" required>
                        </div>
                        <button type="submit" class="btn btn-block">Add Music</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Music Player -->
    <div class="music-player hidden" id="musicPlayer">
        <img id="musicCoverImg" src="" alt="Cover" width="50" height="50">
        <div class="music-info">
            <div id="nowPlaying">Not Playing</div>
            <div class="music-progress">
                <div class="music-progress-bar" id="musicProgressBar"></div>
            </div>
        </div>
        <div class="music-controls">
            <button id="prevBtn">⏮</button>
            <button id="playPauseBtn">⏵</button>
            <button id="nextBtn">⏭</button>
        </div>
    </div>

    <script>
        // App State
        const state = {
            isLoggedIn: false,
            darkMode: false,
            currentVideo: null,
            currentMusic: null,
            audio: new Audio(),
            currentMusicIndex: 0,
            isPlaying: false
        };

        // DOM Elements
        const modeToggle = document.getElementById('modeToggle');
        const loginForm = document.getElementById('loginForm');
        const loginTab = document.getElementById('login');
        const homeTab = document.getElementById('home');
        const animeTab = document.getElementById('anime');
        const musicTab = document.getElementById('music');
        const adminTab = document.getElementById('admin');
        const adminLink = document.getElementById('admin-link');
        const loginLi = document.getElementById('login-li');
        const logoutLi = document.getElementById('logout-li');
        const logoutBtn = document.querySelector('.logout-btn');
        const navLinks = document.querySelectorAll('.nav-link');
        const tabContents = document.querySelectorAll('.tab-content');
        const videoPlayerContainer = document.getElementById('videoPlayerContainer');
        const videoPlayer = document.getElementById('videoPlayer');
        const videoTitle = document.getElementById('videoTitle');
        const downloadBtn = document.getElementById('downloadBtn');
        const animeList = document.getElementById('animeList');
        const featuredAnime = document.getElementById('featuredAnime');
        const musicList = document.getElementById('musicList');
        const musicPlayer = document.getElementById('musicPlayer');
        const nowPlaying = document.getElementById('nowPlaying');
        const playPauseBtn = document.getElementById('playPauseBtn');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const musicProgressBar = document.getElementById('musicProgressBar');
        const musicCoverImg = document.getElementById('musicCoverImg');
        const addAnimeForm = document.getElementById('addAnimeForm');
        const addMusicForm = document.getElementById('addMusicForm');

        // Initialize the app
        function init() {
            loadDarkMode();
            checkLogin();
            loadAnime();
            loadMusic();
            setupEventListeners();
        }

        // Load dark mode preference
        function loadDarkMode() {
            const darkMode = localStorage.getItem('darkMode') === 'true';
            if (darkMode) {
                document.body.classList.add('dark-mode');
                modeToggle.textContent = 'Light Mode';
                state.darkMode = true;
            }
        }

        // Check if user is logged in
        function checkLogin() {
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            if (isLoggedIn) {
                state.isLoggedIn = true;
                adminLink.classList.remove('hidden');
                loginLi.classList.add('hidden');
                logoutLi.classList.remove('hidden');
            }
        }

        // Load anime from localStorage
        function loadAnime() {
            let anime = JSON.parse(localStorage.getItem('anime')) || [];
            
            // If no anime in storage, add some default ones
            if (anime.length === 0) {
                anime = [
                    {
                        id: 1,
                        title: "Attack on Titan",
                        description: "Eren Yeager vows to exterminate the Titans after they destroy his hometown.",
                        thumbnail: "https://via.placeholder.com/300x200?text=Attack+on+Titan",
                        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
                    },
                    {
                        id: 2,
                        title: "Demon Slayer",
                        description: "Tanjiro Kamado becomes a demon slayer after his family is slaughtered.",
                        thumbnail: "https://via.placeholder.com/300x200?text=Demon+Slayer",
                        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
                    },
                    {
                        id: 3,
                        title: "My Hero Academia",
                        description: "Izuku Midoriya dreams of becoming a hero in a world where most people have superpowers.",
                        thumbnail: "https://via.placeholder.com/300x200?text=My+Hero+Academia",
                        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
                    }
                ];
                localStorage.setItem('anime', JSON.stringify(anime));
            }
            
            renderAnimeList(anime);
            renderFeaturedAnime(anime.slice(0, 3)); // Show first 3 as featured
        }

        // Render anime list
        function renderAnimeList(anime) {
            animeList.innerHTML = '';
            anime.forEach(item => {
                const animeCard = document.createElement('div');
                animeCard.className = 'video-card';
                animeCard.innerHTML = `
                    <img src="${item.thumbnail}" alt="${item.title}" class="video-thumbnail">
                    <div class="video-card-content">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                `;
                animeCard.addEventListener('click', () => playVideo(item));
                animeList.appendChild(animeCard);
            });
        }

        // Render featured anime
        function renderFeaturedAnime(anime) {
            featuredAnime.innerHTML = '';
            anime.forEach(item => {
                const animeCard = document.createElement('div');
                animeCard.className = 'video-card';
                animeCard.innerHTML = `
                    <img src="${item.thumbnail}" alt="${item.title}" class="video-thumbnail">
                    <div class="video-card-content">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                `;
                animeCard.addEventListener('click', () => {
                    playVideo(item);
                    // Switch to anime tab
                    document.querySelector('.nav-link[data-tab="anime"]').click();
                });
                featuredAnime.appendChild(animeCard);
            });
        }

        // Play video
        function playVideo(video) {
            state.currentVideo = video;
            videoPlayerContainer.classList.remove('hidden');
            videoPlayer.src = video.videoUrl;
            videoTitle.textContent = video.title;
            videoPlayer.play();
            
            // Scroll to video player
            videoPlayerContainer.scrollIntoView({ behavior: 'smooth' });
        }

        // Load music from localStorage
        function loadMusic() {
            let music = JSON.parse(localStorage.getItem('music')) || [];
            
            // If no music in storage, add some default ones
            if (music.length === 0) {
                music = [
                    {
                        id: 1,
                        title: "Gurenge",
                        artist: "LiSA",
                        cover: "https://via.placeholder.com/150?text=Gurenge",
                        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                    },
                    {
                        id: 2,
                        title: "Unravel",
                        artist: "TK from Ling Tosite Sigure",
                        cover: "https://via.placeholder.com/150?text=Unravel",
                        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
                    },
                    {
                        id: 3,
                        title: "Silhouette",
                        artist: "KANA-BOON",
                        cover: "https://via.placeholder.com/150?text=Silhouette",
                        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
                    }
                ];
                localStorage.setItem('music', JSON.stringify(music));
            }
            
            renderMusicList(music);
        }

        // Render music list
        function renderMusicList(music) {
            musicList.innerHTML = '';
            music.forEach((item, index) => {
                const musicItem = document.createElement('div');
                musicItem.className = 'music-item';
                musicItem.innerHTML = `
                    <div class="music-item-icon">♫</div>
                    <div>
                        <div>${item.title}</div>
                        <div style="color: var(--secondary-color); font-size: 0.875rem;">${item.artist}</div>
                    </div>
                `;
                musicItem.addEventListener('click', () => playMusic(item, index));
                musicList.appendChild(musicItem);
            });
        }

        // Play music
        function playMusic(music, index) {
            state.currentMusic = music;
            state.currentMusicIndex = index;
            state.audio.src = music.url;
            state.audio.play();
            state.isPlaying = true;
            
            // Update UI
            musicPlayer.classList.remove('hidden');
            nowPlaying.textContent = `${music.title} - ${music.artist}`;
            musicCoverImg.src = music.cover;
            playPauseBtn.textContent = '⏸';
            
            // Highlight current music in list
            const musicItems = document.querySelectorAll('.music-item');
            musicItems.forEach(item => item.classList.remove('music-item-playing'));
            musicItems[index].classList.add('music-item-playing');
            
            // Scroll to music player
            musicPlayer.scrollIntoView({ behavior: 'smooth' });
        }

        // Setup event listeners
        function setupEventListeners() {
            // Dark mode toggle
            modeToggle.addEventListener('click', () => {
                state.darkMode = !state.darkMode;
                document.body.classList.toggle('dark-mode', state.darkMode);
                localStorage.setItem('darkMode', state.darkMode);
                modeToggle.textContent = state.darkMode ? 'Light Mode' : 'Dark Mode';
            });

            // Navigation
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const tab = link.getAttribute('data-tab');
                    
                    // Hide all tabs
                    tabContents.forEach(content => content.classList.remove('active'));
                    
                    // Show selected tab
                    document.getElementById(tab).classList.add('active');
                });
            });

            // Login form
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
                
                // Hardcoded credentials (in a real app, use proper authentication)
                if (username === 'Rimuru' && password === 'Rim091626') {
                    state.isLoggedIn = true;
                    localStorage.setItem('isLoggedIn', 'true');
                    adminLink.classList.remove('hidden');
                    loginLi.classList.add('hidden');
                    logoutLi.classList.remove('hidden');
                    loginTab.classList.remove('active');
                    homeTab.classList.add('active');
                    loginForm.reset();
                } else {
                    alert('Invalid credentials');
                }
            });

            // Logout
            logoutBtn.addEventListener('click', () => {
                state.isLoggedIn = false;
                localStorage.setItem('isLoggedIn', 'false');
                adminLink.classList.add('hidden');
                loginLi.classList.remove('hidden');
                logoutLi.classList.add('hidden');
                adminTab.classList.remove('active');
                homeTab.classList.add('active');
            });

            // Download video
            downloadBtn.addEventListener('click', () => {
                if (state.currentVideo) {
                    const a = document.createElement('a');
                    a.href = state.currentVideo.videoUrl;
                    a.download = state.currentVideo.title.replace(/\s+/g, '_') + '.mp4';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                }
            });

            // Music player controls
            playPauseBtn.addEventListener('click', () => {
                if (state.isPlaying) {
                    state.audio.pause();
                    playPauseBtn.textContent = '⏵';
                } else {
                    state.audio.play();
                    playPauseBtn.textContent = '⏸';
                }
                state.isPlaying = !state.isPlaying;
            });

            prevBtn.addEventListener('click', () => {
                const music = JSON.parse(localStorage.getItem('music')) || [];
                if (music.length === 0) return;
                
                let newIndex = state.currentMusicIndex - 1;
                if (newIndex < 0) newIndex = music.length - 1;
                
                playMusic(music[newIndex], newIndex);
            });

            nextBtn.addEventListener('click', () => {
                const music = JSON.parse(localStorage.getItem('music')) || [];
                if (music.length === 0) return;
                
                let newIndex = state.currentMusicIndex + 1;
                if (newIndex >= music.length) newIndex = 0;
                
                playMusic(music[newIndex], newIndex);
            });

            // Audio progress update
            state.audio.addEventListener('timeupdate', () => {
                const progress = (state.audio.currentTime / state.audio.duration) * 100;
                musicProgressBar.style.width = `${progress}%`;
            });

            // Click on progress bar to seek
            musicProgressBar.parentElement.addEventListener('click', (e) => {
                const rect = musicProgressBar.parentElement.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                state.audio.currentTime = pos * state.audio.duration;
            });

            // Add new anime
            addAnimeForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const title = document.getElementById('animeTitle').value;
                const description = document.getElementById('animeDescription').value;
                const thumbnail = document.getElementById('animeThumbnail').value;
                const videoUrl = document.getElementById('animeVideoUrl').value;
                
                const anime = JSON.parse(localStorage.getItem('anime')) || [];
                const newId = anime.length > 0 ? Math.max(...anime.map(a => a.id)) + 1 : 1;
                
                anime.push({
                    id: newId,
                    title,
                    description,
                    thumbnail,
                    videoUrl
                });
                
                localStorage.setItem('anime', JSON.stringify(anime));
                addAnimeForm.reset();
                loadAnime();
                alert('Anime added successfully!');
            });

            // Add new music
            addMusicForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const title = document.getElementById('musicTitle').value;
                const artist = document.getElementById('musicArtist').value;
                const cover = document.getElementById('musicCover').value;
                const url = document.getElementById('musicUrl').value;
                
                const music = JSON.parse(localStorage.getItem('music')) || [];
                const newId = music.length > 0 ? Math.max(...music.map(m => m.id)) + 1 : 1;
                
                music.push({
                    id: newId,
                    title,
                    artist,
                    cover,
                    url
                });
                
                localStorage.setItem('music', JSON.stringify(music));
                addMusicForm.reset();
                loadMusic();
                alert('Music added successfully!');
            });
        }

        // Initialize the app when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);
    </script>
</body>
</html>
