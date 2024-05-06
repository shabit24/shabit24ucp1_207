document.addEventListener('DOMContentLoaded', function() {
    updateTime();
  });
  
  function updateTime() {
    var date = new Date();
    var hours = date.getHours();
    var greeting;
  
    if (hours < 12) {
      greeting = "Good morning";
    } else if (hours < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }
  
    var greetingDiv = document.querySelector('.greeting');
    greetingDiv.textContent = greeting + ", [Shabit]!";
  
    var dateTimeDiv = document.querySelector('.date-time');
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    dateTimeDiv.textContent = date.toLocaleDateString('en-US', options);
  
    setTimeout(updateTime, 60000); // Update every minute
  }
  
  function showAlert() {
    alert("I make this website for my UCP-1 ");
  }
  