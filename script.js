document.addEventListener("DOMContentLoaded", function () {
    var container = document.body;

    function changeBackgroundColor() {
        // Generate a rainbow color based on the current time
        var hue = (Date.now() / 200) % 360; // Even faster color change
        var color = `hsl(${hue}, 100%, 50%)`;

        // Apply the new color to the body
        container.style.backgroundColor = color;
    }

    // Change the background color every 20 milliseconds
    setInterval(changeBackgroundColor, 20); // Adjust the interval as needed
});
