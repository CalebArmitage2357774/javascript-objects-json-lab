// This is JS code for an digital clock.
(function(){ 
    // Prints info into the console.
    console.info("JS: Loading Digital & Analog Clocks..."); 

    // Digital Clock --->>>
    // Creates a div and adds it to the container with the digitalClock id.
    const myNode = document.createElement("div");
    digitalClock.appendChild(myNode);

    // We can now add content to the div we have created.
    // const myDate = new Date();
    // console.dir(myDate); // Debugging: Check the date object in the console.

    // Displays current date in the div.
    // myNode.innerHTML = myDate.toDateString();

    // show only hours, minutes and seconds - Method 1: Using toLocaleTimeString with options
    // myNode.innerHTML = myDate.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

    // show only hours, minutes and seconds - Method 2: Using toLocaleTimeString with timeStyle option
    // myNode.innerHTML = myDate.toLocaleTimeString("en-GB", { timeStyle: "medium" });

    // Adds Content, including current time in hours/minutes/seconds format + Updates the time every second.
    const updateTime = () => {
    console.info("tick tock");
    const myDate = new Date();
    myNode.innerHTML = myDate.toLocaleDateString() + 
    "<br>" +
    myDate.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

    };
    setInterval(updateTime, 1000); // Updates the time every second.
    updateTime();



    // Analog Clock --->>>
    const secondHand = document.getElementById("secondHand");
    const minHand = document.getElementById("minHand");
    const hrHand = document.getElementById("hrHand");

    // Styles the hands of the clock.
    hrHand.style.backgroundColor = '#ababab';
    minHand.style.backgroundColor = '#000000';
    secondHand.style.backgroundColor = '#7c0000';

    const updateTime1 = () => {
        const myDate = new Date();

        // Gets current time (seconds, minutes, hours).
        const seconds = myDate.getSeconds();
        const minutes = myDate.getMinutes();
        const hours = myDate.getHours();

        // Calculates rotation.
        const rotSeconds = seconds * 6 - 90;
        const rotMinutes = minutes * 6 - 90;
        // const rotHours = (hours % 12) * 30 - 90; // Original calculation for hours (jumps every hour).
        const rotHours = (hours % 12) * 30 + (minutes / 60) * 30 - 90; // New calculation for hours (moves gradually with minutes)

        // Updates the rotation of the hands.
        secondHand.style.transform = `rotate(${rotSeconds}deg)`;
        minHand.style.transform = `rotate(${rotMinutes}deg)`;
        hrHand.style.transform = `rotate(${rotHours}deg)`;
    };
    setInterval(updateTime1, 1000); // Updates the time every second.
    updateTime1();
})();