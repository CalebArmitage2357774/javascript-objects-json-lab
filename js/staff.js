// JS: JSON Objects

// Examples of JSON objects and arrays of objects with properties and values.
{
    // One Object with properties and values.
    var bobDetails = {
    name : 'Bob',
    age : 21,
    qualifications: {
        gsce : true,
        alevels : true,
        degree : false
    }
    }
    console.dir(bobDetails.getInfo); // Debugging: Check the object in the console.

    // An array of objects with properties and values.
    var qualifications = [
        {
            subject : "Maths",
            grade : "A"
        },
        {
            subject : "English",
            grade : "B"
        }, 
        {
            subject : "French",
            grade : "C"
        },
        {
            subject : "Physics",
            grade : "B"

        }
    ];

    // Loop through the array of objects and print the subject and grade to the console.
    qualifications.forEach(function(element) {
    console.info(element.subject);
    console.info(element.grade);
    });
}



// Staff List JSON Object (using fetch to get data from a JSON file)
(() => { // IIFE (Immediately Invoked Function Expression)
    console.info("ready");

    fetch("data/staff.json") // Fetch the JSON file
    .then((response) => response.json())
    // Handle the response here
    .then((data) => {
        // Work with the parsed data
        const staffTable = document.getElementById("staffTable"); // Get the table element by its ID

        data.forEach((item) => {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const emailCell = document.createElement("td");

        nameCell.textContent = `${item.first_name}  ${item.last_name}`;
        emailCell.textContent = item.email;

        row.appendChild(nameCell);
        row.appendChild(emailCell);
        staffTable.appendChild(row);
        });
    })
    .catch(error => {
        // Handle errors here
        console.error("Error loading JSON:", error);
    });

})();