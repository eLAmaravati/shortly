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
$('#urlSubmit').on('click', function () {

    $.ajax({
        url: 'https://api.shrtco.de/v2/shorten',
        type: 'get',
        dataType: 'json',
        data: {
            'url': $('#urlInput').val(),
        },

        success: function (hasil) {
            if (hasil.ok == true) {
                let shortlink = hasil.result;
                
                // $.each(shortlink, function (i, data) {
                //     $('#form-result').append(`
                //     <p>`+ data.original_link +`</p>
                //     <p>`+ data.short_link +`</p>
                //     <button>Copy</button>
                //     `)
                // });

                // $(shortlink, function (data) {
                //     $('#form-result').html(
                //         `
                //         <p>`+ data.original_link +`</p>
                //         <p>`+ data.short_link +`</p>
                //         <button>Copy</button>
                //         `
                //     )
                // });
// End loop
                
                // console.log(shortlink);

                $('.form__wrapper').after(`
                <div class="columns mt-6 box" id="form-result">
                <div class="column is-8">
                <p class="link__original">`+ shortlink.original_link +`</p>
                </div>
                <div class="column is-2">
                <p class="link__short">`+ shortlink.short_link +`</p>
                </div>
                <div class="column is-2">
                <a class="button button-signup" role="button">Copy</a>
                </div>
                </div>
                `)
            }
            else {

                alert('url salah');
            }
        }
        // End Success
    });
    // End Ajax
    
});

// $('#urlInput').on('click', function () {
//     alert('hello'); 
// });