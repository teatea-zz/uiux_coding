// Clone Menu and Info Elements
const menu = document.querySelector('.navi');
const info = document.querySelector('.info');
const newMenuBox = document.querySelector('.new-mobile-menu');
const newMenu = menu.cloneNode(true);
const newInfo = info.cloneNode(true);

newMenuBox.insertAdjacentElement('beforeend', newMenu);
newMenuBox.insertAdjacentElement('beforeend', newInfo);

// Mobile Menu Toggle Function
const mobileMenuIcon = document.querySelector('.mobile-icon');

mobileMenuIcon.addEventListener('click', (e) => {
  const target = e.currentTarget;

  target.classList.toggle('active');

  const menuHeight = document.querySelector('.new-mobile-menu').scrollHeight;
  // scrollHeight 요소가 펼쳐졌을 때의 높이

  if (target.classList.contains('active')) {
    target.classList.remove('not-active');
    newMenuBox.style.height = `${menuHeight}px`;
  } else {
    target.classList.add('not-active');
  }
});

// Fixed Header Style and meet section start animation When Scrolling Down
const header = document.querySelector('.header');
const meetSection = document.querySelector('.meet-section');
const meetSectionTop = meetSection.offsetTop;

const scrCtrl = () => {
  const scry = window.scrollY; // 화면 최상단이 위치한 스크롤 위치값
  if (scry > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }

  if (scry > meetSectionTop - 200) {
    meetSection.classList.add('on');
  }
};

window.addEventListener('scroll', scrCtrl);

// Features Section Data
const features = [
  {
    image: '/soaply/images/about-icon-1.svg',
    title: 'For All Skin Types',
    text: '마음가짐은 버리기 개연성과 흙이 듯이 있자. 때문 시간에 그래 생각하도록 타 위배되어 사람으로 원직이 사다 머세요.',
  },
  {
    image: '/soaply/images/about-icon-2.svg',
    title: '100% Organic',
    text: '르네상스다 가는가 얼마를, 내려오다 그에 많은, 위하게 욕심인데 대한 보세요. 하지만 쉬쉬하고 대륙에 쐐기가, 되다 가까이의, 않으니 서먹서먹하다.',
  },
  {
    image: '/soaply/images/about-icon-3.svg',
    title: 'Cuelty-Free',
    text: '너가 데 공책이면 가야 앞의 보려 시어머니에 하지 이상하다. 그날으로 이곳에서 동안은 때가 모집의 그렇지 성만 내 없다.',
  },
];

const featuresWrapper = document.querySelector('.features');

features.forEach((feature) => {
  const featureElm = `
  <div class="feature">
    <div class="feature-icon">
      <img src="${feature.image}" alt="" />
    </div>
    <h4>${feature.title}</h4>
    <p>${feature.text}</p>
  </div>
  `;

  featuresWrapper.insertAdjacentHTML('beforeend', featureElm);
});

// Swiper Slider Codes ================================
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true, // 반복 여부

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
