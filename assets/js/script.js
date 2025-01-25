// add title in body 
document.addEventListener('DOMContentLoaded', function () {
    document.body.setAttribute('title', 'Developed by Bibek');
});
// add title in search box
document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.setAttribute('title', 'Alt+S search dropdown');
    }
});
// add title in chat bot
document.addEventListener('DOMContentLoaded', function () {
    var updatechatbot = document.querySelector('#updatechatbot');
    if (updatechatbot) {
        updatechatbot.setAttribute('title', 'Alt+B chat bot');
    }
});




// Update logo images by adding .logoImage class in image tag
var logoImages = document.querySelectorAll('.logoImage');
logoImages.forEach(function (logoImage) {
    logoImage.src = 'assets/image/KIIT_CSE_blue_transparent.png';
});







// more section in nav bar
document.addEventListener('DOMContentLoaded', function () {
    // Find the parent element where you want to insert the new HTML code
    var navbar = document.querySelector('.navbar-nav');
    // Define the HTML code to be inserted
    var newHTML = `
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> More tools </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item nav-link SGPA_Calculator" href="#">SGPA Calculator</a></li>
                <li><a class="dropdown-item nav-link" href="#">Comming Soon</a></li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item disabled" href="#">Admin</a></li>
            </ul>
        </li>
    `;
    // Insert the new HTML code after the last child of the navbar
    navbar.insertAdjacentHTML('beforeend', newHTML);

});









document.addEventListener('DOMContentLoaded', function () {
    // Update dropdown menu links to open the corresponding page when clicked according to its class name
    function setDropdownMenuHrefs(selector, href) {
        var dropdownMenus = document.querySelectorAll(selector);
        dropdownMenus.forEach(function (dropdownMenu) {
            dropdownMenu.href = href;
        });
    }
    setDropdownMenuHrefs('.dropdown-menu .FirstSemesterPYQs', '1st_Semester_PYQs.html');
    setDropdownMenuHrefs('.dropdown-menu .FirstSemesterNotes', '1st_Semester_Notes.html');
    setDropdownMenuHrefs('.dropdown-menu .FirstSemesterVideos', '1st_Semester_Videos.html');
    setDropdownMenuHrefs('.dropdown-menu .SecondSemesterPYQs', '2nd_Semester_PYQs.html');
    setDropdownMenuHrefs('.dropdown-menu .SecondSemesterNotes', '2nd_Semester_Notes.html');
    setDropdownMenuHrefs('.dropdown-menu .SecondSemesterVideos', '2nd_Semester_Videos.html');
    setDropdownMenuHrefs('.dropdown-menu .ThirdSemesterPYQs', '3rd_Semester_PYQs.html');
    setDropdownMenuHrefs('.dropdown-menu .ThirdSemesterNotes', '3rd_Semester_Notes.html');
    setDropdownMenuHrefs('.dropdown-menu .ThirdSemesterVideos', '3rd_Semester_Videos.html');
    setDropdownMenuHrefs('.dropdown-menu .FourthSemesterPYQs', '4th_Semester_PYQs.html');
    setDropdownMenuHrefs('.dropdown-menu .FourthSemesterNotes', '4th_Semester_Notes.html');
    setDropdownMenuHrefs('.dropdown-menu .FourthSemesterVideos', '4th_Semester_Videos.html');
    setDropdownMenuHrefs('.dropdown-menu .FifthSemesterPYQs', '5th_Semester_PYQs.html');
    setDropdownMenuHrefs('.dropdown-menu .FifthSemesterNotes', '5th_Semester_Notes.html');
    setDropdownMenuHrefs('.dropdown-menu .FifthSemesterVideos', '5th_Semester_Videos.html');
    setDropdownMenuHrefs('.dropdown-menu .SixthSemesterPYQs', '6th_Semester_PYQs.html');
    setDropdownMenuHrefs('.dropdown-menu .SixthSemesterNotes', '6th_Semester_Notes.html');
    setDropdownMenuHrefs('.dropdown-menu .SixthSemesterVideos', '6th_Semester_Videos.html');
    setDropdownMenuHrefs('.dropdown-menu .FeedbackForm', 'Feedback_Form.html');
    setDropdownMenuHrefs('.dropdown-menu .SGPA_Calculator', 'SGPA_Calculator.html');
    setDropdownMenuHrefs('.SemesterBooks', 'Semester_Books.html');
    setDropdownMenuHrefs('.Developer', 'Developer.html');
    setDropdownMenuHrefs('.homePage', 'index.html');









    // make nav element active dynamically according to its page name and class name
    // Mapping between page names and corresponding classes
    var pageClassMap = {
        "1st_Semester_PYQs.html": "FirstSemesterPYQs",
        "2nd_Semester_PYQs.html": "SecondSemesterPYQs",
        "3rd_Semester_PYQs.html": "ThirdSemesterPYQs",
        "4th_Semester_PYQs.html": "FourthSemesterPYQs",
        "5th_Semester_PYQs.html": "FifthSemesterPYQs",
        "6th_Semester_PYQs.html": "SixthSemesterPYQs",
        "1st_Semester_Notes.html": "FirstSemesterNotes",
        "2nd_Semester_Notes.html": "SecondSemesterNotes",
        "3rd_Semester_Notes.html": "ThirdSemesterNotes",
        "4th_Semester_Notes.html": "FourthSemesterNotes",
        "5th_Semester_Notes.html": "FifthSemesterNotes",
        "6th_Semester_Notes.html": "SixthSemesterNotes",
        "1st_Semester_Videos.html": "FirstSemesterVideos",
        "2nd_Semester_Videos.html": "SecondSemesterVideos",
        "3rd_Semester_Videos.html": "ThirdSemesterVideos",
        "4th_Semester_Videos.html": "FourthSemesterVideos",
        "5th_Semester_Videos.html": "FifthSemesterVideos",
        "6th_Semester_Videos.html": "SixthSemesterVideos",
        "SGPA_Calculator.html": "SGPA_Calculator",
    };
    // Get the current HTML page name
    var currentPageName = window.location.pathname.split('/').pop();
    // Check if the current page name exists in the mapping
    if (pageClassMap.hasOwnProperty(currentPageName)) {
        // Get the corresponding class name from the mapping
        var className = pageClassMap[currentPageName];
        // Add "active" class to elements with the corresponding class name
        var menuElement = document.querySelector('.' + className);
        if (menuElement) {
            menuElement.classList.add('active');
            // Add "active" class to parent elements of ".dropdown-menu"
            var dropdownMenu = menuElement.closest('.dropdown-menu');
            if (dropdownMenu) {
                var dropdownToggle = dropdownMenu.closest('.dropdown').querySelector('.nav-link');
                if (dropdownToggle) {
                    dropdownToggle.classList.add('active');
                }
            }
        }
    }
});
























