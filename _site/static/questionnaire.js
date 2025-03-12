document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("questionnaire-form");
    const responseMessage = document.getElementById("response-message");
    const info = document.getElementById("info");

    // Parse unique_id from URL
    const urlParams = new URLSearchParams(window.location.search);
    const uniqueId = urlParams.get("unique_id");

    if (uniqueId) {
        info.textContent = `You are submitting a response for: ${uniqueId}`;
    } else {
        info.textContent = "Error: Unique ID not found.";
        form.style.display = "none";
        return;
    }

    // Handle form submission
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Gather form data
        const data = {
            unique_id: uniqueId,
            ie: document.getElementById("ie").value,
            ns: document.getElementById("ns").value,
            ft: document.getElementById("ft").value,
            jp: document.getElementById("jp").value,
        };

        try {
            // Send data to Google Sheets
            await submitToGoogleSheets(data);
            responseMessage.textContent = "Thank you for submitting your response!";
            form.reset();
        } catch (error) {
            console.error(error);
            responseMessage.textContent = "An error occurred. Please try again.";
        }
    });
});

// Submit data to Google Sheets
async function submitToGoogleSheets(data) {
    const scriptURL = "https://script.google.com/macros/s/AKfycbwpjCp7dJe9X3fBKdZr_Gn8naV2g7ZFFmD4V0nCf-izrs6msFVO0tB2Eugkyt0VDz64/exec"; // Replace with your Google Apps Script URL
    const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Failed to submit data");
    }

    return response.json();
}
