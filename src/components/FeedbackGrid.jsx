import React from 'react';
import './FeedbackGrid.css';

const FeedbackGrid = () => {
  const iLike = [
    'Aplikasi secara keseluruhan dianggap bagus dan bermanfaat',
    'Interface mudah digunakan dan dipahami',
    'Fitur sudah jelas dan membantu memudahkan proses pemesanan makanan',
    'Ide produk sangat baik dan fokus pada kebutuhan mahasiswa',
    'Kemudahan navigasi seperti aplikasi food delivery pada umumnya',
    'Beberapa responden menyebut aplikasi ini "gacor"',
    'Aplikasi dianggap bermanfaat untuk menghemat waktu mahasiswa'
  ];

  const iWish = [
    'Fitur rekomendasi makanan yang tidak terbatas pada menu kantin',
    'Fitur "total favorit" atau daftar menu favorit pengguna',
    'Fitur batasan waktu pemesanan untuk menghindari penumpukan antrian',
    'Pengembangan aplikasi mobile yang lebih interaktif dengan fitur notifikasi',
    'Penambahan fitur ulasan dan rating untuk setiap merchant atau menu',
    'Integrasi dengan sistem pembayaran digital yang lebih beragam',
    'Ekspansi ke Binus region lain setelah sukses di Binus Anggrek/Kemanggisan',
    'Perluas jangkauan layanan hingga ketiga kampus Binus Kemanggisan',
    'Tambahkan panduan penggunaan di dalam aplikasi untuk memudahkan pengguna baru',
    'Tambah jumlah pickup point untuk memudahkan pengambilan pesanan',
    'Tingkatkan kualitas aplikasi secara keseluruhan'
  ];

  const questions = [
    'Beberapa responden merasa produk kurang sesuai dengan kebutuhan saat ini',
    'Beberapa menyarankan penambahan fitur lain yang lebih variatif',
    'Apakah BeeGrub akan berkolaborasi dengan lebih banyak tempat makan di lingkungan kampus?',
    'Apakah aplikasi ini hanya tersedia untuk kalangan Binus Anggrek/Kemanggisan atau akan dikembangkan untuk Binus region lain?',
    'Apakah akan ada fitur ulasan atau rating untuk setiap menu?'
  ];

  const ideas = [
    'Tambahkan fitur premium subscription untuk prioritas pickup',
    'Kolaborasi dengan lebih banyak vendor di area kampus',
    'Implementasi loyalty rewards program',
    'Integrasi dengan student ID untuk verifikasi otomatis'
  ];

  return (
    <section id="feedback" className="feedback-section">
      <div className="container">
        <div className="section-header">
          {/* <span className="section-badge">Customer Insights</span> */}
          <h2 className="section-title">
            Feedback Grid from <span className="gradient-text">30+ Customers</span>
          </h2>
          {/* <p className="section-subtitle">
            Feedback yang kami terima dari mahasiswa BINUS melalui survey dan interview langsung
          </p> */}
        </div>

        <div className="feedback-grid">
          {/* I Like */}
          <div className="feedback-box like">
            <h3>👍 I Like</h3>
            <ul>
              {iLike.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* I Wish */}
          <div className="feedback-box wish">
            <h3>✨ I Wish</h3>
            <ul>
              {iWish.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Questions */}
          <div className="feedback-box questions">
            <h3>❓ Questions</h3>
            <ul>
              {questions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Ideas */}
          <div className="feedback-box ideas">
            <h3>💡 Ideas</h3>
            <ul>
              {ideas.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackGrid;
