***📄 LazAI Summarizer CLI***

A simple Node.js CLI tool that uses LazAI (via Alith Agent) to summarize text or files into short, meaningful outputs.

 ***Features***

1.Summarize text from command line input.

2.Summarize content directly from a file (e.g., .txt, .md).


🛠️ Installation
# Clone this repo
git clone https://github.com/your-username/lazai-summarizer.git
cd lazai-summarizer

# Install dependencies
npm install

***Setup***

Create a .env file in the project root.

Add your GROQ API key:

GROQ_API_KEY=your_api_key_here

***Usage***
1. Summarize text directly
node summarize.js "LazAI Data Query allows users to keep ownership of their data..."

2. Summarize a file (📂 Easy way)

👉 Put your file in the project folder (same place as summarize.js).
Then run:

node summarize.js yourfile.txt


No need for long desktop paths — just drop the file into the project folder and call it! ⚡




🔥 Now you can summarize any text or file quickly with LazAI!