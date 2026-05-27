import OpenAI from "openai";

const getOpenAI = () => {
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
};

export default getOpenAI;