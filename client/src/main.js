
// fetch messages

const display = document.getElementById('app')
const form = document.getElementById('form')
const baseURL = 'https://full-stack-project-guest-book-server.onrender.com'


async function fetchData() {
  const response = await fetch(`${baseURL}/guestbook`)

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
    const timeCreated = document.createElement(`small`)
    const deleteBtn = document.createElement(`button`)
    

    userName.textContent = message.msg_name
    messageContent.textContent = message.content
    timeCreated.textContent = new Date(message.created_at).toLocaleString()
    deleteBtn.textContent ="Delete"

    deleteBtn.addEventListener(`click`, async () => {
      const response = await fetch(`${baseURL}/guestbook/${message.id}`, {
      method: "DELETE"
      })

      if (response.ok){
        div.remove()
      } else {
        alert("Delete failed")
      }
    })

    div.append(userName, messageContent, timeCreated, deleteBtn)

    display.appendChild(div)
  })
}
displayMessages()


async function handleSubmit(event) {
  event.preventDefault()

  const formData = new FormData(form)
  const userInput = Object.fromEntries(formData)
  const userInputJSON = JSON.stringify(userInput)

  const response = await fetch(`${baseURL}/guestbook`, {
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
