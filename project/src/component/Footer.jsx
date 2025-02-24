import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-end">
      {/* Call to Action Section */}
      <div className="bg-gradient-to-b from-gray-800 to-black text-white text-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Try DarkSonic?
        </h2>
        <p className="text-gray-400 mt-3">
          Experience AI-powered blockchain operations with seamless execution.
          Sign up and simplify transactions, contract deployments, and token swaps.
        </p>
        <button onClick={() => navigate('/Agent')} className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
          Try DarkSonic →
        </button>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-gray-400 py-12 ">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-semibold">DarkSonic</h3>
            <p className="text-gray-500 mt-2">
              AI-powered blockchain assistant for seamless crypto transactions.
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white text-lg font-semibold">About</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-lg font-semibold">Resources</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold">Contact Us</h3>
            <p className="text-gray-500 mt-2">📧 kunalgola9930@gmail.com</p>
            
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-600 mt-8 text-sm">
          © {new Date().getFullYear()} DarkSonic. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
