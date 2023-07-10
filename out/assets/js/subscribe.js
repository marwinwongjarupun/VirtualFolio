const scriptURL = 'https://script.google.com/macros/s/AKfycby6IY6g_cgXupQdwfZmXDoUXwMb0jESUI9Zu4OufxNer6aAbPURtulP02xqDd3u_p-p/exec'
const form = document.forms['subscribers']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        console.log('Success!', response)
        msg.innerHTML= "Thank you for subscribing!"
        setTimeout(function () {
            msg.innerHTML= ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})