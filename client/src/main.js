
// fetch messages

const display = document.getElementById('app')
const form = document.getElementById('form')
// const baseURL = 'https://deploying-and-git-server-2kxl.onrender.com'


async function fetchData() {
  // const response = await fetch(`${baseURL}/messages`)
  const response = await fetch(`http://localhost:4242/guestbook`)
  const messages = await response.json()

  console.log(messages)

  return messages
}



async function displayMessages() {
  const messages = await fetchData()

  messages.forEach((message) => {
    const div = document.createElement('div')
    const userName = document.createElement('p')
    const messageContent = document.createElement('p')
    const timeCreated=document.createElement(`small`)
    

    userName.textContent = message.msg_name
    messageContent.textContent = message.content
    timeCreated.textContent = new Date(message.created_at).toLocaleString()

    div.append(userName, messageContent, timeCreated)

    display.appendChild(div)
  })
}
displayMessages()


async function handleSubmit(event) {
  event.preventDefault()

  const formData = new FormData(form)
  const userInput = Object.fromEntries(formData)
  const userInputJSON = JSON.stringify(userInput)

  const response = await fetch(`http://localhost:4242/guestbook`, {
    headers: {
      "Content-Type" : "application/json"
    },
    method: "POST",
    body: userInputJSON
  })
  window.location.reload()
} 

form.addEventListener('submit', handleSubmit)
console.log("FORM SUBMITTED VIA JS")
