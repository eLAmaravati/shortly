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
function shortLink() {
    $.ajax({
        url: 'https://api.shrtco.de/v2/shorten',
        type: 'get',
        dataType: 'json',
        data: {
            'url': $('#urlInput').val(),
        },

        success: function (data) {
            if (data.ok == true) {
                let shortlink = data.result;
                

                $('.form__wrapper').after(`
                <div class="columns mt-6 is-vcentered" id="form-result">
                <div class="column is-8">
                <a href="`+ shortlink.original_link + `" class="link__original" target="_blank" rel="nofollow noreferrer">` + shortlink.original_link + `</a>
                </div>
                <div class="column is-2">
                <a href"`+ shortlink.short_link + `" class="link__short" target="_blank" rel="nofollow noreferrer">` + shortlink.short_link + `</a>
                </div>
                <div class="column is-2">
                <a class="button button-copy" role="button">Copy</a>
                </div>
                </div>
                `)

            }

            else {
                shortLink(); 
           }
        }
        // End Success
    });
    // End Ajax
}




$('#urlSubmit').on('click', function () {
    shortLink();    
});



// Copied URL




$('.section__form').on('click', '.button-copy', function () {
    const copyText = $("link__shortlink");

    // copyText.select();
    // copyText.setSelectionRange(0, 99999);

    // navigator.clipboard.writeText(copyText.value);

    // alert("Copied the text: " + copyText.value);


    // function copyToClipboard(element) {
    //     var $temp = $("<input>");
    //     $("body").append($temp);
    //     $temp.val($(element).text()).select();
    //     document.execCommand("copy");
    //     $temp.remove();
    //   }

    alert('url salah');
});


  
// function copyURL() {
//     const copyText = document.getElementsByClassName("link__shortlink");

//     copyText.select();
//     copyText.setSelectionRange(0, 99999); /* For mobile devices */

//     navigator.clipboard.writeText(copyText.value);

//     alert("Copied the text: " + copyText.value);
// }

// function copyToClipboard(element) {
//     var $temp = $("<input>");
//     $("body").append($temp);
//     $temp.val($(element).text()).select();
//     document.execCommand("copy");
//     $temp.remove();
//   }
  
let url = document.location.href

navigator.clipboard.writeText(url).then(function() {
    console.log('Copied!');
}, function() {
    console.log('Copy error')
});

