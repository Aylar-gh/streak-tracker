// Get elements from the DOM
let counting = document.getElementById("current-streak");
let save = document.getElementById("total-streak");

/* function completebtn(){
    count +=1;
counting.textContent=count;
}

function savebtn(){
    
} */

// Initialize the streak counts to zero
let count = 0;
let totalStreak = 0;
let lastUpdated = null;


function updateDisplay() {
    counting.textContent = count;
    save.textContent = totalStreak;
}
// Function to update the display with current values
function updateDisplay() {
    counting.textContent = count;
    save.textContent = totalStreak;
    if (lastUpdated) {
        lastUpdatedElement.textContent = `Last updated: ${new Date(lastUpdated).toLocaleString()}`;
    } else {
        lastUpdatedElement.textContent = '';
    }
}
function isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
}

// Function to mark a day as complete
function completebtn() {
    const today = new Date();
    if (!lastUpdated || !isSameDay(new Date(lastUpdated), today)) {
        if (lastUpdated && isSameDay(new Date(lastUpdated), new Date(today.setDate(today.getDate() - 1)))) {
            count++;
        } else {
            count = 1;
        }
        totalStreak++;
        lastUpdated = new Date().toISOString();
        updateDisplay();
    } else {
        alert('You have already marked today as complete.');
    }
}

// Function to reset the streak counts
function resetbtn() {
    if (confirm('Are you sure you want to reset your streak?')) {
        count = 0;
        totalStreak = 0;
        lastUpdated = null;
        updateDisplay();
    }
}
// Function to save the current streak (although without local storage, this just updates the display)
function savebtn() {
    alert('Streak saved successfully!');
}

// Initial call to update the display with current values
updateDisplay();