import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import connectDB from "@/lib/mongodb";
import Message from "@/models/Message";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const PORTFOLIO_CONTEXT = `You are a helpful AI assistant embedded in Abhishek Bussa Reddy's personal portfolio website. 
Your role is to represent Abhishek professionally and answer questions about him.

Here is Abhishek's complete profile:

NAME: Abhishek Bussa Reddy
ROLE: Machine Learning Engineer | Data Analysis & Risk Modeling | AI Researcher
EDUCATION: BTech in Artificial Intelligence and Machine Learning (ongoing)

ABOUT:
Abhishek is a BTech student specializing in AI/ML with hands-on experience building ML models for real-world problems. 
He focuses on data analysis, anomaly detection, and predictive modeling. His goal is to become an AI Research Scientist.

TECHNICAL SKILLS:
- Programming: Python, SQL
- Libraries: NumPy, Pandas, Scikit-learn
- ML/AI: Machine Learning, Data Analysis, Model Building, Anomaly Detection, Predictive Modeling
- Visualization: Power BI, Matplotlib, Seaborn
- Tools: Git, Jupyter Notebook, VS Code
- Web: Next.js, React, Tailwind CSS

PROJECTS:
1. Financial Risk Detection System
   - ML model to detect financial risk in structured datasets
   - Performed data cleaning, preprocessing, feature selection
   - Applied ML algorithms for risk prediction
   - Identified high-risk patterns using anomaly detection

2. Gesture-Based Cursor Control
   - Real-time computer vision system for touchless cursor control
   - Used Python, OpenCV, MediaPipe
   - Enabled touchless human-computer interaction

3. Water Contamination Detection
   - Anomaly detection model for water quality datasets
   - Detected contamination risks using ML
   - Applied both supervised and unsupervised approaches

CERTIFICATIONS:
- Data Analyst Intern — Accelrate
- Selected Candidate — Infosys Springboard 6.0 (prestigious national program)

EXPERIENCE:
- Data Analyst Trainee Intern at Accelrate — worked on data analysis, handled large datasets, extracted actionable insights

CONTACT:
- Email: bussareddyabhishekreddy@gmail.com
- GitHub: github.com/AbhishekReddy12-programmer
- LinkedIn: linkedin.com/in/bussareddy-abhishek-51a4b9341

WHAT MAKES HIM DIFFERENT:
- Combines practical ML engineering with an AI research mindset
- Specializes in anomaly detection — financial risk + water contamination — high-value niche
- Selected for Infosys Springboard 6.0 as a fresher
- Builds complete end-to-end ML solutions

Guidelines:
- Be concise, friendly, and enthusiastic about Abhishek's profile
- Use occasional emojis to keep it conversational
- If asked about topics unrelated to Abhishek, politely redirect
- Always speak positively and professionally about Abhishek`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, sessionId = "anonymous" } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (message.length > 500) {
      return NextResponse.json(
        { error: "Message too long (max 500 chars)" },
        { status: 400 }
      );
    }

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: PORTFOLIO_CONTEXT },
        { role: "user", content: message },
      ],
      max_tokens: 400,
      temperature: 0.7,
    });

    const botReply =
      completion.choices[0]?.message?.content ||
      "Sorry, I could not generate a response. Please try again!";

    // Store in MongoDB
    await connectDB();
    await Message.create({
      userMessage: message,
      botReply,
      sessionId,
    });

    return NextResponse.json({ reply: botReply }, { status: 200 });
  } catch (error: unknown) {
    console.error("Chat API error:", error);

    // Handle OpenAI-specific errors
    if (error instanceof Error) {
      if (error.message.includes("API key")) {
        return NextResponse.json(
          { error: "AI service configuration error" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Chat API is running. Use POST to send messages." },
    { status: 200 }
  );
}
