async function interpretDream(description) {
    try {
        const response = await fetch('/journal/api/interpret-dream', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description })
        });

        if (response.ok) {
            const data = await response.json();
            return data.interpretation;
        } else {
            throw new Error('Failed to fetch dream interpretation');
        }
    } catch (error) {
        console.error('Error fetching dream interpretation:', error);
        return 'Error fetching dream interpretation';
    }
}

// Add event listener for the form submission
document.getElementById('dreamForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle the form submission here 
});

// Add event listener for the "Interpret" button click
document.getElementById('interpretBtn').addEventListener('click', async () => {
    const description = document.getElementById('description').value;
    const loadingElement = document.getElementById('loading');
    const interpretationElement = document.getElementById('interpretation');

    // Check if the description is empty
    if (!description.trim()) {
        // Set the loading element's text to the message
        loadingElement.innerText = 'Please enter a dream for DreamerGPT...';
        loadingElement.style.display = 'block'; // Make sure the message is visible
        return; // Exit the function early
    } else {
        loadingElement.innerText = 'DreamerGPT is thinking...'; // Restore original loading message
    }
    
    // Show the loading indicator
    loadingElement.style.display = 'block';
    interpretationElement.innerHTML = '';

    try {
        const interpretation = await interpretDream(description);
        interpretationElement.innerHTML = interpretation;
    } catch (error) {
        interpretationElement.innerHTML = 'Error fetching dream interpretation';
    }

    // Hide the loading indicator
    loadingElement.style.display = 'none';
});

// Event listener for dream submit button
$("#submitDreamBtn").on("click", async (e) => {
    // Object for the data used to send to the dreams table (subject, description, interpretation)
    const dreamObj = {
        subject: $("#subject").val(),
        description: $("#description").val(),
        interpretation: $("#interpretation").text()
    };

    // Send a POST request to the correct route to get the dream added
    const response = await fetch('/journal/api/submit-dream', {
        method: "POST",
        body: JSON.stringify(dreamObj),
        headers: {
            "Content-Type": "application/json"
        }
    });

    // If the response is good, show confirmation and log the dream
    const responseData = await response.json();
    if (responseData.success) {
        alert("Your dream has been logged - we can replace this with something better - maybe a modal as a confirmation");
        // reload the page to display the new dream on the page
        window.location.reload()
    } else {
        alert("Something went wrong.")
    }
});

// Event listener for delete button
$(".delete-button").on("click", async (e) => {
    // Button id corresponds to the id of the dream to easily delete it
    const dreamId = e.target.id;

    // fetch request to delete
    const response = await fetch(`/journal/api/delete-dream/${dreamId}`, {
        method: "DELETE",
    });

    // Reload page on success to remove it from the page
    if (response.ok) {
        window.location.reload();
    } else {
        console.log("Something went wrong")
    }
})