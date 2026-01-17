import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'Events', path: '/events' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'Success Stories', path: '/success-stories' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className={`font-serif text-xl font-semibold ${isScrolled ? 'text-stone-800' : 'text-white'}`}>
                Dallas
              </span>
              <span className={`font-serif text-xl ${isScrolled ? 'text-amber-600' : 'text-amber-400'}`}>
                {' '}Community Hub
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-amber-600'
                    : isScrolled
                    ? 'text-stone-600 hover:text-amber-600'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/submit">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6">
                Submit Resource
              </Button>
            </Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-stone-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-stone-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left font-medium py-2 ${
                  location.pathname === link.path
                    ? 'text-amber-600'
                    : 'text-stone-600 hover:text-amber-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/submit" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-full">
                Submit Resource
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
