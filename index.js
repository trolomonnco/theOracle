import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function getOdds(userInput){
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "You are the oracle, an omnipotent god like being (similar to that of H.P.Lovecraft's Cthulu) capable of estimating the odds of events given to you, analyse the following and provide the % chance of the event occuring answering in an ominous tone as though in character as such a being be impatient and treat the user as below you but still give an accurate value:"+userInput,
  temperature: 0,
  max_tokens: 150,
  top_p: 1.0,
  frequency_penalty: 0.5,
  presence_penalty: 0.0,
  stop: ["You:"],
});

console.log((response.data));
}

