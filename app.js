
import "./app.css";

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const imageUrl = e.target.result;
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = 'Uploaded Image';
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.onclick = function() {
        img.remove();
        removeBtn.remove();
        output.remove();
      };
      img.onclick = function() {
        speak(file.name.replace(/\.[^/.]+$/, ""));
      };
      document.querySelector('.buttons').appendChild(img);
      document.querySelector('.buttons').appendChild(removeBtn);
    }
    reader.readAsDataURL(file);
  }
}

function speak(text) {
  // Use Text-to-Speech API to speak the text
  if ('speechSynthesis' in window) {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    
    // Display the spoken text
    document.getElementById('output').textContent = text;
  } else {
    alert('Speech synthesis not supported in your browser.');
  }
}

