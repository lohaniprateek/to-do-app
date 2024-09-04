import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  let content = [
    {
      title: "The Mysterious Forest",
      body: "Deep within the forest lies a mystery untold. The trees whisper secrets of ancient times, and the wind carries tales of lost travelers. Each step taken on the moss-covered ground unveils a new enigma, leaving wanderers both curious and cautious.",
    },
    {
      title: "Journey to the Stars",
      body: "Humanity has always looked up to the stars with wonder. The vast expanse of the universe holds countless possibilities and mysteries. As we embark on our journey to explore the cosmos, we unlock the potential for new discoveries, new worlds, and perhaps even new life.",
    },
    {
      title: "The Art of Mindfulness",
      body: "In the hustle and bustle of modern life, mindfulness offers a serene escape. By focusing on the present moment, one can find inner peace amidst the chaos. It's about appreciating the simple things: a deep breath, the rustling of leaves, and the warmth of the sun.",
    },
    {
      title: "Wonders of the Ocean",
      body: "Beneath the ocean's surface lies a world full of vibrant life and mysteries yet to be uncovered. Coral reefs burst with colors, schools of fish dance in synchrony, and the deep sea holds creatures that seem like something out of a dream. The ocean is both a source of beauty and a reminder of the unexplored.",
    },
    {
      title: "The Rise of Artificial Intelligence",
      body: "Artificial Intelligence is revolutionizing the way we live, work, and interact. From self-driving cars to smart home assistants, AI is becoming an integral part of our daily lives. As it continues to evolve, it brings both incredible opportunities and profound ethical questions about the future of humanity.",
    },
    {
      title: "Echoes of the Past",
      body: "The ancient ruins stand as a testament to a civilization long forgotten. Each stone, weathered by time, tells a story of glory and demise. As you walk among the remnants of what once was, you can't help but feel the echoes of the past whispering through the wind.",
    },
    {
      title: "The Power of Imagination",
      body: "Imagination is the gateway to endless possibilities. It allows us to dream, create, and innovate beyond the boundaries of reality. From the pages of a novel to the strokes of a painter's brush, imagination is the force that drives human progress and expression.",
    },
    {
      title: "A Symphony of Nature",
      body: "In the early hours of dawn, nature awakens with a symphony of sounds. The birds sing their morning songs, the leaves rustle in the gentle breeze, and a distant river flows steadily. Together, these elements create a harmonious melody that soothes the soul and connects us to the earth.",
    },
    {
      title: "The Age of Exploration",
      body: "The Age of Exploration marks a period of history where brave souls set sail into the unknown, driven by curiosity and a thirst for adventure. They charted new lands, crossed vast oceans, and changed the world forever. Their journeys remind us of the human spirit's unyielding desire to discover what lies beyond the horizon.",
    },
    {
      title: "The Mysterious Forest",
      body: "Deep within the forest lies a mystery untold. The trees whisper secrets of ancient times, and the wind carries tales of lost travelers. Each step taken on the moss-covered ground unveils a new enigma, leaving wanderers both curious and cautious.",
    },
    {
      title: "Journey to the Stars",
      body: "Humanity has always looked up to the stars with wonder. The vast expanse of the universe holds countless possibilities and mysteries. As we embark on our journey to explore the cosmos, we unlock the potential for new discoveries, new worlds, and perhaps even new life.",
    },
    {
      title: "The Mysterious Forest",
      body: "Deep within the forest lies a mystery untold. The trees whisper secrets of ancient times, and the wind carries tales of lost travelers. Each step taken on the moss-covered ground unveils a new enigma, leaving wanderers both curious and cautious.",
    },
    {
      title: "Journey to the Stars",
      body: "Humanity has always looked up to the stars with wonder. The vast expanse of the universe holds countless possibilities and mysteries. As we embark on our journey to explore the cosmos, we unlock the potential for new discoveries, new worlds, and perhaps even new life.",
    },
    {
      title: "The Art of Mindfulness",
      body: "In the hustle and bustle of modern life, mindfulness offers a serene escape. By focusing on the present moment, one can find inner peace amidst the chaos. It's about appreciating the simple things: a deep breath, the rustling of leaves, and the warmth of the sun.",
    },
    {
      title: "Wonders of the Ocean",
      body: "Beneath the ocean's surface lies a world full of vibrant life and mysteries yet to be uncovered. Coral reefs burst with colors, schools of fish dance in synchrony, and the deep sea holds creatures that seem like something out of a dream. The ocean is both a source of beauty and a reminder of the unexplored.",
    },
    {
      title: "The Rise of Artificial Intelligence",
      body: "Artificial Intelligence is revolutionizing the way we live, work, and interact. From self-driving cars to smart home assistants, AI is becoming an integral part of our daily lives. As it continues to evolve, it brings both incredible opportunities and profound ethical questions about the future of humanity.Artificial Intelligence is revolutionizing the way we live, work, and interact. From self-driving cars to smart home assistants, AI is becoming an integral part of our daily lives. As it continues to evolve, it brings both incredible opportunities and profound ethical questions about the future of humanity.Artificial Intelligence is revolutionizing the way we live, work, and interact. From self-driving cars to smart home assistants, AI is becoming an integral part of our daily lives. As it continues to evolve, it brings both incredible opportunities and profound ethical questions about the future of humanity.Artificial Intelligence is revolutionizing the way we live, work, and interact. From self-driving cars to smart home assistants, AI is becoming an integral part of our daily lives. As it continues to evolve, it brings both incredible opportunities and profound ethical questions about the future of humanity.Artificial Intelligence is revolutionizing the way we live, work, and interact. From self-driving cars to smart home assistants, AI is becoming an integral part of our daily lives. As it continues to evolve, it brings both incredible opportunities and profound ethical questions about the future of humanity.Artificial Intelligence is revolutionizing the way we live, work, and interact. From self-driving cars to smart home assistants, AI is becoming an integral part of our daily lives. As it continues to evolve, it brings both incredible opportunities and profound ethical questions about the future of humanity.",
    },
    {
      title: "Echoes of the Past",
      body: "The ancient ruins stand as a testament to a civilization long forgotten. Each stone, weathered by time, tells a story of glory and demise. As you walk among the remnants of what once was, you can't help but feel the echoes of the past whispering through the wind.",
    },
  ];
  res.render("index.ejs", {
    contentArray: content,
  });
});

app.post("/add",(req, res) => {
  // res.render("add.ejs")
}
)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
