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
    const interpretation = await interpretDream(description);
    document.getElementById('interpretation').innerHTML = interpretation;
});

// On "Submit Journal" click, send a response to the post route to create the new dream entry from the fields on the page
$("#submitDreamBtn").on("click", async (e) => {
    console.log("Submit journal button clicked.");

    // Object for the data used to send to the dreams table (subject, description, interpretation)
    // user_id will be added during the post through the session.user_id
    const dreamObj = {
        subject: $("#subject").val(),
        description: $("#description").val(),
        interpretation: $("#interpretation").text()
    };
    console.log(dreamObj);

    const response = await fetch('/journal/api/submit-dream', {
        method: "POST",
        body: JSON.stringify(dreamObj),
        headers: {
            "Content-Type": "application/json"
        }
    });

    console.log(response);

    const responseData = await response.json();
    if(response.success) {
        alert("Your dream has been logged - we can replace this with something better - maybe a modal as a confirmation")
    }

    // reload the page to display the new dream on the page

})
