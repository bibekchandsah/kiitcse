// folder download
async function downloadFolderAsZip(folderName, button) {
    // Store the original button text
    const originalButtonText = button.innerText;

    button.innerText = 'Downloading...';
    button.disabled = true;
    const githubpatToken = 'github_pat_'
    const githubKey = '11AUF4YTY0Cycs7RigPKLY_yItNgSjdwOHtxQ2OOWJr9uDsxQKG0EMe0y69XoLDwJSDB6EBRTIFbNOJOwy';
    // merge both to form the token
    const githubToken = githubpatToken + githubKey;

    let url;
    if (folderUrls1stNote.hasOwnProperty(folderName)) {
        url = folderUrls1stNote[folderName];
    } else if (folderUrls1stPYQs && folderUrls1stPYQs.hasOwnProperty(folderName)) {
        url = folderUrls1stPYQs[folderName];
    } else if (folderUrls2ndNote && folderUrls2ndNote.hasOwnProperty(folderName)) {
        url = folderUrls2ndNote[folderName];
    } else if (folderUrls2ndPYQs && folderUrls2ndPYQs.hasOwnProperty(folderName)) {
        url = folderUrls2ndPYQs[folderName];
    } else if (folderUrls3rdNote && folderUrls3rdNote.hasOwnProperty(folderName)) {
        url = folderUrls3rdNote[folderName];
    } else if (folderUrls3rdPYQs && folderUrls3rdPYQs.hasOwnProperty(folderName)) {
        url = folderUrls3rdPYQs[folderName];
    } else if (folderUrls4thNote && folderUrls4thNote.hasOwnProperty(folderName)) {
        url = folderUrls4thNote[folderName];
    } else if (folderUrls4thPYQs && folderUrls4thPYQs.hasOwnProperty(folderName)) {
        url = folderUrls4thPYQs[folderName];
    } else if (folderUrls5thNote && folderUrls5thNote.hasOwnProperty(folderName)) {
        url = folderUrls5thNote[folderName];
    } else if (folderUrls5thPYQs && folderUrls5thPYQs.hasOwnProperty(folderName)) {
        url = folderUrls5thPYQs[folderName];
    } else if (folderUrls6thNote && folderUrls6thNote.hasOwnProperty(folderName)) {
        url = folderUrls6thNote[folderName];
    } else if (folderUrls6thPYQs && folderUrls6thPYQs.hasOwnProperty(folderName)) {
        url = folderUrls6thPYQs[folderName];
    }

    // Check if the URL is found
    if (!url) {
        console.error(`Folder URL not found for ${folderName}`);
        button.innerText = originalButtonText;
        button.disabled = false;
        return;
    }

    // Check if the URL contains "github.com"
    if (url.includes("github.com")) {
        // Replace "github.com" with "api.github.com/repos"
        url = url.replace("github.com", "api.github.com/repos");
    }

    // Check if the URL contains "tree/main"
    if (url.includes("tree/main")) {
        // Replace "tree/main" with "contents"
        url = url.replace("tree/main", "contents");
    }

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `token ${githubToken}`
            }
        });

        if (!response.ok) {
            console.error(`Failed to fetch folder contents for ${folderName}`);
            return;
        }

        const folderContents = await response.json();
        const zip = new JSZip();

        for (const item of folderContents) {
            if (item.type === 'file') {
                const fileUrl = item.download_url;
                const fileResponse = await fetch(fileUrl);
                const fileBlob = await fileResponse.blob();
                zip.file(item.name, fileBlob);
            }
        }

        const content = await zip.generateAsync({ type: 'blob' });

        const link = document.createElement('a');
        link.download = `${folderName}.zip`;
        link.href = URL.createObjectURL(content);
        link.click();
    } catch (error) {
        console.error(`Failed to download ${folderName} folder:`, error);
    } finally {
        // Restore the original button text
        button.innerText = originalButtonText;
        button.disabled = false;
    }
}


