// insert name of row automatically
// Find all <tr> elements with data-subject, data-year, and data-exam attributes
var trElements = document.querySelectorAll('tr[data-subject][data-year][data-exam]');

// Iterate through each <tr> element
trElements.forEach(function (trElement) {
    // Get the values of data-subject, data-year, and data-exam attributes
    var subject = trElement.getAttribute('data-subject');
    var year = trElement.getAttribute('data-year');
    var exam = trElement.getAttribute('data-exam');

    // Set the value of <th scope="row"> to match data-subject
    trElement.querySelector('th').innerText = subject;

    // Set the value of <td> for year to match data-year
    trElement.querySelector('td:nth-of-type(1)').innerText = year;

    // Set the value of <td> for exam to match data-exam
    trElement.querySelector('td:nth-of-type(2)').innerText = exam;
});





// add new years in PYQs dropdown menu 
// Get a reference to the select element
var selectElement = document.getElementById("yearSelect");
if (selectElement) {
    // Define the years as an array
    var years = ["2010", "2011", "2012",];
    // Iterate over the years array
    years.forEach(function (year) {
        // Create an option element for the current year
        var option = document.createElement("option");
        option.value = year;
        option.textContent = year;

        // Append the option to the select element
        selectElement.appendChild(option);
    });

}



// years in descending order
// Get a reference to the select element
var selectElement = document.getElementById("yearSelect");
if (selectElement) {
    // Create an array to store the existing year options (excluding "Choose Year")
    var yearOptions = [];
    // Iterate through the options in the select element and collect the year options (excluding "Choose Year")
    for (var i = 0; i < selectElement.options.length; i++) {
        var option = selectElement.options[i];
        if (option.value !== "") {
            yearOptions.push(option);
        }
    }
    // Sort the array of year options in descending order based on their value
    yearOptions.sort(function (a, b) {
        return parseInt(b.value) - parseInt(a.value);
    });
    // Remove all existing options from the select element
    selectElement.innerHTML = '';
    // Create and append the "Choose Year" option back to the select element
    var chooseYearOption = document.createElement("option");
    chooseYearOption.value = "";
    chooseYearOption.textContent = "Choose Year";
    selectElement.appendChild(chooseYearOption);
    // Append the sorted year options back to the select element
    yearOptions.forEach(function (option) {
        selectElement.appendChild(option);
    });


}










// filter the data dynamically of table
document.querySelectorAll('.filter').forEach(function (select) {
    select.addEventListener('change', applyFilters);
});
var resetButton = document.getElementById('resetButton');
if (resetButton) {
    resetButton.addEventListener('click', function () {
        document.querySelectorAll('.filter').forEach(function (select) {
            select.value = '';
        });
        applyFilters();
    });
}
function applyFilters() {
    var subject = document.getElementById('subjectSelect').value;
    // var subject = document.getElementById('subjectSelect');
    // if (subject) {
    // subject.value;
    // }
    var year = document.getElementById('yearSelect').value;
    // var year = document.getElementById('yearSelect');
    // if (year) {
    // year.value;
    // }
    var exam = document.getElementById('examSelect').value;
    // var exam = document.getElementById('examSelect');
    // if (exam) {
    // exam.value;
    // }
    var paper = document.getElementById('paperSelect').value;
    // var paper = document.getElementById('paperSelect');
    // if (paper) {
    // paper.value;
    // }

    var tableRows = document.querySelectorAll('#dataTable tbody tr');

    tableRows.forEach(function (row) {
        var rowSubject = row.getAttribute('data-subject');
        var rowYear = row.getAttribute('data-year');
        var rowExam = row.getAttribute('data-exam');
        var rowPaper = row.getAttribute('data-paper');

        if ((subject === '' || subject === rowSubject) &&
            (year === '' || year === rowYear) &&
            (exam === '' || exam === rowExam) &&
            (paper === '' || paper === rowPaper)) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
}






// arrange row in ascending order according to year
// document.addEventListener("DOMContentLoaded", function () {
//     // Get the table body
//     var tbody = document.querySelector('tbody');

//     // Get all table rows
//     var rows = Array.from(tbody.querySelectorAll('tr'));

//     // Sort the rows based on the value of the "data-year" attribute
//     rows.sort(function (a, b) {
//         var yearA = parseInt(a.dataset.year);
//         var yearB = parseInt(b.dataset.year);
//         return yearA - yearB;
//     });

//     // Reattach the sorted rows to the table body
//     rows.forEach(function (row) {
//         tbody.appendChild(row);
//     });
// });


// arrange row in ascending order according to subject
document.addEventListener("DOMContentLoaded", function () {
    // Get the table body
    var tbody = document.querySelector('tbody');
    if (!tbody) {
        console.info('Error: tbody element not found.');
        return;
    }

    // Get all table rows
    var rows = Array.from(tbody.querySelectorAll('tr'));

    // Sort the rows based on the text content of the "Subject" column
    rows.sort(function (a, b) {
        var subjectA = a.querySelector('th').textContent.trim().toLowerCase();
        var subjectB = b.querySelector('th').textContent.trim().toLowerCase();
        return subjectA.localeCompare(subjectB);
    });

    // Reattach the sorted rows to the table body
    rows.forEach(function (row) {
        tbody.appendChild(row);
    });
});





// to show and hide download option according to availability
document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with the class "solution_sections"
    var solutionSections = document.querySelectorAll('.solution_sections');

    // Iterate over each solution section
    solutionSections.forEach(function (section) {
        // Get the span element inside the solution section
        var spanElement = section.querySelector('span');

        // Get the text content of the span element
        var text = spanElement.textContent.trim();

        // Get the .btn-group element
        var btnGroup = section.querySelector('.btn-group');

        // If the text content is "Not Available", hide the .btn-group
        if (text == 'Not Available') {
            btnGroup.style.display = 'none';
        }
        // If the text content is "Available", hide the span element and keep the .btn-group
        else if (text == 'Available') {
            spanElement.style.display = 'none'; // Hide the span element
        }
    });
});






