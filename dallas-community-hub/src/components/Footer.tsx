import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-serif text-xl font-semibold">Dallas</span>
                <span className="font-serif text-xl text-amber-400"> Community Hub</span>
              </div>
            </Link>
            <p className="text-stone-400 mb-6 max-w-md">
              Connecting Dallas residents with essential community resources, support services, 
              and programs to build a stronger, more connected metroplex.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/resources" className="text-stone-400 hover:text-amber-400 transition-colors">Resource Directory</Link></li>
              <li><Link to="/events" className="text-stone-400 hover:text-amber-400 transition-colors">Community Events</Link></li>
              <li><Link to="/get-involved" className="text-stone-400 hover:text-amber-400 transition-colors">Get Involved</Link></li>
              <li><Link to="/success-stories" className="text-stone-400 hover:text-amber-400 transition-colors">Success Stories</Link></li>
              <li><Link to="/submit" className="text-stone-400 hover:text-amber-400 transition-colors">Submit Resource</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-stone-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                Dallas, Texas
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                211 (24/7 Helpline)
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                info@dallascommunityhub.org
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">
            &copy; 2026 Dallas Community Resource Hub. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-stone-500">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
