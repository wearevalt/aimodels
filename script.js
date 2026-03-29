// AI Video Generation Models Data
const modelsData = [
    {
        id: 1,
        name: "Sora",
        developer: "OpenAI",
        description: "Revolutionary text-to-video model capable of generating highly realistic and imaginative scenes from text instructions. Known for its exceptional quality and coherence.",
        maxDuration: "60 seconds",
        resolution: "1080p",
        pricing: "Subscription",
        bestFor: "Creative storytelling",
        rating: 4.9,
        tags: ["Text-to-Video", "High Quality", "60s Videos"],
        categories: ["text-to-video", "api"],
        url: "https://openai.com/sora"
    },
    {
        id: 2,
        name: "Runway Gen-3",
        developer: "Runway",
        description: "Industry-leading video generation platform with advanced motion control, style transfer, and professional-grade output quality for creative professionals.",
        maxDuration: "40 seconds",
        resolution: "4K",
        pricing: "Credits-based",
        bestFor: "Professional production",
        rating: 4.8,
        tags: ["Professional", "Motion Control", "API Access"],
        categories: ["text-to-video", "image-to-video", "api"],
        url: "https://runwayml.com"
    },
    {
        id: 3,
        name: "Pika",
        developer: "Pika Labs",
        description: "User-friendly AI video generator with impressive quality and fast generation times. Great balance of features and accessibility for creators.",
        maxDuration: "30 seconds",
        resolution: "1080p",
        pricing: "Freemium",
        bestFor: "Quick prototyping",
        rating: 4.7,
        tags: ["User-Friendly", "Fast Generation", "Affordable"],
        categories: ["text-to-video", "image-to-video", "free"],
        url: "https://pika.art"
    },
    {
        id: 4,
        name: "Kling",
        developer: "Kuaishou",
        description: "Powerful video generation model with impressive motion dynamics and long-form video capabilities. Excellent for creating engaging social media content.",
        maxDuration: "2 minutes",
        resolution: "1080p",
        pricing: "Free/Premium",
        bestFor: "Long-form content",
        rating: 4.6,
        tags: ["Long Duration", "Motion Dynamics", "Social Media"],
        categories: ["text-to-video", "image-to-video", "free"],
        url: "https://kling.kuaishou.com"
    },
    {
        id: 5,
        name: "Stable Video Diffusion",
        developer: "Stability AI",
        description: "Open-source video generation model that can be run locally. Perfect for developers and researchers who want full control over the generation process.",
        maxDuration: "4 seconds",
        resolution: "1024x576",
        pricing: "Open Source",
        bestFor: "Developers/Researchers",
        rating: 4.5,
        tags: ["Open Source", "Local Deployment", "Customizable"],
        categories: ["text-to-video", "image-to-video", "free", "api"],
        url: "https://stability.ai"
    },
    {
        id: 6,
        name: "Gen-2",
        developer: "Runway",
        description: "Versatile video generation model supporting text-to-video, image-to-video, and video-to-video transformations. Great for creative experimentation.",
        maxDuration: "16 seconds",
        resolution: "4K",
        pricing: "Credits-based",
        bestFor: "Versatile creation",
        rating: 4.6,
        tags: ["Versatile", "Multiple Modes", "High Resolution"],
        categories: ["text-to-video", "image-to-video", "api"],
        url: "https://runwayml.com"
    },
    {
        id: 7,
        name: "HeyGen",
        developer: "HeyGen",
        description: "Specialized in creating AI avatar videos with realistic lip-syncing and natural gestures. Ideal for marketing, training, and personalized content.",
        maxDuration: "5 minutes",
        resolution: "1080p",
        pricing: "Subscription",
        bestFor: "Avatar videos",
        rating: 4.7,
        tags: ["AI Avatars", "Lip-Sync", "Personalization"],
        categories: ["text-to-video", "api"],
        url: "https://heygen.com"
    },
    {
        id: 8,
        name: "Synthesia",
        developer: "Synthesia",
        description: "Enterprise-focused AI video generation platform for creating professional training and corporate videos with AI presenters in multiple languages.",
        maxDuration: "10 minutes",
        resolution: "1080p",
        pricing: "Subscription",
        bestFor: "Corporate training",
        rating: 4.5,
        tags: ["Enterprise", "Multi-Language", "AI Presenters"],
        categories: ["text-to-video", "api"],
        url: "https://synthesia.io"
    },
    {
        id: 9,
        name: "Luma Dream Machine",
        developer: "Luma AI",
        description: "Fast and efficient video generation model with excellent quality. Great for quick iterations and creative exploration with minimal wait times.",
        maxDuration: "10 seconds",
        resolution: "1080p",
        pricing: "Freemium",
        bestFor: "Quick iterations",
        rating: 4.4,
        tags: ["Fast Generation", "High Quality", "Easy to Use"],
        categories: ["text-to-video", "image-to-video", "free"],
        url: "https://lumalabs.ai"
    },
    {
        id: 10,
        name: "Haiper",
        developer: "Haiper",
        description: "User-friendly AI video generator focused on creating engaging social media content. Offers quick generation and various style options.",
        maxDuration: "8 seconds",
        resolution: "1080p",
        pricing: "Free/Premium",
        bestFor: "Social media content",
        rating: 4.3,
        tags: ["Social Media", "Quick Generation", "Style Options"],
        categories: ["text-to-video", "image-to-video", "free"],
        url: "https://haiper.ai"
    },
    {
        id: 11,
        name: "Pika Labs",
        developer: "Pika",
        description: "Advanced video generation with impressive motion control and style consistency. Popular among content creators for its creative capabilities.",
        maxDuration: "15 seconds",
        resolution: "1080p",
        pricing: "Freemium",
        bestFor: "Creative content",
        rating: 4.5,
        tags: ["Motion Control", "Style Consistency", "Creative"],
        categories: ["text-to-video", "image-to-video", "free"],
        url: "https://pika.art"
    },
    {
        id: 12,
        name: "Vidu",
        developer: "Shengshu AI",
        description: "High-quality video generation model with excellent temporal consistency and realistic motion. Strong competitor in the AI video generation space.",
        maxDuration: "16 seconds",
        resolution: "1080p",
        pricing: "Free/Premium",
        bestFor: "Realistic motion",
        rating: 4.4,
        tags: ["Temporal Consistency", "Realistic Motion", "High Quality"],
        categories: ["text-to-video", "image-to-video", "free"],
        url: "https://vidu.com"
    },
    {
        id: 13,
        name: "PixVerse",
        developer: "PixVerse",
        description: "Creative video generation platform with unique artistic styles and effects. Great for creating visually stunning and artistic video content.",
        maxDuration: "10 seconds",
        resolution: "1080p",
        pricing: "Freemium",
        bestFor: "Artistic styles",
        rating: 4.3,
        tags: ["Artistic Styles", "Visual Effects", "Creative"],
        categories: ["text-to-video", "image-to-video", "free"],
        url: "https://pixverse.ai"
    },
    {
        id: 14,
        name: "DomoAI",
        developer: "DomoAI",
        description: "Specialized in anime and cartoon-style video generation. Perfect for creating animated content and stylized video transformations.",
        maxDuration: "10 seconds",
        resolution: "1080p",
        pricing: "Freemium",
        bestFor: "Anime/Cartoon style",
        rating: 4.2,
        tags: ["Anime Style", "Cartoon", "Stylized"],
        categories: ["text-to-video", "image-to-video", "free"],
        url: "https://domoai.app"
    },
    {
        id: 15,
        name: "Krea AI",
        developer: "Krea",
        description: "Real-time video generation and enhancement platform with impressive speed and quality. Great for live content creation and real-time editing.",
        maxDuration: "10 seconds",
        resolution: "1080p",
        pricing: "Freemium",
        bestFor: "Real-time generation",
        rating: 4.4,
        tags: ["Real-Time", "Fast Processing", "Enhancement"],
        categories: ["text-to-video", "image-to-video", "free"],
        url: "https://krea.ai"
    }
];