// show downloading status in button when click on download
// Add event listeners after the page loads
document.addEventListener('DOMContentLoaded', function () {
    // Get all download buttons
    const downloadButtons = document.querySelectorAll('.download-folder, .download-file');
    // Attach event listeners to each button
    downloadButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Check if it's a folder download or file download
            if (button.classList.contains('download-folder')) {
                // If it's a folder download, call downloadFolderAsZip function
                downloadFolderAsZip(button.dataset.folder, button);
            } else {
                // If it's a file download, call downloadFile function
                // downloadFile([button.dataset.file], button);
            }
        });
    });
});





document.addEventListener("DOMContentLoaded", function () {

    // download status toast when downloading file and folder
    const downloadToastTriggers = document.querySelectorAll('.toast-trigger');
    const downloadToast = document.getElementById('downloadToast');
    downloadToastTriggers.forEach((trigger) => {
        trigger.addEventListener('click', () => {
            const toast = downloadToast.querySelector('.toast');
            toast.classList.add('show'); // Show the toast
            setTimeout(() => {
                toast.classList.remove('show'); // Hide the toast after 5 seconds
            }, 5000);
        });
    });










    // modal pdf preview toast
    const modalToastTriggers = document.querySelectorAll('.modalToast-trigger');
    const modalToast = document.getElementById('modalToast');
    modalToastTriggers.forEach((trigger) => {
        trigger.addEventListener('click', () => {
            const toast = modalToast.querySelector('.toast');
            toast.classList.add('show'); // Show the toast
            setTimeout(() => {
                toast.classList.remove('show'); // Hide the toast after 5 seconds
            }, 5000);
        });
    });



});

// pdf preview










// filter data in note pages
document.addEventListener('DOMContentLoaded', function () {
    var filterInputs = document.querySelectorAll('.noteFilter');
    filterInputs.forEach(function (input) {
        input.addEventListener('change', filterTable);
    });

    var topicInput = document.getElementById('noteTopicInput');
    // topicInput.addEventListener('input', filterTable);
    if (topicInput != null) {
        topicInput.addEventListener('input', filterTable);
    }

    var resetButton = document.getElementById('noteResetButton');
    // resetButton.addEventListener('click', resetFilters);
    if (resetButton) {
        resetButton.addEventListener('click', resetFilters);
    }

    function filterTable() {
        let subject = document.querySelector("#noteFilter");
        let topic = document.querySelector("#noteTopicInput").value.toLowerCase();
        let table = document.querySelector("#dataTable");

        let tableRows = table.querySelectorAll("tr");
        tableRows = [...tableRows].slice(1, tableRows.length);

        tableRows.forEach((element, index) => {
            let text = element.textContent.toLocaleLowerCase();
            let theadContent = element.querySelector("th").textContent;
            text = text.replace(theadContent, "");

            if (!text.includes(topic)) {
                element.style.display = "none";
            } else {
                element.style.display = "";
            }
        });

        if (filterInputs[0].value != '') {
            tableRows.forEach((element, index) => {
                let theadContent = element.querySelector("th").textContent;
                if (theadContent.toLocaleLowerCase() != filterInputs[0].value.toLowerCase()) {
                    element.style.display = "none";
                }
            });
        }
    }

    function resetFilters() {
        var filterInputs = document.querySelectorAll('.noteFilter');
        filterInputs.forEach(function (input) {
            input.value = '';
        });

        var tableRows = document.querySelectorAll('#dataTable tbody tr');
        tableRows.forEach(function (row) {
            row.style.display = 'table-row';
        });
    }
});

















