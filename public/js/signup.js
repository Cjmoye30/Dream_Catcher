// Create the variables for the input fields we are needing to keep track of
const nameSignup = $("#name-signup");
const emailSignup = $("#email-signup");
const passwordSignup = $("#password-signup");

$(".signup-form").on("submit", async (e) => {
    e.preventDefault();

    try {

        // create object for the signup fields
        const signupData = {
            name: nameSignup.val(),
            email: emailSignup.val(),
            password: passwordSignup.val()
        };

        console.log(signupData);

        const response = await fetch('/api/users/signup', {
            method: "POST",
            body: JSON.stringify(signupData),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const responseData = await response.json();
        console.log("Response Data:", responseData);

        if (responseData.success) {
            console.log("redirect to the journal page");
            window.location.replace('/journal')
        } else {
            console.log("Something went wrong! Try again!")
        }

    } catch (err) {
        console.log(err)
    }


});