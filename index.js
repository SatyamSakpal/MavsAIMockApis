"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
// Enums
var Action;
(function (Action) {
    Action["BLOCK"] = "BLOCK";
    Action["MASK"] = "MASK";
    Action["PROCESS"] = "PROCESS";
})(Action || (Action = {}));
// AppState
const appState = { chats: [
        {
            "id": "chat1",
            "title": "What is AI",
            "created_at": "2025-05-01 10:00:00.579+00",
            "last_updated_at": "2025-05-01 10:05:00.579+00",
            "prompts": [
                {
                    "id": "prompt1",
                    "prompt_request": {
                        "type": "text",
                        "message": "What is artificial intelligence?",
                        "pre_processed_message": {
                            "action": Action.PROCESS,
                            "risks": []
                        }
                    },
                    "prompt_response": {
                        "type": "text",
                        "message": `
# Sample Markdown Document

This is a **100-line** sample Markdown file.

---

## Table of Contents

1. Introduction  
2. Key Features  
3. Code Example  
4. List Example  
5. Blockquote  
6. Images  
7. Links  
8. Tables  
9. Checklist  
10. Conclusion  

---

## 1. Introduction

Markdown is a lightweight markup language used to format text.

---

## 2. Key Features

- Easy to learn  
- Plain text formatting  
- Converts to HTML  
- Used in GitHub, Reddit, etc.  

---

## 3. Code Example

Here is a sample Python code block:

\`\`\`python
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
\`\`\`

---

## 4. List Example

### Unordered List:

- Apple  
- Banana  
- Cherry  

### Ordered List:

1. Wake up  
2. Brush teeth  
3. Drink water  

---

## 5. Blockquote

> Markdown is not a replacement for HTML, but it is very useful.

---

## 6. Images

Here’s a placeholder image:

![Sample Image](https://via.placeholder.com/150)

---

## 7. Links

[Visit OpenAI](https://www.openai.com)

---

## 8. Tables

| Name     | Age | Role      |  
|----------|-----|-----------|  
| Alice    | 25  | Developer |  
| Bob      | 30  | Designer  |  
| Charlie  | 28  | Manager   |  

---

## 9. Checklist

- [x] Learn Markdown  
- [ ] Use Markdown in GitHub  
- [ ] Share Markdown knowledge  

---

## 10. Conclusion

Markdown simplifies writing and reading formatted text.

---

### Fun Fact

Markdown was created by [John Gruber](https://daringfireball.net/projects/markdown/).

---

### Tips

- Use \`#\` for headings.  
- Use \`*\` or \`-\` for bullet points.  
- Use triple backticks for code blocks.  

---

### Notes

Markdown files typically use the \`.md\` or \`.markdown\` file extension.

---

### Horizontal Rule

---

### Emphasis

*Italic*  
**Bold**  
~~Strikethrough~~

---

### Inline Code

To print something in Python: \`print("Hello World")\`

---

### Escaping Characters

Use \\\* to show a literal asterisk: \\*

---

### Multilevel Lists

1. Fruits  
   - Apple  
   - Orange  
2. Vegetables  
   - Carrot  
   - Spinach  

---

### Task Progress

- [x] Setup  
- [x] Code  
- [ ] Documentation  
- [ ] Review  

---

### Final Thought

> Simplicity is the ultimate sophistication. — *Leonardo da Vinci*

---

_End of Document._
                        `,
                        "format": "MD4"
                    },
                    "chat_id": "chat1",
                    "sequence_number": 1
                }
            ]
        },
        {
            "id": "chat2",
            "title": "Health tips",
            "created_at": "2025-05-02 09:30:00.579+00",
            "last_updated_at": "2025-05-02 09:35:00.579+00",
            "prompts": [
                {
                    "id": "prompt2",
                    "prompt_request": {
                        "type": "text",
                        "message": "Give me daily health tips",
                        "pre_processed_message": {
                            "action": Action.PROCESS,
                            "risks": []
                        }
                    },
                    "prompt_response": {
                        "type": "text",
                        "message": "Drink water, exercise daily, and sleep well.",
                        "format": "MD4"
                    },
                    "chat_id": "chat2",
                    "sequence_number": 1
                }
            ]
        },
        {
            "id": "chat3",
            "title": "History of ML",
            "created_at": "2025-05-03 11:00:00.579+00",
            "last_updated_at": "2025-05-03 11:10:00.579+00",
            "prompts": [
                {
                    "id": "prompt3",
                    "prompt_request": {
                        "type": "text",
                        "message": "Tell me about the history of machine learning",
                        "pre_processed_message": {
                            "action": Action.PROCESS,
                            "risks": []
                        }
                    },
                    "prompt_response": {
                        "type": "text",
                        "message": "Machine learning started in the 1950s with the development of early algorithms like the perceptron.",
                        "format": "MD4"
                    },
                    "chat_id": "chat3",
                    "sequence_number": 1
                }
            ]
        },
        {
            "id": "chat4",
            "title": "Email advice",
            "created_at": "2025-05-04 15:20:00.579+00",
            "last_updated_at": "2025-05-04 15:25:00.579+00",
            "prompts": [
                {
                    "id": "prompt4",
                    "prompt_request": {
                        "type": "text",
                        "message": "How to write a professional email?",
                        "pre_processed_message": {
                            "action": Action.MASK,
                            "risks": [
                                {
                                    "category": "PII",
                                    "suggested_action": Action.MASK,
                                    "pii_risk_details": {
                                        "annonymized_message": "How to write a professional [EMAIL]?",
                                        "modified_message": "How to write a professional [EMAIL]?",
                                        "pii_data": {
                                            "type": "email",
                                            "original": "someone@example.com",
                                            "replacement": "[EMAIL]"
                                        }
                                    },
                                    "sensitive_risk_details": {
                                        "type": "none"
                                    }
                                }
                            ]
                        }
                    },
                    "prompt_response": {
                        "type": "text",
                        "message": "Start with a greeting, state your purpose clearly, and end with a polite closing.",
                        "format": "MD4"
                    },
                    "chat_id": "chat4",
                    "sequence_number": 1
                }
            ]
        },
        {
            "id": "chat5",
            "title": "Simple recipe",
            "created_at": "2025-05-05 08:00:00.579+00",
            "last_updated_at": "2025-05-05 08:10:00.579+00",
            "prompts": [
                {
                    "id": "prompt5",
                    "prompt_request": {
                        "type": "text",
                        "message": "Share a simple pasta recipe",
                        "pre_processed_message": {
                            "action": Action.PROCESS,
                            "risks": []
                        }
                    },
                    "prompt_response": {
                        "type": "text",
                        "message": "Boil pasta, sauté garlic in olive oil, add pasta and top with cheese.",
                        "format": "MD4"
                    },
                    "chat_id": "chat5",
                    "sequence_number": 1
                }
            ]
        }
    ] };