// insert the data automatically in the table row  for PYQs
// Clear the existing data in subjectData (assuming it's an object)
subjectData = {};
// Function to generate HTML table rows based on subject data
function generateTableRows() {
    // Get the table body element where rows will be appended
    let tableBody = document.querySelector('#dataTable tbody');

    // Clear existing rows if any
    // tableBody.innerHTML = '';

    // Loop through each subject in the subjectData object
    for (let subject in subjectData) {
        // Loop through each entry for the current subject
        subjectData[subject].forEach(entry => {
            // Create a new table row
            let newRow = document.createElement('tr');

            // Set data attributes for the row
            newRow.setAttribute('data-subject', subject);
            newRow.setAttribute('data-year', entry.year);
            newRow.setAttribute('data-exam', entry.exam);
            newRow.setAttribute('data-paper', entry['solution']);

            // Fill in the row with data
            newRow.innerHTML = `
                <th scope="row">${subject}</th>
                <td>${entry.year}</td>
                <td>${entry.exam}</td>
                <td class="download_section align-middle">${entry.question} 
                    <div class="btn-group" role="group" aria-label="Download Section">
                        <button type="button" class="clickLink btn btn-primary btn-sm modalToast-trigger" data-toggle="modal" href="#myModal" data-id="${entry['question-value']}">Preview</button>
                        <button type="button" class="btn btn-primary btn-sm download-file toast-trigger" onclick="downloadFiles(['${entry['question-value']}'], this)">Download</button>
                    </div>
                </td>
                
                <td class="solution_sections text-center">
                    <span>${entry['solution-status']}</span>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="clickLink btn btn-primary btn-sm modalToast-trigger" data-toggle="modal" href="#myModal" data-id="${entry['solution-value']}">Preview</button>
                        <button type="button" class="btn btn-primary btn-sm download-file toast-trigger" onclick="downloadFiles(['${entry['solution-value']}'], this)">Download</button>
                    </div>
                </td>
            `;

            // Append the new row to the table body
            tableBody.appendChild(newRow);
        });
    }
}

// Call the function to generate table rows based on existing subject data
generateTableRows();

// Accessing the JSON object:
// console.log(subjectData);











// For note pages
// Initialize an empty object to store the data
let subjectNoteData = {};

// Function to update the object with new data
function updateSubjectNoteData(...entries) {
    for (let i = 0; i < entries.length; i += 3) {
        let subjectNote = entries[i];
        let topic = entries[i + 1];
        let topicValue = entries[i + 2];

        if (!subjectNoteData.hasOwnProperty(subjectNote)) {
            subjectNoteData[subjectNote] = [];
        }

        subjectNoteData[subjectNote].push({
            "topic": topic,
            "topicValue": topicValue
        });
    }
}

// Function to generate table rows based on data
function generateNoteTableRows() {
    let tableBody = document.querySelector('#dataTable tbody');
    tableBody.innerHTML = '';

    for (let subjectNote in subjectNoteData) {
        subjectNoteData[subjectNote].forEach(entry => {
            let newRow = document.createElement('tr');
            newRow.setAttribute('data-subject', subjectNote);

            newRow.innerHTML = `
                <th scope="row">${subjectNote}</th>
                <td class="download_section align-middle">${entry.topic} 
                    <div class="btn-group" role="group" aria-label="Download Section">
                        <button type="button" class="clickLink btn btn-primary btn-sm modalToast-trigger" data-toggle="modal" href="#myModal" data-id="${entry['topicValue']}">Preview</button>
                        <button type="button" class="btn btn-primary btn-sm download-file toast-trigger" onclick="downloadFiles(['${entry['topicValue']}'], this)">Download</button>
                    </div>
                </td>
            `;

            tableBody.appendChild(newRow);
        });
    }
}

