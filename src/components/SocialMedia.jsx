import React from 'react';
import './SocialMedia.css';

const SocialMedia = () => {
  const socialPosts = [
    {
      platform: 'Instagram',
      handle: '@beegrub.binus',
      link: 'https://instagram.com/beegrub.binus',
      screenshot: 'https://via.placeholder.com/400x500/E1306C/FFFFFF?text=Instagram+Post+1',
      caption: 'BeeGrub - Skip the Queue! 🐝',
      price: 'Service Fee: Rp 3.000',
      testimony: '"Sangat membantu! Gak perlu antre lagi" - Student A'
    },
    {
      platform: 'Instagram',
      handle: '@beegrub.binus',
      link: 'https://instagram.com/beegrub.binus',
      screenshot: 'https://via.placeholder.com/400x500/E1306C/FFFFFF?text=Instagram+Post+2',
      caption: 'Pre-order makanan favoritmu! 🍔',
      price: 'Menu starts from Rp 15.000',
      testimony: '"App nya gampang banget dipake!" - Student B'
    },
    {
      platform: 'TikTok',
      handle: '@beegrub',
      link: 'https://tiktok.com/@beegrub',
      screenshot: 'https://via.placeholder.com/400x500/000000/FFFFFF?text=TikTok+Video',
      caption: 'How BeeGrub Works - Tutorial 📱',
      price: 'Zero delivery fee!',
      testimony: '"Game changer buat mahasiswa!" - Student C'
    }
  ];

  const newBisanara = [
    { id: 1, url: 'https://via.placeholder.com/400x300/4CAF50/FFFFFF?text=NewBisanara+1', caption: 'Product Display 1' },
    { id: 2, url: 'https://via.placeholder.com/400x300/4CAF50/FFFFFF?text=NewBisanara+2', caption: 'Product Display 2' },
    { id: 3, url: 'https://via.placeholder.com/400x300/4CAF50/FFFFFF?text=NewBisanara+3', caption: 'Product Display 3' },
    { id: 4, url: 'https://via.placeholder.com/400x300/4CAF50/FFFFFF?text=NewBisanara+4', caption: 'Product Display 4' },
    { id: 5, url: 'https://via.placeholder.com/400x300/4CAF50/FFFFFF?text=NewBisanara+5', caption: 'Product Display 5' }
  ];

  return (
    <section id="social-media" className="social-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Social Media & Promotions</span>
          <h2 className="section-title">
            Media Sosial & <span className="gradient-text">Promosi</span>
          </h2>
          <p className="section-subtitle">
            Kampanye digital kami di berbagai platform sosial media
          </p>
        </div>

        {/* Social Media Posts */}
        <div className="social-posts-grid">
          {socialPosts.map((post, index) => (
            <div key={index} className="social-post-card">
              <div className="platform-badge">{post.platform}</div>
              <div className="post-screenshot">
                <img src={post.screenshot} alt={post.caption} />
              </div>
              <div className="post-content">
                <h3 className="post-caption">{post.caption}</h3>
                <p className="post-handle">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">{post.handle}</a>
                </p>
                <div className="post-price">{post.price}</div>
                <div className="post-testimony">
                  <span className="testimony-icon">💬</span>
                  <p>{post.testimony}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New Bisanara Section */}
        <div className="bisanara-section">
          <h3 className="bisanara-title">📱 New Bisanara.com - Product Displays</h3>
          <p className="bisanara-subtitle">Screenshots BeeGrub di platform New Bisanara</p>
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
