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
      tasks.push(task);
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

app.post("/update/:id", async (req, res) => {
  const { id } = req.params; 
  const { title, body } = req.body; //

  if (!title || !body) {
    return res.status(400).json({ error: "Title and body are required." });
  }

  try {
    // Update the task in the database with the new title and body
    await db.query("UPDATE tasks SET title = $1, body = $2 WHERE id = $3", [title, body, id]);
    res.redirect("/"); // Redirect to the homepage after successful update
  } catch (err) {
    console.error("Error updating task:", err);
    res.status(500).send("Error updating task");
  }
});



// Route to  editjs 
app.get("/edit/:id", async (req, res) => {
  const { id } = req.params; 

  try {
    const result = await db.query("SELECT * FROM tasks WHERE id = $1", [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).send("Task not found");
    }

    const task = result.rows[0]; 
    
    res.render("edit.ejs", { task });
  } catch (err) {
    console.error("Error fetching task for editing:", err);
    res.status(500).send("Error fetching task");
  }
});

app.post("/delete", async (req, res) => {
  const { id } = req.params; 
  try {
    
    await db.query("DELETE  FROM  tasks WHERE id = $3", [id]);
    res.redirect("/"); 
  } catch (err) {
    console.error("Error updating task:", err);
    res.status(500).send("Error Deleting task");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
