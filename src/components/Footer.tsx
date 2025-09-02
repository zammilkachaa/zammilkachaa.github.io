import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  marketplace: [
    "Browse Products",
    "Find Suppliers",
    "Bulk Orders",
    "Product Categories",
    "Supplier Directory"
  ],
  services: [
    "Halal Certification",
    "Business Financing",
    "MSME Support",
    "Export Assistance",
    "Quality Assurance"
  ],
  resources: [
    "LPPOM MUI Guidelines",
    "Certification Process",
    "Financing Calculator",
    "Success Stories",
    "Knowledge Base"
  ],
  company: [
    "About Us",
    "Contact Us",
    "Careers",
    "Press Center",
    "Partnership"
  ]
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-medium text-white mb-2">
                Stay Updated with Halal Market Insights
              </h3>
              <p className="text-gray-400">
                Get the latest news on halal certification, market trends, and business opportunities for MSMEs
              </p>
            </div>
            <div className="flex gap-3">
              <Input
                placeholder="Enter your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-medium text-sm">H</span>
              </div>
              <div>
                <h1 className="font-medium text-lg text-white">HalalMarket</h1>
                <p className="text-xs text-gray-400">B2B Marketplace</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Indonesia's leading B2B halal marketplace connecting MSMEs with certified suppliers, financing solutions, and LPPOM MUI integration.
            </p>
            
            {/* Certification badges */}
            <div className="space-y-3 mb-6">
              <Badge className="bg-emerald-600 text-white">
                <Shield className="w-3 h-3 mr-1" />
                LPPOM MUI Partner
              </Badge>
              <div className="text-sm text-gray-400">
                <p>Licensed by: OJK, Bank Indonesia</p>
                <p>Certified: ISO 27001, ISO 9001</p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <Button size="sm" variant="outline" className="border-gray-700 hover:bg-gray-800">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-700 hover:bg-gray-800">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-700 hover:bg-gray-800">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-700 hover:bg-gray-800">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Marketplace links */}
          <div>
            <h3 className="font-medium text-white mb-4">Marketplace</h3>
            <ul className="space-y-2">
              {footerLinks.marketplace.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="font-medium text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h3 className="font-medium text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h3 className="font-medium text-white mb-4">Contact & Company</h3>
            <ul className="space-y-2 mb-4">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+62 21 1234 5678</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>support@halalmarket.id</span>
              </div>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2025 HalalMarket. All rights reserved. Licensed under OJK and Bank Indonesia regulations.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}