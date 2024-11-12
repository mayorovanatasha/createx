/* view-button on events page */
$(document).ready(function () {
  $('a').click(function (e) {
    if ($(this).hasClass('view-button--grid')) {
      $('#events ul').removeClass('events--list').addClass('events--grid');
      $('#view-button a').removeClass('view-button--active');
    }
    else if ($(this).hasClass('view-button--list')) {
      $('#events ul').removeClass('events--grid').addClass('events--list');
    }
  });
});

[].forEach.call(document.querySelectorAll('.accordion__title'), function (item) {
  item.addEventListener('click', function (e) {
    const display = (this.nextElementSibling.style.display === 'block') ? 'none' : 'block';
    const activeClass = this.classList.toggle('active');
    [].forEach.call(this.parentNode.querySelectorAll('.accordion__text'), function (panels) {
      panels.style.display = 'none';
    });
    this.nextElementSibling.style.display = display;
    requestAnimationFrame(() => {
      this.classList[display === 'none' ? 'remove' : 'add']('active');
    });
  });
});

document.getElementById('openPopup').addEventListener('click', () => {
  document.getElementById('popup').classList.add('show');
});

document.getElementById('closePopup').addEventListener('click', () => {
  document.getElementById('popup').classList.remove('show');
});
