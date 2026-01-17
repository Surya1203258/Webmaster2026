import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  Star,
  ExternalLink,
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  resources, 
  Resource, 
  ResourceCategory, 
  categoryLabels 
} from '../data/resources';

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
            <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span className="truncate">{resource.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>{resource.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span className="truncate">{resource.hours}</span>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-stone-100">
            <p className="text-stone-600 text-sm mb-4">{resource.longDescription}</p>
            <h4 className="font-medium text-stone-700 mb-2">Services Offered:</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {resource.services.map((service, idx) => (
                <span key={idx} className="bg-stone-100 text-stone-600 text-xs px-2 py-1 rounded">
                  {service}
                </span>
              ))}
            </div>
            <div className="space-y-2 text-sm">
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
                <ExternalLink className="w-4 h-4" />
                Visit Website
              </a>
            </div>
          </div>
        )}

        <Button
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mt-4 text-amber-600 hover:text-amber-700 hover:bg-amber-50"
        >
          {isExpanded ? 'Show Less' : 'View Details'}
        </Button>
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | 'all'>('all');

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categoryParam in categoryLabels) {
      setSelectedCategory(categoryParam as ResourceCategory);
    }
  }, [searchParams]);

  const handleCategoryChange = (category: ResourceCategory | 'all') => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = Object.keys(categoryLabels) as ResourceCategory[];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Video Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-people-walking-on-a-city-street-4394-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/80" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">
            Community <span className="italic text-amber-400">Resources</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Discover over 500 organizations dedicated to serving the Dallas community. 
            Search, filter, and connect with the resources you need.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
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
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-stone-400" />
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value as ResourceCategory | 'all')}
                className="px-6 py-3 rounded-xl border border-stone-200 text-stone-600 focus:border-amber-500 focus:ring-amber-500 bg-white min-w-[200px]"
              >
                <option value="all">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{categoryLabels[cat]}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-stone-500">
              Showing {filteredResources.length} of {resources.length} resources
            </span>
            {selectedCategory !== 'all' && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCategoryChange('all')}
                className="text-amber-600 hover:text-amber-700"
              >
                Clear Filter
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-6 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex overflow-x-auto gap-3 pb-2 hide-scrollbar">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-stone-600 hover:bg-amber-50'
              }`}
            >
              All Resources
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-stone-600 hover:bg-amber-50'
                }`}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {filteredResources.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-stone-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="font-serif text-2xl text-stone-600 mb-2">No resources found</h3>
              <p className="text-stone-500 mb-6">Try adjusting your search or filter criteria</p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  handleCategoryChange('all');
                }}
                className="bg-amber-600 hover:bg-amber-700 text-white rounded-full"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Know a Resource We're Missing?
          </h2>
          <p className="text-stone-300 text-lg mb-8">
            Help us grow our directory by submitting organizations and services that should be included.
          </p>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-10 py-6 rounded-full">
            Submit a Resource
          </Button>
        </div>
      </section>
    </div>
  );
}
