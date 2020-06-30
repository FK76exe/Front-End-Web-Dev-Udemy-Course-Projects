chrome.runtime.onMessage.addListener((requests,sender,sendResponse) => {
    if (requests.action === "download"){
        for(let i = 0; i < requests.data.length; i++){
            chrome.downloads.download({"url": requests.data[i].src});
        }

        sendResponse("Done");
    }
})