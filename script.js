function changeText() {
    const paragraph = document.getElementById('dynamic-paragraph');
    paragraph.textContent = 'The text has been updated dynamically!'; // Change the text content
    paragraph.style.color = 'crimson'; // Change the text color
    paragraph.classList.toggle('highlight');
  }
  
  function addElement() {
    const container = document.getElementById('container');
    const newElement = document.createElement('p'); // Create a new paragraph element
    newElement.textContent = 'I was added dynamically!'; // Add a new element
    newElement.className = 'dynamic-item'; 
    container.appendChild(newElement);
  }
  
  function removeElement() {
    const container = document.getElementById('container');
    if (container.lastChild) {
      container.removeChild(container.lastChild);
    }
  }
  
