var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {

    var target = event ? event.currentTarget : null;
    if (target) {
        target.classList.add("active-link");
    }

    for (var tablink of tablinks) {
        if (tablink !== target) {
            tablink.classList.remove("active-link");
        }
    }

    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    document.getElementById(tabname).classList.add("active-tab");
}


function updateRandomNumber() {
    // Select all paragraphs with the id "number-random"
    var numberParagraphs = document.querySelectorAll("#number-random");

    // Loop through each paragraph and update its content
    numberParagraphs.forEach(function (paragraph) {
        // Get the current number in the paragraph
        var currentNumber = parseInt(paragraph.innerText);

        // Generate a new random number (example: increment by 1)
        var newNumber = currentNumber + 1;

        // Update the content of the paragraph with the new number
        paragraph.innerText = newNumber;
        
    });
}

