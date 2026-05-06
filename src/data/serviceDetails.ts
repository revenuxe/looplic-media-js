export interface ServiceDetail {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  variant: "default" | "lime" | "orange";
  keywords: string;
  steps: { number: string; title: string; description: string }[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
  useCases: string[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "ai-video-production": {
    slug: "ai-video-production",
    title: "Cinematic AI Video Production",
    shortDesc:
      "AI-generated cinematic videos, ad reels and social cuts — concept to final master, in days, not months.",
    longDesc:
      "media.x by revenuxe blends generative AI video models (Sora, Veo, Runway, Kling) with real cinematic craft to produce ads, brand films, explainers, talking-head avatars and viral social cuts. From script to a polished, broadcast-ready master, we deliver cinematic AI video production at a fraction of the cost and time of a traditional shoot — without compromising on storytelling, visual quality or brand consistency.",
    variant: "default",
    keywords:
      "AI video production, AI video generation services, generative AI ads, Sora video agency, Runway video production, AI commercial maker, AI video agency India",
    steps: [
      { number: "01", title: "Brief & AI Concepting", description: "We translate your brand goals into AI-ready prompts, references and a creative direction deck." },
      { number: "02", title: "Script & Storyboard", description: "AI-assisted script + frame-by-frame storyboard so every shot earns its place." },
      { number: "03", title: "Generate & Direct", description: "We run multi-model generations (Sora, Veo, Runway, Kling) and curate the best takes." },
      { number: "04", title: "Edit, Sound & Master", description: "Cinematic edit, color, AI VO, music and sound design — delivered in every aspect ratio you need." },
    ],
    deliverables: [
      "Master 16:9 cinematic cut",
      "9:16 Reels / Shorts / TikTok versions",
      "1:1 feed cut + 6s and 15s ad variants",
      "Source files + thumbnails",
    ],
    faqs: [
      { q: "How fast can you deliver an AI video?", a: "Most ad-length AI videos ship within 5–10 working days from approved script." },
      { q: "Will it look on-brand?", a: "Yes — we lock style, palette and characters with reference frames and LoRA-style consistency techniques." },
      { q: "Can I use it on TV / YouTube ads?", a: "Absolutely. We deliver broadcast and YouTube-ready masters in 4K." },
    ],
    useCases: ["Performance ads", "Brand films", "Product launch teasers", "Explainer videos", "Social reels at scale"],
  },
  "product-photography": {
    slug: "product-photography",
    title: "Product Photography & Shoots",
    shortDesc:
      "Studio + lifestyle product photography that makes your e-commerce, ads and storefront convert.",
    longDesc:
      "From clean white-background catalog shots to scroll-stopping lifestyle imagery, our product photography service is built for D2C brands, marketplaces and ad campaigns. We handle everything — styling, lighting, props, retouching — and deliver Amazon-ready, Shopify-ready and ad-ready visuals that lift CTR and conversions.",
    variant: "default",
    keywords:
      "product photography Bangalore, ecommerce product shoot, Amazon product photography, D2C product shoot, lifestyle product photography agency",
    steps: [
      { number: "01", title: "Shot List & Mood Board", description: "We align on angles, props, lifestyle scenarios and final use cases." },
      { number: "02", title: "Studio / Location Shoot", description: "Full crew, lighting and styling — studio or on-location." },
      { number: "03", title: "Retouching & Color", description: "Pixel-perfect retouching, shadow work and color matching to your brand." },
      { number: "04", title: "Delivery & Variants", description: "Marketplace-ready, ad-ready and social-ready crops in every size." },
    ],
    deliverables: ["White-background catalog images", "Lifestyle / in-use shots", "Hero banners + ad creatives", "All marketplace size variants"],
    faqs: [
      { q: "Do you shoot at our location?", a: "Yes — we shoot at our studio or on location anywhere in India." },
      { q: "Turnaround?", a: "Typically 7–14 days from shoot day, depending on volume." },
      { q: "Can you do bulk catalog shoots?", a: "Yes, we handle 50–500+ SKUs efficiently." },
    ],
    useCases: ["D2C product launches", "Amazon / Flipkart catalog", "Shopify storefronts", "Performance ad creatives", "Print & OOH"],
  },
  "ugc-content": {
    slug: "ugc-content",
    title: "UGC & Creator-Style Content",
    shortDesc:
      "Authentic creator and actor-led UGC built for Reels, Shorts and TikTok — designed to convert.",
    longDesc:
      "We produce high-volume UGC-style ads featuring vetted creators and actors who match your audience. Native, raw, scroll-native — built for Meta, TikTok, YouTube Shorts and influencer campaigns. Perfect for D2C brands, apps and SaaS that need a constant stream of testable ad creatives.",
    variant: "orange",
    keywords:
      "UGC agency India, UGC ads, creator content agency, TikTok ads UGC, Meta ads UGC creators, performance creative agency",
    steps: [
      { number: "01", title: "Brief & Creator Casting", description: "We cast 1–10 creators matching your audience demo and brand voice." },
      { number: "02", title: "Hooks & Scripts", description: "We write 5–15 hooks per concept, optimized for the algorithm." },
      { number: "03", title: "Shoot & Iterate", description: "Creators shoot raw, native, vertical content with multiple variations." },
      { number: "04", title: "Edit & Captions", description: "Fast cuts, captions, B-roll and platform-native edits delivered weekly." },
    ],
    deliverables: ["10–50 UGC ad variations / month", "Hooks, B-roll, talking heads", "9:16 Reels/Shorts/TikTok ready", "Captioned + raw versions"],
    faqs: [
      { q: "Do you provide the creators?", a: "Yes, fully vetted creators across age groups, languages and niches." },
      { q: "Can we send our product?", a: "Yes — we handle logistics, briefing and shoot." },
      { q: "Volume per month?", a: "Typical retainers deliver 20–50 ad variations per month." },
    ],
    useCases: ["Meta & TikTok performance ads", "App install campaigns", "Influencer-style brand content", "Testimonial reels"],
  },
  "ad-film-production": {
    slug: "ad-film-production",
    title: "Ad Film Production",
    shortDesc:
      "End-to-end ad film production — concept, direction, shoot, post — for brand and performance.",
    longDesc:
      "From a 6-second performance hook to a 60-second hero film, we handle the entire ad film production pipeline: pre-production, casting, direction, cinematography, editing, color, sound and delivery. Whether you need a TVC, a YouTube pre-roll, an OTT spot or a digital brand film, our team executes with cinematic polish.",
    variant: "default",
    keywords:
      "ad film production company, TVC production, commercial film production India, YouTube ad agency, performance ad film, brand film production",
    steps: [
      { number: "01", title: "Creative & Script", description: "Concept development, scripting and reference decks aligned to your KPIs." },
      { number: "02", title: "Pre-production", description: "Casting, locations, art direction, shot list and full pre-production planning." },
      { number: "03", title: "Direction & Shoot", description: "Director-led shoot with cinema-grade cameras, lighting and sound." },
      { number: "04", title: "Edit, Color, Sound, VFX", description: "Polished edit, grade, mix, VFX and final master delivered in every cut-down." },
    ],
    deliverables: ["Hero ad film (30s/60s)", "Cut-downs (6s, 10s, 15s)", "All aspect ratios", "BTS reel + still frames"],
    faqs: [
      { q: "Do you handle casting?", a: "Yes — actors, models, voice artists and creators." },
      { q: "Where do you shoot?", a: "Across India — Bangalore, Mumbai, Delhi, Hyderabad and beyond." },
      { q: "Timelines?", a: "3–6 weeks from brief to final master, depending on scope." },
    ],
    useCases: ["TVCs & OTT spots", "YouTube hero campaigns", "Brand films", "Product launch films"],
  },
  "brand-shoots": {
    slug: "brand-shoots",
    title: "Brand & Lifestyle Shoots",
    shortDesc:
      "Fashion, F&B, real estate and lifestyle brand shoots that elevate your visual identity.",
    longDesc:
      "Premium brand shoots for fashion labels, real estate developers, restaurants and lifestyle brands. From look-books and editorial campaigns to property walkthroughs and menu shoots, we deliver imagery that makes your brand feel iconic and instantly recognizable.",
    variant: "lime",
    keywords:
      "brand shoot agency, fashion photography Bangalore, real estate photography, restaurant food photography, lifestyle brand campaign",
    steps: [
      { number: "01", title: "Brand Discovery", description: "Deep dive into your brand voice, audience and visual references." },
      { number: "02", title: "Creative Direction", description: "Mood board, styling, locations, casting and shot list." },
      { number: "03", title: "Production Day", description: "Full crew — photographer, stylist, HMU, lighting, set." },
      { number: "04", title: "Post & Delivery", description: "Retouching, color and final delivery in every format." },
    ],
    deliverables: ["Editorial look-book", "Campaign hero images", "Social grid + reels stills", "Web + print masters"],
    faqs: [
      { q: "Do you offer styling?", a: "Yes — full styling, HMU and art direction included." },
      { q: "Real estate walkthroughs?", a: "Yes — stills, drone and walkthrough video." },
      { q: "F&B / menu shoots?", a: "Yes, plated food, beverage and lifestyle restaurant imagery." },
    ],
    useCases: ["Fashion campaigns", "Real estate marketing", "Restaurant & cafe branding", "Hospitality & lifestyle"],
  },
  "performance-creative": {
    slug: "performance-creative",
    title: "Performance Creative & Ad Iteration",
    shortDesc:
      "High-converting performance ads built, tested and iterated weekly to scale ROAS on Meta, Google & TikTok.",
    longDesc:
      "We run a weekly performance-creative engine — concepts, hooks, statics, UGC, AI cuts and motion — designed to crush CPA and lift ROAS. Each week your account gets fresh, on-trend ad variants tested against winners, with creative reporting tied to actual ad performance. Built for D2C brands, mobile apps and SaaS scaling spend on Meta, Google, TikTok and YouTube.",
    variant: "default",
    keywords:
      "performance creative agency, Meta ads creative, Facebook ad agency, TikTok ads creative, performance marketing video, ROAS optimization, scroll stopping ads, conversion-focused ad creative",
    steps: [
      { number: "01", title: "Audit & Hook Bank", description: "We audit current ads, build a library of 30+ tested hooks and angles per brand." },
      { number: "02", title: "Weekly Concepts", description: "Fresh ad concepts every week — UGC, AI video, static, motion — mapped to funnel stage." },
      { number: "03", title: "Test & Learn", description: "We work with your media buyer to launch, track winners and kill losers fast." },
      { number: "04", title: "Scale Winners", description: "Top-performing ads get cut down, remixed and scaled into more variants." },
    ],
    deliverables: ["20–40 new ad variants / month", "Hook & angle bank", "Weekly creative reporting", "Winning ad cut-downs"],
    faqs: [
      { q: "Do you also run the ads?", a: "We focus on creative — but partner closely with your in-house or agency media buyer." },
      { q: "Which platforms?", a: "Meta, TikTok, YouTube, Google Demand Gen, Snap and Pinterest." },
      { q: "Min commitment?", a: "Monthly retainer, 3-month minimum recommended for testing depth." },
    ],
    useCases: ["D2C brand scaling", "App install campaigns", "SaaS lead gen", "BFSI & fintech ads"],
  },
  "motion-graphics": {
    slug: "motion-graphics",
    title: "Motion Graphics & 2D/3D Animation",
    shortDesc:
      "Explainer videos, motion graphics and 2D/3D animation that make complex ideas instantly clickable.",
    longDesc:
      "From a 30-second SaaS explainer to a 3D product reveal or a fully animated brand film, our motion graphics studio brings ideas to life. We handle scripting, storyboarding, character design, illustration, 3D modelling, animation, sound design and final delivery — perfect for product launches, app demos, fintech onboarding and brand storytelling.",
    variant: "lime",
    keywords:
      "motion graphics studio, 2D animation agency, 3D animation India, explainer video production, SaaS explainer video, animated brand film, after effects studio Bangalore",
    steps: [
      { number: "01", title: "Script & Storyboard", description: "Tight script + frame-by-frame storyboard signed off before any animation begins." },
      { number: "02", title: "Style Frames", description: "Illustration and look-dev frames so you see the visual world before production." },
      { number: "03", title: "Animation & VO", description: "Full animation, voice-over recording, music and sound design." },
      { number: "04", title: "Final Delivery", description: "Master video + cut-downs, social ratios, GIFs and source files." },
    ],
    deliverables: ["30s–90s explainer video", "Vertical & square cut-downs", "Animated GIFs / loops", "Source files (AE / Blender)"],
    faqs: [
      { q: "Do you do 3D?", a: "Yes — Blender, Cinema 4D and Houdini for product, abstract and character work." },
      { q: "Turnaround?", a: "Typical 60s explainer in 3–5 weeks." },
      { q: "Voice-over included?", a: "Yes — male/female, English & Indian languages." },
    ],
    useCases: ["SaaS explainers", "App demos", "Fintech onboarding", "Product launch reveals", "Brand films"],
  },
  "podcast-video": {
    slug: "podcast-video",
    title: "Podcast & Long-Form Video Production",
    shortDesc:
      "Multi-camera podcast production + cinematic long-form video with built-in clip strategy for social.",
    longDesc:
      "We produce podcasts and long-form videos that double as content engines — multi-camera shoot, broadcast-grade audio, cinematic lighting, plus a clipping team that turns each episode into 10–20 short-form clips for Reels, Shorts and TikTok. Perfect for founder-led brands, B2B thought leadership, agencies and creators.",
    variant: "default",
    keywords:
      "podcast production company, podcast studio Bangalore, video podcast production, long form content agency, founder podcast, B2B podcast, podcast clip editing service",
    steps: [
      { number: "01", title: "Format & Setup", description: "We design the format, set, branding and content calendar." },
      { number: "02", title: "Multi-Cam Shoot", description: "3–4 camera shoot, lavalier + shotgun mics, broadcast lighting." },
      { number: "03", title: "Edit & Master", description: "Full episode edit, color, audio mix, intro/outro and chapters." },
      { number: "04", title: "Clip Engine", description: "10–20 short clips per episode, captioned and optimized for each platform." },
    ],
    deliverables: ["Long-form episode (30–90 min)", "10–20 short clips / episode", "Audio podcast master", "Branded thumbnails"],
    faqs: [
      { q: "Do you have a studio?", a: "Yes — turnkey podcast studio in Bangalore, plus on-location setups." },
      { q: "Can you ghost-host?", a: "We can produce, direct and even script — you focus on showing up." },
      { q: "Distribution?", a: "We deliver — your team or ours can publish across YouTube, Spotify, Apple, Reels & Shorts." },
    ],
    useCases: ["Founder podcasts", "B2B thought leadership", "Creator interview shows", "Conference recap content"],
  },
  "ai-avatars": {
    slug: "ai-avatars",
    title: "AI Avatars & Synthetic Presenters",
    shortDesc:
      "Photoreal AI avatars and digital presenters for ads, training, sales and personalised video at scale.",
    longDesc:
      "Scale faceless or branded video without booking a studio. We build photoreal AI avatars and synthetic presenters using HeyGen, Synthesia, D-ID, ElevenLabs and custom-trained models — for sales videos, training content, multilingual campaigns, explainer videos and personalised video at scale. Lip-sync in 30+ languages and clones of your founder, host or actor on demand.",
    variant: "default",
    keywords:
      "AI avatar agency, synthetic media production, HeyGen agency, Synthesia agency, AI presenter videos, digital twin avatar, multilingual video production AI, ElevenLabs voice cloning",
    steps: [
      { number: "01", title: "Avatar Selection / Build", description: "Choose a stock AI presenter or we build a custom digital twin from your footage." },
      { number: "02", title: "Script & Voice", description: "AI-assisted scripts + voice cloning in your preferred language and tone." },
      { number: "03", title: "Generate & Direct", description: "Multi-take generation, lip-sync QA and creative direction." },
      { number: "04", title: "Edit & Localize", description: "Edit, B-roll, captions and multilingual versions ready to ship." },
    ],
    deliverables: ["Custom AI avatar / clone", "Multilingual video versions", "Captioned social cuts", "Reusable avatar library"],
    faqs: [
      { q: "Can you clone my founder?", a: "Yes — with consent, we build a high-fidelity digital twin." },
      { q: "How many languages?", a: "30+ including English, Hindi, Spanish, Arabic, French, German, Portuguese." },
      { q: "Is it ethical / disclosed?", a: "Yes — we follow consent + disclosure best practices for synthetic media." },
    ],
    useCases: ["Sales outreach video", "Training & L&D", "Multilingual ads", "Personalised onboarding", "Faceless YouTube channels"],
  },
  "ecommerce-video": {
    slug: "ecommerce-video",
    title: "E-commerce Product Video Ads",
    shortDesc:
      "High-converting product videos for Shopify, Amazon, Meta & TikTok — built to lift CTR and AOV.",
    longDesc:
      "We produce performance-grade product videos engineered for the platforms that sell — Shopify PDPs, Amazon Sponsored Brands, Meta Reels, TikTok Shop and Flipkart. From cinematic studio shoots to splash, slow-mo, stop-motion and AI-generated product visuals, we build creative that lifts CTR, conversion rate and AOV.</br>",
    variant: "orange",
    keywords:
      "ecommerce video production, Shopify product video, Amazon product video, TikTok shop video, Meta ad video, D2C video ads, product demo video agency, splash photography India",
    steps: [
      { number: "01", title: "Sales Funnel Audit", description: "We map your funnel — top, middle, bottom — and design videos for each stage." },
      { number: "02", title: "Concept & Shotlist", description: "Hooks, demos, before/after, splash, stop-motion — concepted per SKU." },
      { number: "03", title: "Studio Shoot", description: "Cinema-grade rig, splash team, stylist, AI augmentation where it adds magic." },
      { number: "04", title: "Edit & Variants", description: "PDP video, hero ad, 6s/15s cut-downs, vertical & square — captioned." },
    ],
    deliverables: ["Hero PDP video", "6s / 15s / 30s ad cut-downs", "All aspect ratios + captions", "Static frames & GIFs"],
    faqs: [
      { q: "Do you handle returns / shipping?", a: "Yes — pickup and return logistics for products across India." },
      { q: "Will it lift conversions?", a: "Brands typically see 15–40% CTR uplift on tested winning creatives." },
      { q: "Bulk SKU pricing?", a: "Yes — discounted rates for catalogs above 25 SKUs." },
    ],
    useCases: ["Shopify PDPs", "Amazon Sponsored Brand video", "Meta & TikTok product ads", "Quick commerce (Blinkit/Zepto)"],
  },
  "social-content": {
    slug: "social-content",
    title: "Social Media Content & Reels Production",
    shortDesc:
      "Monthly Reels, Shorts and TikTok content engines that keep your brand top-of-feed.",
    longDesc:
      "We run end-to-end social content production — monthly shoot days, content calendars, trend monitoring, scripting, shooting and editing — so your Instagram, YouTube Shorts, LinkedIn and TikTok always have fresh, on-trend content. Built for D2C, fashion, F&B, real estate, fintech and personal brands.",
    variant: "default",
    keywords:
      "social media content agency, Instagram Reels production, YouTube Shorts agency, TikTok content production, monthly content retainer, brand content calendar, founder content agency",
    steps: [
      { number: "01", title: "Strategy & Calendar", description: "Audience, pillars and 30-day content calendar mapped to your goals." },
      { number: "02", title: "Monthly Shoot Day", description: "One studio + location day producing 30–60 pieces of content per month." },
      { number: "03", title: "Edit & Caption", description: "Trend-aware editing, captions, hashtags, hooks — ready to publish." },
      { number: "04", title: "Publish & Iterate", description: "We publish (or hand off), track performance and refine month-over-month." },
    ],
    deliverables: ["30–60 Reels / Shorts / month", "Static carousels & posts", "Captions, hashtags & hooks", "Monthly performance report"],
    faqs: [
      { q: "Just shoot or full management?", a: "Both — production-only or full content + community management." },
      { q: "Do you handle founder content?", a: "Yes — heavy specialty in founder-led + executive content." },
      { q: "Min retainer?", a: "Monthly retainer, 3-month minimum." },
    ],
    useCases: ["D2C brand pages", "Founder personal branding", "Real estate marketing", "F&B & restaurants", "Coaches & creators"],
  },
  "scripts-storyboards": {
    slug: "scripts-storyboards",
    title: "AI Scriptwriting & Storyboarding",
    shortDesc:
      "AI-assisted scripts, shot planning and storyboards so every frame has a purpose.",
    longDesc:
      "Great content starts with a great script. We pair senior copy and creative directors with AI tooling to generate, refine and pressure-test scripts, hooks and storyboards — for ads, brand films, AI video, UGC and explainers. Faster ideation, sharper hooks, fewer reshoots.",
    variant: "default",
    keywords:
      "AI scriptwriting agency, ad copywriting, storyboard service, ad concept development, video script writer India",
    steps: [
      { number: "01", title: "Discovery & Insight", description: "We understand your audience, offer, KPIs and brand voice." },
      { number: "02", title: "Concepts & Hooks", description: "10+ hooks and 3+ concept routes per brief, AI-assisted, human-curated." },
      { number: "03", title: "Script & Storyboard", description: "Final scripts with frame-by-frame storyboards, references and shot notes." },
      { number: "04", title: "Iteration & Handover", description: "Two rounds of revisions, then production-ready handover." },
    ],
    deliverables: ["10+ hooks", "3+ concept routes", "Final shooting script", "Visual storyboard PDF"],
    faqs: [
      { q: "Can you just write scripts?", a: "Yes — script-only and storyboard-only engagements available." },
      { q: "Languages?", a: "English, Hindi, Hinglish, Tamil, Telugu, Kannada and more." },
      { q: "How many revisions?", a: "Two rounds included; additional rounds at small fee." },
    ],
    useCases: ["Ad scripts", "AI video prompts", "UGC briefs", "Brand film scripts", "Explainer videos"],
  },
};

export const serviceSlugMap: Record<string, string> = {
  "Cinematic AI Video Production": "ai-video-production",
  "AI Video Generation": "ai-video-production",
  "Product Photography & Shoots": "product-photography",
  "Product Shoots": "product-photography",
  "UGC & Creator-Style Content": "ugc-content",
  "UGC-Style Shoots": "ugc-content",
  "Ad Film Production": "ad-film-production",
  "Brand & Lifestyle Shoots": "brand-shoots",
  "Brand Shoots": "brand-shoots",
  "AI Scriptwriting & Storyboarding": "scripts-storyboards",
  "Scriptwriting & Storyboarding": "scripts-storyboards",
  "Performance Creative & Ad Iteration": "performance-creative",
  "Motion Graphics & 2D/3D Animation": "motion-graphics",
  "Podcast & Long-Form Video Production": "podcast-video",
  "AI Avatars & Synthetic Presenters": "ai-avatars",
  "E-commerce Product Video Ads": "ecommerce-video",
  "Social Media Content & Reels Production": "social-content",
};

export const serviceList = Object.values(serviceDetails);

export interface ToolItem {
  name: string;
  category: string;
  description: string;
}

export const toolsWeUse: ToolItem[] = [
  { name: "Sora", category: "AI Video", description: "OpenAI's flagship text-to-video for cinematic ad cuts and brand films." },
  { name: "Veo 3", category: "AI Video", description: "Google DeepMind's high-fidelity video model with native audio generation." },
  { name: "Runway Gen-4", category: "AI Video", description: "Production-grade AI video, motion brush and director-style camera control." },
  { name: "Kling AI", category: "AI Video", description: "Long-form, ultra-realistic AI video for product, lifestyle and human action shots." },
  { name: "Seedance", category: "AI Video", description: "ByteDance's text-and-image-to-video model for fast, social-native AI cuts." },
  { name: "Luma Dream Machine", category: "AI Video", description: "Cinematic camera moves, ray-traced realism for AI b-roll and product reveals." },
  { name: "Pika 2.0", category: "AI Video", description: "Fast iteration, lip-sync and stylized AI video for social and ads." },
  { name: "Midjourney", category: "AI Image", description: "Reference frames, style frames and key art generation." },
  { name: "Flux & Ideogram", category: "AI Image", description: "Photo-real product imagery, typography-aware ad statics and key visuals." },
  { name: "HeyGen & Synthesia", category: "AI Avatars", description: "Photoreal AI presenters and digital twins for sales, training and ads." },
  { name: "ElevenLabs", category: "AI Voice", description: "Voice cloning and multilingual VO in 30+ languages." },
  { name: "Suno & Udio", category: "AI Music", description: "Custom AI scoring, jingles and sound beds for brand films." },
  { name: "Adobe Premiere & After Effects", category: "Post Production", description: "Industry-standard edit, motion graphics and finishing pipeline." },
  { name: "DaVinci Resolve", category: "Color & Finishing", description: "Cinema-grade color grading, HDR delivery and broadcast mastering." },
  { name: "Blender & Cinema 4D", category: "3D Animation", description: "3D product, character and abstract animation for premium brand work." },
  { name: "ARRI, RED & Sony Cinema Cameras", category: "Cinematography", description: "Hollywood-grade cinema cameras for our on-set ad film and brand shoots." },
];

