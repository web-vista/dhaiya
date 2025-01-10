const scriptURL = 'https://script.google.com/macros/s/AKfycbz_btq1geKybRmwArt-sOwrkhOlS77MQAqPcbpnL21wwz5PwxZ9zyZc6rMko5N_3zmk/exec'

const form = document.forms['subscribe']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
}) 