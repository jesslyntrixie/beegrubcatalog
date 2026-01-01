import React from 'react';
import './BMC.css';

const BMC = () => {
  return (
    <section id="bmc" className="bmc-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Business Strategy</span>
          <h2 className="section-title">
            Business Model <span className="gradient-text">Canvas</span>
          </h2>
          <p className="section-subtitle">
            Model bisnis BeeGrub yang telah dikembangkan berdasarkan feedback pasar
          </p>
        </div>

        <div className="bmc-canvas">
          {/* Top Row */}
          <div className="bmc-box key-partners">
            <h3>🤝 Key Partners</h3>
            <ul>
              <li>Mitra kantin resmi di lingkungan BINUS Anggrek</li>
              <li>Pihak kampus BINUS Anggrek (izin operasional)</li>
              <li>Penyedia layanan pembayaran digital (QRIS, e-wallet)</li>
              <li>Kurir internal (Staff kantin kampus)</li>
              <li>Sponsor atau brand makanan untuk iklan banner</li>
            </ul>
          </div>

          <div className="bmc-box key-activities">
            <h3>⚡ Key Activities</h3>
            <ul>
              <li>Pengembangan & pemeliharaan aplikasi</li>
              <li>Operasional delivery dan pickup</li>
              <li>Rekrutmen & manajemen kurir</li>
              <li>Kerja sama dengan vendor kantin</li>
              <li>Pemasaran & promosi di kampus</li>
              <li>Validasi & analisis feedback pelanggan</li>
            </ul>
          </div>

          <div className="bmc-box value-propositions">
            <h3>💎 Value Propositions</h3>
            <ul>
              <li>Menghemat waktu istirahat mahasiswa</li>
              <li>Menghilangkan antrean dan ketidakpastian</li>
              <li>Pembayaran cashless yang cepat dan aman</li>
              <li>Fokus hyper-local: "Kami menjual waktu, bukan makanan"</li>
              <li>Menciptakan kebiasaan baru dalam membeli makanan</li>
            </ul>
          </div>

          <div className="bmc-box customer-relationships">
            <h3>💬 Customer Relationships</h3>
            <ul>
              <li>Hubungan otomatis melalui aplikasi (self-service)</li>
              <li>Customer service dalam aplikasi</li>
              <li>Program loyalitas atau langganan premium</li>
              <li>Umpan balik dan survey kepuasan pengguna</li>
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
              <li>Tim inti (CEO, CTO, COO, CMO, CFO)</li>
              <li>Server cloud, pick-up booth kampus</li>
              <li>Brand "BeeGrub" & sistem pre-order</li>
              <li>Database pengguna & partnership eksklusif</li>
              <li>Modal awal tim & revenue per-order</li>
            </ul>
          </div>

          <div className="bmc-box channels">
            <h3>📱 Channels</h3>
            <ul>
              <li>Aplikasi BeeGrub (mobile app)</li>
              <li>Media sosial & komunitas kampus (Instagram, TikTok)</li>
              <li>Booth promosi & demo langsung di area kampus</li>
              <li>Kolaborasi dengan organisasi mahasiswa</li>
            </ul>
          </div>

          {/* Bottom Row */}
          <div className="bmc-box cost-structure">
            <h3>💰 Cost Structure</h3>
            <ul>
              <li>Pengembangan & pemeliharaan aplikasi</li>
              <li>Gaji tim & kompensasi kurir</li>
              <li>Biaya operasional (server, izin, marketing)</li>
              <li>Biaya kolaborasi dengan mitra kantin</li>
              <li>Produksi konten promosi dan kampanye digital</li>
            </ul>
          </div>

          <div className="bmc-box revenue-streams">
            <h3>💵 Revenue Streams</h3>
            <ul>
              <li><strong>Biaya Layanan:</strong> Rp 3.000 per pesanan</li>
              <li><strong>Langganan Premium:</strong> Prioritas antrean & titik ambil eksklusif</li>
              <li><strong>Pendapatan Iklan:</strong> Banner promosi dari kantin/brand</li>
              <li><strong>Note:</strong> Zero komisi dari vendor - mereka terima 100% harga menu</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMC;
