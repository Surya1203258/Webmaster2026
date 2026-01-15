import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Send, 
  CheckCircle,
  Building2,
  FileText,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Tag,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { categoryLabels, ResourceCategory } from '../data/resources';

interface FormData {
  organizationName: string;
  category: ResourceCategory | '';
  description: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  hours: string;
  services: string;
  contactName: string;
  contactEmail: string;
}

export default function SubmitPage() {
  const [formData, setFormData] = useState<FormData>({
    organizationName: '',
    category: '',
    description: '',
    address: '',
    phone: '',
    email: '',
    website: '',
    hours: '',
    services: '',
    contactName: '',
    contactEmail: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const categories = Object.keys(categoryLabels) as ResourceCategory[];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-stone-50 pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="font-serif text-4xl text-stone-800 mb-4">Thank You!</h1>
          <p className="text-stone-600 text-lg mb-8">
            Your resource submission has been received. Our team will review it and add it to our directory within 5-7 business days.
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-md mb-8">
            <h2 className="font-serif text-xl text-stone-800 mb-4">Submission Summary</h2>
            <div className="text-left space-y-3 text-stone-600">
              <p><strong>Organization:</strong> {formData.organizationName}</p>
              <p><strong>Category:</strong> {formData.category && categoryLabels[formData.category]}</p>
              <p><strong>Contact:</strong> {formData.contactName} ({formData.contactEmail})</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/resources">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-6">
                Browse Resources
              </Button>
            </Link>
            <Button 
              variant="outline"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  organizationName: '',
                  category: '',
                  description: '',
                  address: '',
                  phone: '',
                  email: '',
                  website: '',
                  hours: '',
                  services: '',
                  contactName: '',
                  contactEmail: ''
                });
                setCurrentStep(1);
              }}
              className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white rounded-full px-8 py-6"
            >
              Submit Another
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-stone-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920&auto=format&fit=crop')`
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-6">
            Submit a <span className="italic text-amber-400">Resource</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto">
            Help us grow our directory by sharing organizations and services that benefit the Dallas community.
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {[
              { step: 1, label: "Organization Info" },
              { step: 2, label: "Contact Details" },
              { step: 3, label: "Review & Submit" }
            ].map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div className={`flex items-center ${index > 0 ? 'flex-1' : ''}`}>
                  {index > 0 && (
                    <div className={`h-1 w-16 md:w-24 ${currentStep > index ? 'bg-amber-600' : 'bg-stone-200'}`} />
                  )}
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                      currentStep >= item.step 
                        ? 'bg-amber-600 text-white' 
                        : 'bg-stone-200 text-stone-500'
                    }`}
                  >
                    {currentStep > item.step ? <CheckCircle className="w-5 h-5" /> : item.step}
                  </div>
                </div>
                <span className={`ml-2 text-sm hidden md:block ${currentStep >= item.step ? 'text-stone-800' : 'text-stone-400'}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Organization Info */}
            {currentStep === 1 && (
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="font-serif text-2xl text-stone-800 mb-6">Organization Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="flex items-center gap-2 text-stone-700 font-medium mb-2">
                      <Building2 className="w-5 h-5 text-amber-600" />
                      Organization Name *
                    </label>
                    <Input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      required
                      placeholder="Enter organization name"
                      className="py-6 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-stone-700 font-medium mb-2">
                      <Tag className="w-5 h-5 text-amber-600" />
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-amber-500"
                    >
                      <option value="">Select a category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{categoryLabels[cat]}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-stone-700 font-medium mb-2">
                      <FileText className="w-5 h-5 text-amber-600" />
                      Description *
                    </label>
                    <Textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      placeholder="Describe the organization and its services..."
                      className="min-h-32 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-stone-700 font-medium mb-2">
                      <FileText className="w-5 h-5 text-amber-600" />
                      Services Offered
                    </label>
                    <Textarea
                      name="services"
                      value={formData.services}
                      onChange={handleChange}
                      placeholder="List the main services (one per line)..."
                      className="min-h-24 rounded-xl"
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <Button 
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    disabled={!formData.organizationName || !formData.category || !formData.description}
                    className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-6"
                  >
                    Continue <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Contact Details */}
            {currentStep === 2 && (
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="font-serif text-2xl text-stone-800 mb-6">Contact Details</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="flex items-center gap-2 text-stone-700 font-medium mb-2">
                      <MapPin className="w-5 h-5 text-amber-600" />
                      Address *
                    </label>
                    <Input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      placeholder="Street address, City, State ZIP"
                      className="py-6 rounded-xl"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-stone-700 font-medium mb-2">
                        <Phone className="w-5 h-5 text-amber-600" />
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(XXX) XXX-XXXX"
                        className="py-6 rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-stone-700 font-medium mb-2">
                        <Mail className="w-5 h-5 text-amber-600" />
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="contact@organization.org"
                        className="py-6 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-stone-700 font-medium mb-2">
                        <Globe className="w-5 h-5 text-amber-600" />
                        Website
                      </label>
                      <Input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://www.example.org"
                        className="py-6 rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-stone-700 font-medium mb-2">
                        <Clock className="w-5 h-5 text-amber-600" />
                        Hours of Operation
                      </label>
                      <Input
                        type="text"
                        name="hours"
                        value={formData.hours}
                        onChange={handleChange}
                        placeholder="Mon-Fri 9AM-5PM"
                        className="py-6 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="border-t pt-6 mt-6">
                    <h3 className="font-medium text-stone-800 mb-4">Your Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-stone-700 font-medium mb-2 block">Your Name *</label>
                        <Input
                          type="text"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="py-6 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="text-stone-700 font-medium mb-2 block">Your Email *</label>
                        <Input
                          type="email"
                          name="contactEmail"
                          value={formData.contactEmail}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="py-6 rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(1)}
                    className="border-2 border-stone-300 text-stone-600 hover:bg-stone-100 rounded-full px-8 py-6"
                  >
                    Back
                  </Button>
                  <Button 
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    disabled={!formData.address || !formData.phone || !formData.email || !formData.contactName || !formData.contactEmail}
                    className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-6"
                  >
                    Review Submission <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Review & Submit */}
            {currentStep === 3 && (
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="font-serif text-2xl text-stone-800 mb-6">Review Your Submission</h2>
                
                <div className="space-y-6">
                  <div className="bg-stone-50 rounded-2xl p-6">
                    <h3 className="font-medium text-stone-800 mb-4 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-amber-600" />
                      Organization Information
                    </h3>
                    <div className="space-y-2 text-stone-600">
                      <p><strong>Name:</strong> {formData.organizationName}</p>
                      <p><strong>Category:</strong> {formData.category && categoryLabels[formData.category]}</p>
                      <p><strong>Description:</strong> {formData.description}</p>
                      {formData.services && <p><strong>Services:</strong> {formData.services}</p>}
                    </div>
                  </div>

                  <div className="bg-stone-50 rounded-2xl p-6">
                    <h3 className="font-medium text-stone-800 mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-amber-600" />
                      Contact Details
                    </h3>
                    <div className="space-y-2 text-stone-600">
                      <p><strong>Address:</strong> {formData.address}</p>
                      <p><strong>Phone:</strong> {formData.phone}</p>
                      <p><strong>Email:</strong> {formData.email}</p>
                      {formData.website && <p><strong>Website:</strong> {formData.website}</p>}
                      {formData.hours && <p><strong>Hours:</strong> {formData.hours}</p>}
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-2xl p-6">
                    <h3 className="font-medium text-stone-800 mb-4">Submitter Information</h3>
                    <div className="space-y-2 text-stone-600">
                      <p><strong>Name:</strong> {formData.contactName}</p>
                      <p><strong>Email:</strong> {formData.contactEmail}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(2)}
                    className="border-2 border-stone-300 text-stone-600 hover:bg-stone-100 rounded-full px-8 py-6"
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-6"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Resource
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-2xl text-stone-800 mb-6 text-center">Submission Guidelines</h2>
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <ul className="space-y-4 text-stone-600">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Resources must serve the Dallas-Fort Worth community</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Organizations should be non-profit or provide free/low-cost services</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>All information must be accurate and up-to-date</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Submissions are reviewed within 5-7 business days</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>We reserve the right to edit submissions for clarity</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
