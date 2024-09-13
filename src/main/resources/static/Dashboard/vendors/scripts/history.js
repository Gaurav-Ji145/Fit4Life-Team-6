document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
    const summaryTable = document.getElementById('summary-table');
    const monthYearDisplay = document.getElementById('month-year');
    const prevButton = document.getElementById('prev-month');
    const nextButton = document.getElementById('next-month');

    let currentDate = new Date();
    const today = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format

    // Function to render the calendar
    function renderCalendar(date) {
        calendar.innerHTML = `
            <div class="calendar-header">Sun</div>
            <div class="calendar-header">Mon</div>
            <div class="calendar-header">Tue</div>
            <div class="calendar-header">Wed</div>
            <div class="calendar-header">Thu</div>
            <div class="calendar-header">Fri</div>
            <div class="calendar-header">Sat</div>
        `;

        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Update month and year display
        monthYearDisplay.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

        // Render previous month's days if needed
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'calendar-day empty';
            calendar.appendChild(emptyCell);
        }

        // Render current month's days
        for (let day = 1; day <= daysInMonth; day++) {
            const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

            const dateElement = document.createElement('div');
            dateElement.className = 'calendar-day';
            dateElement.textContent = day;
            dateElement.dataset.date = dateString; // Add data-date attribute for identifying the date

            // Highlight today's date
            if (dateString === today) {
                dateElement.classList.add('highlight');
            }

            // Fetch and check workout data for this date
            getWorkoutDataForDate(dateString, (hasWorkoutData) => {
                if (hasWorkoutData) {
                    dateElement.classList.add('workout-day');
                }
            });

            calendar.appendChild(dateElement);
        }
    }

    // Function to check if there is workout data for the given date
    function getWorkoutDataForDate(date, callback) {
        fetch(`/fit4life/userAttendance?date=${date}`)
        .then(response => response.json())
        .then(data => {
            callback(data.length > 0); // If the response has data, mark it as a workout day
        })
        .catch(error => console.error('Error fetching workout data:', error));
    }

    // Function to handle the calendar navigation
    prevButton.addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextButton.addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    // Initial render
    renderCalendar(currentDate);
});
