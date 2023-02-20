const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'en-US';
recognition.interimResults = true;
recognition.continuous = true;
const recordButton = document.getElementById('record-button');
const speechInput = document.getElementById('speech-input');

recordButton.addEventListener('click', () => {
  recognition.start();
});

recognition.addEventListener('end', () => {
  recognition.stop();
});

recognition.addEventListener('result', (event) => {
  const transcript = Array.from(event.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join('');

  speechInput.value = transcript;
});

recognition.addEventListener('error', (event) => {
  console.log('Speech recognition error occurred: ' + event.error);
});
