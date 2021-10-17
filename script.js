function sendEmail() {
    Email.send({
        SecureToken : "f0b6f4bc-27d1-459e-929d-2396c0aecaa9",
        To : 'dpetprojects@gmail.com',
        From : "dpetprojects@gmail.com",
        Subject : "New message from personal website from {}",
        Body : "And this is the body"
    }).then(
      message => alert("Mail has been sent successfully.  I'll get back to you soon!")
    );
}

function unsafeSendEmail() {
    Email.send({
    Host : "smtp.gmail.com",
    Username : "dpetprojects@gmail.com",
    Password : "0c3l24P3t7",
    To : 'dpetprojects@gmail.com',
    From : "dpetprojects@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
  }).then(
  message => alert(message)
  );
}