// Function to toggle theme without detecting the system theme
// function toggleTheme() {
//     document.body.classList.toggle('dark-mode'); // Toggle dark mode body class
//     document.querySelector('nav').classList.toggle('bg-dark'); // Toggle dark mode navbar class

//     var navElement = document.querySelector('nav');
//     if (navElement.dataset.bsTheme === 'dark') {
//         navElement.dataset.bsTheme = '';
//         localStorage.setItem('KIITtheme', 'light'); // Save theme preference to local storage
//     } else {
//         navElement.dataset.bsTheme = 'dark';
//         localStorage.setItem('KIITtheme', 'dark'); // Save theme preference to local storage
//     }

//     document.querySelector('#dataTable').classList.toggle('table-dark'); // Toggle dark mode table class

//     var button = document.querySelector('.theme');
//     if (button.textContent === 'Dark') {
//         button.textContent = 'Light';
//         button.classList.remove('btn-dark');
//         button.classList.add('btn-light');
//     } else {
//         button.textContent = 'Dark';
//         button.classList.remove('btn-light');
//         button.classList.add('btn-dark');
//     }
// }

// // Check if theme preference is saved in local storage
// var savedTheme = localStorage.getItem('KIITtheme');
// if (savedTheme === 'dark') {
//     toggleTheme(); // Apply dark mode if preference is saved as dark
// }

// // Event listener for theme toggle button
// document.querySelector('.theme').addEventListener('click', toggleTheme);





// Function to toggle theme by detecting the system theme
// function toggleTheme() {
//     document.body.classList.toggle('dark-mode'); // Toggle dark mode body class
//     document.querySelector('nav').classList.toggle('bg-dark'); // Toggle dark mode navbar class

//     var navElement = document.querySelector('nav');
//     if (navElement.dataset.bsTheme === 'dark') {
//         navElement.dataset.bsTheme = '';
//         localStorage.setItem('KIITtheme', 'light'); // Save theme preference to local storage
//     } else {
//         navElement.dataset.bsTheme = 'dark';
//         localStorage.setItem('KIITtheme', 'dark'); // Save theme preference to local storage
//     }

//     document.querySelector('#dataTable').classList.toggle('table-dark'); // Toggle dark mode table class

//     var button = document.querySelector('.theme');
//     if (button.textContent === 'Dark') {
//         button.textContent = 'Light';
//         button.classList.remove('btn-dark');
//         button.classList.add('btn-light');
//     } else {
//         button.textContent = 'Dark';
//         button.classList.remove('btn-light');
//         button.classList.add('btn-dark');
//     }
// }

// // Function to detect system theme preference
// function detectSystemTheme() {
//     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//         // If user prefers dark mode, apply dark mode theme
//         toggleTheme();
//     }
// }

// // Check if theme preference is saved in local storage
// var savedTheme = localStorage.getItem('KIITtheme');
// if (savedTheme === 'dark') {
//     toggleTheme(); // Apply dark mode if preference is saved as dark
// } else {
//     detectSystemTheme(); // Detect system theme preference if no preference is saved
// }

// // Event listener for theme toggle button
// document.querySelector('.theme').addEventListener('click', toggleTheme);




// collapse the large navbar
document.addEventListener('click', function (event) {
    var navbar = document.querySelector('.navbar');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    // Check if the click occurred outside of the navbar
    if (!navbar.contains(event.target)) {
        // Remove the 'show' class from the navbar collapse if it's present
        navbarCollapse.classList.remove('show');

        // Smoothly transition the navbar height to 56px
        // navbar.style.transition = 'height 0.3s ease-in';
        // navbar.style.height = '56px';
    }
});





