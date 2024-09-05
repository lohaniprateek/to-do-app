import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

// PostgreSQL Client setup
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "todo",
  password: "123456",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Function to list all tasks from the database
async function listedTasks() {
  try {
    const result = await db.query("SELECT * FROM tasks;");
    let tasks = [];
    result.rows.forEach((task) => {
      tasks.push(task); // Corrected from tasks.push(tasks)
    });
    return tasks;
  } catch (err) {
    console.error("Error fetching tasks from the database:", err);
    return [];
  }
}

// Render tasks on the homepage
app.get("/", async (req, res) => {
  try {
    let tasklist = await listedTasks(); // Await the promise to resolve
    console.log(tasklist);

    res.render("index.ejs", {
      tasksArray: tasklist, // Ensure tasksArray matches with your EJS template variable name
    });
  } catch (err) {
    console.error("Error rendering tasks:", err);
    res.status(500).send("Error retrieving tasks");
  }
});

app.post("/add", async (req, res) => {
  const { title, body } = req.body;

  if (!title || !body) {
    return res.status(400).json({ error: "Title and body are required." });
  }

  try {
    await db.query("INSERT INTO tasks (title, body) VALUES ($1, $2)", [title, body]); // Insert task into the database
    res.redirect("/"); 
  } catch (err) {
    console.error("Error adding new task:", err);
    res.status(500).send("Error adding task");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
