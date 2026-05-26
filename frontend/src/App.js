export default function Navbar() {
  return (
    <header className="shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-blue-950">
            Kumar Enterprises
          </h1>

          <p className="text-sm tracking-[3px] text-gray-500">
            CORPORATE SUPPLY SOLUTIONS
          </p>
        </div>

        <nav className="hidden md:flex gap-8 font-semibold">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}export default function Hero() {
  return (
    <section className="bg-blue-950 text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <p className="uppercase tracking-[5px] text-yellow-400 mb-5">
            Bengaluru • Corporate Supplier
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            One Stop Solution
            <span className="text-yellow-400">
              {" "}for your office needs.
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-300 leading-8">
            Office stationery, packaging materials,
            plastic products, disposable products,
            hardware and corporate supply solutions.
          </p>

          <div className="flex gap-5 mt-10">
            <a
              href="https://wa.me/919900292915"
              className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold"
            >
              WhatsApp Us
            </a>

            <a
              href="#products"
              className="border border-white px-8 py-4 rounded-xl"
            >
              Explore Products
            </a>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200"
          alt="warehouse"
          className="rounded-3xl shadow-2xl"
        />
      </div>
    </section>
  );
}const products = [
  "Office Stationery",
  "Packaging Materials",
  "Plastic Products",
  "Disposable Products",
  "Glass Products",
  "Electronic & Hardware",
];

export default function ProductSection() {
  return (
    <section
      id="products"
      className="py-24 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-950 mb-16">
          Product Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200"
                alt={item}
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-950">
                  {item}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold">
          Kumar Enterprises
        </h2>

        <p className="mt-5 text-gray-400">
          One stop solution for your office needs.
        </p>

        <div className="flex gap-6 mt-8 flex-wrap">
          <a href="https://instagram.com">Instagram</a>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://youtube.com">YouTube</a>
          <a href="https://wa.me/919900292915">WhatsApp</a>
        </div>

      </div>
    </footer>
  );
}import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductSection />
      <Footer />
    </>
  );
}

export default App;