// Export functions to global scope
window.updateSubjectNoteData = updateSubjectNoteData;
window.generateNoteTableRows = generateNoteTableRows;









// Initialize an empty object to store the book data
let bookData = {};

// Function to update the object with new book data
function updateBookData(...entries) {
    // Loop through each entry in the arguments
    for (let i = 0; i < entries.length; i += 5) {
        let semester = entries[i];
        let imgSrc = entries[i + 1];
        let subjectName = entries[i + 2];
        let author = entries[i + 3];
        let subjectBookValue = entries[i + 4];
        // let subjectBookValue = entries[i + 5];

        // Check if the semester already exists in the bookData object
        if (!bookData.hasOwnProperty(semester)) {
            // If not, initialize it with an empty array
            bookData[semester] = [];
        }

        // Push new data to the array corresponding to the semester
        bookData[semester].push({
            "imgSrc": imgSrc,
            // "alt": alt,
            "subjectName": subjectName,
            "author": author,
            "subjectBookValue": subjectBookValue
        });
    }
}


// Function to generate HTML elements for books based on book data
function generateBookElements() {
    // Get the parent element where book elements will be appended
    let parentElement = document.querySelector('.BookContainer');

    parentElement.innerHTML = '';

    // Loop through each semester in the bookData object
    for (let semester in bookData) {
        // Loop through each entry for the current semester
        bookData[semester].forEach(book => {
            // Create a new book element
            let bookElement = document.createElement('div');
            bookElement.classList.add('col', 'itemBox', semester);
            bookElement.innerHTML = `
                <div class="card h-100">
                    <img src="${book.imgSrc}" class="card-img-top" alt="${book.subjectName}">
                    <div class="card-body text-center">
                        <h5 class="card-title fw-bold">${book.subjectName}</h5>
                        <p class="card-text"><b>Author - </b>${book.author}</p>
                    </div>
                    <div class="btn-group pb-2 px-2" role="group" aria-label="Download Section">
                        <button type="button" class="clickLink btn btn-primary btn-sm modalToast-trigger" data-toggle="modal" href="#myModal" data-id="${book.subjectBookValue}">Preview</button>
                        <button type="button" class="btn btn-primary btn-sm download-file toast-trigger" onclick="downloadFiles(['${book.subjectBookValue}'], this)">Download</button>
                    </div>
                </div>
            `;

            // Append the book element to the parent element
            parentElement.appendChild(bookElement);
        });
    }
}





// filter data of video page 
$(document).ready(function () {
    $('.filter').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'Reset') {
            $('.itemBox').show('1000');
        }
        else {
            $('.itemBox').not('.' + value).hide('1000');
            $('.itemBox').filter('.' + value).show('1000');
        }
    })
    // add active class on selected item
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
})








// Initialize an empty array to store the video data
let videoData = [];

// Function to update the video data with new entries
function updateVideoData(...entries) {
    // Loop through each entry in the arguments
    for (let i = 0; i < entries.length; i += 5) {
        let subjectNameFilter = entries[i];
        let subjectName = entries[i + 1];
        let youtubeLink = entries[i + 2];
        let youtubeLinkImage = entries[i + 3];
        let videoAuthor = entries[i + 4];

        // Push new data to the videoData array
        videoData.push({
            "subjectNameFilter": subjectNameFilter,
            "subjectName": subjectName,
            "youtubeLink": youtubeLink,
            "youtubeLinkImage": youtubeLinkImage,
            "videoAuthor": videoAuthor,
        });
    }
}


