const tabs = document.querySelectorAll('.tab');
const pointers = Array.from(document.querySelectorAll('.pointer'));

const countHealthAndBeauty = document
  .querySelector('.tab_healtbeauty')
  .querySelector('.tab__count');
const countShops = document.querySelector('.tab_shops .tab__count');
const countEducation = document.querySelector('.tab_education .tab__count');
const countChilds = document.querySelector('.tab_childs .tab__count');
const countChill = document.querySelector('.tab_chill .tab__count');

const healthAndBeauty = pointers.filter(function (ptr) {
  if (ptr.classList.contains('pointer_health') || ptr.classList.contains('pointer_beauty')) {
    return ptr;
  }
});
countHealthAndBeauty.innerHTML = healthAndBeauty.length;

const shops = pointers.filter(function (ptr) {
  if (ptr.classList.contains('pointer_cart') || ptr.classList.contains('pointer_coffee')) {
    return ptr;
  }
});
countShops.innerHTML = shops.length;

const education = pointers.filter(function (ptr) {
  if (ptr.classList.contains('pointer_education')) {
    return ptr;
  }
});
countEducation.innerHTML = education.length;

const childs = pointers.filter(function (ptr) {
  if (ptr.classList.contains('pointer_child')) {
    return ptr;
  }
});
countChilds.innerHTML = childs.length;

const chill = pointers.filter(function (ptr) {
  if (ptr.classList.contains('pointer_cinema') || ptr.classList.contains('pointer_zoo')) {
    return ptr;
  }
});
countChill.innerHTML = chill.length;

tabs.forEach((tab) => {
  tab.addEventListener('click', function () {
    tabs.forEach((item) => {
      if (item !== tab) {
        item.classList.remove('tab_active');
      }
    });

    tab.classList.toggle('tab_active');

    pointers.forEach((ptr) => {
      if (!ptr.classList.contains(tab.dataset.title) && tab.classList.contains('tab_active')) {
        ptr.classList.add('pointer_hide');
      } else {
        ptr.classList.remove('pointer_hide');
      }
    });
  });
});