// Function to set the theme based on user selection
function setTheme(theme) {
    document.body.classList.remove('light-mode', 'dark-mode');
    if (theme === 'light') {
        document.body.classList.remove('dark-mode');
        // change nav to light mode
        document.querySelector('nav').classList.remove('bg-dark');
        var navElement = document.querySelector('nav');
        navElement.dataset.bsTheme = ''
        // change table to light mode
        var dataTableElement = document.querySelector('#dataTable');
        if (dataTableElement) {
            dataTableElement.classList.remove('table-dark');
        }
    } else if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        // change nav to dark mode
        document.querySelector('nav').classList.add('bg-dark');
        var navElement = document.querySelector('nav');
        navElement.dataset.bsTheme = 'dark'
        // change table to dark mode
        var dataTableElement = document.querySelector('#dataTable');
        if (dataTableElement) {
            dataTableElement.classList.add('table-dark');
        }
    } else {
        // If system preference is selected, check if system prefers dark mode
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
            // change nav to dark mode
            document.querySelector('nav').classList.add('bg-dark');
            var navElement = document.querySelector('nav');
            navElement.dataset.bsTheme = 'dark'
            // change table to dark mode
            var dataTableElement = document.querySelector('#dataTable');
            if (dataTableElement) {
                dataTableElement.classList.add('table-dark');
            }
            localStorage.setItem('colorMode', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            // change nav to light mode
            document.querySelector('nav').classList.remove('bg-dark');
            var navElement = document.querySelector('nav');
            navElement.dataset.bsTheme = ''
            // change table to light mode
            var dataTableElement = document.querySelector('#dataTable');
            if (dataTableElement) {
                dataTableElement.classList.remove('table-dark');
            }
            localStorage.setItem('colorMode', 'light');
        }
    }
    // Store the selected mode in local storage
    localStorage.setItem('colorMode', theme);
    // Set the selected option in the dropdown
    var selectElement = document.getElementById('colorModeSelect');
    selectElement.value = theme;
}
// Function to handle the change event of the color mode select
document.getElementById('colorModeSelect').addEventListener('change', function () {
    var selectedMode = this.value;
    setTheme(selectedMode);
});
// Retrieve the selected mode from local storage and set the theme
var storedMode = localStorage.getItem('colorMode');
if (storedMode) {
    setTheme(storedMode);
}





// short cut for theme
document.addEventListener('keydown', function (event) {
    // Check if Alt key is pressed
    if (event.altKey) {
        // Check if L is pressed for light mode
        if (event.key === 'l' || event.key === 'L') {
            // Prevent default behavior
            event.preventDefault();
            // Select Light mode option in the dropdown
            document.getElementById('colorModeSelect').value = 'light';
            // Apply light mode
            setTheme('light');
        }
        // Check if D is pressed for dark mode
        else if (event.key === 'd' || event.key === 'D') {
            // Prevent default behavior
            event.preventDefault();
            // Select Dark mode option in the dropdown
            document.getElementById('colorModeSelect').value = 'dark';
            // Apply dark mode
            setTheme('dark');
        }
        // collides with search function of nav bar
        // Check if S is pressed for dark mode
        // else if (event.key === 's' || event.key === 'S') {
        //     // Prevent default behavior
        //     event.preventDefault();
        //     // Select Dark mode option in the dropdown
        //     document.getElementById('colorModeSelect').value = 'system';
        //     // Apply dark mode
        //     setTheme('system');
        // }
    }
});







// filter typed word while searching on nav bar
const search = () => {
    let filter = document.getElementById('input-box').value.toUpperCase();
    let ul = document.getElementById('ResultBox');
    let li = ul.getElementsByTagName('li');
    for (var i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        let textValue = a.textContent || a.innerHTML;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const resultsBox = document.getElementById("ResultBox");
    const ResultsBox = document.querySelector(".result-box");
    const inputBox = document.getElementById("input-box");
    var SearchResult = document.getElementById("ResultBox");
    // Handle click on document to close the results box if clicked outside
    document.addEventListener("click", function (event) {
        if (event.target.id == "input-box") {
            SearchResult.style.display = "block";
            ResultsBox.style.animation = "to-bottom 0.3s ease-in"
        }
        if (!resultsBox.contains(event.target) && event.target !== inputBox) {
            ResultsBox.style.animation = "to-top 0.3s ease-in";
            setTimeout(() => {
                SearchResult.style.display = "none";
                // resultsBox.style.display = "none";
                ResultsBox.style.animation = ""; // Reset animation property
            }, 300);
        }
    });
    // Handle click on user-typed word to search on Google
    resultsBox.addEventListener("click", function (event) {
        // console.log(event.target.href)
        if (event.target.tagName == "a") {
            if (event.target.href == "#") {
                const query = event.target.textContent.trim();
                if (query !== "") {
                    const searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(query);
                    window.open(searchUrl, "_blank");
                }
                // Select the text inside the input after the search button is pressed
                inputBox.select();
            }
        }
    });
    // Handle input changes to dynamically update the results box
    inputBox.addEventListener("input", function (e) {
        const filter = inputBox.value.trim().toLowerCase();
        // resultsBox.innerHTML = ""; // Clear the current list
        // console.log(e);
        if (filter !== "") {
            const newLi = document.createElement("li");
            const newA = document.createElement("a");
            newA.href = "#";
            newA.textContent = filter;
            newLi.appendChild(newA);
            resultsBox.appendChild(newLi);
            ResultsBox.style.display = "block";
            ResultsBox.style.animation = "to-bottom 0.3s ease-in";

            newA.addEventListener("click", () => {
                window.open("https://google.com/search?q=" + newA.textContent, "_blank");
            })
        } else {
            // ResultsBox.style.animation = "to-top 0.3s ease-in";
            // setTimeout(() => {
            //     ResultsBox.style.display = "none";
            //     ResultsBox.style.animation = ""; // Reset animation property
            // }, 300);
        }
    });
});
function handleResults() {
    const ResultsBox = document.querySelector(".result-box");
    const resultBox = document.getElementById('ResultBox');
    const inputBox = document.getElementById('input-box');

    if (resultBox.style.display === 'none') {
        // Focus on the input box
        inputBox.click();
        inputBox.focus();
        // Show the result box
        resultBox.style.display = 'block';
    } else {
        // Hide the result box
        ResultsBox.style.animation = "to-top 0.3s ease-in";
        setTimeout(() => {
            resultBox.style.display = 'none';
            ResultsBox.style.animation = ""; // Reset animation property
        }, 300);
    }
}
// search box
function searchOnEnter(event) {
    if (event.keyCode === 13) {
        searchGoogle();
    }
}
// search on google
function searchGoogle() {
    const searchInput = document.querySelector(".search-input");
    const query = searchInput.value.trim();
    if (query !== "") {
        const searchUrl = "https://www.bing.com/search?q=" + encodeURIComponent(query);
        window.open(searchUrl, "_blank");
        // Select the text inside the input after the search button is pressed
        searchInput.select();
    }
}
// short cut key for search "alt + s"
document.addEventListener('keydown', function (event) {
    // Check if Alt + S is pressed
    if (event.altKey && event.key.toLowerCase() === 's') {
        event.preventDefault(); // Prevent default browser behavior

        // Handle different platforms and browsers
        const platform = navigator.platform.toLowerCase();
        const browser = navigator.userAgent.toLowerCase();

        if ((platform.includes('mac') || browser.includes('safari')) ||
            (platform.includes('mac') || browser.includes('firefox')) ||
            (platform.includes('win') || browser.includes('edge')) ||
            (platform.includes('linux'))) {
            // Call the function to handle the "Alt + S" shortcut
            handleResults();
        } else {
            console.log('Alt + S shortcut not supported on this platform/browser.');
        }
    }
});






