import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col justify-end">
      {/* Call to Action Section */}
      <div className="bg-gradient-to-b from-blue-700 to-blue-900 text-white text-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Try DarkSonic?
        </h2>
        <p className="text-gray-200 mt-3">
          Let’s sign up and try our conversational assistant to get ahead in
          ongoing projects or future goals
        </p>
        <button onClick={()=>navigate('/Agent')} className="mt-6 px-6 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:bg-gray-100 transition">
          Try DarkSonic →
        </button>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-semibold">DarkSonic</h3>
            <p className="text-gray-400 mt-2">
              Conversational AI Assistant for Bank Industry
            </p>
          </div>

          {/* About Company */}
          <div>
            <h3 className="text-white text-lg font-semibold">About Company</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-white text-lg font-semibold">
              Important Links
            </h3>
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
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold">Give us a Call</h3>
            <p className="text-gray-400 mt-2">📞 +1 (412) 567-4498</p>
            <p className="text-gray-400">📞 +880 2 883 6411</p>
            <h3 className="text-white text-lg font-semibold mt-4">
              Email us at
            </h3>
            <p className="text-gray-400 mt-2">📧 info@enosisbd.com</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-500 mt-8 text-sm">
          © Copyright 2023, All Rights Reserved by DarkSonic
        </div>
      </footer>
    </div>
  );
}

export default Footer;
