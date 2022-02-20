# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![](./images/desktop-preview.jpg)

### Links

- Solution URL: [Github Repository](https://github.com/eLAmaravati/shortly)
- Live Site URL: [https://elamaravati.github.io/shortly/](https://elamaravati.github.io/shortly/)

## My process

### Built with

- Semantic HTML5 markup
- SaSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- [ShrtCode](https://shrtco.de/docs/) - Shortcode API
- [Bulma](https://bulma.io/) - CSS framework
- jQuery AJAX

### What I learned

Beberapa catatan ketika mengerjakan _challenge_ ini:

**JavaScript & jQuery**

_Challenge_ ini memang sengaja saya ikuti untuk mengasah pemahaman saya tentang JavaScript dan jQuery sebelum belajar JavaScript framework.

**API**

Ah, susah _geuningan nya_ bikin web dari _public_ API _teh_.

**SaSS**

Tadinya, saya menggunakan CSS framework agar tak harus ngoding CSS terlalu banyak. Tapi, tahu-tahu sudah 500 baris lebih hanya untuk 1 _landing page_. SaSS membuat proses ngoding CSS jadi lebih mudah karena saya bisa membagi CSS ke dalam beberapa _file_.

**Metodologi BEM**

_Challenge_ ini juga sarana berlatih metode BEM. Meski masih sering bingung dalam menamai _class_, tapi dengan metode ini, jadi terasa lebih efektif ketika ngoding di SaSS. Seperti ini:

```.section {
    &__title {
        font-size: 2.5rem;
        text-align: center;
    }

    &__description {
        text-align: center;
    }
}
```

**Bulma - CSS Framework**

Jika dibandingkan Bootstrap, Bulma lebih ringan dan tidak terlalu banyak "ikut campur". Sayangnya _framework_ yang satu ini punya banyak kelemahan di _source code_ yang dijadikan contoh. Misal:

- Elemen `<a>` tanpa atribut `href`.
- Elemen `img` tanpa atribut `alt`.

Jadi, jika _developer_-nya tidak cukup jeli dan main copas saja, akan banyak sekali elemen HTML yang tidak valid. Untuk _layout_, saya cukup puas dengan Bulma.

Oh, satu lagi catatan: Bulma punya _class_ di level DOM seperti `section`, `footer`, dan `button`. Ini akan cukup menyulitkan jika kita menggunakan metodologi BEM untuk _class name_.

### Continued development

Untuk web yang mengambil data dari public API, sepertinya akan "seru" kalau menggabungkan dua metode antara cURL dan jQuery karena beberapa alasan:

- Untuk mengakses data dari dan ke API, PHP lebih aman karena _script_-nya tidak bisa dilihat oleh _user_. Setahu saya begitu.
- PHP juga lebih mudah "membaur" dengan HTML.
- JavaScript dan/atau jQuery diperlukan untuk elemen-elemen yang tidak bisa di-_handle_ oleh PHP.

Hmmm ... _what if_ web ini dibuat versi PHP-nya?

### Useful resources

Beberapa sumber yang sangat membantu dalam mengerjakan _challenge_ ini.

- [Pengkodisian Switch pada Javascript - WPU](https://www.youtube.com/watch?v=8Srl-qk5VvM)
- [Rest API #5 Apa Itu Public API? - WPU](https://www.youtube.com/watch?v=TvOFqREy7A8&list=PLFIM0718LjIW7AsIbnhFg15t9yx4H-sQ0&index=5)
- [CSS Linear Gradient - Mozilla](<https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient()>)

## Author

- Website - [Langit Amaravati](https://www.langitamaravati.com)
- Frontend Mentor - [@eLAmaravati](https://www.frontendmentor.io/profile/elamaravati)
- Twitter - [Langit Amaravati](https://www.twitter.com/eLAmaravati)
