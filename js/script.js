// Navbar
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
});
  

// shrtcode API
// function changeFormAction(event) {
//     var item = document.getElementById("item").value;
//     var form = this;
//     form.action = "https://example.com/api/api?item=" + item + "&auth=AUTHENTICATIONtoken";
    
//     // for demonstration, don't actually submit the form, just print out the form action
//     console.log(form.action);
//     event.preventDefault();
//   }

// $('#form-shortly').on('submit', function () {
//     const input = $('#urlInput').val();
//     const form = this,
//         action = '';
// })  




$('#urlSubmit').on('click', function () {

    $.ajax({
        url: 'https://api.shrtco.de/v2/shorten',
        type: 'post',
        dataType: 'json',
        data: {
            'url': $('#urlInput').val(),
        },

        success: function (result) {
            if (result.ok == true) {
                console.log(result);
            }
            else {
                
                $('#form-result').html('<p>No URL specified ("url" parameter is empty)</p>')
            }
        }
        // End Success
    });
    // End Ajax
    
});

// $('#urlInput').on('click', function () {
//     alert('hello'); 
// });