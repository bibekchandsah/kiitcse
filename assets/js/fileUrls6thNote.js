const fileUrls6thNote = {
    // https://raw.githubusercontent.com/bibekchandsah
    // "dbms_solution_spring_end_semester_2023": ['https://raw.githubusercontent.com/bibekchandsah/files/main/trash/bin/download/KIIT%202022/B.Tech%204th%20semester/DBMS/PYQS/DBMS%20Solution%20(Spring%20End%20sem%202023).doc'],

    // ML = Machine Learning
    "ML_ML_Complete_Midsem_Pdf": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/ML/ML%20Complete%20Midsem%20Pdf.pdf"],
    "ML_ML_FULL_SLIDES_FINAL": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/ML/ML_FULL_SLIDES_FINAL.pdf"],
    "ML_Machine_Learning_Notes_1_20": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/ML/Machine%20Learning%20-Notes-1-20.pdf"],
    "ML_Machine_Learning_Notes_21_40": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/ML/Machine%20Learning%20-Notes-21-40.pdf"],
    "ML_Machine_Learning_Notes_41_67": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/ML/Machine%20Learning%20-Notes-41-67.pdf"],

    // CC = Cloud Computing
    "CC_Full_Slides": ['https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/CC/CC%20Full%20Slides.pdf'],
    "CC_Full_Slides_II": ['https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/CC/cc_full_slides.pdf'],

    // Software Project Management
    "SPM_Full_Slides_1": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/SPM/SPM%20Full%20Slides%20(1).pdf"],
    "SPM_Full_Slides": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/SPM/SPM%20full%20slides.pdf"],


    // Add more file URLs here
};


const folderUrls6thNote = {
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
            if (fileUrls6thNote[linkKey]) {
                link = fileUrls6thNote[linkKey][0];
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










// Note Data:
updateSubjectNoteData(
    // Cloud Computing
    "Cloud Computing", "Full Slides", "CC_Full_Slides",
    "Cloud Computing", "Full Slides II", "CC_Full_Slides_II",

    // Machine Learning
    "Machine Learning", "Complete Midsem Pdf", "ML_ML_Complete_Midsem_Pdf",
    "Machine Learning", "Full Slides Final", "ML_ML_FULL_SLIDES_FINAL",
    "Machine Learning", "Notes 1-20", "ML_Machine_Learning_Notes_1_20",
    "Machine Learning", "Notes 21-40", "ML_Machine_Learning_Notes_21_40",
    "Machine Learning", "Notes 41-67", "ML_Machine_Learning_Notes_41_67",

    // Software Project Management
    "Software Project Management", "Full Slides (1)", "SPM_Full_Slides_1",
    "Software Project Management", "Full Slides", "SPM_Full_Slides",



);

// Call the function to generate table rows based on existing data
generateNoteTableRows();

// Accessing the object:
// console.log(subjectNoteData);
