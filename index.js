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
            "created_at": "2025-05-01T10:00:00.579+00Z",
            "last_updated_at": "2025-05-01T10:05:00.579+00Z",
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
                        "message": `# Sample Markdown Document

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
            "created_at": "2025-05-02T09:30:00.579+00Z",
            "last_updated_at": "2025-05-02T09:35:00.579+00Z",
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
            "created_at": "2025-05-03T11:00:00.579+00Z",
            "last_updated_at": "2025-05-03T11:10:00.579+00Z",
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
            "created_at": "2025-05-04T15:20:00.579+00Z",
            "last_updated_at": "2025-05-04T15:25:00.579+00Z",
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
            "created_at": "2025-05-05T08:00:00.579+00Z",
            "last_updated_at": "2025-05-05T08:10:00.579+00Z",
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
            ],
        },
        {
        "id": "chat6",
        "title": "Morning Routine",
        "created_at": "2025-05-18T07:30:00.579+00Z",
        "last_updated_at": "2025-05-18T07:32:00.579+00Z",
        "prompts": [
            {
                "id": "prompt6",
                "prompt_request": {
                    "type": "text",
                    "message": "What’s a good morning routine?",
                    "pre_processed_message": {
                        "action": "PROCESS",
                        "risks": []
                    }
                },
                "prompt_response": {
                    "type": "text",
                    "message": "Wake up early, hydrate, meditate, and plan your day.",
                    "format": "MD4"
                },
                "chat_id": "chat6",
                "sequence_number": 1
            }
        ]
    },
    {
        "id": "chat7",
        "title": "JavaScript Basics",
        "created_at": "2025-05-18T08:45:00.579+00Z",
        "last_updated_at": "2025-05-18T08:50:00.579+00Z",
        "prompts": [
            {
                "id": "prompt7",
                "prompt_request": {
                    "type": "text",
                    "message": "What are JavaScript data types?",
                    "pre_processed_message": {
                        "action": "PROCESS",
                        "risks": []
                    }
                },
                "prompt_response": {
                    "type": "text",
                    "message": "JavaScript has primitive types like string, number, boolean, null, undefined, and symbol.",
                    "format": "MD4"
                },
                "chat_id": "chat7",
                "sequence_number": 1
            }
        ]
    },
    {
        "id": "chat8",
        "title": "Hydration Facts",
        "created_at": "2025-05-18T09:10:00.579+00Z",
        "last_updated_at": "2025-05-18T09:15:00.579+00Z",
        "prompts": [
            {
                "id": "prompt8",
                "prompt_request": {
                    "type": "text",
                    "message": "Why is hydration important?",
                    "pre_processed_message": {
                        "action": "PROCESS",
                        "risks": []
                    }
                },
                "prompt_response": {
                    "type": "text",
                    "message": "Staying hydrated supports digestion, circulation, and energy levels.",
                    "format": "MD4"
                },
                "chat_id": "chat8",
                "sequence_number": 1
            }
        ]
    },
    {
        "id": "chat9",
        "title": "Study Tips",
        "created_at": "2025-05-17T10:00:00.579+00Z",
        "last_updated_at": "2025-05-17T10:05:00.579+00Z",
        "prompts": [
            {
                "id": "prompt9",
                "prompt_request": {
                    "type": "text",
                    "message": "How can I study effectively?",
                    "pre_processed_message": {
                        "action": "PROCESS",
                        "risks": []
                    }
                },
                "prompt_response": {
                    "type": "text",
                    "message": "Use the Pomodoro technique, take breaks, and stay consistent.",
                    "format": "MD4"
                },
                "chat_id": "chat9",
                "sequence_number": 1
            }
        ]
    },
    {
        "id": "chat10",
        "title": "Sleep Benefits",
        "created_at": "2025-05-17T11:00:00.579+00Z",
        "last_updated_at": "2025-05-17T11:05:00.579+00Z",
        "prompts": [
            {
                "id": "prompt10",
                "prompt_request": {
                    "type": "text",
                    "message": "Why is sleep important?",
                    "pre_processed_message": {
                        "action": "PROCESS",
                        "risks": []
                    }
                },
                "prompt_response": {
                    "type": "text",
                    "message": "Sleep helps with memory, mood, and physical recovery.",
                    "format": "MD4"
                },
                "chat_id": "chat10",
                "sequence_number": 1
            }
        ]
    },
    {
        "id": "chat11",
        "title": "Python Lists",
        "created_at": "2025-05-17T12:00:00.579+00Z",
        "last_updated_at": "2025-05-17T12:05:00.579+00Z",
        "prompts": [
            {
                "id": "prompt11",
                "prompt_request": {
                    "type": "text",
                    "message": "How do Python lists work?",
                    "pre_processed_message": {
                        "action": "PROCESS",
                        "risks": []
                    }
                },
                "prompt_response": {
                    "type": "text",
                    "message": "Python lists are ordered, mutable collections of items.",
                    "format": "MD4"
                },
                "chat_id": "chat11",
                "sequence_number": 1
            }
        ]
    },
    {
        "id": "chat12",
        "title": "Benefits of Yoga",
        "created_at": "2025-05-11T06:30:00.579+00Z",
        "last_updated_at": "2025-05-11T06:35:00.579+00Z",
        "prompts": [
            {
                "id": "prompt12",
                "prompt_request": {
                    "type": "text",
                    "message": "What are the benefits of yoga?",
                    "pre_processed_message": {
                        "action": "PROCESS",
                        "risks": []
                    }
                },
                "prompt_response": {
                    "type": "text",
                    "message": "Yoga improves flexibility, reduces stress, and boosts focus.",
                    "format": "MD4"
                },
                "chat_id": "chat12",
                "sequence_number": 1
            }
        ]
    },
    {
        "id": "chat13",
        "title": "Motivational Quote",
        "created_at": "2025-05-11T07:00:00.579+00Z",
        "last_updated_at": "2025-05-11T07:05:00.579+00Z",
        "prompts": [
            {
                "id": "prompt13",
                "prompt_request": {
                    "type": "text",
                    "message": "Give me a motivational quote",
                    "pre_processed_message": {
                        "action": "PROCESS",
                        "risks": []
                    }
                },
                "prompt_response": {
                    "type": "text",
                    "message": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
                    "format": "MD4"
                },
                "chat_id": "chat13",
                "sequence_number": 1
            }
        ]
    },
    {
        "id": "chat14",
        "title": "Cooking Tip",
        "created_at": "2025-05-11T08:15:00.579+00Z",
        "last_updated_at": "2025-05-11T08:20:00.579+00Z",
        "prompts": [
            {
                "id": "prompt14",
                "prompt_request": {
                    "type": "text",
                    "message": "What’s a quick cooking tip?",
                    "pre_processed_message": {
                        "action": "PROCESS",
                        "risks": []
                    }
                },
                "prompt_response": {
                    "type": "text",
                    "message": "Prep all ingredients before starting to cook for better efficiency.",
                    "format": "MD4"
                },
                "chat_id": "chat14",
                "sequence_number": 1
            }
        ]
    },
    {
        "id": "chat15",
        "title": "Learning Goals",
        "created_at": "2025-05-11T09:00:00.579+00Z",
        "last_updated_at": "2025-05-11T09:05:00.579+00Z",
        "prompts": [
            {
                "id": "prompt15",
                "prompt_request": {
                    "type": "text",
                    "message": "How do I set effective learning goals?",
                    "pre_processed_message": {
                        "action": "PROCESS",
                        "risks": []
                    }
                },
                "prompt_response": {
                    "type": "text",
                    "message": "Use SMART goals: Specific, Measurable, Achievable, Relevant, and Time-bound.",
                    "format": "MD4"
                },
                "chat_id": "chat15",
                "sequence_number": 1
            }
        ]
    }
    ] };
// Constants
const SecureBackendURL = 'https://secure.backend/api';
const SecureBackendSecret = 'super-secret-key';
// Utility
function generateTitle(prompt) {
    return prompt.substring(0, 10);
}
// ---------------- Routes ---------------- //
// GET all chats
app.get('/api/v1/chats', (req, res) => {
    console.log('GET /api/v1/chats called');
    res.json(appState.chats);
});
// POST create new chat with initial prompt
app.post('/api/v1/chats', (req, res) => {
    console.log('POST /api/v1/chats called with body:', req.body);
    const { prompt_text } = req.body;
    const chatId = (0, uuid_1.v4)();
    const timestamp = new Date().toISOString();
    const newChat = {
        id: chatId,
        title: generateTitle(prompt_text),
        created_at: timestamp,
        last_updated_at: timestamp,
        prompts: [],
    };
    appState.chats.push(newChat);
    console.log(`Chat created with ID: ${chatId}`);
    res.status(201).json(newChat);
});
// POST preprocess prompt
app.post('/api/v1/chats/:chatId/prompts/preprocess', (req, res) => {
    console.log(`POST /api/v1/chats/${req.params.chatId}/prompts/preprocess called with body:`, req.body);
    const { chatId } = req.params;
    const { prompt_text } = req.body;
    const chat = appState.chats.find(c => c.id === chatId);
    if (!chat) {
        console.warn(`Chat with ID ${chatId} not found`);
        res.status(404).json({ error: 'Chat not found' });
        return;
    }
    const promptId = (0, uuid_1.v4)();
    const promptObj = {
        id: promptId,
        prompt_request: {
            type: 'text',
            message: prompt_text,
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
    console.log(`Prompt preprocessed and added to chat ID: ${chatId}, Prompt ID: ${promptId}`);
    console.log(`Prompt Object: ${promptObj}`);
    res.status(200).json(promptObj);
});
// POST process prompt
app.post('/api/v1/prompts/:promptId/process', (req, res) => {
    console.log(`POST /api/v1/prompts/${req.params.promptId}/process called with body:`, req.body);
    const { promptId } = req.params;
    for (const chat of appState.chats) {
        const promptObj = chat.prompts.find(p => p.id === promptId);
        console.log(`prompt Object: ${promptObj}`);
        if (promptObj) {
            const response = {
                type: 'text',
                message: `Processed: ${promptObj.prompt_request.message}`,
                format: 'MD4',
            };
            promptObj.prompt_response = response;
            console.log(`Prompt processed for Prompt ID: ${promptId}`);
            console.log(`response: ${response}`);
            res.status(202).json(response);
            return;
        }
    }
    console.warn(`Prompt with ID ${promptId} not found`);
    res.status(404).json({ error: 'Prompt not found' });
});
// GET all prompts of a chat
app.get('/api/v1/chats/:chatId/prompts', (req, res) => {
    console.log(`GET /api/v1/chats/${req.params.chatId}/prompts called`);
    const { chatId } = req.params;
    const chat = appState.chats.find(c => c.id === chatId);
    if (!chat) {
        console.warn(`Chat with ID ${chatId} not found`);
        res.status(404).json({ error: 'Chat not found' });
        return;
    }
    res.status(200).json(chat.prompts);
});
// Start server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
