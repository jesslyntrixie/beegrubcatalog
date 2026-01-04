import React from 'react';
import './SocialMedia.css';

const SocialMedia = () => {
  // Instagram posts (you will export the real posts as images
  // and save them under public/images/social-media/ with these filenames)
  const socialPosts = [
    {
      platform: 'Instagram',
      handle: 'Instagram @beegrub.binus',
      link: 'https://www.instagram.com/p/DRNb86Gk2ho/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      // Put 1–2 images from the same post here
      screenshots: [
        '/images/social-media/instagram-problem-features-1.jpg',
        '/images/social-media/instagram-problem-features-2.jpg',
      ],
      caption: 'BeeGrub: Solusi antrean dan jam istirahat yang sempit',
      price: 'Service fee mulai Rp 3.000 / order',
      testimony:
        '"Akhirnya ada solusi buat antre kantin pas jeda 15 menit." – Mahasiswa BINUS Anggrek'
    },
    {
      platform: 'Instagram',
      handle: 'Instagram @beegrub.binus',
      link: 'https://www.instagram.com/p/DS_Wpo3kjwu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      screenshots: [
        '/images/social-media/instagram-testimonials-1.jpg',
        '/images/social-media/instagram-testimonials-2.jpg',
      ],
      caption: 'Apa kata mahasiswa tentang BeeGrub?',
      price: 'Diambil dari feedback BIFEST & Entrepreneur Corner',
      testimony:
        '"UI‑nya simple dan gampang dipahami." – Mahasiswa, BIFEST 2025'
    },
    {
      platform: 'Instagram',
      handle: 'Instagram @beegrub.binus',
      link: 'https://www.instagram.com/p/DS_WMPVknsV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      screenshots: [
        '/images/social-media/instagram-pricing-1.jpg',
        '/images/social-media/instagram-pricing-2.jpg',
      ],
      caption: 'BeeGrub\'s Transparent Pricing',
      price: 'App gratis, service fee mulai Rp 3.000 / order',
      testimony:
        '"Harga servicenya masih masuk akal kalau bisa hemat waktu segini." – Mahasiswa, Entrepreneur Corner'
    },
    {
      platform: 'TikTok',
      handle: 'TikTok  @beegrub',
      link: 'https://vt.tiktok.com/ZS5U4QEux/',
      screenshots: [
        '/images/social-media/tiktok.jpeg',
      ],
      caption: 'BeeGrub in 20 Seconds',
      price: 'App gratis, service fee mulai Rp 3.000 / order',
      testimony:
        '"Harga servicenya masih masuk akal kalau bisa hemat waktu segini." – Mahasiswa, Entrepreneur Corner'
    },
    {
      platform: 'YouTube',
      handle: 'YouTube @BeeGrub',
      link: 'https://youtu.be/6XKFu8rFc9k?si=0hPqBS-V1UBfqMtE',
      screenshots: [
        '/images/social-media/youtube.jpeg',
      ],
      caption: 'BeeGrub Full App Demo',
      price: 'App gratis, service fee mulai Rp 3.000 / order',
      testimony:
        '"Harga servicenya masih masuk akal kalau bisa hemat waktu segini." – Mahasiswa, Entrepreneur Corner'
    }
  ];

  // New Bisanara screenshots (already available in public/images/new-bisanara)
  const newBisanara = [
    {
      id: 1,
      url: '/images/new-bisanara/bisanara1 (1).png',
      caption: 'BeeGrub product successfully uploaded on New Bisanara',
    },
    {
      id: 2,
      url: '/images/new-bisanara/bisanara2.png',
      caption: 'BeeGrub shop page created on New Bisanara',
    },
  ];

  return (
    <section id="social-media" className="social-section">
      <div className="container">
        <div className="section-header">
          {/* <span className="section-badge">3 Social Media for Promotions</span> */}
          <h2 className="section-title">
            3 Social Media for Promotions
          </h2>
          <p className="section-subtitle">
            Instagram, Youtube and TikTok
          </p>
        </div>

        {/* Social Media Posts */}
        <div className="social-posts-grid">
          {socialPosts.map((post, index) => (
            <div key={index} className="social-post-card">
              <div className="platform-badge">{post.platform}</div>
              <div className="post-screenshot">
                {post.screenshots.map((src, i) => (
                  <img key={i} src={src} alt={`${post.caption} – slide ${i + 1}`} />
                ))}
              </div>
              <div className="post-content">
                <h3 className="post-caption">{post.caption}</h3>
                <p className="post-handle">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">{post.handle}</a>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* New Bisanara Section */}
        <div className="bisanara-section">
          <h3 className="bisanara-title">📱 New Bisanara.com – Product Displays</h3>
          {/* <p className="bisanara-subtitle">Evidence of BeeGrub product screenshots published on New Bisanara.</p> */}
          <div className="bisanara-grid">
            {newBisanara.map((item) => (
              <div key={item.id} className="bisanara-card">
                <img src={item.url} alt={item.caption} />
                <p className="bisanara-caption">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
