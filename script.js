'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');
const section3 = document.querySelector('#section--3');
const sectionSignup = document.querySelector('.section--sign-up');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('nav');

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

/////////////////////////////////////////////////
// Smooth Scrolling
btnScrollTo.addEventListener('click', function () {
	// const s1coord = section1.getBoundingClientRect();

	// 	left: s1coord.left + window.scrollX,
	// 	top: s1coord.top + window.scrollY,
	// 	behavior: 'smooth',
	// });

	section1.scrollIntoView({behavior: 'smooth'});
});

///////////////////////////////////////////////
// Page Navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
// 	el.addEventListener('click', function (e) {
// 		e.preventDefault();
// 		// const id = this.getAttribute('href');
// 		const id = e.currentTarget.getAttribute('href');

// 		document.querySelector(id).scrollIntoView({behavior: 'smooth'});
// 	});
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
	e.preventDefault();

	if (e.target.classList.contains('nav__link')) {
		const id = e.target.getAttribute('href');
		document.querySelector(id).scrollIntoView({behavior: 'smooth'});
	}
});

////////////////////////////////////////////////////
//  tabed component

tabsContainer.addEventListener('click', function (e) {
	const clicked = e.target.closest('.operations__tab');

	if (!clicked) return;

	tabs.forEach(el => {
		el.classList.remove('operations__tab--active');
	});

	clicked.classList.add('operations__tab--active');

	tabsContent.forEach(el => el.classList.remove('operations__content--active'));

	document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

////////////////////////////////////////////////////
//  Menu fade animation

const handleHover = function (e) {
	if (e.target.classList.contains('nav__link')) {
		const link = e.target;
		const siblings = link.closest('.nav').querySelectorAll('.nav__link');

		const logo = link.closest('.nav').querySelector('img');

		siblings.forEach(el => {
			if (el !== link) {
				el.style.opacity = this;
				logo.style.opacity = this;
			}
		});
	}
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

////////////////////////////////////////////////////
//  Sticky Navigation

const obsCallback = function (entries, observer) {
	entries.forEach(entry => {
		console.log(entry);
	});
};

const obsOptions = {
	root: null,
	threshold: 0.1,
};

const initialCoords = section1.getBoundingClientRect();

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
