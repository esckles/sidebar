import axios from "axios";

const KEY: string = import.meta.env.VITE_MAIN_KEY;

export const fetchLLMModel = async (text: string) => {
  const options = {
    method: "POST",
    url: "https://infinite-gpt.p.rapidapi.com/infinite-gpt",
    headers: {
      "x-rapidapi-key": "d652c3a1afmsh65f9c82db0b3bc5p1dc26cjsn5bb31225acdf",
      "x-rapidapi-host": "infinite-gpt.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: {
      query: text,
      sysMsg: "You are a friendly Chatbot.",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