// DOM Elements
let modelsGrid;
let searchInput;
let currentFilter = 'all';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    modelsGrid = document.getElementById('modelsGrid');
    searchInput = document.getElementById('searchInput');
    
    // Populate models grid
    renderModels(modelsData);
    
    // Add search event listener
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            searchModels();
        }
    });
    
    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Render models to the grid
function renderModels(models) {
    modelsGrid.innerHTML = '';
    
    if (models.length === 0) {
        modelsGrid.innerHTML = `
            <div class="no-results">
                <h3>🔍 No models found</h3>
                <p>Try adjusting your search or filter criteria.</p>
            </div>
        `;
        return;
    }
    
    models.forEach((model, index) => {
        const card = createModelCard(model, index);
        modelsGrid.appendChild(card);
    });
}

// Create a model card element
function createModelCard(model, index) {
    const card = document.createElement('div');
    card.className = 'model-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const stars = '⭐'.repeat(Math.floor(model.rating)) + '☆'.repeat(5 - Math.floor(model.rating));
    
    card.innerHTML = `
        <h3>🎯 ${model.name}</h3>
        <p class="developer">🏢 ${model.developer}</p>
        <p class="description">${model.description}</p>
        <div class="meta">
            <div class="meta-item">
                <span>⏱️</span>
                <strong>Duration:</strong> ${model.maxDuration}
            </div>
            <div class="meta-item">
                <span>📺</span>
                <strong>Resolution:</strong> ${model.resolution}
            </div>
            <div class="meta-item">
                <span>💰</span>
                <strong>Pricing:</strong> ${model.pricing}
            </div>
            <div class="meta-item">
                <span>✨</span>
                <strong>Best For:</strong> ${model.bestFor}
            </div>
        </div>
        <div class="tags">
            ${model.tags.map(tag => `<span class="tag">🏷️ ${tag}</span>`).join('')}
        </div>
        <div class="card-footer">
            <div class="rating">
                <span>${stars}</span>
                <span>${model.rating}</span>
            </div>
            <a href="${model.url}" target="_blank" class="btn card-btn">🚀 Visit →</a>
        </div>
    `;
    
    return card;
}

