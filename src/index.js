

// import Swiper bundle with all modules installed
//   import Swiper from 'swiper/bundle';

//   // import styles bundle
// //   import 'swiper/css/bundle';
//   console.log(Swiper);


//   import Swiper from 'swiper';

  // import Swiper styles
//   import 'swiper/css';
// import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper('.mySwiper', {
        direction: 'vertical',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });


//  з суппорту

// import { founds } from "../data/support-data";

// // console.log(founds);


// const supportListEl = document.querySelector('.js-support_list');
// const supportBtnEl = document.querySelector('.js-support_btn');

// // supportBtnEl.addEventListener('click', renderMoreMarkup);

// const markup = founds.map(({ img, title, url }, index) => {
//     const number = (index + 1).toString().padStart(2, '0');
//     // console.log(title);
//     const imageName = title.toLowerCase().replaceAll(" ","");
//     // console.log(imageName);

// const imageUrl = new URL(
//   `./images/${imageName}.png`,
//   import.meta.url
// );
// console.log(imageUrl);
//   return `<li class="support__item"><a href="${url}" class="support__link" aria-label="${title}" target="_blank" rel="noopener norefferer nofollow">
//     <p class="support__number">${number}</p><img class="support__img" src= ${img} alt="${title}"/></a></li>`;
// });
// //    console.log(markup);

// let startIndex = 0;

// renderMarkup(markup, startIndex, findEndIndex(startIndex));

// function renderMarkup(arr, itemsCountStart, itemsCountEnd) {
//   const markupToRender = arr.slice(itemsCountStart, itemsCountEnd).join('');
//   startIndex = findEndIndex(startIndex);

//   supportListEl.insertAdjacentHTML('beforeend', markupToRender);

//   if (markup.length <= itemsCountEnd) {
//     supportBtnEl.style.display = 'none';
//     return;
//   }
// }

// function renderMoreMarkup() {
//   if(window.innerWidth < 768) {
//     renderMarkup(markup, startIndex, findEndIndex(startIndex + 1));
//     return
//   }
//   renderMarkup(markup, startIndex, findEndIndex(startIndex));
// }


// function findEndIndex(value) {
//   if (window.innerWidth < 768) {
//     return value + 4;
//   } else {
//     return value + 6;
//   }
// }























// import { founds } from "./data";


// // const imageUrl = new URL(
// //   'image.jpeg?as=webp&width=250',
// //   import.meta.url
// // );
// console.log(founds);
// // function renderMoreMarkup() {
// //   if(window.innerWidth < 768) {
// //     renderMarkup(markup, startIndex, findEndIndex(startIndex + 1));
// //     return
// //   }
// //   renderMarkup(markup, startIndex, findEndIndex(startIndex));
// // }
// const supportListEl = document.querySelector('.js-support_list');
// const supportBtnEl = document.querySelector('.js-support_btn');



// const markUp = founds.map(({ img, title, url }, index) => {
//     const number = (index + 1).toString().padStart(2, '0');
//     // console.log(title);
// //     const imageName = title.toLowerCase().replaceAll(" ","");
// //     // console.log(imageName);
// // // console.log(img);
// // const imageUrl = new URL(
// //   `../images/${imageName}.png`,
// //   import.meta.url
// // );
// // console.log(imageUrl);
//   console.log(img);

//   // <div class="swiper-slide">Slide 1</div>
//   return `<div class="support__item swiper-slide"><a href="${url}" class="support__link" aria-label="${title}" target="_blank" rel="noopener norefferer nofollow">
//     <p class="support__number">${number}</p><img class="support__img" src= ${img} alt="${title}"/></a></div>`;
// });

// function renderMarkup(arr) {


//   supportListEl.insertAdjacentHTML('beforeend', arr);

//   // if (markup.length <= itemsCountEnd) {
//   //   supportBtnEl.style.display = 'none';
//   //   return;
//   // }
// }
// renderMarkup(markUp)


// // supportBtnEl.addEventListener('click', renderMoreMarkup);
//   import Swiper, { Navigation, Pagination } from 'swiper';
//   // import Swiper and modules styles
// //   import '../node_modules/swiper/css';
// //   import '../../node_modules/swiper/css/navigation';
// //   import '../../node_modules/swiper/css/pagination';
//   import '../node_modules/swiper/modules/navigation/navigation.scss';


//   import '../node_modules/swiper/modules/pagination/pagination.scss';

//   import '../node_modules/swiper/swiper.css';
//   // init Swiper:
//   const swiper = new Swiper('.swiper', {
//     // configure Swiper to use modules
//     modules: [Navigation, Pagination],
    
//   });