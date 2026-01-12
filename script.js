const clocked = document.getElementById("clock");
const dated = document.getElementById("date");

function updateClock() {
    const now = new Date();

    clocked.textContent = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

    dated.textContent = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric"
    });
}

updateClock();
setInterval(updateClock, 1000);