// Function to generate HTML elements for videos based on video data
function generateVideoElements() {
    // Get the container where video elements will be appended
    let videoContainer = document.querySelector('.videoContainer');

    // videoContainer.innerHTML = '';

    // Loop through each video entry in the videoData array
    videoData.forEach(entry => {
        // Create a new video card element
        let videoCard = document.createElement('div');
        videoCard.classList.add('col', 'itemBox', entry.subjectNameFilter);

        // Construct the HTML for the video card
        videoCard.innerHTML = `
            <div class="card h-100">
                <a href="${entry.youtubeLink}">
                    <img src="${entry.youtubeLinkImage}" class="card-img-top" alt="${entry.subjectName} by  ${entry.videoAuthor}" />
                </a>
                <div class="card-body">
                    <a class="videoHeading" href="${entry.youtubeLink}">
                        <h5 class="card-title">${entry.subjectName}</h5>
                    </a>
                    <p class="card-text text-center">${entry.subjectName} by <b>${entry.videoAuthor}</b></p>
                </div>
            </div>
        `;

        // Append the video card to the video container
        videoContainer.appendChild(videoCard);
    });
}

// Call the function to generate video elements
generateVideoElements();








document.addEventListener('keydown', function (event) {
    // Check if the pressed key is the 'Escape' key (key code 27)
    if (event.key === 'Escape') {
        // Find the close button element
        var closeButton = document.querySelector('#myModal .modal-header .close');
        if (closeButton) {
            // Programmatically trigger the click event on the close button
            closeButton.click();
        }
    }
});





// --------- dynamic url ---------
// Utility functions (global to avoid redefinition)
function getQueryParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

function setQueryParameter(key, value) {
    const url = new URL(window.location);
    if (value) {
        url.searchParams.set(key, value);
    } else {
        url.searchParams.delete(key);
    }
    history.pushState({}, '', url); // Update URL dynamically
}

// Dynamic URL for Notes
const dynamicUrlNotes = document.querySelectorAll('.noteFilter, #noteTopicInput');
if (dynamicUrlNotes.length > 0) {
    function initializeNoteFilters() {
        const filters = document.querySelectorAll('.noteFilter, #noteTopicInput');
        filters.forEach(filter => {
            const paramName = filter.id.replace('Input', '').replace('Select', '').toLowerCase();
            const paramValue = getQueryParameter(paramName);
            if (paramValue) {
                filter.value = paramValue;
            }
        });
        filterNoteRows(); // Apply filtering on page load
    }

    function filterNoteRows() {
        const filters = document.querySelectorAll('.noteFilter, #noteTopicInput');
        const rows = document.querySelectorAll('tbody tr');

        rows.forEach(row => {
            let shouldShow = true;

            filters.forEach(filter => {
                const paramName = filter.id.replace('Input', '').replace('Select', '').toLowerCase();
                const filterValue = filter.value.toLowerCase();
                const rowValue = row.getAttribute(`data-${paramName}`)?.toLowerCase() || '';

                if (filter.id === 'noteTopicInput') {
                    if (filterValue && !rowValue.includes(filterValue)) {
                        shouldShow = false;
                    }
                } else {
                    if (filterValue && filterValue !== rowValue) {
                        shouldShow = false;
                    }
                }
            });

            row.style.display = shouldShow ? '' : 'none';
        });
    }

    document.querySelectorAll('.noteFilter, #noteTopicInput').forEach(filter => {
        filter.addEventListener('input', () => {
            const paramName = filter.id.replace('Input', '').replace('Select', '').toLowerCase();
            setQueryParameter(paramName, filter.value);
            filterNoteRows();
        });
    });

    document.getElementById('noteResetButton')?.addEventListener('click', () => {
        history.pushState({}, '', window.location.pathname);
        document.querySelectorAll('.noteFilter, #noteTopicInput').forEach(filter => (filter.value = ''));
        filterNoteRows();
    });

    window.addEventListener('DOMContentLoaded', initializeNoteFilters);
}

// Dynamic URL for Pyqs
const dynamicUrlPyqs = document.querySelectorAll('.filter');
if (dynamicUrlPyqs.length > 0) {
    function initializePyqsFilters() {
        const filters = document.querySelectorAll('.filter');
        filters.forEach(filter => {
            const paramValue = getQueryParameter(filter.id.replace('Select', '').toLowerCase());
            if (paramValue) {
                filter.value = paramValue;
            }
        });
        filterPyqsRows(); // Apply filtering on page load
    }

    function filterPyqsRows() {
        const filters = document.querySelectorAll('.filter');
        const rows = document.querySelectorAll('tbody tr');

        rows.forEach(row => {
            let shouldShow = true;

            filters.forEach(filter => {
                const paramName = filter.id.replace('Select', '').toLowerCase();
                const filterValue = filter.value.toLowerCase();
                const rowValue = row.getAttribute(`data-${paramName}`)?.toLowerCase() || '';

                if (filterValue && filterValue !== rowValue) {
                    shouldShow = false;
                }
            });

            row.style.display = shouldShow ? '' : 'none';
        });
    }

    document.querySelectorAll('.filter').forEach(filter => {
        filter.addEventListener('change', () => {
            const paramName = filter.id.replace('Select', '').toLowerCase();
            setQueryParameter(paramName, filter.value);
            filterPyqsRows();
        });
    });

    document.getElementById('resetButton')?.addEventListener('click', () => {
        history.pushState({}, '', window.location.pathname);
        document.querySelectorAll('.filter').forEach(filter => (filter.value = ''));
        filterPyqsRows();
    });

    window.addEventListener('DOMContentLoaded', initializePyqsFilters);
}


