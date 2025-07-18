// Slider JS cho phần Ẩm Thực
let currentSlide = 0;
const foodTrack = document.querySelector('.food-track');
const slides = document.querySelectorAll('.food-track .main_item');
const totalSlides = slides.length;

function updateSlider() {
  foodTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(n) {
  let nextSlide = currentSlide + n;
  if (nextSlide < 0) nextSlide = totalSlides - 1;
  if (nextSlide >= totalSlides) nextSlide = 0;
  currentSlide = nextSlide;
  updateSlider();
}

// Đảm bảo slider khởi tạo đúng vị trí
updateSlider();

// Nếu muốn dùng phím mũi tên trái/phải để chuyển slide:
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') moveSlide(-1);
  if (e.key === 'ArrowRight') moveSlide(1);
});

