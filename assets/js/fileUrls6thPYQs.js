const fileUrls6thPYQs = {
    // sample
    // "dbms_solution_spring_end_semester_2023": ['https://raw.githubusercontent.com/bibekchandsah/files/main/trash/bin/download/KIIT%202022/B.Tech%204th%20semester/DBMS/PYQS/DBMS%20Solution%20(Spring%20End%20sem%202023).doc'],

    // CC = Cloud Computing
    "CC_PYQs_2022_Autumn_Mid_Sem_Soln": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/CC/PYQs/2022%20Autumn%20Mid%20Sem%20Soln.pdf"],

    "CC_PYQs_2023_Sup_Spring_Mid_Sem": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/CC/PYQs/2023%20Sup%20Spring%20Mid%20Sem.pdf"],

    "CC_PYQs_Midsem_Question_Bank": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/CC/PYQs/Midsem%20Question%20Bank.pdf"],


    // ML = Machine Learning
    "ML_PYQs_2019_Spring_End_Sem": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/ML/PYQs/2019%20Spring%20%20End%20%20Sem.pdf"],

    "ML_PYQs_2022_Mid_Sem_Solution": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/ML/PYQs/2022%20Mid%20Sem%20Solution.pdf"],

    "ML_PYQs_2023_Spring_Mid_Sem_Soln": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/ML/PYQs/2023%20Spring%20Mid%20Sem%20Soln.pdf"],

    "ML_PYQs_Question_Bank_Ans": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/ML/PYQs/Question%20Bank%20Ans.pdf"],


    // SPM = Software Project Management

    "SPM_PYQs_2019_Autumn_End_Semester": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/SPM/PYQs/2019%20Autumn%20%20End%20%20Semester.pdf"],

    "SPM_PYQs_2019_Autumn_End_Semesterr": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/SPM/PYQs/2019%20Autumn%20%20End%20%20Semesterr.pdf"],

    "SPM_PYQs_2021_Online_Spring_Mid_Sem": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/SPM/PYQs/2021%20(Online)%20Spring%20Mid%20Sem.pdf"],

    "SPM_PYQs_2022_Spring_End_Semester": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/SPM/PYQs/2022%20Spring%20%20End%20%20Semester.pdf"],

    "SPM_PYQs_2023_Spring_End_Semester": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/SPM/PYQs/2023%20Spring%20End%20Semester.pdf"],

    "SPM_PYQs_2023_Supp_Spring_Mid_Sem": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/SPM/PYQs/2023%20Supp%20Spring%20Mid%20Sem.pdf"],















    // Add more file URLs here
};


const folderUrls6thPYQs = {
    // https://api.github.com/repos/bibekchandsah/
    // dbms: 'https://api.github.com/repos/bibekchandsah/files/contents/trash/bin/download/KIIT%202022/B.Tech%204th%20semester/DBMS/PYQS',


    // Add more folder URLs here
};







// pdf preview
document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".clickLink");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var linkKey = this.getAttribute('data-id');
            let link;
            // if (fileUrls[linkKey]) {
            //     link = fileUrls[linkKey][0];}
            if (fileUrls6thPYQs[linkKey]) {
                link = fileUrls6thPYQs[linkKey][0];
            } else {
                console.error("URL not found for key: " + linkKey);
                return;
            }

            // Check if the URL is from GitHub and contains "blob"
            if (link.includes("github.com") && link.includes("blob")) {
                // Replace "blob" with "raw"
                link = link.replace("blob", "raw");
            }

            // var googleDocsURL = "https://docs.google.com/gview?url=" + encodeURIComponent(link) + "&embedded=true";
            // document.getElementById("myframe").src = googleDocsURL;

            // If the URL is not from GitHub, keep it unchanged
            var googleDocsURL;
            if (link.includes("github.com")) {
                googleDocsURL = "https://docs.google.com/gview?url=" + encodeURIComponent(link) + "&embedded=true";
            } else {
                googleDocsURL = link;
            }
            // document.getElementById("myframe").src = googleDocsURL;

            // Clear the iframe content before setting the new source
            var iframe = document.getElementById("myframe");
            iframe.src = ''; // Clear iframe content to avoid showing old content
            iframe.src = googleDocsURL; // Set the new content



            // Set modal title
            var modalTitle = this.getAttribute('data-id');
            document.getElementById("modalTitle").innerText = modalTitle;

            // Update download button text
            var downloadButton = document.getElementById("modalDownload");
            downloadButton.textContent = "Download";
            downloadButton.setAttribute("onclick", "downloadFiles(['" + linkKey + "'], this)");

            // Store the current link for refresh purpose
            var refreshButton = document.querySelector(".pdfRefresh");
            refreshButton.setAttribute("data-link", googleDocsURL); // Set data-link to the refresh button
        });
    });

    // Handle the .pdfRefresh button click
    var refreshButton = document.querySelector(".pdfRefresh");
    refreshButton.addEventListener("click", function () {
        var googleDocsURL = this.getAttribute("data-link");
        if (googleDocsURL) {
            document.getElementById("myframe").src = googleDocsURL;
        } else {
            console.error("No URL found to refresh.");
        }
    });
});




