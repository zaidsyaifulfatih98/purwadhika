import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './components/company.css'
import logo from "./assets/logo.jpg"
import kopi1 from "./assets/kopi1.jpg"
import produk1 from "./assets/produk1.jpg"
import produk2 from "./assets/produk2.jpg"
import produk3 from "./assets/produk3.jpg"

// Ganti path sesuai lokasi image2, atau import image actual dari asset/public
const products = [
  {
    img: produk1,
    title: 'Anomali Coffee Biji Kopi Susu Blend',
    flavor: 'Dark Chocolate, Caramel, Fresh Butter',
  },
  {
    img: produk2,
    title: 'Anomali Coffee Papua Lembah Kamu',
    flavor: 'Dark Chocolate, Coconut, Mapple Syrup',
  },
  {
    img: produk3,
    title: 'Anomali Coffee Biji Kopi Bali Kintamani 1KG',
    flavor: 'Orange, Vanilla, Dark Chocolate',
  },
];
const Home: React.FC = () => (
  <div>
    <Navbar />
    {/* Hero Section */}
<section className="hero min-h-screen flex items-center justify-center bg-gradient-to-br from-[#b68b43] via-[#b68b43] to-[#fff8ec]">
    
  <div className="hero-content flex flex-col items-center text-center w-full max-w-3xl px-4 py-12">
        <img
        src={logo}
        alt="Logo CoffeJiwo"
        className="w-40 h-40 mb-6 rounded-lg bg-white shadow-lg object-contain"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-800 mb-4">Anomali Caffee</h1>
        <p className="tagline text-xl font-medium text-yellow-900 mb-2">
        Kopi Asli Indonesia
        </p>
        <p className="description text-base md:text-lg text-brown-800 opacity-90 mb-8">
        Nikmati pengalaman kopi terbaik bersama Anomali Caffee. Kami hadir untuk pecinta kopi Indonesia dengan cita rasa khas dan pelayanan profesional.
        </p>
        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
        <a
            href="https://wa.me/6281234567890?text=Halo%20CoffeJiwo,%20saya%20ingin%20reservasi"
            className="btn-primary flex items-center gap-2 px-7 py-3 bg-red-800 text-white font-semibold rounded-full shadow transition hover:bg-yellow-600"
            target="_blank"
            rel="noopener noreferrer"
        >
            <i className="fab fa-whatsapp"></i> Hubungi Kami
        </a>
        <a
            href="/services"
            className="btn-secondary flex items-center gap-2 px-7 py-3 border-2 border-red-800 bg-white text-red-800 font-semibold rounded-full transition hover:bg-yellow-500 hover:text-white"
        >
            <i className="fas fa-eye"></i> Lihat Menu
        </a>
        </div>
    </div>
    <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <i className="fas fa-chevron-down text-yellow-600 text-2xl animate-bounce"></i>
    </div>
</section>

    <section className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-start gap-8 px-4 py-12 md:py-16 bg-white">
    {/* Left: Image */}
    <div className="w-full md:w-2/5 flex-shrink-0 flex justify-center">
      <img
        src={kopi1}
        alt="Coffee Roasting"
        className="rounded-lg shadow-lg w-full max-w-[350px] object-cover"
      />
    </div>
    {/* Right: Content */}
    <div className="w-full md:w-3/5 flex flex-col items-start">
      {/* Title */}
      <h1 className="text-3xl mb-5 md:text-4xl font-bold text-[#7e2727] mb-8 self-start">Our Company</h1>
      {/* Company Description */}
      <p className="text-center mt-5 md:text-left text-black font-semibold mb-7">
        Establish in 2007, Anomali Coffee is a coffee roaster company providing coffee with specialty <br />
        standart from all over indonesia
      </p>
      {/* Mission */}
      <div className="flex items-center mb-6 mt-5">
        <span className="bg-[#7e2727] text-white font-bold px-5 py-2 rounded mr-5 text-lg">Mission</span>
        <span className="text-black font-bold">Promoting and curating Indonesia Specialty Coffee<br /> through education and experience</span>
      </div>
      {/* Vision */}
      <div className="flex items-center mt-5">
        <span className="bg-[#7e2727] text-white font-bold px-5 py-2 rounded mr-5 text-lg">Vision</span>
        <span className="text-black font-bold">The most recognized crafted Indonesia Coffee</span>
      </div>
    </div>
  </section>
    <section className="bg-[#77100f] py-20 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-white text-4xl font-bold text-center mb-4">Our Products</h2>
      <div className="flex justify-center mb-8">
        <div className="w-32 h-1 bg-white rounded-full"></div>
      </div>
      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {products.map((prod, idx) => (
          <div key={idx} className="bg-[#eaeaea] rounded-2xl shadow-lg overflow-hidden flex flex-col items-center py-6 px-4">
            <img
              src={prod.img}
              alt={prod.title}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h3 className="text-black text-xl font-bold text-center mb-3">{prod.title}</h3>
            <span className="text-black text-lg font-semibold mb-2">Flavor :</span>
            <p className="text-black text-base text-center">{prod.flavor}</p>
          </div>
        ))}
      </div>
      {/* More Products */}
      <div className="flex justify-end mt-8">
        <a
          href="/products"
          className="text-white text-xl font-bold hover:text-yellow-300 transition"
        >
          More Products {'>>'}
        </a>
      </div>
    </div>
  </section>

    {/* Product / Service Section */}
    <section className="products-section">
      <div className="container">
        <div className="section-title">
          <h2>Produk & Menu</h2>
          <div className="underline"></div>
          <p>Kopi, makanan, minuman dan layanan barista profesional</p>
        </div>
        <div className="products-grid">
          <div className="product-card">
            <div className="icon">
              <i className="fas fa-mug-hot"></i>
            </div>
            <h3>Espresso</h3>
            <p>Kopi premium, diseduh dengan teknik modern.</p>
          </div>
          <div className="product-card">
            <div className="icon">
              <i className="fas fa-coffee"></i>
            </div>
            <h3>Manual Brew</h3>
            <p>Pilihan single origin, metode pour over & french press.</p>
          </div>
          <div className="product-card">
            <div className="icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h3>Healthy Meals</h3>
            <p>Makanan sehat dan homemade yang cocok untuk menemani kopi.</p>
          </div>
          {/* Add more menu as needed */}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="testimonial-section">
      <div className="container">
        <div className="section-title">
          <h2>Testimoni Pelanggan</h2>
          <div className="underline"></div>
          <p>Pelanggan kami puas, berikut beberapa review mereka:</p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="content">
              "Tempat nyaman, kopi nikmat. Berasa di rumah sendiri!"
            </p>
            <div className="author">
              <div className="avatar">MW</div>
              <div className="author-info">
                <h4>Maya Wulandari</h4>
                <p>Customer - Surabaya</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="content">
              "Menu bervariasi, barista ramah. Favorit untuk meeting kecil!"
            </p>
            <div className="author">
              <div className="avatar">RS</div>
              <div className="author-info">
                <h4>Rizky Saputra</h4>
                <p>Entrepreneur - Malang</p>
              </div>
            </div>
          </div>
          {/* Tambah testimonial lain */}
        </div>
      </div>
    </section>

    {/* Footer */}
    <Footer />
  </div>
);

export default Home;