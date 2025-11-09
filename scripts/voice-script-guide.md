# Voice Script Guidelines for SustainAds AI

## Overview
This document provides guidelines for creating effective voiceover scripts for AI-generated video ads targeting climate-resilient local businesses.

## Voice Characteristics

### Tone
- **Warm and Welcoming**: Make viewers feel invited and valued
- **Optimistic and Positive**: Focus on solutions and opportunities
- **Authentic**: Avoid overly promotional or sales-heavy language
- **Professional yet Friendly**: Balance credibility with approachability

### Pacing
- **Opening (0-5s)**: Quick and attention-grabbing
- **Middle (5-25s)**: Moderate pace, clear articulation
- **Closing (25-30s)**: Energetic call-to-action

### Voice Selection
- **Gender**: Neutral or business preference
- **Age**: Mature, trusted voice (30-50 years apparent age)
- **Accent**: Local or neutral, depending on target audience
- **Energy**: Medium-high, enthusiastic but not overwhelming

## Script Structure

### 1. Opening Hook (5 seconds)
**Purpose**: Capture attention immediately
**Length**: 10-15 words
**Example**: "Looking for fresh, organic food that supports local farmers?"

### 2. Main Message (20 seconds)
**Purpose**: Communicate value proposition and sustainability focus
**Length**: 40-50 words
**Key Elements**:
- Business name and type
- Unique sustainable practices
- Community impact
- Key differentiators

**Example**: 
"Green Harvest Café is your neighborhood spot for farm-to-table dining. We source 100% of our ingredients from local organic farms within 50 miles, supporting our community while reducing carbon emissions. Every meal makes a difference."

### 3. Call-to-Action (5 seconds)
**Purpose**: Drive viewer action
**Length**: 10-15 words
**Example**: "Visit Green Harvest Café today. Find us on Main Street or online."

## Writing Tips

### Do's
✅ Use active voice
✅ Include specific details (numbers, locations, certifications)
✅ Emphasize benefits over features
✅ Use conversational language
✅ Include emotional appeal
✅ Mention sustainability credentials naturally
✅ Keep sentences short and punchy

### Don'ts
❌ Use jargon or technical terms
❌ Make exaggerated claims
❌ Rush through important information
❌ Include too many ideas in one sentence
❌ Use negative framing
❌ Forget the call-to-action
❌ Exceed 30 seconds total

## Sample Scripts

### Example 1: Eco-Friendly Retail Store
```
[0-5s] "Want to shop guilt-free and save the planet?"
[5-25s] "EcoStyle Boutique offers sustainable fashion from ethical brands. Every item is made from recycled or organic materials. We're carbon-neutral, zero-waste, and committed to fair trade. Style that doesn't cost the Earth."
[25-30s] "Shop EcoStyle Boutique downtown or at ecostyle.com"
```

### Example 2: Local Organic Restaurant
```
[0-5s] "Craving food that's good for you and the planet?"
[5-25s] "Harvest Table serves 100% organic, locally-sourced meals. We work with 15 family farms, eliminate food waste through composting, and use renewable energy. Delicious, sustainable dining in every bite."
[25-30s] "Reserve your table at HarvestTable.com today!"
```

### Example 3: Green Service Provider
```
[0-5s] "Need eco-friendly home cleaning solutions?"
[5-25s] "Pure Clean uses only natural, non-toxic products safe for your family and the environment. We're a local business reducing plastic waste and supporting community health. Professional cleaning that cares."
[25-30s] "Book Pure Clean online or call 555-PURE today!"
```

## Voice Recording Best Practices

### Technical Requirements
- **Format**: WAV or high-quality MP3 (320kbps)
- **Sample Rate**: 44.1 kHz or 48 kHz
- **Bit Depth**: 16-bit minimum
- **Mono/Stereo**: Mono preferred for voice

### Recording Tips
1. Use a quality microphone in a quiet environment
2. Maintain consistent distance from mic (6-12 inches)
3. Do 2-3 takes for each section
4. Include 1-second silence at beginning and end
5. Speak clearly with good enunciation
6. Match energy to script sections
7. Review for clarity before finalizing

## Integration with AI Text-to-Speech

When using AI TTS services (OpenAI, ElevenLabs, etc.):

### SSML Tags for Emphasis
```xml
<speak>
  <prosody rate="fast">Quick opening line!</prosody>
  <break time="500ms"/>
  <prosody rate="medium">Main content at normal pace.</prosody>
  <emphasis level="strong">Important point here.</emphasis>
  <break time="500ms"/>
  <prosody rate="fast" pitch="+5%">Energetic closing!</prosody>
</speak>
```

### Recommended TTS Settings
- **Speed**: 0.95 - 1.05 (natural pace)
- **Pitch**: 0 to +5 (slightly higher for enthusiasm)
- **Stability**: 0.7-0.8 (balanced)
- **Voice Model**: Latest version for best quality

## Quality Checklist

Before finalizing voiceover:
- [ ] Duration is 30 seconds or less
- [ ] All business details are accurate
- [ ] Pronunciation is correct
- [ ] Pacing is appropriate
- [ ] Audio levels are consistent
- [ ] No background noise or pops
- [ ] Call-to-action is clear
- [ ] Sustainability message is prominent
- [ ] Tone matches brand values
- [ ] Script flows naturally

## Localization Considerations

For multilingual support:
- Translate with cultural context, not just literal translation
- Adjust pacing for language differences (some languages are faster/slower)
- Consider local accents and dialects
- Verify sustainability terms are culturally relevant
- Adapt examples to local context

---

**Version**: 1.0
**Last Updated**: November 2024
**Contact**: For questions or custom voice requirements, contact the SustainAds AI team.
