import aiService from "../services/ai.service.js";

export const getResponse = async (req, res) => {
  const prompt = req.query.prompt;
  if (!prompt) {
    return res.status(400).send("Prompt is required");
  }

  try {
    const response = await aiService(prompt);
    res.send(response);
  } catch (error) {
    console.error("Error in getResponse:", error);
    res.status(500).send("Internal Server Error");
  }
};