// add new search list
document.addEventListener('DOMContentLoaded', function () {
    // Find the parent element of the search results list
    var searchResultsList = document.getElementById('ResultBox');

    // Array of links to be added
    var links = [
        { href: 'https://bibekchandsah.github.io/kiitcse', text: 'KIIT CSE' },
        // { href: 'https://example.com/2', text: 'Link 2' },
        // { href: 'https://example.com/3', text: 'Link 3' },
        // Add more links as needed
    ];

    // Loop through the links array
    links.forEach(function (linkInfo) {
        // Create a new list item element
        var newItem = document.createElement('li');

        // Create a new anchor element for the link
        var newLink = document.createElement('a');
        newLink.href = linkInfo.href;
        newLink.textContent = linkInfo.text;

        // Append the anchor element to the list item element
        newItem.appendChild(newLink);

        // Append the new list item to the search results list
        searchResultsList.appendChild(newItem);
    });
});







// greeting
function getGreeting(username) {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let greetingMessage;
    if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 17) {
        greetingMessage = 'Good Afternoon';
    } else if (currentHour >= 17 && currentHour < 21) {
        greetingMessage = 'Good Evening';
    } else {
        greetingMessage = 'Good Night';
    }
    if (username) {
        greetingMessage += ' ' + username;
    }
    return greetingMessage;
}

// ask user name while loading page
function askForUsername() {
    const username = prompt('Enter your name:');
    if (username) {
        localStorage.setItem('username', username);
        setGreeting();
    }
}

// show greeting according to current time
function setGreeting() {
    const username = localStorage.getItem('username');
    const greetingElement = document.getElementById('greeting');
    const greeting = getGreeting(username);
    if (greetingElement) {
        greetingElement.textContent = greeting;
    }
}
// check whether the user name is in local storage or not
document.addEventListener('DOMContentLoaded', function () {
    const username = localStorage.getItem('username');
    if (!username) {
        askForUsername();
    } else {
        setGreeting();
    }
});





// online status toast 
const toastElement = document.getElementById("OnlineToast");
const toastMessageElement = document.getElementById("toast-message");
const wifiIconElement = document.getElementById("wifi-icon");
const closeIconElement = document.getElementById("close-icon");
let isOffline = false; // To track offline status
let hideTimeout; // To store the timeout reference
function showToast(message, isConnected) {
    toastMessageElement.textContent = message;
    wifiIconElement.style.display = isConnected ? "inline-block" : "none";
    toastElement.classList.remove("hide-toast");
    toastElement.classList.add("show-toast");
    if (!isConnected) {
        isOffline = true;
        clearTimeout(hideTimeout); // Clear the timeout when offline
    }
    if (isConnected) {
        if (!isOffline) {
            hideTimeout = setTimeout(hideToast, 5000); // Hide after 5 seconds if online
        }
    }
}
function hideToast() {
    toastElement.classList.remove("show-toast");
    toastElement.classList.add("hide-toast");
}
function updateStatus() {
    const isConnected = navigator.onLine;
    if (isConnected) {
        showToast("You are currently online", true);
        toastElement.style.backgroundColor = "green";
        if (isOffline) {
            hideTimeout = setTimeout(hideToast, 5000); // Start the timer if back online
            isOffline = false; // Reset offline status
        }
    } else {
        showToast("You are currently offline", false);
        toastElement.style.backgroundColor = "red";
        isOffline = true;
    }
}
updateStatus();
// Listen for online and offline events
window.addEventListener("online", updateStatus);
window.addEventListener("offline", updateStatus);
// Hide the toast when close icon is clicked
closeIconElement.addEventListener("click", hideToast);









