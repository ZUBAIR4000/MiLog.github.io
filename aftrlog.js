document.querySelector('.car-container').addEventListener('mouseenter', function() {
    this.querySelector('.car').classList.add('moving');
  });
  
  document.querySelector('.car-container').addEventListener('mouseleave', function() {
    this.querySelector('.car').classList.remove('moving');
  });
  