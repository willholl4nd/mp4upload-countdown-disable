// Find the countdown element and remove it
const countdownElement = document.getElementById('countdown');
if (countdownElement && !countdownElement.hasAttribute('style')) {
  countdownElement.setAttribute('style', 'display: none');
}

const downloadElement = document.querySelector('div.download-btn.mb-4');
if (downloadElement && downloadElement.hasAttribute('style')) {
  downloadElement.removeAttribute('style');
}

const downloadButton = document.getElementById('downloadbtn');
setTimeout(() => {
  if (downloadButton && downloadButton.hasAttribute('disabled')) {

    downloadButton.removeAttribute('disabled');
    console.log('Disabled has been removed from button');
  }

}, 500);

downloadButton.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.key === "D") {
    downloadButton.click();
  }
});

