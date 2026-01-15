import { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  Heart, 
  Home, 
  Stethoscope, 
  GraduationCap, 
  Users, 
  UserCheck, 
  Briefcase, 
  Brain, 
  Calendar,
  UtensilsCrossed,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  ChevronRight,
  Star,
  Send,
  ArrowRight,
  ExternalLink,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  resources, 
  Resource, 
  ResourceCategory, 
  categoryLabels, 
  upcomingEvents,
  impactStats 
} from './data/resources';

const categoryIcons: Record<ResourceCategory, React.ReactNode> = {
  'non-profit': <Heart className="w-6 h-6" />,
  'food-assistance': <UtensilsCrossed className="w-6 h-6" />,
  'housing': <Home className="w-6 h-6" />,
  'healthcare': <Stethoscope className="w-6 h-6" />,
  'education': <GraduationCap className="w-6 h-6" />,
  'youth-programs': <Users className="w-6 h-6" />,
  'senior-services': <UserCheck className="w-6 h-6" />,
  'employment': <Briefcase className="w-6 h-6" />,
  'mental-health': <Brain className="w-6 h-6" />,
  'community-events': <Calendar className="w-6 h-6" />
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | 'all'>('all');
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: '',
    category: '',
    description: '',
    address: '',
    phone: '',
    email: '',
    website: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const resourcesRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const submitRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredResources = resources.filter(r => r.featured);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({
        organizationName: '',
        category: '',
        description: '',
        address: '',
        phone: '',
        email: '',
        website: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };

  const categories = Object.keys(categoryLabels) as ResourceCategory[];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
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
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection(resourcesRef)}
                className={`font-medium transition-colors ${isScrolled ? 'text-stone-600 hover:text-amber-600' : 'text-white/90 hover:text-white'}`}
              >
                Resources
              </button>
              <button 
                onClick={() => scrollToSection(spotlightRef)}
                className={`font-medium transition-colors ${isScrolled ? 'text-stone-600 hover:text-amber-600' : 'text-white/90 hover:text-white'}`}
              >
                Spotlight
              </button>
              <button 
                onClick={() => scrollToSection(eventsRef)}
                className={`font-medium transition-colors ${isScrolled ? 'text-stone-600 hover:text-amber-600' : 'text-white/90 hover:text-white'}`}
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection(aboutRef)}
                className={`font-medium transition-colors ${isScrolled ? 'text-stone-600 hover:text-amber-600' : 'text-white/90 hover:text-white'}`}
              >
                About
              </button>
              <Button 
                onClick={() => scrollToSection(submitRef)}
                className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6"
              >
                Submit Resource
              </Button>
            </div>

            {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection(resourcesRef)}
                className="block w-full text-left text-stone-600 hover:text-amber-600 font-medium py-2"
              >
                Resources
              </button>
              <button 
                onClick={() => scrollToSection(spotlightRef)}
                className="block w-full text-left text-stone-600 hover:text-amber-600 font-medium py-2"
              >
                Spotlight
              </button>
              <button 
                onClick={() => scrollToSection(eventsRef)}
                className="block w-full text-left text-stone-600 hover:text-amber-600 font-medium py-2"
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection(aboutRef)}
                className="block w-full text-left text-stone-600 hover:text-amber-600 font-medium py-2"
              >
                About
              </button>
              <Button 
                onClick={() => scrollToSection(submitRef)}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-full"
              >
                Submit Resource
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1545194445-dddb8f4487c6?w=1920&auto=format&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/80" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 animate-fade-in">
            Connecting Dallas
            <span className="block text-amber-400 italic">Communities</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Your gateway to essential resources, support services, and community programs across the Dallas-Fort Worth metroplex
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={() => scrollToSection(resourcesRef)}
              className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-10 py-6 rounded-full"
            >
              Explore Resources
            </Button>
            <Button 
              onClick={() => scrollToSection(spotlightRef)}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-stone-800 text-lg px-10 py-6 rounded-full bg-transparent"
            >
              Featured Organizations
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-white py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-4xl md:text-5xl text-amber-600 mb-2">{stat.value}</div>
                <div className="text-stone-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="bg-stone-100 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-stone-800 mb-8">
            Explore Resources by Category
          </h2>
          <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  scrollToSection(resourcesRef);
                }}
                className="flex-shrink-0 group"
              >
                <div className="w-32 h-32 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-3 group-hover:-translate-y-1">
                  <div className="text-amber-600 group-hover:scale-110 transition-transform">
                    {categoryIcons[category]}
                  </div>
                  <span className="text-xs text-stone-600 text-center px-2 font-medium">
                    {categoryLabels[category]}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight Section */}
      <section ref={spotlightRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">Featured Partners</span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mt-4 mb-6">
              Community <span className="italic text-amber-600">Spotlight</span>
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Highlighting organizations making an extraordinary impact in the Dallas community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredResources.map((resource) => (
              <div 
                key={resource.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={resource.image} 
                    alt={resource.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-amber-600 text-white text-xs px-3 py-1 rounded-full">
                      {categoryLabels[resource.category]}
                    </span>
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  </div>
                  <h3 className="font-serif text-2xl mb-2">{resource.name}</h3>
                  <p className="text-white/80 text-sm line-clamp-2">{resource.description}</p>
                  <a 
                    href={resource.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-amber-400 hover:text-amber-300 font-medium"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Directory */}
      <section ref={resourcesRef} className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">Resource Hub</span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mt-4 mb-6">
              Community <span className="italic text-amber-600">Directory</span>
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Search and filter through our comprehensive database of Dallas community resources
            </p>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search resources, services, or organizations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-6 text-lg rounded-xl border-stone-200 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as ResourceCategory | 'all')}
                className="px-6 py-3 rounded-xl border border-stone-200 text-stone-600 focus:border-amber-500 focus:ring-amber-500 bg-white"
              >
                <option value="all">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{categoryLabels[cat]}</option>
                ))}
              </select>
            </div>
            <div className="mt-4 text-sm text-stone-500">
              Showing {filteredResources.length} of {resources.length} resources
            </div>
          </div>

          {/* Resource Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-16">
              <div className="text-stone-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="font-serif text-2xl text-stone-600 mb-2">No resources found</h3>
              <p className="text-stone-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Events Section */}
      <section ref={eventsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">Get Involved</span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mt-4 mb-6">
              Upcoming <span className="italic text-amber-600">Events</span>
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Join us at community events designed to connect, educate, and empower Dallas residents
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id}
                className="group bg-stone-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 aspect-video md:aspect-auto overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="flex items-center gap-2 text-amber-600 text-sm font-medium mb-3">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <h3 className="font-serif text-xl text-stone-800 mb-2">{event.title}</h3>
                    <p className="text-stone-600 text-sm mb-4">{event.description}</p>
                    <div className="flex items-center gap-4 text-sm text-stone-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-400 font-medium tracking-wider uppercase text-sm">About Us</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
                Empowering Our <span className="italic text-amber-400">Community</span>
              </h2>
              <p className="text-stone-300 text-lg mb-6">
                The Dallas Community Resource Hub is dedicated to connecting residents with the vital resources 
                and services they need to thrive. We believe that by bringing together non-profits, support 
                services, and community programs in one accessible platform, we can strengthen our neighborhoods 
                and improve lives across the Dallas-Fort Worth metroplex.
              </p>
              <p className="text-stone-300 text-lg mb-8">
                Our mission is to ensure that every Dallas resident has easy access to food assistance, 
                healthcare, housing support, education, employment services, and more. Together, we can 
                build a stronger, more connected community.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-stone-800 rounded-xl p-4 flex-1 min-w-[140px]">
                  <div className="text-amber-400 font-serif text-3xl mb-1">2008</div>
                  <div className="text-stone-400 text-sm">Established</div>
                </div>
                <div className="bg-stone-800 rounded-xl p-4 flex-1 min-w-[140px]">
                  <div className="text-amber-400 font-serif text-3xl mb-1">13</div>
                  <div className="text-stone-400 text-sm">Counties Served</div>
                </div>
                <div className="bg-stone-800 rounded-xl p-4 flex-1 min-w-[140px]">
                  <div className="text-amber-400 font-serif text-3xl mb-1">24/7</div>
                  <div className="text-stone-400 text-sm">Support Available</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop"
                alt="Community volunteers"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-600 rounded-2xl p-6 shadow-xl">
                <div className="font-serif text-4xl text-white mb-1">500+</div>
                <div className="text-amber-100">Partner Organizations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Resource Form */}
      <section ref={submitRef} className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">Contribute</span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mt-4 mb-6">
              Submit a <span className="italic text-amber-600">Resource</span>
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Know of a community resource that should be included in our directory? 
              Help us grow our database by submitting new organizations and services.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="font-serif text-2xl text-stone-800 mb-2">Thank You!</h3>
                <p className="text-stone-600">Your submission has been received. We'll review it shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">Organization Name *</label>
                    <Input
                      type="text"
                      required
                      value={formData.organizationName}
                      onChange={(e) => setFormData({...formData, organizationName: e.target.value})}
                      className="rounded-xl border-stone-200 focus:border-amber-500 focus:ring-amber-500"
                      placeholder="Enter organization name"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">Category *</label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className="w-full px-4 py-2 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-amber-500"
                    >
                      <option value="">Select a category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{categoryLabels[cat]}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-2">Description *</label>
                  <Textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="rounded-xl border-stone-200 focus:border-amber-500 focus:ring-amber-500 min-h-[120px]"
                    placeholder="Describe the services and resources offered..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">Address</label>
                    <Input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className="rounded-xl border-stone-200 focus:border-amber-500 focus:ring-amber-500"
                      placeholder="Street address, city, state, zip"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">Phone</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="rounded-xl border-stone-200 focus:border-amber-500 focus:ring-amber-500"
                      placeholder="(XXX) XXX-XXXX"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="rounded-xl border-stone-200 focus:border-amber-500 focus:ring-amber-500"
                      placeholder="contact@organization.org"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">Website</label>
                    <Input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({...formData, website: e.target.value})}
                      className="rounded-xl border-stone-200 focus:border-amber-500 focus:ring-amber-500"
                      placeholder="https://www.organization.org"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white text-lg py-6 rounded-full"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Resource
                  </Button>
                </div>

                <p className="text-center text-stone-500 text-sm">
                  By submitting, you agree to our review process. All submissions are verified before being added to the directory.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-serif text-xl font-semibold">Dallas</span>
                  <span className="font-serif text-xl text-amber-400"> Community Hub</span>
                </div>
              </div>
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
                <li><button onClick={() => scrollToSection(resourcesRef)} className="text-stone-400 hover:text-amber-400 transition-colors">Resource Directory</button></li>
                <li><button onClick={() => scrollToSection(spotlightRef)} className="text-stone-400 hover:text-amber-400 transition-colors">Featured Partners</button></li>
                <li><button onClick={() => scrollToSection(eventsRef)} className="text-stone-400 hover:text-amber-400 transition-colors">Upcoming Events</button></li>
                <li><button onClick={() => scrollToSection(submitRef)} className="text-stone-400 hover:text-amber-400 transition-colors">Submit Resource</button></li>
                <li><button onClick={() => scrollToSection(aboutRef)} className="text-stone-400 hover:text-amber-400 transition-colors">About Us</button></li>
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
              © 2026 Dallas Community Resource Hub. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-stone-500">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group">
      <div className="aspect-video overflow-hidden">
        <img 
          src={resource.image} 
          alt={resource.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-amber-100 text-amber-700 text-xs px-3 py-1 rounded-full font-medium">
            {categoryLabels[resource.category]}
          </span>
          {resource.featured && (
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          )}
        </div>
        <h3 className="font-serif text-xl text-stone-800 mb-2">{resource.name}</h3>
        <p className="text-stone-600 text-sm mb-4 line-clamp-2">{resource.description}</p>
        
        <div className="space-y-2 text-sm text-stone-500">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-600" />
            <span className="truncate">{resource.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-amber-600" />
            <span>{resource.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-600" />
            <span className="truncate">{resource.hours}</span>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-stone-100">
            <h4 className="font-medium text-stone-700 mb-2">Services Offered:</h4>
            <div className="flex flex-wrap gap-2">
              {resource.services.map((service, idx) => (
                <span key={idx} className="bg-stone-100 text-stone-600 text-xs px-2 py-1 rounded">
                  {service}
                </span>
              ))}
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <a 
                href={`mailto:${resource.email}`}
                className="flex items-center gap-2 text-amber-600 hover:text-amber-700"
              >
                <Mail className="w-4 h-4" />
                {resource.email}
              </a>
              <a 
                href={resource.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-amber-600 hover:text-amber-700"
              >
                <Globe className="w-4 h-4" />
                Visit Website
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 w-full py-2 text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center justify-center gap-1"
        >
          {isExpanded ? 'Show Less' : 'View Details'}
          <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
        </button>
      </div>
    </div>
  );
}

export default App;