// whatsapp share when clicked on share (qr or link)
// check either qr or link should be displayed
window.addEventListener("load", () => {
    setWhatsappLink();
    document.querySelector('#input-box').focus();
});
// Function to detect whether the user is on a mobile device
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
// Function to set the appropriate link based on the device
function setWhatsappLink() {
    const whatsappLink = document.getElementById('whatsappLink');
    const imagePreview = document.getElementById('imagePreview');
    const shareIcon = document.querySelector(".whatsappLink");

    if (isMobileDevice()) {
        console.log("mobile devices");
        whatsappLink.addEventListener('click', (event) => {
            imagePreview.innerHTML = '<img src="assets/image/qrcode.png" alt="QR Code">';
            event.stopPropagation(); // Prevent the click event from reaching the document
            // Toggle display of image preview
            imagePreview.style.display = imagePreview.style.display === 'none' ? 'block' : 'none';
        });

        document.addEventListener('click', () => {
            // Close the image preview when clicked outside
            imagePreview.style.animation = "disappear 0.3s ease-out";
            setTimeout(() => {
                imagePreview.style.display = 'none';
                imagePreview.style.animation = ""; // Reset animation property
            }, 300); // Adjust the timeout to match the animation duration
        });
    } else {
        console.log("pc devices");
        whatsappLink.href = 'whatsapp://send?text=Go%20to%20KIIT%20CSE-%20https://bibekchandsah.github.io/kiitcse/%20KIIT%20CSE%20is%20resource%20hub%20which%20simplifies%20your%20educational%20journey%20in%20Computer%20Science%20and%20Engineering%20(CSE).%20It%20offers:%20Previous%20Year%20Questions%20(PYQs),%20Concise%20Notes,%20Video%20Lectures.';

        // Hide image preview if it's visible
        imagePreview.style.display = 'none';
        // imagePreview.style.animation = "zoomOut 0.3s ease-in";
    }
}






//  clear local storage
document.getElementById('clearLocalStorageBtn').addEventListener('click', function () {
    // Change button color to green
    this.style.backgroundColor = '#2ecc71';
    // Ask the user for confirmation
    const userConfirmed = window.confirm("Are you sure you want to clear the local storage?");
    if (userConfirmed) {
        // Clear the local storage
        localStorage.clear();
        // Optionally, you can provide feedback to the user
        console.log('Local storage cleared!');
        // Revert button color after 5 seconds
        setTimeout(() => {
            this.style.backgroundColor = '#02ff24';
        }, 5000);
        location.reload();
    } else {
        // If the user cancels, revert button color immediately
        this.style.backgroundColor = '#02ff24';
    }
});




/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 160) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)





