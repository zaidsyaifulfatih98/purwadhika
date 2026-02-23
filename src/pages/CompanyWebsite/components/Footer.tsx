import React from "react";

const Footer: React.FC = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-section">
        <h4>CoffeJiwo</h4>
        <p>
          Tempat nongkrong kopi kekinian dengan suasana nyaman dan biji kopi pilihan. Selalu menyuguhkan kualitas, rasa, dan pelayanan ramah untuk semua pecinta kopi.
        </p>
        <div className="social-links">
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
          <a href="https://instagram.com/coffejiwo" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="mailto:info@coffejiwo.com" target="_blank" rel="noopener noreferrer" aria-label="Email"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
      <div className="footer-section">
        <h4>Menu</h4>
        <ul>
          <li><a href="/services">Kopi Espreso</a></li>
          <li><a href="/services">Manual Brew</a></li>
          <li><a href="/services">Snack & Meals</a></li>
          <li><a href="/services">Barista Service</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li><a href="/about-us">Tentang Kami</a></li>
          <li><a href="/teams">Tim</a></li>
          <li><a href="/blog">Artikel</a></li>
          <li><a href="/create-blog">Tulis Blog</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Kontak</h4>
        <ul>
          <li><i className="fas fa-phone"></i> &nbsp; 0812-3456-7890</li>
          <li><i className="fas fa-map-marker-alt"></i> Jl. Kopi No. 19, Malang, Indonesia</li>
          <li><i className="fas fa-clock"></i> 08.00 - 22.00 WIB</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} CoffeJiwo. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;