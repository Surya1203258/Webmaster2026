import { Link } from 'react-router-dom';
import { 
  Heart, 
  Users, 
  HandHeart, 
  Building2, 
  Calendar,
  DollarSign,
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const volunteerOpportunities = [
  {
    id: 1,
    title: "Food Bank Volunteer",
    organization: "North Texas Food Bank",
    commitment: "4 hours/week",
    location: "Plano, TX",
    description: "Help sort and pack food for distribution to families in need.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Youth Mentor",
    organization: "Big Brothers Big Sisters",
    commitment: "2-4 hours/week",
    location: "Dallas, TX",
    description: "Make a lasting impact by mentoring a young person in your community.",
    image: "https://images.unsplash.com/photo-1529390079861-591f8f0e9903?w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Senior Companion",
    organization: "Senior Source",
    commitment: "2 hours/week",
    location: "Various Locations",
    description: "Provide companionship and assistance to isolated seniors.",
    image: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Literacy Tutor",
    organization: "LIFT Dallas",
    commitment: "3 hours/week",
    location: "Dallas, TX",
    description: "Help adults improve their reading and English language skills.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop"
  }
];

const impactAreas = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Health & Wellness",
    description: "Support healthcare initiatives and mental health programs"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Youth Development",
    description: "Mentor and empower the next generation of Dallas leaders"
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Housing Support",
    description: "Help families find and maintain stable housing"
  },
  {
    icon: <HandHeart className="w-8 h-8" />,
    title: "Food Security",
    description: "Fight hunger and ensure access to nutritious food"
  }
];

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Video Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-people-joining-in-a-circle-4904-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/80" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">
            Get <span className="italic text-amber-400">Involved</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of Dallas residents making a difference in their community. 
            Whether you volunteer, donate, or partner with us, your contribution matters.
          </p>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">Make an Impact</span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mt-4 mb-6">
              Ways to <span className="italic text-amber-600">Help</span>
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              There are many ways to contribute to the Dallas community. Find the opportunity that fits your skills and schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-stone-50 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-500 group">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 transition-colors">
                <Users className="w-10 h-10 text-amber-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-2xl text-stone-800 mb-4">Volunteer</h3>
              <p className="text-stone-600 mb-6">
                Give your time and skills to organizations making a difference. From a few hours to ongoing commitments.
              </p>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6">
                Find Opportunities
              </Button>
            </div>

            <div className="bg-stone-50 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-500 group">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 transition-colors">
                <DollarSign className="w-10 h-10 text-amber-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-2xl text-stone-800 mb-4">Donate</h3>
              <p className="text-stone-600 mb-6">
                Support community organizations financially. Every dollar helps provide essential services to those in need.
              </p>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6">
                Make a Donation
              </Button>
            </div>

            <div className="bg-stone-50 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-500 group">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 transition-colors">
                <Building2 className="w-10 h-10 text-amber-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-2xl text-stone-800 mb-4">Partner</h3>
              <p className="text-stone-600 mb-6">
                Businesses and organizations can partner with us to amplify their community impact.
              </p>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6">
                Become a Partner
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-medium tracking-wider uppercase text-sm">Focus Areas</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
              Where Your Help <span className="italic text-amber-400">Matters</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  {area.icon}
                </div>
                <h3 className="font-serif text-xl mb-2">{area.title}</h3>
                <p className="text-stone-400 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">Volunteer</span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mt-4 mb-6">
              Current <span className="italic text-amber-600">Opportunities</span>
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Browse open volunteer positions and find the perfect fit for your skills and interests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity) => (
              <div 
                key={opportunity.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 aspect-video md:aspect-auto overflow-hidden">
                    <img 
                      src={opportunity.image} 
                      alt={opportunity.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <h3 className="font-serif text-xl text-stone-800 mb-2">{opportunity.title}</h3>
                    <p className="text-amber-600 text-sm font-medium mb-3">{opportunity.organization}</p>
                    <p className="text-stone-600 text-sm mb-4">{opportunity.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-stone-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {opportunity.commitment}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {opportunity.location}
                      </span>
                    </div>
                    <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white rounded-full">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/resources">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-6">
                View All Opportunities <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits of Volunteering */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">Why Volunteer?</span>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mt-4 mb-6">
                The Benefits of <span className="italic text-amber-600">Giving Back</span>
              </h2>
              <div className="space-y-4">
                {[
                  "Make a tangible difference in your community",
                  "Develop new skills and gain valuable experience",
                  "Connect with like-minded individuals",
                  "Improve your mental health and well-being",
                  "Build your professional network",
                  "Create lasting memories and friendships"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop"
                alt="Volunteers working together"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-600 rounded-2xl p-6 shadow-xl text-white">
                <div className="font-serif text-4xl mb-1">1M+</div>
                <div className="text-amber-100">Volunteer Hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Partnership */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">For Businesses</span>
                <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mt-4 mb-6">
                  Corporate Partnership Program
                </h2>
                <p className="text-stone-600 mb-6">
                  Partner with the Dallas Community Resource Hub to make a meaningful impact while engaging your employees 
                  and strengthening your brand's community presence.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Custom volunteer programs for your team",
                    "Sponsorship opportunities at community events",
                    "Employee matching gift programs",
                    "Brand visibility across our network"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-stone-600">
                      <CheckCircle className="w-5 h-5 text-amber-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-6">
                  Learn More <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&auto=format&fit=crop"
                  alt="Corporate volunteers"
                  className="rounded-2xl"
                />
                <img 
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&auto=format&fit=crop"
                  alt="Team building"
                  className="rounded-2xl mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <Calendar className="w-12 h-12 text-white mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-amber-100 text-lg mb-10 max-w-2xl mx-auto">
            Join our community of volunteers and donors who are changing lives across Dallas every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-amber-600 hover:bg-stone-100 text-lg px-10 py-6 rounded-full">
              Start Volunteering
            </Button>
            <Link to="/events">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-amber-600 text-lg px-10 py-6 rounded-full bg-transparent">
                View Upcoming Events
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
