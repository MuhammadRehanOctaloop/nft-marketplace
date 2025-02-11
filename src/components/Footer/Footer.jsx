import { FaTelegramPlane, FaFacebook, FaTwitter, FaLinkedin, FaDiscord, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-500 to-red-700 text-white p-8 rounded-t-2xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold flex items-center">
            <img src="/logo.png" alt="Fry Networks" className="w-10 h-10 mr-2" />
            Fry Networks
          </h2>
          <p className="text-sm max-w-sm">
            NFT ALGO is the world's leading NFTs marketplace where you can discover, sell, and bid NFTs and get rich.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-3">
            {[
              { icon: FaFacebook, link: "#" },
              { icon: FaTelegramPlane, link: "#" },
              { icon: FaLinkedin, link: "#" },
              { icon: FaDiscord, link: "#" },
              { icon: FaInstagram, link: "#" },
              { icon: FaYoutube, link: "#" },
              { icon: FaTiktok, link: "#" }
            ].map(({ icon: Icon, link }, index) => (
              <a key={index} href={link} className="text-white text-lg hover:scale-110 transition-transform duration-200">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="text-white space-y-2">
          <h3 className="font-semibold text-lg">About</h3>
          <ul className="space-y-1 text-sm">
            {["About NFT", "Live Auctions", "Collection", "Activity"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-gray-200">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
