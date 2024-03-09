document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("api-call").addEventListener("click", function () {
        chrome.scripting.executeScript({
            target: {
                tabId: getCurrentTabId()
            },
            function: sendAPICall
        });
    });
});

function getCurrentTabId() {
    return chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        return tabs[0].id;
    });
}

function sendAPICall() {
    console.log("API");
    let reportUrl = document.querySelector("#report-url");

    /*
        fetch("https://api.example.com", {
            method: "POST", // ou "GET", "PUT", etc., selon votre API
            headers: {
                "Content-Type": "application/json",
                // Ajoutez les en-têtes nécessaires, par exemple, l"authentification
            },
            body: JSON.stringify({
                // Ajoutez les données que vous souhaitez envoyer à l"API
            })
        }).then(response => {
            if (!response.ok) {
                throw new Error("Erreur lors de la requête vers l\'API");
            }
            return response.json();
        }).then(data => {
            console.log("Réponse de l\'API:", data);
            // Traitez la réponse de l"API ici
        }).catch(error => {
            console.error("Erreur:", error);
        });
    */
}
