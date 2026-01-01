import React from 'react';
import './Products.css';

const Products = () => {
  const services = [
    {
      id: 1,
      name: 'Pre-Order Service',
      description: 'Pesan makanan 2-3 jam sebelumnya tanpa antre',
      image: 'https://via.placeholder.com/400x300/4CAF50/FFFFFF?text=Pre-Order',
      price: 'Rp 3.000 service fee'
    },
    {
      id: 2,
      name: 'Smart Pickup Points',
      description: 'Lokasi pickup strategis di seluruh kampus',
      image: 'https://via.placeholder.com/400x300/4CAF50/FFFFFF?text=Pickup+Point',
      price: 'Included'
    },
    {
      id: 3,
      name: 'Mobile App',
      description: 'Aplikasi mobile yang mudah digunakan',
      image: 'https://via.placeholder.com/400x300/4CAF50/FFFFFF?text=Mobile+App',
      price: 'Free Download'
    },
    {
      id: 4,
      name: 'Cashless Payment',
      description: 'QRIS, e-wallet, mobile banking',
      image: 'https://via.placeholder.com/400x300/4CAF50/FFFFFF?text=Payment',
      price: 'Multiple Options'
    },
    {
      id: 5,
      name: 'Vendor Dashboard',
      description: 'Dashboard untuk kantin kelola pesanan',
      image: 'https://via.placeholder.com/400x300/4CAF50/FFFFFF?text=Dashboard',
      price: 'Zero Commission'
    }
  ];

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Layanan Kami</span>
          <h2 className="section-title">
            Produk & <span className="gradient-text">Layanan</span> BeeGrub
          </h2>
          <p className="section-subtitle">
            Solusi lengkap untuk pengalaman makan di kampus yang lebih baik
          </p>
        </div>

        <div className="products-grid">
          {services.map((service) => (
            <div key={service.id} className="product-card">
              <div className="product-image">
                <img src={service.image} alt={service.name} />
                <div className="product-badge">{service.id}</div>
              </div>
              <div className="product-content">
                <h3 className="product-name">{service.name}</h3>
                <p className="product-description">{service.description}</p>
                <div className="product-price">{service.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
