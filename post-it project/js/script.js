function changeText() {
    const newContent = prompt('Enter new content:');
    postit.querySelector('.postit-content').innerText = newContent;
  
  }