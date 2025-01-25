const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});


function toggleAccordion(element) {
  // Close all accordion items first
  const allItems = document.querySelectorAll('.accordion-item');
  allItems.forEach(item => {
    const content = item.querySelector('.accordion-content');
    const icon = item.querySelector('.icon');
    content.style.display = 'none';
    icon.textContent = '+';
  });

  // Open the clicked item
  const content = element.nextElementSibling;
  const icon = element.querySelector('.icon');
  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    icon.textContent = '-';
  } else {
    content.style.display = 'none';
    icon.textContent = '+';
  }
}

