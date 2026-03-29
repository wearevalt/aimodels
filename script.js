// La Base de données de tes IA (Tu pourras en rajouter 100 ici)
const modelsData =[
    { id: 1, name: "Sora", developer: "OpenAI", description: "Revolutionary text-to-video model capable of generating highly realistic and imaginative scenes.", rating: 4.9, tags:["Text-to-Video", "High Quality"], categories: ["text-to-video"], url: "https://openai.com/sora", color: "violet" },
    { id: 2, name: "Runway Gen-3", developer: "Runway", description: "Industry-leading video generation platform with advanced motion control and style transfer.", rating: 4.8, tags: ["Professional", "Motion Control"], categories:["text-to-video", "image-to-video"], url: "https://runwayml.com", color: "indigo" },
    { id: 3, name: "Pika 1.0", developer: "Pika Labs", description: "Fast video generation with extended duration capabilities. Real-time editing workflows.", rating: 4.7, tags:["Fast", "Editing", "Web App"], categories:["text-to-video", "image-to-video", "free"], url: "https://pika.art", color: "cyan" },
    { id: 4, name: "Stable Video", developer: "Stability AI", description: "Image-to-video generation model with 1.3 billion parameters. Highly customizable.", rating: 4.8, tags:["Img2Vid", "Self-hosted", "Free"], categories: ["image-to-video", "free"], url: "https://stability.ai", color: "pink" },
    { id: 5, name: "Kling", developer: "Kuaishou", description: "Powerful video generation model with impressive motion dynamics.", rating: 4.6, tags: ["Long Duration", "Social Media"], categories:["text-to-video", "free"], url: "https://kling.kuaishou.com", color: "emerald" },
    { id: 6, name: "HeyGen", developer: "HeyGen", description: "Specialized in creating AI avatar videos with realistic lip-syncing.", rating: 4.7, tags:["AI Avatars", "Lip-Sync"], categories: ["text-to-video"], url: "https://heygen.com", color: "rose" },
    { id: 7, name: "Synthesia", developer: "Synthesia", description: "Enterprise-focused AI video generation platform for professional training.", rating: 4.5, tags:["Enterprise", "Multi-Language"], categories: ["text-to-video"], url: "https://synthesia.io", color: "blue" },
    { id: 8, name: "Luma Dream Machine", developer: "Luma AI", description: "Fast and efficient video generation model with excellent quality.", rating: 4.4, tags: ["Fast Generation", "High Quality"], categories: ["text-to-video", "free"], url: "https://lumalabs.ai", color: "fuchsia" }
];

// Variables globales
let currentFilter = 'all';
let currentPage = 1;
const itemsPerPage = 6; // Combien on en affiche avant le "Load More"
let filteredModels = [...modelsData];

// DOM Elements
const modelsGrid = document.getElementById('modelsGrid');
const searchInput = document.getElementById('searchInput');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const filterBtns = document.querySelectorAll('.filter-btn');

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    renderModels();

    // Event de Recherche
    searchInput.addEventListener('input', handleSearch);

    // Event de Filtres
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Gérer le style actif
            filterBtns.forEach(b => {
                b.classList.remove('bg-violet-600', 'text-white');
                b.classList.add('text-zinc-300');
            });
            e.target.classList.remove('text-zinc-300');
            e.target.classList.add('bg-violet-600', 'text-white');

            currentFilter = e.target.getAttribute('data-filter');
            currentPage = 1; // Reset la page
            filterAndRender();
        });
    });

    // Event Load More
    loadMoreBtn.addEventListener('click', () => {
        currentPage++;
        renderModels(true); // true = ajouter à la suite (append)
    });
});

// Logique de filtrage
function filterAndRender() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    filteredModels = modelsData.filter(model => {
        const matchFilter = currentFilter === 'all' || model.categories.includes(currentFilter);
        const matchSearch = model.name.toLowerCase().includes(searchTerm) || 
                            model.description.toLowerCase().includes(searchTerm) ||
                            model.developer.toLowerCase().includes(searchTerm);
        return matchFilter && matchSearch;
    });

    currentPage = 1;
    renderModels(false);
}

function handleSearch() {
    filterAndRender();
}

// Fonction pour afficher les cartes avec ton Design Premium
function renderModels(append = false) {
    if (!append) modelsGrid.innerHTML = '';

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const modelsToShow = filteredModels.slice(start, end);

    if (filteredModels.length === 0) {
        modelsGrid.innerHTML = `<div class="col-span-full text-center text-zinc-400 py-10">Aucun modèle trouvé pour cette recherche.</div>`;
        loadMoreBtn.style.display = 'none';
        return;
    }

    modelsToShow.forEach((model, index) => {
        const delay = index * 0.1;
        // Création du HTML de la carte
        const cardHTML = `
            <article class="card-premium rounded-2xl overflow-hidden group cursor-pointer animate-slide-up" style="animation-delay: ${delay}s">
                <div class="relative h-56 overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-${model.color}-600/20 to-${model.color}-900/20 group-hover:scale-110 transition-transform duration-700"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-${model.color}-500 to-${model.color}-700 flex items-center justify-center shadow-2xl shadow-${model.color}-500/30 group-hover:scale-110 transition-transform duration-500">
                            <i data-lucide="play" class="w-10 h-10 text-white"></i>
                        </div>
                    </div>
                </div>

                <div class="p-6">
                    <div class="flex justify-between items-start mb-3">
                        <div>
                            <h3 class="font-display text-xl font-bold text-white mb-1 group-hover:text-${model.color}-400 transition-colors">${model.name}</h3>
                            <div class="flex items-center gap-2 text-sm text-zinc-500">
                                <span>by ${model.developer}</span>
                            </div>
                        </div>
                        <div class="flex items-center gap-1 bg-zinc-800 px-2 py-1 rounded-lg border border-zinc-700">
                            <i data-lucide="star" class="w-4 h-4 text-yellow-500 fill-yellow-500"></i>
                            <span class="text-sm font-bold text-white">${model.rating}</span>
                        </div>
                    </div>

                    <p class="text-zinc-400 text-sm mb-4 line-clamp-2 leading-relaxed h-10">
                        ${model.description}
                    </p>

                    <div class="flex flex-wrap gap-2 mb-6 h-8">
                        ${model.tags.map(tag => `<span class="px-2.5 py-1 rounded-md bg-zinc-800/50 border border-zinc-700/50 text-xs text-zinc-400">${tag}</span>`).join('')}
                    </div>

                    <div class="flex gap-3">
                        <a href="${model.url}" target="_blank" class="flex-1 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-200 flex items-center justify-center gap-2 button-glow">
                            <span>Tester</span>
                            <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
                        </a>
                    </div>
                </div>
            </article>
        `;
        modelsGrid.insertAdjacentHTML('beforeend', cardHTML);
    });

    // Recharger les icônes Lucide pour les nouvelles cartes
    lucide.createIcons();

    // Gérer l'affichage du bouton Load More
    if (end >= filteredModels.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'flex';
    }
}
