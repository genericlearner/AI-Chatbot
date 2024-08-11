import { NextResponse } from "next/server";
import Groq from "groq-sdk";
const groq = new Groq({apiKey: process.env.GROQ_API_KEY});

const systemPrompt = 'You are an AI-Powered customer support assistant that can help with any questions you hae about C++ programming. How can I help you today?'

export async function POST(req){
    const data = await req.json();

    const completion = await groq.chat.completions.create({
        messages: [
            {
                role: 'system',
                content: systemPrompt,
            },
            ...data,
        ],
        model: "llama3-8b-8192",
        stream: true,
    })
   
    
        const stream = new ReadableStream({
            async start(controller){
                const encoder = new TextEncoder();
                try {
                    for await (const chunk of completion){
                        const content = chunk.choices[0]?.delta?.content
                        if(content){
                            const text = encoder.encode(content);
                            controller.enqueue(text);
                        }
                    }
                }
                catch(error){
                    console.error(error)
                } finally {
                    controller.close();
                }
            },

        })
    return new NextResponse(stream)
}