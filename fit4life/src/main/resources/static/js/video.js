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
<<<<<<< HEAD
    videoList.innerHTML = ''; // Clear any existing videos
=======
    const workouts = [
//---------------------------------------------BEGINNER URL--------------------------------------------------------------------------------------------------------------------------------------- 
        //Abs Beginner Url's
        { name: "Jumping Jacks", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277264/Sadhana/Beginner%20Workout/Abs%20Beginner/jumpingjacks.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=dg9EOTUt0a9fKQsR", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position, then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Legs, arms, and cardiovascular endurance.", "Not fully extending arms or legs, not maintaining a consistent rhythm.", "Inhale when your feet come together; exhale as you jump and spread your legs."], type: 'abs-beginner' },
        { name: "Abdominal Crunches", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277264/Sadhana/Beginner%20Workout/Abs%20Beginner/abdonimalcrunches.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303128/abdominalcrunches.mp4", howToDoSrc :"https://www.youtube.com/embed/RUNrHkbP4Pc?si=s-NoLqVTrNhe2vH-",instructions: ["Lie on your back with your knees bent and hands behind your head. Lift your shoulders off the ground and curl your upper body towards your knees. Return to the starting position and repeat.", "Abdominal muscles.", "Pulling on your neck, using momentum instead of engaging your core.", "Exhale as you crunch up; inhale as you lower back down."], type: 'abs-beginner' },
        { name: "Russian Twist", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277272/Sadhana/Beginner%20Workout/Abs%20Beginner/russiantwist.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303278/russiantwist.mp4", howToDoSrc: "https://www.youtube.com/embed/DJQGX2J4IVw?si=8Ysx6wl_R4x4uS1n", instructions: ["Russian Twist helps in strengthening your core. Sit with your knees bent and twist your torso side to side.", "Instruction for heading 2 of Russian Twist.", "Instruction for heading 3 of Russian Twist.", "Instruction for heading 4 of Russian Twist."], type: 'abs-beginner' },
        { name: "Mountain Climber", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277269/Sadhana/Beginner%20Workout/Abs%20Beginner/mountainclimber.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303298/mountainclimber.mp4", howToDoSrc : "https://www.youtube.com/embed/wQq3ybaLZeA?si=bFkD9s2aVYfy81on", type: 'abs-beginner' },
        { name: "Heel Touch",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277270/Sadhana/Beginner%20Workout/Abs%20Beginner/heeltouch.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303324/heeltouch.mp4", howToDoSrc : "https://www.youtube.com/embed/9bR-elyolBQ?si=uo7Ax0t11IgEA0ys", type: 'abs-beginner' },
        { name: "Leg Raises",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277262/Sadhana/Beginner%20Workout/Abs%20Beginner/legraises.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303350/legraises.mp4", howToDoSrc : "https://www.youtube.com/embed/dGKbTKLnym4?si=3vCpG9FkP9YibM2m", type: 'abs-beginner' },
        { name: "Plank", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277266/Sadhana/Beginner%20Workout/Abs%20Beginner/plank.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/Fcbw82ykBvY?si=rOU020jy-38tWtEO", type: 'abs-beginner'},
        { name: "Cobra Stretch", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277258/Sadhana/Beginner%20Workout/Abs%20Beginner/cobrastretch.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303389/cobra%20stretch.mp4", howToDoSrc : "https://www.youtube.com/embed/z21McHHOpAg?si=60oLR9DuuDzcswo-", type: 'abs-beginner'},
        { name: "Spine Lumbar Twist Stretch Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277268/Sadhana/Beginner%20Workout/Abs%20Beginner/stretchleft.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303423/spineleft.mp4", howToDoSrc : "https://www.youtube.com/embed/ryNlb_0GmAw?si=038XIBpQmZwG3joz.", type: 'abs-beginner'},         
        { name: "Spine Lumbar Twist Stretch Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721712772/spinestretchright.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303403/spineright.mp4", howToDoSrc : "https://www.youtube.com/embed/ryNlb_0GmAw?si=038XIBpQmZwG3joz", type: 'abs-beginner'},                     
         
        //Chest Beginner Url's
        { name: "Jumping Jacks", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277264/Sadhana/Beginner%20Workout/Abs%20Beginner/jumpingjacks.mp4",musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."], type: 'chest-beginner' },
        { name: "Incline Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277431/Sadhana/Beginner%20Workout/Chest%20Beginner/inclinepushups.mp4", musclesSrc:"https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc:"https://www.youtube.com/embed/3WUUeM07i_Q?si=A2TQGni54c3m0b7g" ,type:'chest-beginner' },
        { name: "Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277431/Sadhana/Beginner%20Workout/Chest%20Beginner/pushups.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/R08gYyypGto?si=GfnPATpuRiwa-yES", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."], type: 'chest-beginner' },
        { name: "Wide Arm Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277434/Sadhana/BeginnerWorkout/ChestBeginner/widearmpushups.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303278/russiantwist.mp4", howToDoSrc: "https://www.youtube.com/embed/pQUsUHvyoI0?si=e0ZsVtwvBVhaR6N-", instructions: ["Russian Twist helps in strengthening your core. Sit with your knees bent and twist your torso side to side.", "Instruction for heading 2 of Russian Twist.", "Instruction for heading 3 of Russian Twist.", "Instruction for heading 4 of Russian Twist."], type: 'chest-beginner' },
        { name: "Triceps Dips", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277430/Sadhana/Beginner%20Workout/Chest%20Beginner/tricepdips.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303128/abdominalcrunches.mp4", howToDoSrc : "https://www.youtube.com/embed/JhX1nBnirNw?si=2HH5h4yeksg3hpBt",  instructions: ["Abdominal.", "Instruction for heading 2 .", "Instruction for heading 3 .", "Instruction for heading 4."], type: 'chest-beginner' },
        { name: "Knee Push-Ups",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277430/Sadhana/Beginner%20Workout/Chest%20Beginner/kneepushups.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303324/heeltouch.mp4", howToDoSrc : "https://www.youtube.com/embed/jWxvty2KROs?si=Kl0NgJb5D_TiuPxj", type: 'chest-beginner' },
        { name: "Cobra Stretch",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277258/Sadhana/Beginner%20Workout/Abs%20Beginner/cobrastretch.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303350/legraises.mp4", howToDoSrc : "https://www.youtube.com/embed/z21McHHOpAg?si=SeB0oAsCetlGb3a8", type: 'chest-beginner' },
        { name: "Chest Stretch", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277426/Sadhana/Beginner%20Workout/Chest%20Beginner/cheststretch.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/NS64IgKUyeY?si=o7Sz3glXarP6cATE", type: 'chest-beginner'},
       
        //Arm Beginner Url's
        { name: "Arm Raises", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277452/Sadhana/Beginner%20Workout/Arm%20Beginner/armraises.mp4", howToDoSrc:"https://www.youtube.com/embed/Bqvmyni_sKQ?si=I0Esl3Spc9XiHLmf", type: 'arm-beginner' },
        { name: "Side Arm Raise", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277466/Sadhana/Beginner%20Workout/Arm%20Beginner/sidearmraise.mp4",howToDoSrc:"https://www.youtube.com/embed/YslHgg2E-Ro?si=W__h4z8MjTMIV1L5", type: 'arm-beginner' },
        { name: "Triceps Dips", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277471/Sadhana/Beginner%20Workout/Arm%20Beginner/tricepsdips.mp4",howToDoSrc:"https://www.youtube.com/embed/JhX1nBnirNw?si=DrTmEN8F-JETsvQd", type: 'arm-beginner' },
        { name: "Arm Circles Clockwise", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277454/Sadhana/Beginner%20Workout/Arm%20Beginner/armclockwise.mp4",howToDoSrc:"https://www.youtube.com/embed/Lha66p0ZXUc?si=NGc-6Gvn4eMuLMfX", type: 'arm-beginner' },
        { name: "Arm Circles Counterclockwise", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277452/Sadhana/Beginner%20Workout/Arm%20Beginner/armcounterclockwise.mp4", howToDoSrc:"https://www.youtube.com/embed/Lha66p0ZXUc?si=dtMxM4TyKysoKML3", type: 'arm-beginner' },
        { name: "Diamond Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277459/Sadhana/Beginner%20Workout/Arm%20Beginner/diamondpushups.mp4",howToDoSrc:"https://www.youtube.com/embed/UCmqw3kKZ38?si=swHW4h7eBhVOPJBa", type: 'arm-beginner' },
        { name: "Jumping Jacks", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277463/Sadhana/Beginner%20Workout/Arm%20Beginner/jumpingjacks.mp4",musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."],type: 'arm-beginner' },
        { name: "Chest Press Pulse", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277454/Sadhana/Beginner%20Workout/Arm%20Beginner/chestpresspulse.mp4", howToDoSrc:"https://www.youtube.com/embed/Fz4oo1vFo9M?si=ejBAcu9ieZb_Yg7X", type: 'arm-beginner' },
        { name: "Leg Barbell Curl Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277459/Sadhana/Beginner%20Workout/Arm%20Beginner/legcurlleft.mp4", howToDoSrc:"https://www.youtube.com/embed/3kZS8HVFquk?si=jjB9DrMFqKkmn2GY", type: 'arm-beginner' },
        { name: "Leg Barbell Curl Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277460/Sadhana/Beginner%20Workout/Arm%20Beginner/legcurlright.mp4", howToDoSrc:"https://www.youtube.com/embed/3kZS8HVFquk?si=9cKvtpOAmZt8aznd", type: 'arm-beginner' },
        { name: "Diagonal Plank", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277456/Sadhana/Beginner%20Workout/Arm%20Beginner/diagonalplank.mp4", howToDoSrc:"https://www.youtube.com/embed/OGfFtF-dhrk?si=Tpg3gDwfq-D8wTSS", type: 'arm-beginner' },
        { name: "Punches", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277464/Sadhana/Beginner%20Workout/Arm%20Beginner/punches.mp4", howToDoSrc:"https://www.youtube.com/embed/reeBHtZJ1ts?si=sXgtWSm0Lz2CbubT",  type: 'arm-beginner' },
        { name: "Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277464/Sadhana/Beginner%20Workout/Arm%20Beginner/pushups.mp4", howToDoSrc:"https://www.youtube.com/embed/R08gYyypGto?si=hHzDn7dadSpz_WjC", type: 'arm-beginner' },
        { name: "Inchworms", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277464/Sadhana/Beginner%20Workout/Arm%20Beginner/inchworms.mp4", howToDoSrc:"", type: 'arm-beginner' },
        { name: "Wall Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277470/Sadhana/Beginner%20Workout/Arm%20Beginner/wallpushups.mp4", howToDoSrc:"",  type: 'arm-beginner' },
        { name: "Triceps Stretch Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277468/Sadhana/Beginner%20Workout/Arm%20Beginner/tricepsstretchleft.mp4", howToDoSrc:"",  type: 'arm-beginner' },
        { name: "Triceps Stretch Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277473/Sadhana/Beginner%20Workout/Arm%20Beginner/tricepsright.mp4", howToDoSrc:"", type: 'arm-beginner' },
        { name: "Standing Biceps Stretch Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277464/Sadhana/Beginner%20Workout/Arm%20Beginner/stndingstretchleft.mp4", howToDoSrc:"", type: 'arm-beginner' },
        { name: "Standing Biceps Stretch Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277467/Sadhana/Beginner%20Workout/Arm%20Beginner/standingbicepsright.mp4", howToDoSrc:"", type: 'arm-beginner' },
>>>>>>> db056b8b862115e22bc36ca1e32a8c5de5045b73

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
