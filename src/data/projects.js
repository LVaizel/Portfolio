
export const projects = [
  {
    id: 'deep-learning-cv',
    slug: 'deep-learning-cv',
    title: 'Deep Learning & Computer Vision',
    subtitle: 'MIT IDSS Applied Projects',
    category: 'ml',
    tags: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'YOLO', 'PyTorch'],
    description: `Applied ML projects completed through the MIT IDSS Data Science and Machine Learning program. 
    Covered supervised and unsupervised learning, neural network architecture design, model training pipelines, 
    and performance evaluation across real-world datasets.`,
    highlights: [
      'Built and evaluated classification and regression models using Scikit-learn, TensorFlow, and Keras',
      'Feature engineering and data preprocessing workflows for model robustness',
      'YOLO-based keypoint detection pipelines with custom dataset preparation',
      'Evaluated with accuracy, precision, recall, and F1 metrics',
    ],
    screenshots: [
        ],

        notebooks: [
            {
                title: 'Amazon Recommendation System',
                url: '/media/IDSS/Amazon.html',
                description: 'Recommendation system to recommend the best Amazon products to users'
            },
            {
                title: 'Predicting Potential Customers',
                url: '/media/IDSS/EdTech.html',
                description: 'This project involves identifying which leads are more likely to convert to paid customers based on attributes of leads and their interaction details.'
            },
            {
                title: 'FoodHub Order Analysis',
                url: '/media/IDSS/FoodHub.html',
                description: 'This project involves analyzing the data to get a fair idea about the demand of different restaurants which will help the company to enhance business and customer experience.'
            },
        ],

    videoUrl: '',
    liveUrl: 'https://mygreatlearning.com/eportfolio/gurvansh-singh-makkar',
    githubUrl: 'https://github.com/LVaizel',
    featured: true,
  },
    {
        "id": "grandmas-cooking",
        "slug": "grandmas-cooking",
        "title": "Grandma's Cooking",
        "subtitle": "Multi-User Full-Stack Web Application for Personal Recipe Management",
        "category": "fullstack",
        "tags": [
            "ASP.NET",
            "C#",
            "REST API",
            "SQL",
            "MVC",
            "Authentication",
            "Responsive Design"
        ],
        "description": "A robust, multi-user full-stack web application for creating accounts and managing personal recipe collections. The app leverages a relational database and is architected for clean separation of data access, business logic, and presentation. Built using ASP.NET MVC and C#, the project emphasizes best practices in modularity and maintainability.",
        "highlights": [
            "RESTful backend API powered by ASP.NET MVC",
            "End-to-end data flow from secure frontend UI through API to persistent storage",
            "Multi-user authentication, profile management, and data isolation",
            "Relational database design ensuring data integrity and scalability",
            "Structured, maintainable architecture with comprehensive technical documentation"
        ],
        "screenshots": [
            { "src": "/media/Grandma/Login.png", "caption": "Landing page – Welcome experience" },
            { "src": "/media/Grandma/HomePage.png", "caption": "Recipe dashboard for users" },
            { "src": "/media/Grandma/add-recipe.png", "caption": "Add new recipe workflow" }
            { "src": "/media/Grandma/aichat.png", "caption": "Talk with an AI agent using API key" }
        ],
        "videoUrl": "",
        "liveUrl": "",
        "githubUrl": "https://github.com/LVaizel/Grandmas_Cooking_New",
        "featured": true
    },
  {
    id: 'turn-based-combat',
    slug: 'turn-based-combat',
    title: '2D Turn-Based Combat System',
    subtitle: 'Unreal Engine Game Prototype',
    category: 'gamedev',
    tags: ['Unreal Engine', 'C++', 'Blueprints', 'UI'],
    description: `A fully functional turn-based combat prototype with turn order, ability systems, damage 
    calculation, and seamless state transitions. UI tightly integrated into combat logic. Used C++ for 
    stable state management and Blueprints for rapid iteration.`,
    highlights: [
      'Turn order management with ability systems and damage calculation',
      'C++ state machine for stable core logic',
      'Blueprint-driven mechanics for rapid iteration during playtesting',
      'UI deeply integrated with combat state transitions',
    ],
    screenshots: [
      // { src: '/media/turn-based-combat/gameplay.png', caption: 'Combat screen' },
    ],
    videoUrl: '',
    liveUrl: '',
    githubUrl: 'https://github.com/LVaizel',
    featured: true,
  },
  {
    id: 'chess-app',
    slug: 'chess-app',
    title: 'Local 2-Player Chess App',
    subtitle: 'Agile Team Delivery',
    category: 'fullstack',
    tags: ['.NET MAUI', 'C#', 'Jira', 'Git', 'Agile'],
    description: `Complete chess application with robust move validation, check/checkmate detection, and structured 
    turn management. Delivered collaboratively in an agile team of 3 using Git and Jira sprint planning.`,
    highlights: [
      'Full move validation including check and checkmate detection',
      'Structured turn management and game state',
      'Agile delivery with 3-person team using Jira sprint planning',
      'Git version control and collaborative code review',
    ],
    screenshots: [],
    videoUrl: '',
    liveUrl: '',
    githubUrl: 'https://github.com/LVaizel',
    featured: false,
  },
  {
    id: '3d-rendering-engine',
    slug: '3d-rendering-engine',
    title: 'Custom 3D Rendering & Lighting Engine',
    subtitle: 'From-Scratch Graphics Pipeline',
    category: 'systems',
    tags: ['OpenGL', 'C++', 'GLSL', 'Shaders'],
    description: `A performant 3D rendering engine built entirely from scratch implementing a complete graphics 
    pipeline. Includes vertex/fragment shaders, camera transformations, texture mapping, and a dynamic lighting 
    system with directional, point, and ambient lights.`,
    highlights: [
      'Complete graphics pipeline from scratch: vertex and fragment shaders',
      'Camera transformations and texture mapping',
      'Dynamic lighting: directional, point, and ambient lights',
      'Real-time shading and lighting calculations',
    ],
    screenshots: [],
    videoUrl: '',
    liveUrl: '',
    githubUrl: 'https://github.com/LVaizel',
    featured: true,
  },
  {
    id: 'cross-language-calculator',
    slug: 'cross-language-calculator',
    title: 'Cross-Language Native Calculator',
    subtitle: 'Python + C++ via pybind11',
    category: 'systems',
    tags: ['Python', 'Tkinter', 'C++', 'pybind11', 'DLL'],
    description: `Native desktop calculator with a Python/Tkinter frontend interfaced with a compiled C++ backend 
    via pybind11 bindings. Offloads arithmetic to a custom DLL for performance with clean API design across 
    language boundaries.`,
    highlights: [
      'Python frontend with Tkinter UI',
      'Compiled C++ backend via pybind11 bindings',
      'Custom DLL for performance-critical arithmetic',
      'Cross-language interoperability and modular architecture',
    ],
    screenshots: [],
    videoUrl: '',
    liveUrl: '',
    githubUrl: 'https://github.com/LVaizel',
    featured: false,
  },
  {
    id: 'asteroids-clone',
    slug: 'asteroids-clone',
    title: 'Asteroids Clone',
    subtitle: 'Unity Game Recreation',
    category: 'gamedev',
    tags: ['Unity', 'C#', 'State Machine', 'Game Design'],
    description: `Faithful Asteroids recreation in Unity with player movement, projectile logic, asteroid splitting, 
    and wave management. Game flow architected around a state machine covering menu, playing, and game-over states.`,
    highlights: [
      'Player movement, shooting, and asteroid collision',
      'Asteroid splitting mechanics and wave progression',
      'State machine architecture: menu → playing → game over',
      'Clean, extensible game loop design',
    ],
    screenshots: [],
    videoUrl: '',
    liveUrl: '',
    githubUrl: 'https://github.com/LVaizel',
    featured: false,
  },
  {
    id: 'action-platformer',
    slug: 'action-platformer',
    title: 'Action Platformer Prototype',
    subtitle: 'Unity WIP',
    category: 'gamedev',
    tags: ['Unity', 'C#', 'AI', 'Physics'],
    description: `2D action platformer with jump, run, and melee attack mechanics alongside Goomba-style enemy AI 
    featuring patrol, detection, and death states. Includes a grappling hook traversal system with iterated 
    physics feel.`,
    highlights: [
      'Jump, run, and melee attack mechanics',
      'Enemy AI: patrol, detection, and death state machine',
      'Grappling hook traversal system',
      'Physics iteration through playtesting feedback',
    ],
    screenshots: [],
    videoUrl: '',
    liveUrl: '',
    githubUrl: 'https://github.com/LVaizel',
    featured: false,
  },
  {
    id: '3d-level-editor',
    slug: '3d-level-editor',
    title: '3D Level Editor Prototype',
    subtitle: 'MonoGame Interactive Tool',
    category: 'systems',
    tags: ['MonoGame', 'C#', '3D', 'Math'],
    description: `Interactive 3D level editor with object placement, real-time transformation controls, and 
    free-camera navigation. All coordinate math and object logic implemented from scratch.`,
    highlights: [
      'Object placement and selection in 3D space',
      'Real-time transformation controls (translate, rotate, scale)',
      'Free-camera navigation',
      'Hand-rolled coordinate math and object management',
    ],
    screenshots: [],
    videoUrl: '',
    liveUrl: '',
    githubUrl: 'https://github.com/LVaizel',
    featured: false,
  },
    {
        id: '2d-tag-game',
        slug: '2d-tag-game',
        title: '2D Tag Game',
        subtitle: 'Fast-paced SDL C++ Game',
        category: 'gamedev',
        tags: [
            'SDL',
            'C++',
            'C',
            'Collision Detection',
            'Game Loop',
            'Input Handling',
            '2D'
        ],
        description:
            "2D Tag Game is an interactive and visually engaging game developed using C++ and SDL (Simple DirectMedia Layer). The project demonstrates advanced game programming concepts, bringing together low-level rendering, real-time input processing, collision detection, and efficient game loop management. The game simulates a classic game of tag, where player-controlled and AI-controlled sprites interact within a 2D world.",
        highlights: [
            "High-performance sprite rendering using the SDL2 library for smooth animations.",
            "Custom collision detection system supporting real-time player movement and obstacle interaction.",
            "Responsive player and AI input handling with support for keyboard and event-driven control.",
            "Carefully engineered main game loop, ensuring consistent frame-rate via delta timing.",
            "Modular and extensible architecture, making it easy to add new features or game modes.",
            "Showcases C++ and C interoperability for optimized routines."
        ],
        screenshots: [
            { src: '/media/TagYouAreIt/TagYouAreItStart.png', caption: 'Game Start' },
        ],
        videoUrl: '/media/TagYouAreIt/TagYouAreIt.mp4',
        liveUrl: '', // Add deployment link if available
        githubUrl: 'https://github.com/LVaizel/SDLTagGame',
        featured: true
    },
];

export const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ml', label: 'ML / AI' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'gamedev', label: 'Game Dev' },
  { id: 'systems', label: 'Systems' },
];