// KIIT CONNECT data in iframe
function kiitconnect() {
    // Check if the script is running in an iframe, exit if true
    if (window !== window.parent) {
        return;
    }

    // Excel Sheet URL
    // const excelUrl = "https://drive.google.com/drive/folders/11FZF-h8tmulA9LgLLV9E4s2LbGD_Rf7iI5BwCl35WdZ-vfbuQzDZcGgP1IwiwkRVJ-rK0uoU?usp=sharing";
    const excelUrl = "https://drive.google.com/embeddedfolderview?id=11FZF-h8tmulA9LgLLV9E4s2LbGD_Rf7iI5BwCl35WdZ-vfbuQzDZcGgP1IwiwkRVJ-rK0uoU#list";
    // const excelUrl = "https://drive.google.com/embeddedfolderview?id=11FZF-h8tmulA9LgLLV9E4s2LbGD_Rf7iI5BwCl35WdZ-vfbuQzDZcGgP1IwiwkRVJ-rK0uoU#grid";
    const iconUrl = "https://cdn-icons-png.flaticon.com/512/1091/1091007.png";

    // Create a button to toggle the iframe
    const button = document.createElement('button');
    button.style.position = 'fixed';
    button.style.bottom = '1px';
    button.style.right = '30px';
    button.style.zIndex = '9997';
    button.style.background = 'rgba(0, 0, 0, 0.3)';
    button.style.backdropFilter = 'blur(10px)';
    button.style.border = '1px solid rgba(107, 107, 111, 0.61)';
    button.style.cursor = 'pointer';
    button.style.padding = '5px'; // Initial size
    button.style.borderRadius = '50px';
    button.style.transition = 'all 0.3s ease'; // Smooth transition for all changes
    button.style.width = '50px'; // Initial width
    button.style.height = '50px'; // Initial height

    // Create the icon
    const icon = document.createElement('img');
    icon.src = iconUrl;
    icon.alt = "Show Excel";
    icon.style.width = '20px';
    icon.style.height = '20px';
    icon.style.position = 'absolute';
    icon.style.bottom = '15px';
    icon.style.right = '15px';
    button.appendChild(icon);

    document.body.appendChild(button);

    // Add hover effect to enlarge the button
    button.addEventListener('mouseenter', () => {
        button.style.padding = '10px'; // Larger size on hover
        icon.style.width = '30px';
        icon.style.height = '30px';
    });

    button.addEventListener('mouseleave', () => {
        button.style.padding = '5px'; // Revert to original size
        icon.style.width = '20px';
        icon.style.height = '20px';
    });

    // Create the iframe
    const iframe = document.createElement('iframe');
    iframe.src = excelUrl;
    iframe.style.position = 'fixed';
    iframe.style.bottom = '100px'; // Space for sliders
    iframe.style.right = '20px';
    iframe.style.width = '35vw'; // Initial width
    iframe.style.height = '60vh'; // Initial height
    iframe.style.border = '5px solid #ccc';
    iframe.style.borderRadius = '15px'; // Add border radius
    iframe.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Optional: Add shadow
    iframe.style.zIndex = '9998';
    iframe.style.display = 'none';
    iframe.style.transition = 'all 0.3s ease'; // Smooth transition for all changes
    iframe.style.backgroundColor = 'white'; // Optional: Add background

    document.body.appendChild(iframe);

    // Create the sliders container div
    const slidersContainer = document.createElement('div');
    slidersContainer.style.position = 'fixed';
    slidersContainer.style.bottom = '3px';
    slidersContainer.style.right = '74px';
    slidersContainer.style.zIndex = '9997';
    slidersContainer.style.display = 'none';
    slidersContainer.style.border = '1px solid rgba(107, 107, 111, 0.61)';
    slidersContainer.style.background = '#00000012';
    slidersContainer.style.backdropFilter = 'blur(10px)';
    slidersContainer.style.borderRadius = '50px';
    slidersContainer.style.padding = '5px 20px 5px 20px';
    slidersContainer.style.color = '#cff';

    // Create the width slider
    const widthSliderContainer = document.createElement('div');
    widthSliderContainer.style.marginBottom = '10px';

    const widthSliderLabel = document.createElement('label');
    widthSliderLabel.textContent = "Width: ";
    widthSliderLabel.style.marginRight = '10px';
    widthSliderLabel.style.color = '#fff';

    const widthSlider = document.createElement('input');
    widthSlider.type = 'range';
    widthSlider.min = '30';
    widthSlider.max = '95';
    widthSlider.value = '35'; // Default width
    widthSlider.style.width = '200px';

    widthSlider.addEventListener('input', () => {
        iframe.style.width = widthSlider.value + 'vw';
    });

    widthSliderContainer.appendChild(widthSliderLabel);
    widthSliderContainer.appendChild(widthSlider);
    slidersContainer.appendChild(widthSliderContainer);

    // Create the height slider
    const heightSliderContainer = document.createElement('div');

    const heightSliderLabel = document.createElement('label');
    heightSliderLabel.textContent = "Height:";
    heightSliderLabel.style.marginRight = '10px';
    heightSliderLabel.style.color = '#fff';

    const heightSlider = document.createElement('input');
    heightSlider.type = 'range';
    heightSlider.min = '30';
    heightSlider.max = '90';
    heightSlider.value = '60'; // Default height
    heightSlider.style.width = '200px';

    heightSlider.addEventListener('input', () => {
        iframe.style.height = heightSlider.value + 'vh';
    });

    heightSliderContainer.appendChild(heightSliderLabel);
    heightSliderContainer.appendChild(heightSlider);
    slidersContainer.appendChild(heightSliderContainer);

    document.body.appendChild(slidersContainer);

    // Toggle iframe visibility and sliders on button click
    let isOpen = false;
    button.addEventListener('click', () => {
        isOpen = !isOpen;
        iframe.style.display = isOpen ? 'block' : 'none';
        slidersContainer.style.display = isOpen ? 'block' : 'none';
        icon.style.positioin = isOpen ? 'absolute' : 'fixed';
        icon.style.bottom = isOpen ? '15px' : '15px';
        icon.style.right = isOpen ? '15px' : '15px';
        button.style.width = isOpen ? '350px' : '50px'; // Animate width
        button.style.height = isOpen ? '75px' : '50px'; // Animate height
    });


}
kiitconnect();  // call the function to run the script





// form validation in submit feedback form 
// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation')
// Loop over them and prevent submission
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
    }, false)
})







// update modal initialization
const exampleModal = document.getElementById('myModal')
if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', event => {
        // Button that triggered the modal
        const button = event.relatedTarget
        // Extract info from data-bs-* attributes
        const recipient = button.getAttribute('data-bs-whatever')
        // If necessary, you could initiate an Ajax request here
        // and then do the updating in a callback.

        // Update the modal's content.
        const modalTitle = exampleModal.querySelector('.modal-title')
        const modalBodyInput = exampleModal.querySelector('.modal-body input')

        modalTitle.textContent = `New message to ${recipient}`
        modalBodyInput.value = recipient
    })
}