// --------- dynamic url for videos ---------
// const dynamicUrlVideos = document.querySelectorAll('.videoContainer .itemBox');
// if (dynamicUrlVideos) {
//     // Function to filter the videoContainer items
//     function filterVideoContainer() {
//         const subjectFilter = getQueryParameter('subject'); // Get the 'subject' query parameter
//         const items = document.querySelectorAll('.videoContainer .itemBox');
//         items.forEach(item => {
//             const itemClass = item.classList.contains(subjectFilter); // Check if the item's class matches the filter
//             if (subjectFilter && subjectFilter !== "Reset") {
//                 item.style.display = itemClass ? "block" : "none"; // Show or hide based on filter
//             } else {
//                 item.style.display = "block"; // Show all items if no filter or Reset
//             }
//         });
//     }

//     // Function to update URL and filter items dynamically on button click
//     function setupFilterButtons() {
//         const buttons = document.querySelectorAll('.toolBadge .filter');
//         buttons.forEach(button => {
//             button.addEventListener('click', () => {
//                 const filterValue = button.getAttribute('data-filter');
//                 if (filterValue === "Reset") {
//                     history.pushState({}, "", window.location.pathname); // Clear URL query parameters
//                 } else {
//                     const url = new URL(window.location);
//                     url.searchParams.set('subject', filterValue); // Set the 'subject' query parameter
//                     history.pushState({}, "", url);
//                 }
//                 filterVideoContainer(); // Apply the filtering
//             });
//         });
//     }

//     // Initialize filtering on page load
//     window.addEventListener('DOMContentLoaded', () => {
//         filterVideoContainer(); // Apply filters based on URL query parameters
//         setupFilterButtons();   // Add event listeners to filter buttons
//     });
// }





// --------- dynamic url for books ---------
// const dynamicUrlBooks = document.querySelectorAll('.BookContainer .itemBox');
// if (dynamicUrlBooks) {
//     // Function to filter the videoContainer items
//     function filterBookContainer() {
//         const semesterFilter = getQueryParameter('semester'); // Get the 'semester' query parameter
//         const items = document.querySelectorAll('.BookContainer .itemBox');
//         items.forEach(item => {
//             const itemClass = item.classList.contains(semesterFilter); // Check if the item's class matches the filter
//             if (semesterFilter && semesterFilter !== "Reset") {
//                 item.style.display = itemClass ? "block" : "none"; // Show or hide based on filter
//             } else {
//                 item.style.display = "block"; // Show all items if no filter or Reset
//             }
//         });
//     }

//     // Function to update URL and filter items dynamically on button click
//     function setupBookFilterButtons() {
//         const buttons = document.querySelectorAll('.toolBadge .filter');
//         buttons.forEach(button => {
//             button.addEventListener('click', () => {
//                 const filterValue = button.getAttribute('data-filter');
//                 if (filterValue === "Reset") {
//                     history.pushState({}, "", window.location.pathname); // Clear URL query parameters
//                 } else {
//                     const url = new URL(window.location);
//                     url.searchParams.set('semester', filterValue); // Set the 'semester' query parameter
//                     history.pushState({}, "", url);
//                 }
//                 filterBookContainer(); // Apply the filtering
//             });
//         });
//     }

//     // Initialize filtering on page load
//     window.addEventListener('DOMContentLoaded', () => {
//         if (dynamicUrlBooks) {
//             filterBookContainer(); // Apply filters based on URL query parameters
//             setupBookFilterButtons();   // Add event listeners to filter buttons
//         }
//     });
// }