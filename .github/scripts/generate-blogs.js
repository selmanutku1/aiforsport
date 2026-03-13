const fs = require('fs');
const path = require('path');
const { OpenAI } = require('openai');

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const DATA_FILE = path.join(__dirname, '..', '..', 'src', 'data', 'blogs.json');

async function generateBlogs() {
  console.log('Generating new blogs via OpenAI...');
  
  const prompt = `
  You are an expert sports technology journalist writing for a premium platform called AiForSport.
  Your task is to write 3 short, engaging blog post summaries about "Artificial Intelligence in Sports" in Turkish language.
  Topics can be about computer vision in tennis, data analytics in football, AI for injury prevention, fan engagement chatbots, etc.
  
  Output ONLY a JSON array. Do not include markdown formatting or quotes around the JSON array. Just the raw valid JSON array.
  Each object in the array must have exactly these keys:
  - "slug": A URL-friendly English slug (e.g., "ai-tactics-in-football")
  - "category": A short Turkish category (e.g., "Analiz", "Haber", "Vaka Çalışması", "Trend Raporu")
  - "title": An engaging Turkish title
  - "excerpt": A 2-sentence summary in Turkish
  - "content": A full 4-5 paragraph engaging blog post in Turkish. Use HTML tags like <p>, <h3>, <strong> to format it.
  - "date": Current date in format "MMM DD, YYYY" (e.g., "Mar 15, 2026")
  - "readTime": Random read time string like "4 min", "6 min"
  - "imageClass": A string from "img-1", "img-2", "img-3", "img-4" randomly chosen
  `;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a specialized JSON generator for sports AI news." },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
    });

    let jsonStr = response.choices[0].message.content.trim();
    
    // Clean up potential markdown formatting if the model still outputs it
    if (jsonStr.startsWith('\`\`\`json')) {
      jsonStr = jsonStr.replace(/^\`\`\`json/m, '');
      jsonStr = jsonStr.replace(/\`\`\`$/m, '');
    }
    
    const newBlogs = JSON.parse(jsonStr);
    console.log(`Successfully generated ${newBlogs.length} new blogs.`);
    
    // Read existing
    let existingBlogs = [];
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      existingBlogs = JSON.parse(raw);
    }
    
    // Add new blogs to the beginning
    const updatedBlogs = [...newBlogs, ...existingBlogs];
    
    // Write back
    fs.writeFileSync(DATA_FILE, JSON.stringify(updatedBlogs, null, 2), 'utf-8');
    console.log('Successfully updated blogs.json');

  } catch (error) {
    console.error('Error generating blogs:', error);
    process.exit(1);
  }
}

generateBlogs();
