const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

// Import prompt template
const promptTemplatePath = path.join(__dirname, '../models/promptTemplate.json');

/**
 * POST /api/generate-video
 * Generate an AI video ad for a local business
 */
router.post('/generate-video', async (req, res) => {
    try {
        const { businessName, businessType, description, keywords } = req.body;

        // Validate required fields
        if (!businessName || !businessType || !description) {
            return res.status(400).json({ 
                error: 'Missing required fields',
                required: ['businessName', 'businessType', 'description']
            });
        }

        console.log('Generating video for:', businessName);

        // Load prompt template
        const promptTemplate = await loadPromptTemplate();

        // Generate script using AI prompt
        const videoScript = generateScript({
            businessName,
            businessType,
            description,
            keywords: keywords || [],
            template: promptTemplate
        });

        // In a real implementation, this would:
        // 1. Send request to n8n workflow
        // 2. Generate voiceover using TTS
        // 3. Generate or select video clips
        // 4. Combine audio and video
        // 5. Return final video URL

        // For now, return mock response
        const videoData = {
            success: true,
            businessName,
            script: videoScript,
            videoUrl: `/media/sample-video.mp4`, // Placeholder
            downloadUrl: `/api/download-video/${Date.now()}`,
            metadata: {
                duration: '30 seconds',
                format: 'mp4',
                resolution: '1920x1080',
                generated: new Date().toISOString()
            }
        };

        // Log generation for analytics
        await logVideoGeneration(videoData);

        res.json(videoData);

    } catch (error) {
        console.error('Error generating video:', error);
        res.status(500).json({ 
            error: 'Failed to generate video',
            message: error.message 
        });
    }
});

/**
 * GET /api/download-video/:id
 * Download a generated video
 */
router.get('/download-video/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        // In a real implementation, fetch video from storage
        const videoPath = path.join(__dirname, '../../media/sample-video.mp4');
        
        res.download(videoPath, `sustainads-${id}.mp4`, (err) => {
            if (err) {
                console.error('Download error:', err);
                res.status(500).json({ error: 'Failed to download video' });
            }
        });
    } catch (error) {
        console.error('Error downloading video:', error);
        res.status(500).json({ error: 'Download failed' });
    }
});

/**
 * Load prompt template from models directory
 */
async function loadPromptTemplate() {
    try {
        const templateData = await fs.readFile(promptTemplatePath, 'utf8');
        return JSON.parse(templateData);
    } catch (error) {
        console.warn('Could not load prompt template, using default');
        return getDefaultTemplate();
    }
}

/**
 * Generate video script from business data and template
 */
function generateScript(data) {
    const { businessName, businessType, description, keywords, template } = data;
    
    const script = {
        intro: template.intro.replace('{{businessName}}', businessName),
        body: template.body
            .replace('{{businessType}}', businessType)
            .replace('{{description}}', description)
            .replace('{{keywords}}', keywords.join(', ')),
        outro: template.outro.replace('{{businessName}}', businessName),
        voiceNotes: template.voiceNotes
    };

    return script;
}

/**
 * Default template if file not found
 */
function getDefaultTemplate() {
    return {
        intro: "Introducing {{businessName}}",
        body: "A {{businessType}} that {{description}}. Supporting {{keywords}}.",
        outro: "Visit {{businessName}} today!",
        voiceNotes: "Friendly, upbeat tone"
    };
}

/**
 * Log video generation for analytics
 */
async function logVideoGeneration(data) {
    const logDir = path.join(__dirname, '../../data');
    const logFile = path.join(logDir, 'generations.log');
    
    try {
        // Ensure data directory exists
        await fs.mkdir(logDir, { recursive: true });
        
        const logEntry = `${new Date().toISOString()} - ${data.businessName}\n`;
        await fs.appendFile(logFile, logEntry);
    } catch (error) {
        console.error('Logging error:', error);
    }
}

module.exports = router;
