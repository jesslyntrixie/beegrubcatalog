import React from 'react';
import './ForVendors.css';

const ForVendors = () => {
  const benefits = [
    {
      icon: '📊',
      title: 'Predictable Daily Demand',
      description: 'Vendors know exactly what to prepare 2–3 hours earlier, reducing food waste by up to 30%.',
    },
    {
      icon: '⚡',
      title: 'Calmer Peak Hours',
      description: 'Pre-order smooths production planning and reduces chaos during the busiest lunch periods.',
    },
    {
      icon: '💰',
      title: 'Full Revenue for Vendors',
      description: 'Vendors receive 100% of menu prices. The Rp 3.000 service fee is paid by students, not the canteen.',
    },
    {
      icon: '📱',
      title: 'Simple Vendor Dashboard',
      description: 'Manage menus, orders, and daily revenue in one simple, intuitive interface.',
    },
  ];

  return (
    <section id="vendors" className="for-vendors">
      <div className="vendors-container">
        <div className="vendors-content">
          <span className="section-badge">Vendor Perspective</span>
          <h2 className="section-title">
            How BeeGrub Works for <span className="gradient-text">Canteen Vendors</span>
          </h2>
          <p className="vendors-intro">
            This section summarizes the value proposition and pricing model for campus canteen partners. 
            It is meant for the report only – we are not yet publicly opening vendor sign-ups.
          </p>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-icon">{benefit.icon}</div>
                <div className="benefit-content">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="vendor-pricing">
            <h3>Transparent Pricing Model</h3>
            <div className="pricing-card">
              <div className="price-tag">
                <span className="percentage">100%</span>
                <span className="price-label">of menu price received by vendor</span>
              </div>
              <ul className="pricing-features">
                <li>✅ Zero commission for vendors</li>
                <li>✅ Rp 3.000 service fee is paid by students</li>
                <li>✅ No setup fees</li>
                <li>✅ No monthly subscription fees</li>
                <li>✅ Weekly payout schedule</li>
              </ul>
              <div className="pricing-example">
                <strong>Example:</strong> Menu Rp 25.000 → Vendor receives Rp 25.000<br/>
                <span style={{fontSize: '14px', opacity: 0.8}}>Student pays Rp 28.000 (menu + service fee)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="vendors-visual">
          <div className="dashboard-preview">
            <div className="dashboard-header">
              <h4>Vendor Dashboard</h4>
              <span className="status-badge">Live</span>
            </div>
            <div className="dashboard-stats">
              <div className="stat-box">
                <div className="stat-label">Today's Orders</div>
                <div className="stat-value">47</div>
              </div>
              <div className="stat-box">
                <div className="stat-label">Revenue</div>
                <div className="stat-value">Rp 940K</div>
              </div>
            </div>
            <div className="order-list">
              <div className="order-item">
                <div className="order-info">
                  <span className="order-id">#0847</span>
                  <span className="order-time">11:00 AM</span>
                </div>
                <div className="order-status preparing">Preparing</div>
              </div>
              <div className="order-item">
                <div className="order-info">
                  <span className="order-id">#0848</span>
                  <span className="order-time">11:00 AM</span>
                </div>
                <div className="order-status ready">Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForVendors;
