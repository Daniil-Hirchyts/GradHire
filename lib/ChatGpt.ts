import OpenAI from "openai";
import {ChatCompletionMessageParam} from "openai/src/resources/chat/completions";
import {Infos} from "../routes/Chatbot";

interface Message {
    role: string;
    content: string;
}

export async function SendRequest(
    fullHistory: Array<ChatCompletionMessageParam>,
    text: string,
    infos: Infos
) {
    const openai = new OpenAI({
        apiKey: process.env.CHATGPT,
    });

    fullHistory.push({content: text, role: "user"});

    const response = await openai.chat.completions.create({
        messages: fullHistory,
        model: "gpt-3.5-turbo",
    });

    fullHistory.push({
        role: "assistant",
        content: response.choices[0].message.content,
    });

    return fullHistory;
}
