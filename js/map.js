const tabs = document.querySelectorAll('.tab');
const pointers = Array.from(document.querySelectorAll('.pointer'));

const countHealthAndBeauty = document
  .querySelector('.tab_healtbeauty')
  .querySelector('.tab__count');
const countShops = document.querySelector('.tab_shops').querySelector('.tab__count');
const countEducation = document.querySelector('.tab_education').querySelector('.tab__count');
const countChilds = document.querySelector('.tab_childs').querySelector('.tab__count');
const countChill = document.querySelector('.tab_chill').querySelector('.tab__count');

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
    /* удалить другие активки */
    tabs.forEach((item) => {
      if (item !== tab) {
        item.classList.remove('tab_active');
      }
    });
    /* tab toggle */
    tab.classList.toggle('tab_active');
    /* pointers */
    if (tab.classList.contains('tab_healtbeauty')) {
      pointers.forEach((ptr) => {
        if (
          !(ptr.classList.contains('pointer_health') || ptr.classList.contains('pointer_beauty')) &&
          tab.classList.contains('tab_active')
        ) {
          ptr.classList.add('pointer_hide');
        } else {
          ptr.classList.remove('pointer_hide');
        }
      });
    } else if (tab.classList.contains('tab_shops')) {
      pointers.forEach((ptr) => {
        if (
          !(ptr.classList.contains('pointer_cart') || ptr.classList.contains('pointer_coffee')) &&
          tab.classList.contains('tab_active')
        ) {
          ptr.classList.add('pointer_hide');
        } else {
          ptr.classList.remove('pointer_hide');
        }
      });
    } else if (tab.classList.contains('tab_education')) {
      pointers.forEach((ptr) => {
        if (!ptr.classList.contains('pointer_education') && tab.classList.contains('tab_active')) {
          ptr.classList.add('pointer_hide');
        } else {
          ptr.classList.remove('pointer_hide');
        }
      });
    } else if (tab.classList.contains('tab_childs')) {
      pointers.forEach((ptr) => {
        if (!ptr.classList.contains('pointer_child') && tab.classList.contains('tab_active')) {
          ptr.classList.add('pointer_hide');
        } else {
          ptr.classList.remove('pointer_hide');
        }
      });
    } else if (tab.classList.contains('tab_chill')) {
      pointers.forEach((ptr) => {
        if (
          !(ptr.classList.contains('pointer_cinema') || ptr.classList.contains('pointer_zoo')) &&
          tab.classList.contains('tab_active')
        ) {
          ptr.classList.add('pointer_hide');
        } else {
          ptr.classList.remove('pointer_hide');
        }
      });
    }
  });
});