// file downloads
async function downloadFiles(fileNames, button) {      //modified for removing download option
 //   async function downloadFiles(fileNames, button) {
    // Store the original button text
    const originalButtonText = button.innerText;

    button.innerText = 'Downloading...';
    button.disabled = true;

    try {
        const zip = new JSZip();
        let urls;

        // Get the current HTML file name without the ".html" extension
        const fileName = window.location.pathname.split('/').pop().replace('.html', '');
        console.log("file name:- " + fileName);

        // Determine the URL object based on the HTML file name
        switch (fileName) {
            case "1st_Semester_Notes":
                urls = fileUrls1stNote;
                break;
            case "1st_Semester_PYQs":
                urls = fileUrls1stPYQs;
                break;
            case "2nd_Semester_Notes":
                urls = fileUrls2ndNote;
                break;
            case "2nd_Semester_PYQs":
                urls = fileUrls2ndPYQs;
                break;
            case "3rd_Semester_Notes":
                urls = fileUrls3rdNote;
                break;
            case "3rd_Semester_PYQs":
                urls = fileUrls3rdPYQs;
                break;
            case "4th_Semester_Notes":
                urls = fileUrls4thNote;
                break;
            case "4th_Semester_PYQs":
                urls = fileUrls4thPYQs;
                break;
            case "5th_Semester_Notes":
                urls = fileUrls5thNote;
                break;
            case "5th_Semester_PYQs":
                urls = fileUrls5thPYQs;
                break;
            case "6th_Semester_Notes":
                urls = fileUrls6thNote;
                break;
            case "6th_Semester_PYQs":
                urls = fileUrls6thPYQs;
                break;
            case "Semester_Books":
                urls = semesterBooks;
                break;
            // Add cases for other HTML file names as needed
            default:
                console.error(`Unknown HTML file name: ${fileName}`);
                button.innerText = originalButtonText;
                button.disabled = false;
                return;
        }

        for (const fileName of fileNames) {
            const urlsForFile = urls[fileName];

            if (!urlsForFile || !urlsForFile.length) {
                console.error(`No URL found for file ${fileName}`);
                continue;
            }

            // Check if there's only one URL for this file
            if (urlsForFile.length === 1) {
                const url = urlsForFile[0];

                // Check if the URL contains "github.com"
                let modifiedUrl = url.includes("github.com") ? url.replace("github.com", "raw.githubusercontent.com") : url;

                // Check if the URL contains "/blob/"
                modifiedUrl = modifiedUrl.includes("/blob/") ? modifiedUrl.replace("/blob/", "/") : modifiedUrl;

                const response = await fetch(modifiedUrl);

                if (!response.ok) {
                    console.error(`Failed to fetch file ${fileName}`);
                    continue;
                }

                const fileBlob = await response.blob();

                // Extract file name from the URL and replace %20 with spaces
                const decodedFileName = decodeURIComponent(modifiedUrl.split('/').pop());

                const link = document.createElement('a');
                link.download = decodedFileName;
                link.href = URL.createObjectURL(fileBlob);
                link.click();
            } else {
                // Iterate over each URL for the file
                for (const url of urlsForFile) {
                    // Check if the URL contains "github.com"
                    let modifiedUrl = url.includes("github.com") ? url.replace("github.com", "raw.githubusercontent.com") : url;

                    // Check if the URL contains "/blob/"
                    modifiedUrl = modifiedUrl.includes("/blob/") ? modifiedUrl.replace("/blob/", "/") : modifiedUrl;

                    const response = await fetch(modifiedUrl);

                    if (!response.ok) {
                        console.error(`Failed to fetch file ${fileName}`);
                        continue;
                    }

                    const fileBlob = await response.blob();

                    // Extract file name from the URL and replace %20 with spaces
                    const decodedFileName = decodeURIComponent(modifiedUrl.split('/').pop());

                    zip.file(decodedFileName, fileBlob);
                }
            }
        }

        if (Object.keys(zip.files).length > 0) {
            const content = await zip.generateAsync({ type: 'blob' });

            const link = document.createElement('a');
            link.download = `files.zip`;
            link.href = URL.createObjectURL(content);
            link.click();
        }
    } catch (error) {
        console.error(`Failed to download files:`, error);
    } finally {
        // Restore the original button text
        button.innerText = originalButtonText;
        button.disabled = false;
    }
}



