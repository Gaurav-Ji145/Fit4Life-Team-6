// Function to get query parameters from the URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to handle tab switching functionality
function handleTabSwitching() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.getAttribute('data-target'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            target.classList.add('active');
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // Set initial tab to active if tabs exist
    if (tabs.length > 0) {
        tabs[0].click();
    }
}

// Function to fetch videos based on workout category and type from the server
async function fetchVideosByCategoryAndType(category, type) {
    try {
        const response = await fetch(`/workouts/workoutdetails?workoutCategory=${category}&workoutType=${type}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching videos:', error);
    }
}

// Function to render the list of videos and handle video selection
function renderVideoList(videos) {
    const videoList = document.getElementById('video-list');
    videoList.innerHTML = ''; // Clear any existing videos

    videos.forEach(video => {
        const li = document.createElement('li');
        li.textContent = video.workoutName;
        li.addEventListener('click', () => displayVideoDetails(video)); // Handle video click to display details
        videoList.appendChild(li);
    });
}

// Function to display video details like name, animations, and instructions
function displayVideoDetails(video) {
    document.getElementById('video-title').textContent = video.workoutName;

    // Set the video URLs and check their validity before setting them
    setVideoSource('animation-video', video.animationUrl);
    setVideoSource('muscles-video', video.musclesUrl);
    setVideoSource('how-to-do-video', video.howToDoUrl);

    // Display the instructions, focus area, common mistakes, and breathing tips
    document.getElementById('instruction1').textContent = video.instructions || 'Instructions not available';
    document.getElementById('instruction2').textContent = video.focusArea || 'Focus area not available';
    document.getElementById('instruction3').textContent = video.commonMistakes || 'Common mistakes not available';
    document.getElementById('instruction4').textContent = video.breathingTips || 'Breathing tips not available';
}

// Helper function to set video source and handle missing URLs
function setVideoSource(elementId, url) {
    const videoElement = document.getElementById(elementId);
    if (url) {
        videoElement.src = url;
    } else {
        console.error(`URL is missing or invalid for ${elementId}:`, url);
    }
}

// Main function to be executed when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
    const videoType = getQueryParam('type');
    const videoCategory = getQueryParam('category'); // Assuming category is passed in the URL

    // Fetch and display videos based on the category and type from the query params
    fetchVideosByCategoryAndType(videoCategory, videoType)
        .then(videos => {
            if (!videos || videos.length === 0) {
                console.error('No videos found for the specified category and type');
                return;
            }
            renderVideoList(videos); // Render the list of videos
        })
        .catch(error => console.error('Error fetching videos:', error));

    // Initialize tab switching functionality
    handleTabSwitching();
});

document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-button');
    const animationVideo = document.getElementById('animation-video');
    const musclesVideo = document.getElementById('muscles-video');
    const timerElement = document.getElementById('timer');

    let videoStartTime = null;
    let isPlaying = false;
    let countdownInterval;
    let timeElapsed = 0; // Start time at 0

    // Remove autoplay and hide controls initially
    animationVideo.removeAttribute('autoplay');
    musclesVideo.removeAttribute('autoplay');
    animationVideo.controls = false;
    musclesVideo.controls = false;

    startButton.addEventListener('click', function () {
        let currentVideo = getCurrentVideo();

        if (isPlaying) {
            // Stop the video, timer, and tracking
            if (currentVideo) {
                currentVideo.pause();
                const endTime = new Date();
                const duration = (endTime - videoStartTime) / 1000; // duration in seconds
                saveWorkoutHistory(document.getElementById('video-title').textContent, duration);
                startButton.textContent = 'Start';
                isPlaying = false;
                clearInterval(countdownInterval); // Stop the timer
                currentVideo.controls = true; // Show controls when stopped
            }
        } else {
            // Start the video, timer, and tracking
            if (currentVideo) {
                currentVideo.play().catch(error => {
                    console.error('Error playing video:', error);
                });
                videoStartTime = new Date();
                startButton.textContent = 'Stop';
                isPlaying = true;
                startTimer(); // Start the timer
                currentVideo.controls = false; // Hide controls when playing
            }
        }
    });

    function getCurrentVideo() {
        // Return the currently visible video element
        return animationVideo.style.display !== 'none' ? animationVideo : musclesVideo;
    }

    function saveWorkoutHistory(videoTitle, duration) {
        let videoHistory = JSON.parse(localStorage.getItem('videoHistory')) || {};
        const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

        if (!videoHistory[today]) {
            videoHistory[today] = [];
        }

        const existingEntry = videoHistory[today].find(video => video.name === videoTitle);

        if (existingEntry) {
            existingEntry.duration += duration;
        } else {
            videoHistory[today].push({ name: videoTitle, duration });
        }

        localStorage.setItem('videoHistory', JSON.stringify(videoHistory));
    }

    function startTimer() {
        clearInterval(countdownInterval); // Clear any previous interval

        countdownInterval = setInterval(function () {
            timeElapsed++;
            updateTimerDisplay(timeElapsed);
        }, 1000);
    }

    function updateTimerDisplay(time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
});
