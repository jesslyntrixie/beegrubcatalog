import React from 'react';
import './BMC.css';

const BMC = () => {
  return (
    <section id="bmc" className="bmc-section">
      <div className="container">
        <div className="section-header">
          {/* <span className="section-badge">Business Strategy</span> */}
          <h2 className="section-title">
            Business Model <span className="gradient-text">Canvas</span>
          </h2>
          {/* <p className="section-subtitle">
            Model bisnis BeeGrub yang telah dikembangkan berdasarkan feedback pasar
          </p> */}
        </div>

        <div className="bmc-canvas">
          {/* Top Row */}
          <div className="bmc-box key-partners">
            <h3>🤝 Key Partners</h3>
            <ul>
              <li>Kantin resmi di lingkungan BINUS Anggrek (mitra utama penjual makanan)</li>
              <li>Pihak kampus BINUS (izin operasional, akses lokasi pick-up point)</li>
              <li>Penyedia pembayaran digital (QRIS / e-wallet / mobile-banking)</li>
              <li>Kurir on-campus (staff kantin / mahasiswa paruh waktu)</li>
              <li>Komunitas & organisasi mahasiswa untuk promosi dan event validasi</li>
            </ul>
          </div>

          <div className="bmc-box key-activities">
            <h3>⚡ Key Activities</h3>
            <ul>
              <li>Pengembangan & pemeliharaan aplikasi BeeGrub (mobile/app)</li>
              <li>Operasional pemesanan: penjadwalan, batching pesanan, koordinasi pick-up point</li>
              <li>Rekrutmen, training, dan penjadwalan kurir on-campus</li>
              <li>Aktivasi & onboarding kantin resmi kampus ke dalam platform</li>
              <li>Pemasaran digital & kampus (social media, booth demo)</li>
              <li>Pengumpulan, analisis, dan tindak lanjut feedback pengguna</li>
            </ul>
          </div>

          <div className="bmc-box value-propositions">
            <h3>💎 Value Propositions</h3>
            <ul>
              <li><strong>Untuk Mahasiswa:</strong> Menghemat waktu istirahat dengan pesanan makanan terjadwal</li>
              <li>Menghilangkan antrean dan ketidakpastian ketersediaan makanan</li>
              <li>Pembayaran cashless yang cepat, aman, dan tercatat</li>
              <li><strong>Untuk Kantin/Vendor:</strong> Zero commission, kantin menerima 100% harga menu</li>
              <li>Proyeksi permintaan lebih jelas lewat pre-order → produksi lebih efisien, food waste berkurang</li>
              <li>Saluran digital resmi untuk menjangkau mahasiswa tanpa perlu membangun aplikasi sendiri</li>
              <li><strong>Untuk Kampus:</strong> Ekosistem kantin yang lebih tertib, terukur, dan digital; antrean berkurang, area kantin lebih rapi</li>
            </ul>
          </div>

          <div className="bmc-box customer-relationships">
            <h3>💬 Customer Relationships</h3>
            <ul>
              <li>Self-service melalui aplikasi (registrasi, pemesanan, reschedule/cancel)</li>
              <li>Onboarding & edukasi dalam aplikasi (tooltips, panduan first-order)</li>
              <li>Layanan bantuan dalam aplikasi (chat/form) untuk kendala pemesanan & pembayaran</li>
              <li>Mekanisme loyalty sederhana: stempel digital / reward berdasarkan jumlah pesanan</li>
              <li>Survei berkala dan feedback loop untuk iterasi fitur & UX</li>
            </ul>
          </div>

          <div className="bmc-box customer-segments">
            <h3>👥 Customer Segments</h3>
            <ul>
              <li><strong>Regular Buyer</strong> - Sering makan di kampus</li>
              <li><strong>Time-Crunched Achiever</strong> - Jadwal padat, butuh efisiensi</li>
              <li><strong>Convenience-Seeker</strong> - Suka transaksi cashless & mudah</li>
              <li><strong>The Planner</strong> - Ingin kepastian makanan tersedia</li>
            </ul>
          </div>

          {/* Middle Row */}
          <div className="bmc-box key-resources">
            <h3>🔑 Key Resources</h3>
            <ul>
              <li>Tim inti (CEO, COO, CTO, CMO, CFO) + kurir on-campus</li>
              <li>Infrastruktur teknologi: server cloud, database (Supabase), aplikasi (Expo)</li>
              <li>Brand "BeeGrub" dan sistem pre-order kampus (algoritma batching, titik pick-up)</li>
              <li>Data operasional: histori pesanan, preferensi menu, pola jam makan</li>
              <li>Relasi formal dengan pihak kampus dan pengelola kantin</li>
            </ul>
          </div>

          <div className="bmc-box channels">
            <h3>📱 Channels</h3>
            <ul>
              <li>Aplikasi BeeGrub (mobile based) sebagai channel utama transaksi</li>
              <li>Media sosial & komunitas kampus (Instagram, Line, Discord BINUSIAN)</li>
              <li>Booth promosi & demo langsung di area kampus (BIFEST, Entre Corner, New Bisanara)</li>
              <li>Kolaborasi dengan organisasi mahasiswa & event kampus sebagai channel akuisisi</li>
              <li>Poster/QR code di sekitar kantin & titik pick-up</li>
            </ul>
          </div>

          {/* Bottom Row */}
          <div className="bmc-box cost-structure">
            <h3>💰 Cost Structure</h3>
            <ul>
              <li>Pengembangan & pemeliharaan aplikasi (waktu tim + cloud, naik setelah free tier habis)</li>
              <li>Biaya operasional harian: koordinasi kurir, support pengguna, handling komplain</li>
              <li>Biaya server, domain, dan alat operasional (dashboard, monitoring)</li>
              <li>Biaya pemasaran & kampanye digital (stiker, konten, booth event)</li>
              <li>Subsidi biaya QRIS 0,7% dari GTV untuk fase MVP (bulan 1–6)</li>
              <li>Biaya legal/administratif dasar terkait kerja sama dengan kampus & vendor</li>
            </ul>
          </div>

          <div className="bmc-box revenue-streams">
            <h3>💵 Revenue Streams</h3>
            <ul>
              <li>Platform Fee tetap Rp 3.000 per pesanan, dibayar oleh mahasiswa (service fee BeeGrub)</li>
              <li>Tidak ada komisi dari harga makanan kantin (0% commission untuk vendor)</li>
              <li>(Opsional / jangka panjang) Slot promosi berbayar di aplikasi: banner, menu highlight</li>
              <li>(Opsional / ide lanjutan) Fitur premium seperti prioritas antrean / titik pick-up eksklusif – belum divalidasi</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMC;
