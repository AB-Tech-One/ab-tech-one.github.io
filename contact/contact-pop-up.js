function sendEmail() {
    // Check if the form is correctly triggered
    console.log('Button clicked'); // Debugging to confirm if button click works
    
    const name = document.getElementById('Contact_Form_Name').value;
    const email = document.getElementById('Contact_Form_Email').value;
    const message = document.getElementById('Contact_Form_Message').value;
    
    // Basic validation: Ensure all fields are filled
    if (!name || !email || !message) {
        alert("Please fill out all fields before submitting.");
        return; // Prevent sending email if fields are empty
    }

    // Construct the mailto link with form data
    const mailtoLink = `mailto:contact@ab-techone.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
    
    // Open the default email client with pre-filled data
    window.location.href = mailtoLink;
}