// update modal new update notification in every 7 days
document.addEventListener('DOMContentLoaded', function () {
    // Function to check if the popup should be displayed
    function shouldDisplayPopup() {
        var popupStatus = localStorage.getItem('kiitpopupStatus');
        var lastPopupTime = localStorage.getItem('kiitlastPopupTime');
        if (!popupStatus || popupStatus === 'not visited' || isPopupStale(lastPopupTime)) {
            return true;
        }
        return false;
    }
    // Function to set the popup status as visited
    function setPopupVisited() {
        localStorage.setItem('kiitpopupStatus', 'visited');
    }
    // Function to set the last popup time
    function setLastPopupTime() {
        var currentTime = new Date().getTime();
        localStorage.setItem('kiitlastPopupTime', currentTime);
    }
    // Function to clear the stored popup status and time
    function clearPopupStatus() {
        localStorage.removeItem('kiitpopupStatus');
        localStorage.removeItem('kiitlastPopupTime');
    }
    // Function to check if the stored popup status is stale (older than 7 days)
    function isPopupStale(lastPopupTime) {
        if (!lastPopupTime) {
            return true;
        }
        var currentTime = new Date().getTime();
        var sevenDaysInMillis = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
        return currentTime - lastPopupTime > sevenDaysInMillis;
    }
    // Function to show the popup
    function showPopup() {
        // document.querySelector('.UpdateModalTrigger').click();
        // modified up line code to this
        var UpdateModalTrigger = document.querySelector('.UpdateModalTrigger');
        if (UpdateModalTrigger) {
            UpdateModalTrigger.click();
        }
    }
    // Function to hide the popup
    function hidePopup() {
        document.querySelectorAll('.closeUpdateModal').forEach(function (btn) {
            btn.click();
        });
    }
    // Check if the popup should be displayed
    if (shouldDisplayPopup()) {
        // Display the popup after a delay
        setTimeout(function () {
            showPopup();
        }, 1000);
    }
    // Close popup when clicking the close button
    document.querySelectorAll('.closeUpdateModal').forEach(function (btn) {
        btn.addEventListener('click', function () {
            hidePopup();
            // Set popup status as visited and update last popup time when the popup is closed
            setPopupVisited();
            setLastPopupTime();
        });
    });
    // Close popup when clicking the esc keyboard button
    document.addEventListener('keyup', function (event) {
        if (event.which === 27) {
            hidePopup();
            // Set popup status as visited and update last popup time when the popup is closed
            setPopupVisited();
            setLastPopupTime();
        }
    });
    // Close popup when clicking outside the modal content
    // document.addEventListener('click', function (event) {
    //     var modalContent = document.querySelector('.modal.updateModals .modal-content');
    //     if (modalContent && !modalContent.contains(event.target)) {
    //         hidePopup();
    //         // Set popup status as visited and update last popup time when the popup is closed
    //         setPopupVisited();
    //         setLastPopupTime();
    //     }
    // });

    // Clear stored status and time from local storage
    // clearPopupStatus();
});





// Check if the page is a 404 error
// if (window.location.href.indexOf("404") > -1) {
//     // Redirect to the custom 404 error page
//     window.location.href = "404.html";
// }







// animation on scroll
AOS.init();







