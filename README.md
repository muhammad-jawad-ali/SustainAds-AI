# 🌱 SustainAds AI

**AI-Powered Video Ad Generator for Climate-Resilient Local Businesses**

SustainAds AI is an automated platform that generates professional, engaging 30-second video advertisements for local businesses focused on sustainability and climate resilience. Using AI-powered workflows, it creates customized video content including scripts, voiceovers, and visuals tailored to each business's unique sustainable practices.

---

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Workflows](#workflows)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- **🤖 AI-Powered Script Generation**: Automatically creates compelling video ad scripts based on business information
- **🎙️ Text-to-Speech Integration**: Converts scripts to professional voiceovers
- **🎬 Video Production Workflow**: Automated video generation using n8n workflows
- **🌍 Sustainability Focus**: Emphasizes eco-friendly practices and climate resilience
- **📱 Multi-Platform Support**: Exports in various formats for social media and web
- **⚡ Quick Turnaround**: Generates videos in minutes, not hours
- **🎨 Customizable Templates**: Flexible prompt templates for different business types
- **📊 Analytics Ready**: Tracks video generation metrics

---

## 📁 Project Structure

```
SustainAds-AI/
├── app/
│   ├── frontend/              # Frontend web application
│   │   ├── index.html        # Main HTML page
│   │   ├── styles.css        # Styling
│   │   └── app.js            # Frontend JavaScript
│   ├── backend/               # Node.js Express backend
│   │   ├── server.js         # Express server
│   │   └── generateVideo.js  # Video generation routes
│   ├── workflows/             # n8n automation workflows
│   │   └── main.json         # Main video generation workflow
│   └── models/                # AI prompt templates
│       └── promptTemplate.json
├── data/                      # Application data storage
│   └── README.md
├── media/                     # Media assets and outputs
│   └── README.md
├── docs/                      # Documentation
│   └── README.md
├── scripts/                   # Production guidelines
│   ├── voice-script-guide.md
│   └── video-production-guide.md
├── .gitignore
├── LICENSE                    # MIT License
├── README.md
└── package.json              # Node.js dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **n8n** (for workflow automation)
- **OpenAI API Key** (for AI script generation and TTS)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/muhammad-jawad-ali/SustainAds-AI.git
   cd SustainAds-AI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your API keys
   ```

4. **Start the backend server**
   ```bash
   npm start
   ```

5. **Open the application**
   ```
   Navigate to http://localhost:3000
   ```

---

## 📦 Installation

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd app/backend
   ```

2. Install required packages:
   ```bash
   npm install express cors
   ```

3. Create a `.env` file:
   ```env
   PORT=3000
   OPENAI_API_KEY=your_api_key_here
   N8N_WEBHOOK_URL=your_n8n_webhook_url
   ```

### n8n Workflow Setup

1. Install n8n globally:
   ```bash
   npm install -g n8n
   ```

2. Start n8n:
   ```bash
   n8n start
   ```

3. Import the workflow:
   - Navigate to http://localhost:5678
   - Import `app/workflows/main.json`
   - Configure API credentials (OpenAI, etc.)
   - Activate the workflow

---

## 💻 Usage

### Web Interface

1. Open the application at `http://localhost:3000`
2. Fill in your business details:
   - Business Name
   - Business Type
   - Description
   - Keywords
3. Click "Generate Video Ad"
4. Wait for the AI to create your video
5. Download or share your video

### API Usage

Generate a video programmatically:

```javascript
const response = await fetch('http://localhost:3000/api/generate-video', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    businessName: 'Green Harvest Café',
    businessType: 'restaurant',
    description: 'Organic, farm-to-table dining with locally sourced ingredients',
    keywords: ['organic', 'local', 'sustainable']
  })
});

const result = await response.json();
console.log(result.videoUrl);
```

---

## 📖 API Documentation

### POST `/api/generate-video`

Generate a new video advertisement.

**Request Body:**
```json
{
  "businessName": "string (required)",
  "businessType": "string (required)",
  "description": "string (required)",
  "keywords": ["string"] (optional)
}
```

**Response:**
```json
{
  "success": true,
  "businessName": "Green Harvest Café",
  "script": {
    "intro": "...",
    "body": "...",
    "outro": "..."
  },
  "videoUrl": "/media/video.mp4",
  "downloadUrl": "/api/download-video/123456",
  "metadata": {
    "duration": "30 seconds",
    "format": "mp4",
    "resolution": "1920x1080",
    "generated": "2024-11-09T05:15:00.000Z"
  }
}
```

### GET `/api/download-video/:id`

Download a generated video.

### GET `/health`

Check server health status.

---

## 🔄 Workflows

The n8n workflow (`app/workflows/main.json`) automates the video generation process:

1. **Webhook Trigger**: Receives business data from API
2. **Data Processing**: Validates and formats input
3. **AI Script Generation**: Creates video script using GPT-4
4. **Text-to-Speech**: Generates voiceover audio
5. **Video Assembly**: Combines audio with video footage
6. **Response**: Returns completed video URL

To customize the workflow:
- Edit `app/workflows/main.json`
- Import into n8n
- Modify nodes as needed
- Save and reactivate

---

## ⚙️ Configuration

### Prompt Templates

Customize video scripts by editing `app/models/promptTemplate.json`:

```json
{
  "intro": "🌱 Introducing {{businessName}}",
  "body": "A {{businessType}} committed to {{description}}",
  "outro": "Visit {{businessName}} today!",
  "voiceNotes": "Warm, friendly, optimistic tone"
}
```

### Voice Settings

Configure TTS in the n8n workflow:
- Voice model: Choose from available voices
- Speed: 0.95 - 1.05 (default: 1.0)
- Pitch: Adjust for tone

### Video Settings

Modify video output specifications:
- Resolution: 1920x1080 (configurable)
- Frame rate: 30fps
- Format: MP4 (H.264)
- Duration: 30 seconds

---

## 📚 Resources

### Documentation
- [Voice Script Guide](scripts/voice-script-guide.md) - Guidelines for voiceover scripts
- [Video Production Guide](scripts/video-production-guide.md) - Video creation best practices
- [API Reference](docs/api-reference.md) - Detailed API documentation

### Example Videos
Check the `media/` directory for sample outputs and templates.

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Add tests for new features
- Update documentation
- Ensure all tests pass

### Security Best Practices

**For Production Deployment:**
1. **Add Rate Limiting**: Install and configure `express-rate-limit` to prevent abuse
   ```bash
   npm install express-rate-limit
   ```
   Example implementation:
   ```javascript
   const rateLimit = require('express-rate-limit');
   
   const limiter = rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 100 // limit each IP to 100 requests per windowMs
   });
   
   app.use('/api/', limiter);
   ```

2. **Environment Variables**: Never commit sensitive credentials
3. **Input Validation**: Validate all user inputs on the backend
4. **HTTPS**: Use SSL/TLS certificates in production
5. **CORS**: Configure CORS to only allow trusted domains
6. **File Upload Limits**: Set appropriate file size limits
7. **Authentication**: Add user authentication if needed

---

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Workflow Automation**: n8n
- **AI/ML**: OpenAI GPT-4, TTS APIs
- **Video Processing**: FFmpeg (recommended)
- **Storage**: Local filesystem (configurable for cloud)

---

## 🐛 Troubleshooting

### Common Issues

**Server won't start:**
- Check if port 3000 is available
- Verify Node.js version (v16+)
- Ensure all dependencies are installed

**Video generation fails:**
- Verify OpenAI API key is set
- Check n8n workflow is active
- Review server logs for errors

**n8n connection issues:**
- Ensure n8n is running on port 5678
- Check webhook URL configuration
- Verify API credentials in workflow

For more help, see [docs/troubleshooting.md](docs/troubleshooting.md)

---

## 📈 Roadmap

- [ ] Multi-language support
- [ ] Advanced video templates
- [ ] Real-time preview
- [ ] Cloud storage integration
- [ ] Analytics dashboard
- [ ] Social media auto-posting
- [ ] Custom branding options
- [ ] Batch video generation

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🌟 Acknowledgments

- OpenAI for GPT-4 and TTS APIs
- n8n community for workflow automation
- All contributors and users supporting sustainable local businesses

---

## 📞 Contact & Support

- **GitHub Issues**: [Report a bug or request a feature](https://github.com/muhammad-jawad-ali/SustainAds-AI/issues)
- **Email**: support@sustainads.ai
- **Website**: [sustainads.ai](https://sustainads.ai)

---

**Made with 💚 for climate-resilient local businesses**
