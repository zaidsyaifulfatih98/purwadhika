import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <!-- Navigation -->
    <nav>
        <div class="container">
            <div class="logo">👨‍💻 Portfolio</div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#passion">Passion</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <div class="profile-photo">
                <!-- Ganti dengan foto Anda: <img src="foto-anda.jpg" alt="Profile Photo" class="profile-photo"> -->
                🚀
            </div>
            <h1>Zaid Syaiful Fatih</h1>
            <p class="tagline">Crafting Digital Experiences with Code & Creativity</p>
            <p class="hero-description">
                Full Stack Developer yang bersemangat membangun solusi web modern dengan teknologi cutting-edge. Dari database hingga UI, saya menciptakan aplikasi yang powerful, scalable, dan beautifully responsive! 🎯
            </p>
            <div class="cta-buttons">
                <a href="#projects" class="btn btn-primary">Lihat Portfolio</a>
                <a href="#contact" class="btn btn-secondary">Hubungi Saya</a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">Tentang Saya</h2>
            <p class="section-subtitle">Passionate Developer. Problem Solver. Tech Enthusiast.</p>
            <div class="about-content">
                <div class="about-text">
                    <p>
                        Halo! 👋 Saya adalah <span class="highlight">Full Stack Developer</span> yang penuh energi dan antusias dengan dunia teknologi web yang terus berkembang. Dari mengelola database yang kompleks hingga membangun UI yang intuitif, saya menikmati setiap bagian dari proses development!
                    </p>
                    <p>
                        Saya memiliki pengalaman dalam <span class="highlight">mengelola database</span>, <span class="highlight">membangun API yang efisien dan scalable</span>, hingga <span class="highlight">menciptakan UI yang responsif dan user-friendly</span> menggunakan teknologi modern seperti React.js, Next.js, Python, Django, dan PostgreSQL.
                    </p>
                    <p>
                        Yang membuat saya bersemangat? <span class="highlight">Clean code architecture</span> dan <span class="highlight">high-performance optimization</span>! Saya percaya bahwa kode yang baik bukan hanya yang berfungsi, tapi yang mudah dibaca, di-maintain, dan di-scale untuk masa depan. 🚀
                    </p>
                </div>
                <div class="stats">
                    <div class="stat-card">
                        <div class="stat-number">100+</div>
                        <div class="stat-label">Projects Completed</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">5+</div>
                        <div class="stat-label">Tech Stack Mastered</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">∞</div>
                        <div class="stat-label">Coffee Cups ☕</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">24/7</div>
                        <div class="stat-label">Learning Mode</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills">
        <div class="container">
            <h2 class="section-title">Keahlian & Teknologi</h2>
            <p class="section-subtitle">Tools yang saya gunakan untuk membangun solusi digital yang amazing</p>
            <div class="skills-grid">
                <div class="skill-card">
                    <div class="skill-icon">⚛️</div>
                    <h3>Frontend Development</h3>
                    <p>Membangun user interface yang responsif, interaktif, dan performant menggunakan teknologi modern.</p>
                    <div class="tech-stack">
                        <span class="tech-badge">React.js</span>
                        <span class="tech-badge">Next.js</span>
                        <span class="tech-badge">JavaScript</span>
                        <span class="tech-badge">HTML/CSS</span>
                    </div>
                </div>

                <div class="skill-card">
                    <div class="skill-icon">🐍</div>
                    <h3>Backend Development</h3>
                    <p>Mengembangkan server-side logic yang robust, efficient, dan scalable untuk aplikasi enterprise-level.</p>
                    <div class="tech-stack">
                        <span class="tech-badge">Python</span>
                        <span class="tech-badge">Django</span>
                        <span class="tech-badge">Node.js</span>
                        <span class="tech-badge">REST API</span>
                    </div>
                </div>

                <div class="skill-card">
                    <div class="skill-icon">🗄️</div>
                    <h3>Database Management</h3>
                    <p>Mendesain dan mengelola database yang optimal dengan query performance yang lightning-fast.</p>
                    <div class="tech-stack">
                        <span class="tech-badge">PostgreSQL</span>
                        <span class="tech-badge">SQL</span>
                        <span class="tech-badge">Database Design</span>
                        <span class="tech-badge">Query Optimization</span>
                    </div>
                </div>

                <div class="skill-card">
                    <div class="skill-icon">🔌</div>
                    <h3>API Development</h3>
                    <p>Membangun RESTful API yang efficient, well-documented, dan mudah di-integrate oleh frontend team.</p>
                    <div class="tech-stack">
                        <span class="tech-badge">REST</span>
                        <span class="tech-badge">Django REST</span>
                        <span class="tech-badge">Authentication</span>
                        <span class="tech-badge">WebSockets</span>
                    </div>
                </div>

                <div class="skill-card">
                    <div class="skill-icon">🎨</div>
                    <h3>Responsive UI/UX</h3>
                    <p>Menciptakan pengalaman pengguna yang seamless di berbagai device dengan design yang eye-catching.</p>
                    <div class="tech-stack">
                        <span class="tech-badge">Responsive Design</span>
                        <span class="tech-badge">Mobile-First</span>
                        <span class="tech-badge">CSS Frameworks</span>
                        <span class="tech-badge">UI Libraries</span>
                    </div>
                </div>

                <div class="skill-card">
                    <div class="skill-icon">⚡</div>
                    <h3>Performance Optimization</h3>
                    <p>Mengoptimasi aplikasi untuk performa maksimal dengan load time yang minimal dan UX yang smooth.</p>
                    <div class="tech-stack">
                        <span class="tech-badge">Code Splitting</span>
                        <span class="tech-badge">Lazy Loading</span>
                        <span class="tech-badge">Caching</span>
                        <span class="tech-badge">SEO</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Passion Section -->
    <section id="passion" class="passion">
        <div class="container">
            <h2 class="section-title" style="color: white;">My Passion & Philosophy</h2>
            <p class="section-subtitle" style="color: rgba(255,255,255,0.9);">Apa yang membuat saya excited bangun pagi setiap hari!</p>
            <div class="passion-grid">
                <div class="passion-card">
                    <h3>🧹 Clean Code Architecture</h3>
                    <p>
                        Saya obsessed dengan clean code! Kode yang readable, maintainable, dan scalable adalah seni tersendiri. Setiap function, setiap variable name, setiap comment—semuanya harus meaningful dan purposeful.
                    </p>
                </div>

                <div class="passion-card">
                    <h3>🚀 High Performance</h3>
                    <p>
                        Performance matters! Dari database query optimization hingga frontend rendering, saya selalu mencari cara untuk membuat aplikasi run faster dan smoother. Every millisecond counts!
                    </p>
                </div>

                <div class="passion-card">
                    <h3>🌐 Open Source Love</h3>
                    <p>
                        Open source adalah jantung dari inovasi teknologi! Saya aktif berkontribusi pada komunitas, belajar dari developer lain, dan sharing knowledge. Together we grow stronger! 💪
                    </p>
                </div>

                <div class="passion-card">
                    <h3>💡 Web Innovation</h3>
                    <p>
                        Web development berevolusi dengan sangat cepat! Saya selalu excited exploring teknologi terbaru, framework baru, best practices terkini. Learning never stops in this field!
                    </p>
                </div>

                <div class="passion-card">
                    <h3>🔧 Problem Solving</h3>
                    <p>
                        Bug? Challenge accepted! Saya menikmati proses debugging dan problem solving. Setiap error adalah opportunity untuk belajar sesuatu yang baru dan improve skill.
                    </p>
                </div>

                <div class="passion-card">
                    <h3>🎯 User-Centric Approach</h3>
                    <p>
                        End user adalah prioritas! Saya membangun aplikasi dengan empati terhadap user needs. Beautiful UI means nothing tanpa great UX. User happiness is success metric!
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="contact-content">
                <h2 class="section-title">Let's Build Something Amazing! 🚀</h2>
                <p class="section-subtitle">
                    Punya project menarik? Atau sekedar mau ngobrol tentang tech? Saya selalu open untuk kolaborasi dan diskusi! Drop a message dan mari kita ciptakan sesuatu yang luar biasa bersama.
                </p>
                <div class="social-links">
                    <a href="https://github.com/yourusername" class="social-link" title="GitHub">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    <a href="https://linkedin.com/in/yourusername" class="social-link" title="LinkedIn">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a href="mailto:your.email@example.com" class="social-link" title="Email">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                    </a>
                    <a href="https://twitter.com/yourusername" class="social-link" title="Twitter">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <p>&copy; 2026 | Built with 💙 and lots of ☕ | Full Stack Developer</p>
            <p style="margin-top: 0.5rem; opacity: 0.7;">Powered by clean code & passion for innovation</p>
        </div>
    </footer>

  

`


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
})

// Add fade-in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in')
    }
  })
}, observerOptions)

document.querySelectorAll('.skill-card, .passion-card, .stat-card').forEach(el => {
  observer.observe(el)
})


setupCounter(document.querySelector('#counter'))
