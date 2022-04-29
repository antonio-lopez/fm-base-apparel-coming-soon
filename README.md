# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](/images/screenshot.png)

### Links

- [Solution](https://www.frontendmentor.io/solutions/base-apparel-coming-soon-page-using-tailwind-css-ByB2ZC_B5)
- [Live Site](https://antonio-base-apparel-coming-soon.netlify.app/)

## My process

### Built with

- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom user interfaces.
- Mobile-first workflow
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

I learned how to use CSS Grid with Tailwind CSS. For mobile I set the one column with `grid-col-1`. For larger screens I expanded the columns to 2 with `lg:grid-cols-2` and rows to 4 using `lg:grid-rows-4`. Tailwind has classes that can set a start and end on a column and row. An example is `lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-5`

I also learned to implement Javascript with Tailwind by targeting an elements ID and adding class. An example is displaying a custom error message when an email address is not formatted correctly. The message is hidden by default but triggered upon form submit.

```

<p class="hidden pt-2 text-softRed lg:pl-8" id="error-message">
	Please provide a valid email
</p>


//script.js
const errorText = document.getElementById('error-message');

submitButton.addEventListener('click', function (event) {
	const input_text = input.value;
	if (!regex.test(input_text)) {
		event.preventDefault();
		errorText.style.display = 'block';
	}
});

```

### Useful resources

- [Tailwind CSS Grid](https://tailwindcss.com/docs/grid-column) - Utilities for controlling how elements are sized and placed across grid columns

## Author

👤 **Antonio Lopez**

- Website: [Antonio Lopez](https://www.antoniolopez.me/)
- Github: [@antonio-lopez](https://github.com/antonio-lopez)
- Frontend Mentor: [@antonio-lopez](https://www.frontendmentor.io/profile/antonio-lopez)
