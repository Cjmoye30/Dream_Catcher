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