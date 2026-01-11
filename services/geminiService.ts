import { GoogleGenAI } from "@google/genai";
import { ChatMessage, Role } from "../types";

const SYSTEM_INSTRUCTION = `
أنت مساعد ذكي لمحاسب  عبد الرحمن كرماش . مهمتك هي الإجابة على أسئلة الزوار المتعلقة بالمحاسبة، الضرائب، والإدارة المالية بشكل عام ومبسط.
يجب أن تلتزم بالقواعد التالية:
1. أجب بأسلوب مهني، لطيف، ومحترم.
2. قدم معلومات عامة دقيقة بناءً على المعايير المحاسبية.
3. في نهاية كل إجابة، يجب عليك تنويه المستخدم بأن هذه المعلومات عامة، وتشجيعه بوضوح على حجز استشارة مع المحاسب للحصول على تفاصيل دقيقة تناسب حالته الخاصة.
4. لا تقدم استشارات قانونية أو ضريبية ملزمة، بل توجيهات عامة فقط.
5. تحدث باللغة العربية الفصحى المبسطة.
`;

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client) {
    client = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return client;
};

export const streamChatResponse = async (
  history: ChatMessage[],
  userMessage: string,
  onChunk: (text: string) => void
): Promise<void> => {
  const ai = getClient();
  
  // Transform history for the API
  // Note: We filter out streaming messages or error states if necessary, 
  // but for simple chat, we just map roles.
  // We keep the history limited to last 10 turns to save tokens if needed.
  const recentHistory = history.slice(-10).map(msg => ({
    role: msg.role === Role.USER ? 'user' : 'model',
    parts: [{ text: msg.text }]
  }));

  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
    history: recentHistory
  });

  try {
    const resultStream = await chat.sendMessageStream({ message: userMessage });

    for await (const chunk of resultStream) {
      if (chunk.text) {
        onChunk(chunk.text);
      }
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    onChunk("عذراً، حدث خطأ أثناء الاتصال بالخادم. يرجى المحاولة لاحقاً.");
  }
};