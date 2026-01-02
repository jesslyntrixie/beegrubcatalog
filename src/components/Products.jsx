import React from 'react';
import './Products.css';

const Products = () => {
  // Updated to match exact list of screenshots provided by user.
  // Student: 6 screens, Vendor: 5 screens, Admin: 5 screens.
  const flows = [
    {
      key: 'student',
      title: 'Student Flow',
      subtitle: 'How a BINUS student uses BeeGrub from home screen to order tracking.',
      basePath: '/images/products/student/',
      screens: [
        {
          step: 1,
          name: '[Student] Home Page',
          file: '1.jpg',
          caption: 'Home page where students land and choose their restaurant to order from.'
        },
        {
          step: 2,
          name: '[Student] Menu & Add to Cart',
          file: '2.jpeg',
          caption: 'Browse restaurant menu and add items to cart with quantities.'
        },
        {
          step: 3,
          name: '[Student] Checkout',
          file: '3.jpeg',
          caption: 'Checkout screen to choose pickup location and time slot.'
        },
        {
          step: 4,
          name: '[Student] Payment',
          file: '4.jpeg',
          caption: 'Payment screen showing total amount and payment method selection.'
        },
        {
          step: 5,
          name: '[Student] Order Confirmed',
          file: '5.jpeg',
          caption: 'Order confirmation with details and pickup instructions.'
        },
        {
          step: 6,
          name: '[Student] Track My Orders',
          file: '6.jpeg',
          caption: 'Screen to track active orders and see order status in real-time.'
        }
      ]
    },
    {
      key: 'vendor',
      title: 'Vendor Flow',
      subtitle: 'How canteen vendors manage orders and monitor their business.',
      basePath: '/images/products/vendor/',
      screens: [
        {
          step: 1,
          name: '[Vendor] Dashboard',
          file: '1.jpeg',
          caption: 'Main vendor dashboard showing today\'s earnings and key metrics.'
        },
        {
          step: 2,
          name: '[Vendor] Active Orders',
          file: '2.jpeg',
          caption: 'List of current active orders that need to be prepared.'
        },
        {
          step: 3,
          name: '[Vendor] Order History',
          file: '3.jpeg',
          caption: 'Complete order history with search by order ID or customer name.'
        },
        {
          step: 4,
          name: '[Vendor] Analytics',
          file: '4.jpeg',
          caption: 'Business analytics showing sales trends and performance metrics.'
        },
        {
          step: 5,
          name: '[Vendor] Menu Management',
          file: '5.jpeg',
          caption: 'Interface to add, edit, and manage menu items and pricing.'
        }
      ]
    },
    {
      key: 'admin',
      title: 'Admin / Operations Flow',
      subtitle: 'How the BeeGrub admin team manages the platform.',
      basePath: '/images/products/admin/',
      screens: [
        {
          step: 1,
          name: '[Admin] Dashboard & Main Menu',
          file: '1.jpeg',
          caption: 'Main admin dashboard with navigation and system overview.'
        },
        {
          step: 2,
          name: '[Admin] Approve Vendors',
          file: '2.jpeg',
          caption: 'Vendor approval section (scrolled down from dashboard) to review and approve new vendors.'
        },
        {
          step: 3,
          name: '[Admin] Manage Users',
          file: '3.jpeg',
          caption: 'User management interface to view and manage student and vendor accounts.'
        },
        {
          step: 4,
          name: '[Admin] Manage Order History',
          file: '4.jpeg',
          caption: 'Complete order history across all vendors with search and filter capabilities.'
        },
        {
          step: 5,
          name: '[Admin] Fee Analytics',
          file: '5.jpeg',
          caption: 'Analytics dashboard showing service fee revenue and financial metrics.'
        }
      ]
    }
  ];

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Product & Service Photos</span>
          <h2 className="section-title">
            BeeGrub <span className="gradient-text">App & Service</span> Screens
          </h2>
          <p className="section-subtitle">
            Screenshots grouped by Student, Vendor, and Admin flows to clearly fulfill the "5 products or services photo" requirement.
          </p>
        </div>

        {flows.map((flow) => (
          <div key={flow.key} className="products-role-block">
            <div className="products-role-header">
              <h3 className="products-role-title">{flow.title}</h3>
              <p className="products-role-subtitle">{flow.subtitle}</p>
            </div>

            <div className="products-grid">
              {flow.screens.map((screen) => (
                <div key={screen.step} className="product-card">
                  <div className="product-image">
                    <img src={`${flow.basePath}${screen.file}`} alt={screen.name} />
                    <div className="product-badge">{screen.step}</div>
                  </div>
                  <div className="product-content">
                    <h3 className="product-name">{screen.name}</h3>
                    <p className="product-description">{screen.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
