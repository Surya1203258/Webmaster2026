import { Link } from 'react-router-dom';
import { 
  Quote, 
  ArrowRight,
  Heart,
  Users,
  Home,
  GraduationCap,
  Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const successStories = [
  {
    id: 1,
    name: "Maria Rodriguez",
    title: "From Homeless to Homeowner",
    category: "Housing",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop",
    quote: "The Dallas Community Resource Hub connected me with Habitat for Humanity. Two years later, I'm a homeowner. I never thought this would be possible.",
    story: "After losing her job during the pandemic, Maria found herself homeless with two children. Through the Resource Hub, she connected with The Bridge and eventually Habitat for Humanity. Today, she owns her own home and works as a community advocate.",
    organization: "Dallas Area Habitat for Humanity",
    icon: <Home className="w-6 h-6" />
  },
  {
    id: 2,
    name: "James Thompson",
    title: "Second Chance at Success",
    category: "Employment",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop",
    quote: "Workforce Solutions didn't just help me find a job - they helped me build a career. I went from unemployed to managing a team of 15.",
    story: "After being laid off at 52, James struggled to find work. The Resource Hub connected him with Workforce Solutions Greater Dallas, where he received training and job placement assistance. Within six months, he was hired as a supervisor.",
    organization: "Workforce Solutions Greater Dallas",
    icon: <Users className="w-6 h-6" />
  },
  {
    id: 3,
    name: "The Johnson Family",
    title: "Overcoming Food Insecurity",
    category: "Food Assistance",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&auto=format&fit=crop",
    quote: "When we couldn't afford groceries, the North Texas Food Bank was there. Now we volunteer there every month to give back.",
    story: "The Johnson family of five faced food insecurity after a medical emergency depleted their savings. Through the Resource Hub, they found the North Texas Food Bank. Now recovered, they volunteer monthly and have become advocates for food security.",
    organization: "North Texas Food Bank",
    icon: <Heart className="w-6 h-6" />
  },
  {
    id: 4,
    name: "David Chen",
    title: "A Path to Education",
    category: "Education",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop",
    quote: "LIFT helped me learn English and get my GED. Now I'm studying to become a nurse. Education changed everything for me.",
    story: "David immigrated to Dallas with limited English skills. Through LIFT Dallas, he learned English and earned his GED. He's now pursuing a nursing degree at a local community college while working part-time.",
    organization: "Literacy Instruction for Texas (LIFT)",
    icon: <GraduationCap className="w-6 h-6" />
  }
];

const impactNumbers = [
  { value: "50,000+", label: "Lives Changed" },
  { value: "98%", label: "Success Rate" },
  { value: "500+", label: "Partner Organizations" },
  { value: "13", label: "Counties Served" }
];

const videoTestimonials = [
  {
    id: 1,
    name: "Sarah Williams",
    title: "Mental Health Recovery Journey",
    thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop",
    duration: "3:45"
  },
  {
    id: 2,
    name: "The Martinez Family",
    title: "Finding Community Support",
    thumbnail: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&auto=format&fit=crop",
    duration: "4:12"
  },
  {
    id: 3,
    name: "Robert Jackson",
    title: "From Veteran to Volunteer",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop",
    duration: "5:30"
  }
];

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Video Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-partying-happily-4640-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/80" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">
            Success <span className="italic text-amber-400">Stories</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Real stories from real people whose lives have been transformed through 
            the power of community resources and support.
          </p>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactNumbers.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-4xl md:text-5xl text-amber-600 mb-2">{stat.value}</div>
                <div className="text-stone-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">Featured Story</span>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mt-4">
              This Month's Spotlight
            </h2>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="aspect-square md:aspect-auto overflow-hidden">
                <img 
                  src={successStories[0].image}
                  alt={successStories[0].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                    {successStories[0].icon}
                  </div>
                  <span className="text-amber-600 font-medium">{successStories[0].category}</span>
                </div>
                <h3 className="font-serif text-3xl text-stone-800 mb-2">{successStories[0].name}</h3>
                <p className="text-stone-500 mb-6">{successStories[0].title}</p>
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-amber-200" />
                  <p className="text-stone-600 text-lg italic pl-6">
                    "{successStories[0].quote}"
                  </p>
                </div>
                <p className="text-stone-600 mb-6">{successStories[0].story}</p>
                <p className="text-sm text-stone-500">
                  Supported by: <span className="text-amber-600 font-medium">{successStories[0].organization}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">Community Impact</span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mt-4 mb-6">
              More <span className="italic text-amber-600">Stories</span>
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Every day, Dallas residents are overcoming challenges and achieving their dreams 
              with the help of community resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.slice(1).map((story) => (
              <div 
                key={story.id}
                className="bg-stone-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                      {story.icon}
                    </div>
                    <span className="text-amber-600 text-sm font-medium">{story.category}</span>
                  </div>
                  <h3 className="font-serif text-xl text-stone-800 mb-1">{story.name}</h3>
                  <p className="text-stone-500 text-sm mb-4">{story.title}</p>
                  <p className="text-stone-600 text-sm italic line-clamp-3">"{story.quote}"</p>
                  <Button variant="ghost" className="mt-4 text-amber-600 hover:text-amber-700 hover:bg-amber-50 p-0">
                    Read Full Story <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-medium tracking-wider uppercase text-sm">Watch & Listen</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
              Video <span className="italic text-amber-400">Testimonials</span>
            </h2>
            <p className="text-stone-300 text-lg max-w-2xl mx-auto">
              Hear directly from community members about their experiences and transformations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((video) => (
              <div 
                key={video.id}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <h3 className="font-serif text-lg">{video.name}</h3>
                <p className="text-stone-400 text-sm">{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <Quote className="w-12 h-12 text-white mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Share Your Story
          </h2>
          <p className="text-amber-100 text-lg mb-10 max-w-2xl mx-auto">
            Has a community resource made a difference in your life? We'd love to hear from you. 
            Your story could inspire others to seek help or get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-amber-600 hover:bg-stone-100 text-lg px-10 py-6 rounded-full">
              Submit Your Story
            </Button>
            <Link to="/get-involved">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-amber-600 text-lg px-10 py-6 rounded-full bg-transparent">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Organizations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">Our Partners</span>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mt-4 mb-6">
              Organizations Making a Difference
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              These success stories are made possible by our network of dedicated partner organizations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            {["North Texas Food Bank", "Habitat for Humanity", "United Way", "Parkland Health", "Big Brothers Big Sisters", "Senior Source"].map((partner, index) => (
              <div key={index} className="text-stone-400 font-serif text-xl">
                {partner}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/resources">
              <Button variant="outline" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white rounded-full px-8 py-6">
                View All Partners <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