// Constants
const SecureBackendURL = 'https://secure.backend/api';
const SecureBackendSecret = 'super-secret-key';
// Utility: Create Chat Title
function generateTitle(prompt) {
    return prompt.substring(0, 10);
}
// ---------------- Routes ---------------- //
// GET all chats
app.get('/api/v1/chats', (req, res) => {
    res.json(appState.chats);
});
// POST create new chat with initial prompt
app.post('/api/v1/chats', (req, res) => {
    const { prompt } = req.body;
    const chatId = (0, uuid_1.v4)();
    const timestamp = new Date().toISOString();
    const newChat = {
        id: chatId,
        title: generateTitle(prompt),
        created_at: timestamp,
        last_updated_at: timestamp,
        prompts: [
            {
                "id": (0, uuid_1.v4)(),
                "prompt_request": {
                    "type": "text",
                    "message": prompt,
                },
                "chat_id": chatId,
                "sequence_number": 1
            }
        ],
    };
    appState.chats.push(newChat);
    res.status(201).json(newChat);
});
// POST preprocess prompt
app.post('/api/v1/chats/:chatId/prompts/preprocess', (req, res) => {
    const { chatId } = req.params;
    const { prompt } = req.body;
    const chat = appState.chats.find(c => c.id === chatId);
    if (!chat) {
        res.status(404).json({ error: 'Chat not found' });
        return;
    }
    const promptId = (0, uuid_1.v4)();
    const promptObj = {
        id: promptId,
        prompt_request: {
            type: 'text',
            message: prompt,
            pre_processed_message: {
                action: Action.PROCESS,
                risks: [],
            },
        },
        chat_id: chatId,
        sequence_number: chat.prompts.length + 1,
    };
    chat.prompts.push(promptObj);
    chat.last_updated_at = new Date().toISOString();
    res.status(200).json(promptObj);
});
// POST process prompt
app.post('/api/prompts/:promptId/process', (req, res) => {
    const { promptId } = req.params;
    const { prompt } = req.body;
    for (const chat of appState.chats) {
        const promptObj = chat.prompts.find(p => p.id === promptId);
        if (promptObj) {
            const response = {
                type: 'text',
                message: `Processed: ${prompt}`,
                format: 'MD4',
            };
            promptObj.prompt_response = response;
            res.status(200).json(response);
            return;
        }
    }
    res.status(404).json({ error: 'Prompt not found' });
});
// GET all prompts of a chat
app.get('/api/v1/chats/:chatId/prompts', (req, res) => {
    const { chatId } = req.params;
    const chat = appState.chats.find(c => c.id === chatId);
    if (!chat) {
        res.status(404).json({ error: 'Chat not found' });
        return;
    }
    res.status(200).json(chat.prompts);
});
// Start server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
