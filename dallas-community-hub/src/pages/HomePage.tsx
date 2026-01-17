import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Home, 
  Stethoscope, 
  GraduationCap, 
  Users, 
  UserCheck, 
  Briefcase, 
  Brain, 
  UtensilsCrossed,
  Star,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypewriterText from '../components/TypewriterText';
import { 
  resources, 
  ResourceCategory, 
  categoryLabels, 
  impactStats 
} from '../data/resources';

const categoryIcons: Record<ResourceCategory, React.ReactNode> = {
  'non-profit': <Heart className="w-6 h-6" />,
  'food-assistance': <UtensilsCrossed className="w-6 h-6" />,
  'housing': <Home className="w-6 h-6" />,
  'healthcare': <Stethoscope className="w-6 h-6" />,
  'education': <GraduationCap className="w-6 h-6" />,
  'youth-programs': <Users className="w-6 h-6" />,
  'senior-services': <UserCheck className="w-6 h-6" />,
  'employment': <Briefcase className="w-6 h-6" />,
  'mental-health': <Brain className="w-6 h-6" />
};

export default function HomePage() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [typingComplete, setTypingComplete] = useState(false);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const featuredResources = resources.filter(r => r.featured);
  const categories = Object.keys(categoryLabels) as ResourceCategory[];

  const titleSegments = [
    { text: 'Connecting Dallas', className: 'text-white' },
    { text: 'Communities', className: 'text-amber-400 italic', isNewLine: true }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1920&auto=format&fit=crop&q=80"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/18505644/18505644-hd_1920_1080_24fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/80" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className={`font-serif text-5xl md:text-7xl lg:text-8xl mb-6 min-h-[1.2em] md:min-h-[2.4em] ${typingComplete ? 'animate-glow' : ''}`}>
            <TypewriterText 
              segments={titleSegments}
              typingSpeed={70}
              delayBetweenSegments={300}
              startDelay={800}
              showCursor={true}
              cursorClassName="text-amber-400"
              onComplete={() => setTypingComplete(true)}
            />
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            Your gateway to essential resources, support services, and community programs across the Dallas-Fort Worth metroplex
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/resources">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-10 py-6 rounded-full">
                Explore Resources
              </Button>
            </Link>
            <Button 
              onClick={() => scrollToSection(spotlightRef)}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-stone-800 text-lg px-10 py-6 rounded-full bg-transparent"
            >
              Featured Organizations
            </Button>
          </div>
        </div>

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
              <Link
                key={category}
                to={`/resources?category=${category}`}
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
              </Link>
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

          <div className="text-center mt-12">
            <Link to="/success-stories">
              <Button variant="outline" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white rounded-full px-8 py-6">
                View All Success Stories <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
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
              <div className="flex flex-wrap gap-4 mb-8">
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
              <Link to="/get-involved">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-6">
                  Get Involved <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
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

      {/* CTA Section */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-amber-100 text-lg mb-10 max-w-2xl mx-auto">
            Whether you need help or want to help others, the Dallas Community Resource Hub is here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/resources">
              <Button className="bg-white text-amber-600 hover:bg-stone-100 text-lg px-10 py-6 rounded-full">
                Find Resources
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-amber-600 text-lg px-10 py-6 rounded-full bg-transparent">
                Volunteer Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
