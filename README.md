# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
<!-- - [Acknowledgments](#acknowledgments) -->

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](/screenshot.png)

### Links

- Solution URL: [github.com/johnmal-dev/faq-accordion-card](https://github.com/johnmal-dev/faq-accordion-card)
- Live Site URL: [johnmal-faq-accordion-card.netlify.app](https://johnmal-faq-accordion-card.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- PureRef Images App

### What I learned
- How to build an accordion feature
```html
<body>
  <div class="card">
    ...
    <div class="accordion-wrapper">
      <div class="accordion">
        ...
      </div>
      <div class="panel">
        <p>
          ...
        </p>
      </div>
    </div>
    ...
  </div>
</body>
```
- Use CSS custom properties (variables)
```css
.accordion {
  cursor: pointer;
  transition: .4s;
  &::before {
    content: url(/images/icon-arrow-down.svg);
  }
}
.accordion.open {
  font-weight: 700;
  &::before {
    content: url(/images/icon-arrow-down.svg);
    transform: rotate(180deg);
  }
}
```
- How to insert images using psuedo-elements
```
.card {
  position: relative;
  ...
  }
  .img-container {
    z-index: 1;
    @media (min-width: 1000px) {
      position: absolute;
      ...
      overflow: hidden;
    }
    &::before {
      content: url(/images/bg-pattern-mobile.svg);
      display: block;
      overflow: hidden;
      z-index: 1;
      position: absolute;
      @media (min-width: 1000px) {
        display: none;
      }
    }
    &::after {
      content: url(/images/bg-pattern-desktop.svg);
      display: none;
      @media (min-width: 1000px) {
        display: block;
        z-index: -1;
        position: absolute;
      }
    }
  }
}
```

### Continued development

Working with the images using pseudo elements was a lot of trial and error. Going back to the basic CSS concepts helped me get through roadblocks. Ideally, the card should've been more responsive, but the pseudo-element images would move in ways that I didn't like. Because of this, I kept the cards to two states: mobile and desktop.

Any feedback would be greatly appreciated.

### Useful resources

- [PureRef](https://www.pureref.com/) - This helped me compare my work to the provided example images. I really like this app and use it for all Frontend Mentor challenges.
- [Coder Coder](https://www.youtube.com/watch?v=FboXxLxg8eo) - This is an amazing youtube video which showed me how to approach using pseudo elements for this challenge.

## Author

- Website - [John Malapit](https://www.johnmal.dev)
- Frontend Mentor - [@johnmal-dev](https://www.frontendmentor.io/profile/johnmal-dev)
- Twitter - [@johnmal_dev](https://www.twitter.com/johnmal_dev)

<!-- ## Acknowledgments -->