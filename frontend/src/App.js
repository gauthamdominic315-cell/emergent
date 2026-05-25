// App.js

import React from "react";
import {
  Package,
  Briefcase,
  GlassWater,
  Cpu,
  Boxes,
  ShoppingBag,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const categories = [
  {
    title: "Office Stationery",
    icon: <Briefcase size={36} />,
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200&auto=format&fit=crop",
    description:
      "Pens, files, notebooks, printer paper, office supplies and more.",
  },
  {
    title: "Packaging Materials",
    icon: <Package size={36} />,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    description:
      "Industrial packaging materials for shipping and storage solutions.",
  },
  {
    title: "Plastic Products",
    icon: <Boxes size={36} />,
    image:
      "https://images.unsplash.com/photo-1618477462146-050d2767eac4?q=80&w=1200&auto=format&fit=crop",
    description:
      "Quality plastic containers, household items and utility products.",
  },
  {
    title: "Disposable Products",
    icon: <ShoppingBag size={36} />,
    image:
      "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=1200&auto=format&fit=crop",
    description:
      "Eco-friendly disposable cups, plates, spoons and packaging items.",
  },
  {
    title: "Glass Products",
    icon: <GlassWater size={36} />,
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop",
    description:
      "Premium glassware products for home, office and commercial use.",
  },
  {
    title: "Electronic & Hardware",
    icon: <Cpu size={36} />,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    description:
      "Electrical accessories, hardware tools and electronic supplies.",
  },
];

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Kumar Enterprises
        </h1>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#home" className="hover:text-blue-600">
            Home
          </a>
          <a href="#categories" className="hover:text-blue-600">
            Categories
          </a>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-slate-900 to-slate-700 text-white pt-36 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Complete Business Supply Solutions
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            We provide premium office stationery, packaging materials,
            disposable products, glass products, electronics and industrial
            supplies for businesses of all sizes.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Explore Products
            </button>

            <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop"
            alt="Business Supplies"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
      <img
        src={category.image}
        alt={category.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <div className="flex items-center gap-4 text-slate-800">
          {category.icon}
          <h3 className="text-2xl font-bold">{category.title}</h3>
        </div>

        <p className="mt-4 text-gray-600 leading-relaxed">
          {category.description}
        </p>

        <button className="mt-6 bg-slate-900 text-white px-5 py-3 rounded-xl hover:bg-slate-700 transition">
          View Products
        </button>
      </div>
    </div>
  );
}

function Categories() {
  return (
    <section id="categories" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900">
            Product Categories
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Explore our wide range of industrial and commercial products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <img
          src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1400&auto=format&fit=crop"
          alt="About Us"
          className="rounded-3xl shadow-xl"
        />

        <div>
          <h2 className="text-5xl font-bold text-gray-900">
            Trusted Business Partner
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed text-lg">
            Kumar Enterprises has been delivering quality products and reliable
            business supply solutions to customers across multiple industries.
            Our commitment to quality, affordability and customer satisfaction
            makes us a trusted supplier.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-2xl">
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-gray-600 mt-2">Products</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-2xl">
              <h3 className="text-3xl font-bold">1000+</h3>
              <p className="text-gray-600 mt-2">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold">Contact Us</h2>

        <p className="mt-6 text-gray-300 text-lg">
          Get in touch for product inquiries, bulk orders and partnerships.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-slate-800 rounded-3xl p-8">
            <Phone size={36} />
            <h3 className="text-2xl font-semibold mt-4">Phone</h3>
            <p className="mt-2 text-gray-300">+91 98765 43210</p>
          </div>

          <div className="bg-slate-800 rounded-3xl p-8">
            <Mail size={36} />
            <h3 className="text-2xl font-semibold mt-4">Email</h3>
            <p className="mt-2 text-gray-300">
              kumarenterprises@email.com
            </p>
          </div>

          <div className="bg-slate-800 rounded-3xl p-8">
            <MapPin size={36} />
            <h3 className="text-2xl font-semibold mt-4">Location</h3>
            <p className="mt-2 text-gray-300">
              Bangalore, Karnataka, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 text-center">
      <p>© 2026 Kumar Enterprises. All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Categories />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}