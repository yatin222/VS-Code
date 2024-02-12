document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // Display confirmation message
    var confirmation = document.getElementById('confirmation');
    confirmation.innerHTML = '<p>Thank you for your feedback, ' + name + '!</p>';
    confirmation.style.display = 'block';
    
    // You can send the feedback data to your server here for further processing
    
    // Reset form fields
    document.getElementById('feedbackForm').reset();
  });
  