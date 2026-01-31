# 📖 Full-Stack Guestbook Application

This is a full-stack **Guestbook application** built using **HTML, CSS, JavaScript, Node.js, Express, PostgreSQL, and Supabase**.  
The application allows users to leave messages, view existing entries, edit or delete them, and like messages. All data is stored persistently in a PostgreSQL database and fetched dynamically without page reloads.

This project demonstrates real-world full-stack concepts including **CRUD operations, client–server communication, database integration, asynchronous JavaScript, and deployment**.

---

## 🚀 Live Links

**Frontend (Client):**  
https://full-stack-project-guest-book-client.onrender.com  

**Backend (API Server):**  
https://full-stack-project-guest-book-server.onrender.com  

**GitHub Repository:**  
https://github.com/bh-official/Full-stack-project-guest-book  

---

## ✨ Features

- Submit a new guestbook message  
- View all messages in reverse chronological order  
- Edit existing messages with validation  
- Delete messages with confirmation  
- Like messages using a counter  
- Display formatted timestamps  
- Fully responsive UI for desktop and mobile  

---

## 🧩 Project Structure

- **Frontend**
  - HTML form for user input
  - CSS for responsive styling and layout
  - JavaScript for fetching data and DOM manipulation

- **Backend**
  - Express server with RESTful API routes
  - PostgreSQL database hosted on Supabase
  - Environment variables for secure configuration

---

## 🛠️ Technologies Used

### Frontend
- HTML  
- CSS (Responsive Design, Media Queries)  
- JavaScript  
- Vite  

### Backend
- Node.js  
- Express  
- PostgreSQL  
- Supabase  

### Deployment
- Render (client and server deployed separately)  

---

## 🔄 API Endpoints

### GET `/guestbook`
Fetches all guestbook messages ordered by creation time (newest first).

### POST `/guestbook`
Adds a new guestbook message.
- Requires `msg_name` and `content`
- Performs server-side validation

### PUT `/guestbook/:id`
Updates an existing guestbook message by ID.

### DELETE `/guestbook/:id`
Deletes a guestbook message by ID after confirmation.

### PUT `/guestbook/:id/like`
Increments the like counter for a message.

---

## ⚙️ Frontend Functionality

### Fetching and Displaying Messages
- Messages are fetched using `fetch()` with async/await.
- Data is rendered dynamically using DOM manipulation.
- Timestamps are converted using:
  <!-- ```js -->
  new Date(message.created_at).toLocaleString()

### Message Submission
- Form data is validated on the client side.  
- Name and message must not be empty.  
- Message must be at least 5 characters long.  
- Messages are submitted via a POST request.  

### Editing Messages
- Users can edit name and message via prompt dialogs.  
- Validation prevents empty or short messages.  
- UI updates immediately after a successful update.  

### Deleting Messages
- A confirmation dialog appears before deletion.  
- Messages are removed from the DOM after a successful delete request.  

### Likes Feature
- Each message has a like button.  
- Clicking the button increments a counter stored in the database.  

---

## 🗄️ Database Design

The application uses a single `guestbook` table.

### Table Schema
- `id` (BIGINT, Primary Key, Auto-generated)  
- `msg_name` (TEXT, NOT NULL)  
- `content` (TEXT, NOT NULL)  
- `created_at` (TIMESTAMPTZ, DEFAULT NOW())  
- `likes` (INTEGER, DEFAULT 0)  

**Schema Visualiser Screenshot:**  
https://github.com/bh-official/Full-stack-project-guest-book/blob/main/screenshots/schema-visualizer.png  

---

## 🌱 Database Setup & Seeding

### Table Creation
<!-- ```sql -->
CREATE TABLE guestbook (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  msg_name TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  likes INTEGER DEFAULT 0
);

## 🌱 Example Seed Data
<!-- ```sql -->
INSERT INTO guestbook (msg_name, content, likes)
VALUES
('Oliver', 'Enjoyed stopping by and leaving a note here. Lovely experience.', 1),
('Amelia', 'Such a warm and welcoming place. Happy to sign the guestbook.', 2),
('Rahul', 'Glad I could visit and leave a message. Wishing you all the best.', 3),
('Isabella', 'Had a pleasant time here. Thanks for having this guestbook.', 1),
('Ethan', 'Just passing through and thought I’d leave a message. Cheers!', 0),
('Kavya', 'Nice to be here and write something memorable.', 2),
('Benjamin', 'A simple visit, but a nice one. Happy to leave my name.', 1),
('Nina', 'Leaving a little note to remember my visit.', 0);

**Seed Data Screenshot:**  
https://github.com/bh-official/Full-stack-project-guest-book/blob/main/screenshots/guestbook-seed.png  

---

## 🧠 What I Learned
- How full-stack applications work end-to-end  
- Implementing CRUD operations with REST APIs  
- Connecting Express servers to PostgreSQL databases  
- Using async/await with fetch for real-world applications  
- Deploying frontend and backend services separately  
- Debugging CORS, environment variables, and deployment issues  

---

## 😵 Challenges Faced
- Understanding communication between client, server, and database  
- Debugging deployment issues after moving from localhost to Render  
- Handling validation during message editing  
- Preventing duplicate actions during asynchronous requests  

---

## 🔧 How Problems Were Solved
- Step-by-step debugging and console logging  
- Testing each API route independently  
- Updating API URLs after deployment  
- Improving validation logic and UI updates  
- Refining async handling to ensure smooth UX  

---

## 🚀 Future Improvements
- Add user authentication to restrict edits, deletes, and likes  
- Improve accessibility using labels and ARIA attributes  
- Add animations and transitions for better interactivity  

---

## 📤 Submission Checklist
- Client deployment link  
- Server deployment link  
- GitHub repository  
- Schema visualiser screenshot  
- Seed data screenshot  

---

## 👤 Author
Built by: **Bhuvaneswari**

---

## 🏁 Final Note
This project brought together frontend development, backend APIs, database design, and deployment into a single working application, significantly strengthening my understanding of full-stack development.
