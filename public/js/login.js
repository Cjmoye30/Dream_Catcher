// create event listener for the button click
$('#login-form').on('submit', async (e) => {
    try {
        // prevent the default behavior of reloading the screen when the submit button was hit
        e.preventDefault();

        // get the data from the login page and store it in variables
        const data = {
            email: $('#email-login').val(),
            password: $('#password-login').val()
        };

        // send the data to our login route to then be processed to see if these match something already in our DB
        const response = await fetch('/api/users/login', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const responseData = await response.json();
        console.log(responseData);

        if (responseData.success) {
            window.location.replace('/journal');
        }

    } catch (err) {
        console.log("something went wrong")
    }
});


