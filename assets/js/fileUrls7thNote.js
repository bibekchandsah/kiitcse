const fileUrls7thNote = {
    // https://raw.githubusercontent.com/bibekchandsah
    // "dbms_solution_spring_end_semester_2023": ['https://raw.githubusercontent.com/bibekchandsah/files/main/trash/bin/download/KIIT%202022/B.Tech%204th%20semester/DBMS/PYQS/DBMS%20Solution%20(Spring%20End%20sem%202023).doc'],
    
    // DA = Data Analysis
    "DA_Chapter_II_Describing_the_Distribution_of_a_Variable": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/DA/CHAPTER%20II%20(Describing%20the%20Distribution%20of%20a%20Variable).pdf"],
    "DA_Chapter_III_Regression": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/DA/CHAPTER%20III%20(Regression).pdf"],
    "DA_Full_Slides": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/DA/DA%20full%20slides.pdf"],
    "DA_Emperical_Laws": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/DA/Emperical%20Laws.pdf"],
    "DA_Stastical_Concepts": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/DA/Stastical%20Concepts.pdf"],

    // IOT = Internet of Things
    "IOT_Chapter_1": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/IOT/Chapter-1.pdf"],
    "IOT_Chapter_3": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/IOT/Chapter-3.pdf"],
    "IOT_Chapter_5": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/IOT/Chapter-5.pdf"],
    "IOT_Chapter_2": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/IOT/chapter-2.pdf"],

    // NLP = Natural Language Processing
    "NLP_Classification_In_NLP": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/NLP/Classification%20In%20NLP.pdf"],
    "NLP_Combined_NLP": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/NLP/Combined_NLP.pdf"],
    "NLP_Introduction_to_NLP": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/NLP/Introduction%20to%20NLP.pdf"],
    "NLP_NLP_Lect_2_Words_and_Morphology": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/NLP/NLP%20Lect%202%20Words%20and%20Morphology.pdf"],
    "NLP_NLP_Lect_3_Language_Model": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/NLP/NLP%20Lect%203%20Language%20Model.pdf"],
    "NLP_Noisy_Channel_Spelling": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/NLP/Noisy%20Channel%20Spelling.pdf"],
    "NLP_Text_processing_Tutorial": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/NLP/Text_processing%20-Tutorial.pdf"],
    "NLP_nlp_full_notes": ["https://github.com/bibekchandsah/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%206th%20semester/NLP/nlp%20full%20notes.pdf"],











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
    // Data Analysis
    "Data Analysis", "Chapter II Describing the Distribution of a Variable", "DA_Chapter_II_Describing_the_Distribution_of_a_Variable",
    "Data Analysis", "Chapter III Regression", "DA_Chapter_III_Regression",
    "Data Analysis", "Full Slides", "DA_Full_Slides",
    "Data Analysis", "Empirical Laws", "DA_Emperical_Laws",
    "Data Analysis", "Statistical Concepts", "DA_Stastical_Concepts",

    // Internet of Things 
    "Internet of Things", "Chapter 1", "IOT_Chapter_1",
    "Internet of Things", "Chapter 3", "IOT_Chapter_3",
    "Internet of Things", "Chapter 5", "IOT_Chapter_5",
    "Internet of Things", "Chapter 2", "IOT_Chapter_2",

    // Natural Language Processing 
    "Natural Language Processing", "Classification In NLP", "NLP_Classification_In_NLP",
    "Natural Language Processing", "Combined NLP", "NLP_Combined_NLP",
    "Natural Language Processing", "Introduction to NLP", "NLP_Introduction_to_NLP",
    "Natural Language Processing", "Lecture 2 Words and Morphology", "NLP_NLP_Lect_2_Words_and_Morphology",
    "Natural Language Processing", "Lecture 3 Language Model", "NLP_NLP_Lect_3_Language_Model",
    "Natural Language Processing", "Noisy Channel Spelling", "NLP_Noisy_Channel_Spelling",
    "Natural Language Processing", "Text Processing Tutorial", "NLP_Text_processing_Tutorial",
    "Natural Language Processing", "Full Notes", "NLP_nlp_full_notes",


);

// Call the function to generate table rows based on existing data
generateNoteTableRows();

// Accessing the object:
// console.log(subjectNoteData);
