console.log("CLIENT JS LOADED")

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
    const editBtn = document.creatElement(`button`)
    

    userName.textContent = message.msg_name
    messageContent.textContent = message.content
    timeCreated.textContent = new Date(message.created_at).toLocaleString()
    deleteBtn.textContent = "Delete"
    editBtn.textContent = "Edit"


    deleteBtn.type = "button"
    deleteBtn.addEventListener(`click`, async () => {
      const confirmed = confirm("Are you sure you want to delete this message?")

      if (!confirmed) {
      console.log("Delete cancelled")
      return
      }

      console.log("Deleting ID:", message.id)

      const response = await fetch(`${baseURL}/guestbook/${message.id}`, {
      method: "DELETE"
      })

      if (response.ok){
        div.remove()
      } else {
        alert("Delete failed")
      }
    })


    editBtn.type = "button"
    editBtn.addEventListener("click", async () => {
    const newName = prompt("Edit name:", message.msg_name)
    const newMessage = prompt("Edit message:", message.content)

    if (!newName || !newMessage) return

    const response = await fetch(`${baseURL}/guestbook/${message.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      msg_name: newName,
      content: newMessage
    })
    })

    if (response.ok) {
    userName.textContent = newName
    messageContent.textContent = newMessage
    } else {
    alert("Update failed")
    }
    })


    div.append(userName, messageContent, timeCreated, deleteBtn, editBtn)

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
