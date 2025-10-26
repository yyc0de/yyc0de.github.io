// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const nav = document.getElementById('nav');

mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Header scroll effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Matrix Rain Effect for Hero Section
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = '01';
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * canvas.height / fontSize;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(15, 20, 25, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#00ff88';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Skill Bar Animation on Scroll
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkills = () => {
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (barPosition < screenPosition) {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        }
    });
};

window.addEventListener('scroll', animateSkills);

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.portfolio-item, .timeline-item, .skill-category');
animateElements.forEach(el => observer.observe(el));

// Contact Form Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulate form submission
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add hover effect to portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Initialize animations on page load
window.addEventListener('load', () => {
    animateSkills();

    // Add fade-in effect to hero content
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';

    setTimeout(() => {
        heroContent.style.transition = 'all 1s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 300);
});

// ============================================
// AI CHATBOT FUNCTIONALITY
// ============================================

const chatbot = {
    knowledge: {
        name: "Adrian Simbulan",
        role: "DevOps Platform Engineer at Trend Micro",
        currentPosition: {
            title: "DevOps Platform Engineer",
            company: "Trend Micro",
            duration: "April 2025 - Present",
            responsibilities: [
                "Support customers in leveraging cybersecurity solutions: Apex One, WFBS, Trend Vision One",
                "Conduct log analysis and troubleshooting to resolve issues efficiently",
                "Apply malware handling skills to assist in security investigations",
                "Utilize tools such as Wireshark, Procmon, and other diagnostic utilities",
                "Contribute to AI-driven initiatives that optimize workflows and enhance operational efficiency"
            ]
        },
        previousPositions: [
            {
                title: "Graduate Cost Consultant",
                company: "Arcadis",
                duration: "June 2023 - May 2025",
                responsibilities: [
                    "Supported cost management and financial planning across construction projects",
                    "Prepared detailed cost estimates and cost plans",
                    "Monitored budgets and conducted financial reporting",
                    "Collaborated with clients and project teams on financial objectives"
                ]
            },
            {
                title: "Assistant Quantity Surveyor",
                company: "Makati Development Corporation",
                duration: "June 2022 - May 2023",
                responsibilities: [
                    "Managed cost and quantity estimation throughout construction lifecycle",
                    "Prepared accurate cost estimates and budgets",
                    "Conducted quantity takeoffs and cost tracking",
                    "Assisted in contract administration and site inspections"
                ]
            },
            {
                title: "Mechanical Engineer",
                company: "MIMAG Trading and Construction",
                duration: "July 2020 - May 2022",
                responsibilities: [
                    "Managed and oversaw construction projects from start to finish",
                    "Created detailed project plans and schedules",
                    "Provided technical guidance and quality control",
                    "Conducted site inspections and managed project documentation"
                ]
            }
        ],
        expertise: ["DevOps Engineering", "Cybersecurity Solutions", "Log Analysis", "Malware Handling", "Customer Support", "AI-driven Workflow Optimization", "Penetration Testing", "Vulnerability Assessment"],
        education: {
            degree: "Bachelor of Science in Mechanical Engineering",
            university: "University of Santo Tomas",
            year: "2020"
        },
        certifications: [
            "Licensed Mechanical Engineer (Feb 2022 Board Passer)",
            "Licensed Master Plumber (July 2022 Board Passer)",
            "TryHackMe Offensive Security Path",
            "CompTIA Security+ (In Progress)"
        ],
        skills: {
            trendMicroProducts: ["Apex One", "WFBS (Worry-Free Business Security)", "Trend Vision One"],
            diagnosticTools: ["Wireshark", "Procmon", "Log Analysis"],
            securitySkills: ["Malware Handling", "Troubleshooting", "Incident Response", "Vulnerability Assessment"],
            penetrationTesting: ["Burp Suite", "SQLMap", "Nessus", "Metasploit", "OWASP ZAP", "Nmap"],
            scripting: ["Python", "Bash", "PowerShell"],
            devOps: ["AI-driven Workflow Optimization", "Customer Support", "Technical Documentation"],
            webDev: ["HTML", "CSS", "JavaScript"]
        },
        projects: [
            {
                name: "Vulnerability Scanner (Python)",
                date: "February 2025",
                description: "Created a Python-based vulnerability scanner that checks for open ports and basic security misconfigurations"
            },
            {
                name: "CTF Write-ups (TryHackMe)",
                date: "October 2024 - Present",
                description: "Documented step-by-step solutions for various CTF rooms, including web exploitation, privilege escalation, and network security challenges"
            }
        ],
        trainings: [
            "Cybersecurity Threat Vectors and Mitigation",
            "TryHackMe CTFs - Practical experience in red teaming and vulnerability exploitation",
            "TryHackMe Offensive Security Path"
        ],
        location: "San Simon, Pampanga, Philippines",
        phone: "0995-870-1577",
        contact: "adriansimbulan.yanyan@gmail.com",
        linkedin: "https://www.linkedin.com/in/adriansmbln/",
        github: "https://github.com/yyc0de",
        twitter: "https://x.com/adriansmbln",
        careerOverview: "DevOps Platform Engineer at Trend Micro with expertise in cybersecurity solutions, log analysis, and customer support. Experienced in supporting enterprise security products (Apex One, WFBS, Trend Vision One) while contributing to AI-driven initiatives. Background includes penetration testing, vulnerability assessment, and construction cost consulting."
    },

    questions: [
        {
            id: 'intro',
            question: "What would you like to know about Adrian?",
            options: [
                { text: "What is Adrian's role?", next: 'role' },
                { text: "What are Adrian's skills?", next: 'skills' },
                { text: "What is Adrian's experience?", next: 'experience' },
                { text: "How can I contact Adrian?", next: 'contact' }
            ]
        },
        {
            id: 'role',
            question: `Adrian is a DevOps Platform Engineer at Trend Micro (since April 2025). He supports customers with Trend Micro's cybersecurity solutions including Apex One, WFBS, and Trend Vision One. He specializes in DevOps Engineering, Cybersecurity Solutions, Log Analysis, Malware Handling, Customer Support, and AI-driven Workflow Optimization.`,
            options: [
                { text: "Tell me about his work at Trend Micro", next: 'trendmicro_work' },
                { text: "What's his background?", next: 'background' },
                { text: "Back to main menu", next: 'intro' }
            ]
        },
        {
            id: 'skills',
            question: `Adrian's skills include: Trend Micro Products (Apex One, WFBS, Trend Vision One), Diagnostic Tools (Wireshark, Procmon, Log Analysis), Security Skills (Malware Handling, Troubleshooting, Incident Response), Penetration Testing (Burp Suite, SQLMap, Metasploit, OWASP ZAP), Scripting (Python, Bash, PowerShell), and DevOps (AI-driven Workflow Optimization, Customer Support).`,
            options: [
                { text: "What certifications does he have?", next: 'certifications' },
                { text: "Tell me about his Trend Micro work", next: 'trendmicro_work' },
                { text: "Back to main menu", next: 'intro' }
            ]
        },
        {
            id: 'experience',
            question: `Adrian currently works as a DevOps Platform Engineer at Trend Micro (April 2025 - Present). Previously: Graduate Cost Consultant at Arcadis (June 2023 - May 2025), Assistant Quantity Surveyor at Makati Development Corporation (June 2022 - May 2023), and Mechanical Engineer at MIMAG Trading and Construction (July 2020 - May 2022).`,
            options: [
                { text: "Tell me about his Trend Micro work", next: 'trendmicro_work' },
                { text: "What's his background?", next: 'background' },
                { text: "Back to main menu", next: 'intro' }
            ]
        },
        {
            id: 'contact',
            question: `You can reach Adrian at: Email: adriansimbulan.yanyan@gmail.com | Phone: 0995-870-1577 | Location: San Simon, Pampanga, Philippines | LinkedIn: https://www.linkedin.com/in/adriansmbln/ | GitHub: https://github.com/yyc0de`,
            options: [
                { text: "View his LinkedIn profile", action: () => window.open('https://www.linkedin.com/in/adriansmbln/', '_blank') },
                { text: "View his GitHub profile", action: () => window.open('https://github.com/yyc0de', '_blank') },
                { text: "Back to main menu", next: 'intro' }
            ]
        },
        {
            id: 'expertise',
            question: `Adrian specializes in: DevOps Engineering | Cybersecurity Solutions | Log Analysis | Malware Handling | Customer Support | AI-driven Workflow Optimization | Penetration Testing | Vulnerability Assessment. He has experience in supporting enterprise security products and troubleshooting security issues.`,
            options: [
                { text: "What makes him unique?", next: 'unique' },
                { text: "View his projects", next: 'projects' },
                { text: "Back to main menu", next: 'intro' }
            ]
        },
        {
            id: 'projects',
            question: "Adrian's projects include: (1) Vulnerability Scanner in Python (Feb 2025) - checks for open ports and security misconfigurations, (2) CTF Write-ups on TryHackMe (Oct 2024 - Present) - documented solutions for web exploitation, privilege escalation, and network security challenges.",
            options: [
                { text: "Tell me about his TryHackMe work", next: 'tryhackme' },
                { text: "What are his skills?", next: 'skills' },
                { text: "Back to main menu", next: 'intro' }
            ]
        },
        {
            id: 'interests',
            question: `Adrian is passionate about Cybersecurity, DevOps, Artificial Intelligence, Machine Learning, and Ethical Hacking. He believes in staying ahead of cyber threats through continuous learning and combining security expertise with AI innovations.`,
            options: [
                { text: "What is his philosophy?", next: 'philosophy' },
                { text: "Contact Adrian", next: 'contact' },
                { text: "Back to main menu", next: 'intro' }
            ]
        },
        {
            id: 'education',
            question: `Adrian holds a Bachelor of Science in Mechanical Engineering from University of Santo Tomas, graduating in 2020. His background in engineering provides a strong analytical foundation for cybersecurity and DevOps work.`,
            options: [
                { text: "What certifications does he have?", next: 'certifications' },
                { text: "What is his experience?", next: 'experience' },
                { text: "Back to main menu", next: 'intro' }
            ]
        },
        {
            id: 'certifications',
            question: `Adrian's certifications include: Licensed Mechanical Engineer (Feb 2022), Licensed Master Plumber (July 2022), TryHackMe Offensive Security Path (completed), and CompTIA Security+ (currently in progress).`,
            options: [
                { text: "What are his skills?", next: 'skills' },
                { text: "Tell me about his training", next: 'trainings' },
                { text: "Back to main menu", next: 'intro' }
            ]
        },
        {
            id: 'philosophy',
            question: "Adrian's Philosophy: 'Security isn't just about building walls—it's about understanding the attacker's mindset and staying one step ahead through continuous learning and adaptation.'",
            options: [
                { text: "What is his mission?", next: 'mission' },
                { text: "How can I contact him?", next: 'contact' },
                { text: "Back to main menu", next: 'intro' }
            ]
        },
        {
            id: 'mission',
            question: "Adrian's Mission: To help organizations build resilient security frameworks that protect their assets while enabling innovation and growth through AI-enhanced security solutions.",
            options: [
                { text: "View his projects", next: 'projects' },
                { text: "Contact Adrian", next: 'contact' },
                { text: "Back to main menu", next: 'intro' }
            ]
        },
        {
            id: 'unique',
            question: "What makes Adrian unique: He combines deep cybersecurity expertise with cutting-edge AI/ML knowledge, enabling him to develop innovative security solutions that leverage artificial intelligence for threat detection and prevention.",
            options: [
                { text: "Tell me about his AI work", next: 'ai_work' },
                { text: "Contact Adrian", next: 'contact' },
                { text: "Back to main menu", next: 'intro' }
            ]
        },
        {
            id: 'ai_work',
            question: "Adrian integrates AI/ML into cybersecurity through: Automated threat detection systems | AI-powered vulnerability assessment | Machine learning for anomaly detection | Neural networks for pattern recognition in security logs.",
            options: [
                { text: "How can I work with him?", next: 'contact' },
                { text: "View his skills", next: 'skills' },
                { text: "Back to main menu", next: 'intro' }
            ]
        },
        {
            id: 'pentest_work',
            question: "As a Jr. Penetration Tester at MIMAG Construction, Adrian: Performs vulnerability assessments on websites | Conducts penetration testing using Burp Suite, OWASP ZAP, and Nmap | Assesses security based on OWASP Top 10 | Engages with CEO to explain security risks and business impact | Provides detailed security reports with remediation steps.",
            options: [
                { text: "What tools does he use?", next: 'skills' },
                { text: "View his projects", next: 'projects' },
                { text: "Back to main menu", next: 'intro' }
            ]
        },
        {
            id: 'tryhackme',
            question: "Adrian is active on TryHackMe where he completes CTF challenges and documents write-ups covering web exploitation, privilege escalation, and network security. He's completed the Offensive Security Path with hands-on labs in penetration testing, exploit development, and privilege escalation.",
            options: [
                { text: "What certifications does he have?", next: 'certifications' },
                { text: "View his GitHub", action: () => window.open('https://github.com/yyc0de', '_blank') },
                { text: "Back to main menu", next: 'intro' }
            ]
        },
        {
            id: 'trainings',
            question: "Adrian has completed training in: Cybersecurity Threat Vectors and Mitigation (network security, threat analysis, attack prevention) | TryHackMe CTFs (practical red teaming and vulnerability exploitation) | TryHackMe Offensive Security Path (penetration testing, exploit development, privilege escalation).",
            options: [
                { text: "What are his skills?", next: 'skills' },
                { text: "What projects has he worked on?", next: 'projects' },
                { text: "Back to main menu", next: 'intro' }
            ]
        },
        {
            id: 'trendmicro_work',
            question: "As a DevOps Platform Engineer at Trend Micro (April 2025 - Present), Adrian: Supports customers with Apex One, WFBS, and Trend Vision One | Conducts log analysis and troubleshooting | Applies malware handling skills for security investigations | Uses Wireshark, Procmon, and diagnostic tools | Contributes to AI-driven initiatives for workflow optimization.",
            options: [
                { text: "What products does he support?", next: 'trendmicro_products' },
                { text: "What are his skills?", next: 'skills' },
                { text: "Back to main menu", next: 'intro' }
            ]
        },
        {
            id: 'trendmicro_products',
            question: "Adrian supports these Trend Micro cybersecurity solutions: Apex One (endpoint protection platform) | WFBS - Worry-Free Business Security (SMB security solution) | Trend Vision One (extended detection and response platform). He helps customers get the most out of these products and maintain robust security operations.",
            options: [
                { text: "What's his technical background?", next: 'background' },
                { text: "How can I contact him?", next: 'contact' },
                { text: "Back to main menu", next: 'intro' }
            ]
        },
        {
            id: 'background',
            question: "Adrian has a unique career path: Started as a Mechanical Engineer at MIMAG (2020-2022) | Transitioned to construction cost consulting at MDC (2022-2023) and Arcadis (2023-2025) | Self-studied cybersecurity through TryHackMe and personal projects | Now combines his analytical engineering background with cybersecurity expertise at Trend Micro.",
            options: [
                { text: "What certifications does he have?", next: 'certifications' },
                { text: "Tell me about his education", next: 'education' },
                { text: "Back to main menu", next: 'intro' }
            ]
        }
    ],

    currentQuestion: 'intro',

    init() {
        console.log('Chatbot initializing...');
        this.chatWindow = document.getElementById('chatbot-window');
        this.chatMessages = document.getElementById('chatbot-messages');
        this.chatInput = document.getElementById('chatbot-input');
        this.chatToggle = document.getElementById('chatbot-toggle');
        this.chatClose = document.getElementById('chatbot-close');
        this.chatSend = document.getElementById('chatbot-send');

        console.log('Elements found:', {
            chatWindow: this.chatWindow,
            chatToggle: this.chatToggle,
            chatMessages: this.chatMessages
        });

        if (!this.chatToggle) {
            console.error('Chatbot toggle button not found!');
            return;
        }

        this.setupEventListeners();
        this.showWelcomeMessage();
        console.log('Chatbot initialized successfully');
    },

    setupEventListeners() {
        console.log('Setting up event listeners...');
        this.chatToggle.addEventListener('click', () => {
            console.log('Chatbot toggle clicked!');
            this.toggleChat();
        });
        this.chatClose.addEventListener('click', () => {
            console.log('Chatbot close clicked!');
            this.toggleChat();
        });
        this.chatSend.addEventListener('click', () => this.handleUserInput());
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleUserInput();
        });
        console.log('Event listeners set up');
    },

    toggleChat() {
        console.log('toggleChat called');
        console.log('Current classes:', this.chatWindow.className);
        this.chatWindow.classList.toggle('active');
        console.log('New classes:', this.chatWindow.className);
    },

    showWelcomeMessage() {
        setTimeout(() => {
            this.addMessage('bot', 'SYSTEM ONLINE... Initializing Security AI Assistant...');
            setTimeout(() => {
                this.addMessage('bot', `Hello! I'm Adrian's AI assistant. I can answer questions about his cybersecurity expertise, AI projects, and professional background.`);
                setTimeout(() => {
                    this.showQuestion('intro');
                }, 800);
            }, 1000);
        }, 500);
    },

    addMessage(type, content, options = null) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${type}`;

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = type === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';

        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.textContent = content;

        messageDiv.appendChild(avatar);
        messageDiv.appendChild(messageContent);

        this.chatMessages.appendChild(messageDiv);

        if (options) {
            this.showOptions(options);
        }

        this.scrollToBottom();
    },

    showQuestion(questionId) {
        const question = this.questions.find(q => q.id === questionId);
        if (question) {
            this.currentQuestion = questionId;
            this.showTypingIndicator();

            setTimeout(() => {
                this.removeTypingIndicator();
                this.addMessage('bot', question.question);
                if (question.options) {
                    this.showOptions(question.options);
                }
            }, 1000);
        }
    },

    showOptions(options) {
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'chat-options';

        options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'chat-option';
            button.textContent = option.text;
            button.addEventListener('click', () => {
                this.handleOptionClick(option);
            });
            optionsDiv.appendChild(button);
        });

        this.chatMessages.appendChild(optionsDiv);
        this.scrollToBottom();
    },

    handleOptionClick(option) {
        this.addMessage('user', option.text);

        // Remove all option buttons
        const optionDivs = this.chatMessages.querySelectorAll('.chat-options');
        optionDivs.forEach(div => div.remove());

        if (option.action) {
            option.action();
            setTimeout(() => {
                this.addMessage('bot', 'Opening link in new tab...');
            }, 300);
        }

        if (option.next) {
            this.showQuestion(option.next);
        }
    },

    handleUserInput() {
        const message = this.chatInput.value.trim();
        if (!message) return;

        this.addMessage('user', message);
        this.chatInput.value = '';

        // Simple AI response based on keywords
        this.generateResponse(message);
    },

    generateResponse(message) {
        const lowerMessage = message.toLowerCase();

        this.showTypingIndicator();

        setTimeout(() => {
            this.removeTypingIndicator();

            if (lowerMessage.includes('skill') || lowerMessage.includes('tool')) {
                this.showQuestion('skills');
            } else if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
                this.showQuestion('experience');
            } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
                this.showQuestion('contact');
            } else if (lowerMessage.includes('project')) {
                this.showQuestion('projects');
            } else if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence')) {
                this.showQuestion('ai_work');
            } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
                this.addMessage('bot', 'Hello! How can I help you learn more about Adrian?');
                this.showQuestion('intro');
            } else {
                this.addMessage('bot', 'I can help you learn about Adrian\'s cybersecurity expertise, skills, projects, and more. What would you like to know?');
                this.showQuestion('intro');
            }
        }, 1200);
    },

    showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'typing-indicator';
        indicator.id = 'typing-indicator';
        indicator.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
        this.chatMessages.appendChild(indicator);
        this.scrollToBottom();
    },

    removeTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) indicator.remove();
    },

    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
};

// Initialize chatbot when DOM is loaded
console.log('Script loaded, waiting for DOM...');
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing chatbot...');
    chatbot.init();
});

// Backup initialization in case DOMContentLoaded already fired
if (document.readyState === 'loading') {
    console.log('Document still loading...');
} else {
    console.log('Document already loaded, initializing chatbot immediately...');
    chatbot.init();
}