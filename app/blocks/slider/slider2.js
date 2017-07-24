function Slideshow(element) {
	this.slider = document.getElementsByClassName(element)[0];
	this.slides = this.slider.getElementsByClassName('slider__item');
	this.bullets = this.slider.getElementsByClassName('slider-nav__bullet');
	this.currentSlide = 0;
	this.slideClassName = this.slides[this.currentSlide + 1].className;
	this.slideClassNameActive = this.slides[this.currentSlide].className;
	this.bulletClassName = this.bullets[this.currentSlide + 1].className;
	this.bulletClassNameActive = this.bullets[this.currentSlide].className;
	this.interval = null;
}

Slideshow.prototype.intervalSlideshow = function () {
	this.interval = setInterval(this.nextSlide.bind(this), 3000);
	this.userClick();
};

Slideshow.prototype.nextSlide = function () {
	this.slides[this.currentSlide].className = this.slideClassName;
	this.bullets[this.currentSlide].className = this.bulletClassName;
	this.currentSlide = (this.currentSlide + 1) % this.slides.length;
	this.slides[this.currentSlide].className = this.slideClassNameActive;
	this.bullets[this.currentSlide].className = this.bulletClassNameActive;
};

Slideshow.prototype.userClick = function () {
	const self = this;
	for (let ind = 0; ind < self.bullets.length; ind++) {
		self.bullets[ind].addEventListener('click', function () {
			clearInterval(self.interval);
			self.slides[self.currentSlide].className = self.slideClassName;
			self.bullets[self.currentSlide].className = self.bulletClassName;
			self.slides[ind].className = self.slideClassNameActive;
			self.bullets[ind].className = self.bulletClassNameActive;
			self.currentSlide = ind;
			self.interval = setInterval(self.nextSlide.bind(self), 3000);
		});
	}
};

const slider = new Slideshow('slider');

slider.intervalSlideshow();