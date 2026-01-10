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
    'Perluasan jangkauan layanan ke lebih banyak gedung/kantin di BINUS Kemanggisan (▶ masuk rencana ekspansi setelah validasi awal)',
    'Penambahan jumlah pickup point strategis agar pengambilan pesanan makin praktis (✓ sebagian sudah diakomodasi dalam desain operasional)',
    'Panduan penggunaan di dalam aplikasi untuk pengguna baru (onboarding/tooltip)',
    'Peningkatan stabilitas & kualitas aplikasi (bug, kecepatan, tampilan) (✓ jadi fokus utama development setelah fase prototype)'
  ];

  const questions = [
    'Apakah BeeGrub akan berkolaborasi dengan lebih banyak tempat makan di lingkungan kampus?',
    'Apakah aplikasi ini hanya tersedia untuk kalangan Binus Anggrek/Kemanggisan atau akan dikembangkan untuk Binus region lain?',
    'Apakah akan ada fitur ulasan atau rating untuk setiap menu?'
  ];

  const ideas = [
    'Rekomendasi makanan (personalized / populer) di luar menu kantin yang biasa dipesan',
    'Daftar menu favorit pengguna ("total favorit") untuk akses cepat',
    'Batasan waktu pemesanan di jam tertentu guna mencegah penumpukan antrean',
    'Aplikasi yang lebih interaktif dengan notifikasi real-time status pesanan (✓ notifikasi status sudah diimplementasikan versi sekarang)',
    'Integrasi lebih banyak metode pembayaran digital (▶ akan ditambah bertahap sesuai kerja sama payment gateway)'
  ];

  return (
    <section id="feedback" className="feedback-section">
      <div className="container">
        <div className="section-header">
          {/* <span className="section-badge">Customer Insights</span> */}
          <h2 className="section-title">
            Feedback Grid
          </h2>
          <p className="section-subtitle">
            N = 60 Mahasiswa BINUS Anggrek
          </p>
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