// store the subject data
// Initialize an empty JSON object to store the data
let subjectData = {};
// Function to update the JSON object with new data
function updateSubjectData(...entries) {
    // Loop through each entry in the arguments
    for (let i = 0; i < entries.length; i += 8) {
        let subject = entries[i];
        let year = entries[i + 1];
        let exam = entries[i + 2];
        let question = entries[i + 3];
        let questionValue = entries[i + 4];
        let solution = entries[i + 5];
        let solutionStatus = entries[i + 6];
        let solutionValue = entries[i + 7];
        // Check if the subject already exists in the JSON object
        if (!subjectData.hasOwnProperty(subject)) {
            // If not, initialize it with an empty array
            subjectData[subject] = [];
        }
        // Push new data to the array corresponding to the subject
        subjectData[subject].push({
            "year": year,
            "exam": exam,
            "question": question,
            "question-value": questionValue,
            "solution": solution,
            "solution-status": solutionStatus,
            "solution-value": solutionValue
        });
    }
}
// Clear the existing data in subjectData (assuming it's an object)
subjectData = {};
// Example usage:
updateSubjectData(
    // CC = Cloud Computing
    "CC", 2022, "Mid Semester", "Autumn Mid Semester", "CC_PYQs_2022_Autumn_Mid_Sem_Soln", "Solution", "Available", "CC_PYQs_2022_Autumn_Mid_Sem_Soln",
    "CC", 2023, "Mid Semester", "Supplementary Spring Mid Semester", "CC_PYQs_2023_Sup_Spring_Mid_Sem", "", "Not Available", "CC_PYQs_2023_Sup_Spring_Mid_Sem",
    "CC", "", "Mid Semester", "Question Bank", "CC_PYQs_Midsem_Question_Bank", "Other", "Available", "CC_PYQs_Midsem_Question_Bank",


    // ML = Machine Learning
    "ML", 2019, "End Semester", "Spring End Sem", "ML_PYQs_2019_Spring_End_Sem", "", "Not Available", "ML_PYQs_2019_Spring_End_Sem",
    "ML", 2022, "Mid Semester", "Mid Semester Solution", "ML_PYQs_2022_Mid_Sem_Solution", "Solution", "Available", "ML_PYQs_2022_Mid_Sem_Solution",
    "ML", 2023, "Mid Semester", "Spring Mid Sem Soln", "ML_PYQs_2023_Spring_Mid_Sem_Soln", "", "Available", "ML_PYQs_2023_Spring_Mid_Sem_Soln",
    "ML", "", "Question Bank Ans", "Question Bank Ans", "ML_PYQs_Question_Bank_Ans", "Other", "Available", "ML_PYQs_Question_Bank_Ans",


    // SPM = Software Project Management
    "SPM", 2019, "End Semester", "Autumn End Semester", "SPM_PYQs_2019_Autumn_End_Semester", "", "Not Available", "SPM_PYQs_2019_Autumn_End_Semester",
    "SPM", 2019, "End Semester", "Autumn End Semester", "SPM_PYQs_2019_Autumn_End_Semesterr", "", "Not Available", "SPM_PYQs_2019_Autumn_End_Semesterr",
    "SPM", 2021, "Mid Semester", "Online Spring Mid Semester", "SPM_PYQs_2021_Online_Spring_Mid_Sem", "", "Not Available", "SPM_PYQs_2021_Online_Spring_Mid_Sem",
    "SPM", 2022, "End Semester", "Spring End Semester", "SPM_PYQs_2022_Spring_End_Semester", "", "Not Available", "SPM_PYQs_2022_Spring_End_Semester",
    "SPM", 2023, "End Semester", "Spring End Semester", "SPM_PYQs_2023_Spring_End_Semester", "", "Not Available", "SPM_PYQs_2023_Spring_End_Semester",
    "SPM", 2023, "Mid Semester", "Supp Spring Mid Semester", "SPM_PYQs_2023_Supp_Spring_Mid_Sem", "", "Not Available", "SPM_PYQs_2023_Supp_Spring_Mid_Sem",










);
// Call the function to generate table rows based on existing subject data
generateTableRows();
// Accessing the JSON object:
// // console.log(subjectData);