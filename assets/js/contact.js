const scriptURL = 'https://script.google.com/macros/s/AKfycbwZrLMDP3l3hV3X540mfNdDSRlcCWBYwaEZfrfbYkCMjhYaHq77TRk-olx36cUEWXwtqQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})