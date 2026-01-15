import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users,
  ArrowRight,
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { upcomingEvents } from '../data/resources';

const additionalEvents = [
  {
    id: 5,
    title: "Senior Wellness Workshop",
    date: "June 5, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Senior Source Center",
    description: "Free health screenings, exercise demonstrations, and nutrition education for seniors.",
    image: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=800&auto=format&fit=crop",
    category: "Health & Wellness"
  },
  {
    id: 6,
    title: "Job Fair & Career Expo",
    date: "June 20, 2026",
    time: "9:00 AM - 4:00 PM",
    location: "Dallas Convention Center",
    description: "Connect with over 200 employers offering positions across various industries.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop",
    category: "Employment"
  },
  {
    id: 7,
    title: "Back to School Supply Drive",
    date: "July 25, 2026",
    time: "8:00 AM - 2:00 PM",
    location: "Various Dallas Schools",
    description: "Help us distribute school supplies to students in need across Dallas ISD.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop",
    category: "Education"
  },
  {
    id: 8,
    title: "Mental Health Awareness Walk",
    date: "August 15, 2026",
    time: "7:00 AM - 11:00 AM",
    location: "White Rock Lake",
    description: "Join us for a 5K walk to raise awareness and reduce stigma around mental health.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop",
    category: "Health & Wellness"
  }
];

const allEvents = [...upcomingEvents, ...additionalEvents];

const eventCategories = ["All Events", "Health & Wellness", "Community", "Education", "Employment", "Youth"];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Events");

  const filteredEvents = selectedCategory === "All Events" 
    ? allEvents 
    : allEvents.filter(event => 'category' in event && event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Video Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-crowd-of-people-at-a-street-food-market-4696-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/80" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">
            Community <span className="italic text-amber-400">Events</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Join us at events designed to connect, educate, and empower Dallas residents. 
            From resource fairs to volunteer opportunities, there's something for everyone.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 hide-scrollbar">
            <Filter className="w-5 h-5 text-stone-400 flex-shrink-0" />
            {eventCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-amber-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">Don't Miss</span>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mt-4">
              Featured Event
            </h2>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop"
                  alt="Dallas Community Resource Fair"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-amber-600 text-sm font-medium mb-4">
                  <Calendar className="w-5 h-5" />
                  February 15, 2026
                </div>
                <h3 className="font-serif text-3xl text-stone-800 mb-4">Dallas Community Resource Fair</h3>
                <p className="text-stone-600 text-lg mb-6">
                  Connect with over 100 community organizations offering resources and services. 
                  Free admission, food, activities for kids, and valuable information for the whole family.
                </p>
                <div className="flex flex-wrap gap-6 text-stone-500 mb-8">
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-600" />
                    10:00 AM - 4:00 PM
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-amber-600" />
                    Fair Park, Dallas
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-amber-600" />
                    5,000+ Expected Attendees
                  </span>
                </div>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-6 w-fit">
                  Register Now <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">Mark Your Calendar</span>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mt-4">
              Upcoming Events
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredEvents.map((event) => (
              <div 
                key={event.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
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
                    <p className="text-stone-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-stone-500">
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

      {/* Host an Event CTA */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            Want to Host a Community Event?
          </h2>
          <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
            Partner with us to organize events that make a difference in the Dallas community. 
            We can help with promotion, logistics, and connecting you with resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved">
              <Button className="bg-white text-amber-600 hover:bg-stone-100 text-lg px-10 py-6 rounded-full">
                Partner With Us
              </Button>
            </Link>
            <Link to="/submit">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-amber-600 text-lg px-10 py-6 rounded-full bg-transparent">
                Submit an Event
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <Calendar className="w-12 h-12 text-amber-400 mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Never Miss an Event
          </h2>
          <p className="text-stone-300 text-lg mb-8">
            Subscribe to our newsletter and get event updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-stone-800 border border-stone-700 text-white placeholder-stone-400 focus:border-amber-500 focus:outline-none"
            />
            <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-4">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