// ripple effect
"use strict";
[].map.call(document.querySelectorAll('[anim="ripple"]'), el => {
    el.addEventListener('click', e => {
        e = e.touches ? e.touches[0] : e;
        const r = el.getBoundingClientRect(), d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
        el.style.cssText = `--s: 0; --o: 1;`;
        el.offsetTop;
        el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`;
    });
});









// page visit counter
// Object mapping each HTML page to its corresponding image URL
var pageImageMap = {
    '1st_Semester_Notes.html': 'https://camo.githubusercontent.com/bf664d8559c0d4b9eb5508d65dfc4b658b1f2e85693fd53743f17f30ad177408/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d6e6f74657331737473656d6573746572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    '1st_Semester_PYQs.html': 'https://camo.githubusercontent.com/81c61a219e0fc20e6720de46ed6280a42e6b4bc2bbcdbc1352d8f474c1817561/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d7071797331737473656d6573746572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    '1st_Semester_Videos.html': 'https://camo.githubusercontent.com/d6b0846e06682156517f4a9e42a4c07e69afb30d83870128e2e649c2107d5f40/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d766964656f31737473656d6573746572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    '2nd_Semester_Notes.html': 'https://camo.githubusercontent.com/df08635715512a657b44c1a0a30e12421a336645b360bbf8efa039b1e74dc10a/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d6e6f746573326e6473656d6573746572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    '2nd_Semester_PYQs.html': 'https://camo.githubusercontent.com/aec1033797a047c8b2d4f62450788628bfda1e15d1284d51b3d4221123faf36c/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d70717973326e6473656d6573746572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    '2nd_Semester_Videos.html': 'https://camo.githubusercontent.com/a102dd6904c0ed7487eaf28c5a5187b42498279982c0920171b2f2e897c2df67/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d766964656f326e6473656d6573746572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    '3rd_Semester_Notes.html': 'https://camo.githubusercontent.com/f4274717ef58e133d901f153152476ede4e637869502529aae456c5e8a9643af/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d6e6f74657333726473656d6573746572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    '3rd_Semester_PYQs.html': 'https://camo.githubusercontent.com/a4a49aca8f4f01433aa18de397e35cde7eb27016b2314b5f20193de63da10a88/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d7071797333726473656d6573746572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    '3rd_Semester_Videos.html': 'https://camo.githubusercontent.com/a08b7bbd82df40fd356c572c4970ddec93843fba5517db2b9842535062a0f92e/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d766964656f33726473656d6573746572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    '4th_Semester_Notes.html': 'https://camo.githubusercontent.com/bc6c2a2b8ba4a394e8aff6b01ee7b95ef15eca2bb545b07007636871d2b0a9b4/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d6e6f74657334746873656d6573746572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    '4th_Semester_PYQs.html': 'https://camo.githubusercontent.com/ee1113e716709877d98bd010b98c650e776262c63922a18bdc383736665d760e/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d7071797334746873656d6573746572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    '4th_Semester_Videos.html': 'https://camo.githubusercontent.com/0858dc22937ac6d6d8c4e387aa6a86755e255cfb44d73bc38c5ed3de37d13e2f/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d766964656f34746873656d6573746572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    '5th_Semester_Notes.html': 'https://camo.githubusercontent.com/9fe802acdef6591f2b077755735f0f90d0518c52304cffd7bfb49fa529a7b7e2/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d6e6f74657335746873656d6573746572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    '5th_Semester_PYQs.html': 'https://camo.githubusercontent.com/ea9d03ec6aac3237013d92799a4b93bdfde0fe96eeb4c7690ce39fe7d18eefaf/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d7071797335746873656d6573746572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    '5th_Semester_Videos.html': 'https://camo.githubusercontent.com/321d786119de2a6376b7f7c26de1b713f6365cb8623af6463ead24087aa5ded3/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d766964656f35746873656d6573746572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    '6th_Semester_Notes.html': 'https://camo.githubusercontent.com/40ff54a18da49d8bcb8086578bd1acd719ca40c27fcc48033d1510d59524e9e5/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d6e6f74657336746873656d6573746572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    '6th_Semester_PYQs.html': 'https://camo.githubusercontent.com/f6eb0d4a24d005f196af5eb8c9963a9b75c891b7f14f8b272331946e857a7c0d/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d7071797336746873656d6573746572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    '6th_Semester_Videos.html': 'https://camo.githubusercontent.com/c61277142f1508aaac930bf41dd8f067ef1fdff27c247a16b5279fb97ef9ce05/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d766964656f36746873656d6573746572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    '7th_Semester_Notes.html': 'https://camo.githubusercontent.com/dc48dc9ccd5606b67c40ff3a8bcc7de04fe01233e4bb0c37223c0d7c469ed7e9/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d6e6f74657337746873656d6573746572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    '7th_Semester_PYQs.html': 'https://camo.githubusercontent.com/eb3468323df6b61cb5671faeb7a6d809f335e6a4081327c3bd95af564c3cef2d/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d7071797337746873656d6573746572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    '7th_Semester_Videos.html': 'https://camo.githubusercontent.com/4ef9a81b5f533d419de503ac1270969caf1a0e720b61f7618e555ef83caae1f9/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d766964656f37746873656d6573746572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    '8th_Semester_Notes.html': 'https://camo.githubusercontent.com/cda3d18ba1b34fceff299ab47bc20e766cd88726b6df38dc2749e8a3c136d70c/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d6e6f74657338746873656d6573746572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    '8th_Semester_PYQs.html': 'https://camo.githubusercontent.com/dd43a874b7fd3260c649783e8c445413c294650cd0f8b8bb902e87a5d21787c8/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d7071797338746873656d6573746572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    '8th_Semester_Videos.html': 'https://camo.githubusercontent.com/5e698d56cbe0953e1df6f0d97597c5f37b20bcab9a133d52682cd353a05eb6d0/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d766964656f38746873656d6573746572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    '404.html': 'https://camo.githubusercontent.com/e5e5ee51aab149c0b0716e41022c86dee367ee776306bd9fc522496b918594dd/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d6b696974637365343034266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    'Developer.html': 'https://camo.githubusercontent.com/1a9c50a3aef704aa0eeb7be611d17ce6724c1f455b98523048ff102869995feb/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d6b696974637365646576656c6f706572266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    'Feedback_Form.html': 'https://camo.githubusercontent.com/0ab264affe330a8322217e1b5e63ccf2f2a25b6b2b9553bd0ccac7e71decf371/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d6b696974637365666565646261636b666f726d266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    'index.html': 'https://camo.githubusercontent.com/075c22e5373483cd5d167a1b1eaeba4a55619d0b6d9b4404b5ade6eb07c3c43e/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d6b696974637365266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    'Semester_Books.html': 'https://camo.githubusercontent.com/9d380358622f4819b4352fc2d1bd892268c7fc7bcbc0b37c663ac6a3e3a5cfd2/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d6b696974637365626f6f6b73266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    'SGPA_Calculator.html': 'https://camo.githubusercontent.com/c19b94cfb82837527375a48e323290de892e7da478325595853909595b36eb29/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d6b6969746373657367706163616c63756c61746f72266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    'thankyou.html': 'https://camo.githubusercontent.com/2417e6f34b29c466dc0e1fd4ebf375c5862cccbe6df523e5b227c3300fbfd081/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d6b696974637365736770617468616e6b796f75266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174',
    // 'downloads.html': 'https',
    // Add more pages and their corresponding image URLs here
};
// Function to get the current page URL
function getCurrentPageUrl() {
    return window.location.href.split('/').pop(); // Get the last part of the URL (page name)
}
// Function to add visit count container with dynamic image URL based on current page
function addVisitCountContainer() {
    // Get the current page URL
    var currentPage = getCurrentPageUrl();

    // Get the image URL for the current page from the pageImageMap object
    var imageUrl = pageImageMap[currentPage];

    // Select the .visitCountContainer element
    var visitCountContainer = document.querySelector('.visitCountContainer');

    // Create a new div element for the visit count container
    var visitCountContainerDiv = document.createElement('div');
    visitCountContainerDiv.classList.add('text-center');
    visitCountContainerDiv.innerHTML = `
    <!-- <h3>Total Visitors</h3>
        <hr> -->
        <div class="d-flex gap-2 justify-content-center py-2 mb-lg-0 toolBadge visitcount">
            <span class="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-pill mb-3">
                <img class="me-1" src="${imageUrl}" style="max-width: 100%;" alt="visitcount logo"> Total Page Visit
            </span>
        </div> 
    `;
    // Append the new div element to the .visitCountContainer element
    if (visitCountContainer) {
        visitCountContainer.appendChild(visitCountContainerDiv);
    }
}

// Call the function to add visit count container with dynamic image URL
addVisitCountContainer();






