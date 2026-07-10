import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              Smart Expense Tracker
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              AI-powered personal finance platform that helps you
              track expenses, analyze spending habits and save money.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>Features</li>
              <li>Dashboard</li>
              <li>Reports</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">
              Contact
            </h3>

            <div className="flex gap-5 text-2xl">
              <FaGithub className="hover:text-blue-400 cursor-pointer" />
              <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
              <FaEnvelope className="hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-500">
          © 2026 Smart Expense Tracker | Built with React & AI
        </p>

      </div>
    </footer>
  );
}

export default Footer;