// Filter models by category
function filterModels(category) {
    currentFilter = category;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter models
    let filteredModels;
    if (category === 'all') {
        filteredModels = modelsData;
    } else {
        filteredModels = modelsData.filter(model => 
            model.categories.includes(category)
        );
    }
    
    // Apply current search if any
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
        filteredModels = filteredModels.filter(model =>
            model.name.toLowerCase().includes(searchTerm) ||
            model.developer.toLowerCase().includes(searchTerm) ||
            model.description.toLowerCase().includes(searchTerm) ||
            model.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }
    
    renderModels(filteredModels);
}

// Search models
function searchModels() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    // Start with current filter
    let filteredModels;
    if (currentFilter === 'all') {
        filteredModels = modelsData;
    } else {
        filteredModels = modelsData.filter(model => 
            model.categories.includes(currentFilter)
        );
    }
    
    // Apply search
    if (searchTerm) {
        filteredModels = filteredModels.filter(model =>
            model.name.toLowerCase().includes(searchTerm) ||
            model.developer.toLowerCase().includes(searchTerm) ||
            model.description.toLowerCase().includes(searchTerm) ||
            model.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
            model.bestFor.toLowerCase().includes(searchTerm)
        );
    }
    
    renderModels(filteredModels);
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // Press '/' to focus search
    if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Press 'Escape' to clear search
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        searchInput.blur();
        filterModels(currentFilter);
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Console welcome message
console.log('%c🎬 ValtLens', 'font-size: 20px; font-weight: bold; color: #8b5cf6;');
console.log('%c✨ Welcome to the AI Video Generation Models Directory!', 'font-size: 14px; color: #06b6d4;');
console.log('🔍 Press "/" to focus search, "Escape" to clear.');
