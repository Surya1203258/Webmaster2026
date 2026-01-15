export interface Resource {
  id: string;
  name: string;
  category: ResourceCategory;
  description: string;
  longDescription?: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  image: string;
  services: string[];
  hours: string;
  featured?: boolean;
}

export type ResourceCategory = 
  | 'non-profit'
  | 'food-assistance'
  | 'housing'
  | 'healthcare'
  | 'education'
  | 'youth-programs'
  | 'senior-services'
  | 'employment'
  | 'mental-health'
  | 'community-events';

export const categoryLabels: Record<ResourceCategory, string> = {
  'non-profit': 'Non-Profit Organizations',
  'food-assistance': 'Food Assistance',
  'housing': 'Housing & Shelter',
  'healthcare': 'Healthcare Services',
  'education': 'Education & Training',
  'youth-programs': 'Youth Programs',
  'senior-services': 'Senior Services',
  'employment': 'Employment Services',
  'mental-health': 'Mental Health',
  'community-events': 'Community Events'
};

export const categoryIcons: Record<ResourceCategory, string> = {
  'non-profit': 'Heart',
  'food-assistance': 'UtensilsCrossed',
  'housing': 'Home',
  'healthcare': 'Stethoscope',
  'education': 'GraduationCap',
  'youth-programs': 'Users',
  'senior-services': 'UserCheck',
  'employment': 'Briefcase',
  'mental-health': 'Brain',
  'community-events': 'Calendar'
};

export const resources: Resource[] = [
  {
    id: '1',
    name: 'North Texas Food Bank',
    category: 'food-assistance',
    description: 'Providing access to nutritious food for hungry children, seniors, and families across North Texas.',
    longDescription: 'The North Texas Food Bank (NTFB) is a top-ranked nonprofit relief organization and the largest hunger-relief charity in North Texas. NTFB provides access to more than 190,000 meals each day for hungry children, seniors, and families through a network of more than 500 feeding programs across 13 North Texas counties.',
    address: '3677 Mapleshade Ln, Plano, TX 75075',
    phone: '(214) 330-1396',
    email: 'info@ntfb.org',
    website: 'https://ntfb.org',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop',
    services: ['Food Distribution', 'Mobile Pantry', 'School Pantry Program', 'Senior Programs'],
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
    featured: true
  },
  {
    id: '2',
    name: 'The Bridge Homeless Recovery Center',
    category: 'housing',
    description: 'Comprehensive homeless recovery services including shelter, case management, and employment assistance.',
    longDescription: 'The Bridge Homeless Recovery Center is a state-of-the-art facility that provides comprehensive services to help homeless individuals transition from the streets to self-sufficiency. Services include emergency shelter, transitional housing, case management, employment services, and healthcare.',
    address: '1818 Corsicana St, Dallas, TX 75201',
    phone: '(214) 670-1100',
    email: 'info@bridgenorthtexas.org',
    website: 'https://bridgenorthtexas.org',
    image: 'https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?w=800&auto=format&fit=crop',
    services: ['Emergency Shelter', 'Transitional Housing', 'Job Training', 'Healthcare Services'],
    hours: '24/7 Services Available',
    featured: true
  },
  {
    id: '3',
    name: 'Parkland Health',
    category: 'healthcare',
    description: 'Dallas County\'s public hospital providing quality healthcare to all residents regardless of ability to pay.',
    longDescription: 'Parkland Health is one of the largest public hospital systems in the country, providing comprehensive healthcare services to Dallas County residents. With a mission to provide quality healthcare regardless of ability to pay, Parkland serves as a safety net for the community.',
    address: '5200 Harry Hines Blvd, Dallas, TX 75235',
    phone: '(214) 590-8000',
    email: 'info@phhs.org',
    website: 'https://www.parklandhealth.org',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop',
    services: ['Emergency Care', 'Primary Care', 'Specialty Clinics', 'Community Health Centers'],
    hours: 'Emergency: 24/7 | Clinics: Mon-Fri 8AM-5PM',
    featured: true
  },
  {
    id: '4',
    name: 'Dallas Public Library',
    category: 'education',
    description: 'Free educational resources, programs, and services for all Dallas residents.',
    longDescription: 'The Dallas Public Library system consists of 29 locations throughout Dallas, providing free access to books, digital resources, educational programs, and community services. The library offers literacy programs, computer classes, homework help, and cultural events.',
    address: '1515 Young St, Dallas, TX 75201',
    phone: '(214) 670-1400',
    email: 'library@dallascityhall.com',
    website: 'https://dallaslibrary.org',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop',
    services: ['Book Lending', 'Digital Resources', 'Computer Access', 'Educational Programs'],
    hours: 'Mon-Thu: 10AM-9PM | Fri-Sat: 10AM-5PM | Sun: 1PM-5PM'
  },
  {
    id: '5',
    name: 'Big Brothers Big Sisters Lone Star',
    category: 'youth-programs',
    description: 'Mentoring programs that ignite the power and promise of young people in North Texas.',
    longDescription: 'Big Brothers Big Sisters Lone Star creates and supports one-to-one mentoring relationships that ignite the power and promise of young people. Through evidence-based mentoring programs, they help children realize their potential and build their futures.',
    address: '930 W Commerce St, Dallas, TX 75208',
    phone: '(214) 744-2447',
    email: 'info@bbbstx.org',
    website: 'https://bbbstx.org',
    image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&auto=format&fit=crop',
    services: ['One-to-One Mentoring', 'School-Based Programs', 'Workplace Mentoring', 'Community Programs'],
    hours: 'Mon-Fri: 9:00 AM - 5:00 PM'
  },
  {
    id: '6',
    name: 'Senior Source',
    category: 'senior-services',
    description: 'Comprehensive services helping seniors live independently with dignity and purpose.',
    longDescription: 'The Senior Source is a nonprofit organization dedicated to helping seniors live independently with dignity and purpose. They provide a wide range of services including care management, employment assistance, benefits counseling, and caregiver support.',
    address: '3910 Harry Hines Blvd, Dallas, TX 75219',
    phone: '(214) 823-5700',
    email: 'info@theseniorsource.org',
    website: 'https://theseniorsource.org',
    image: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=800&auto=format&fit=crop',
    services: ['Care Management', 'Employment Services', 'Benefits Counseling', 'Caregiver Support'],
    hours: 'Mon-Fri: 8:30 AM - 5:00 PM'
  },
  {
    id: '7',
    name: 'Workforce Solutions Greater Dallas',
    category: 'employment',
    description: 'Free employment services connecting job seekers with employers throughout the Dallas region.',
    longDescription: 'Workforce Solutions Greater Dallas provides free employment services to job seekers and employers throughout the Dallas region. Services include job search assistance, resume writing, interview preparation, skills training, and job placement.',
    address: '1201 Main St, Dallas, TX 75202',
    phone: '(214) 290-1000',
    email: 'info@wfsdallas.com',
    website: 'https://www.wfsdallas.com',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop',
    services: ['Job Search Assistance', 'Resume Writing', 'Skills Training', 'Career Counseling'],
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM'
  },
  {
    id: '8',
    name: 'Metrocare Services',
    category: 'mental-health',
    description: 'Comprehensive mental health and developmental disability services for Dallas County residents.',
    longDescription: 'Metrocare Services is the largest provider of mental health services in North Texas, serving Dallas County residents with mental illness and developmental disabilities. They offer a full continuum of care including crisis services, outpatient treatment, and community support.',
    address: '1380 River Bend Dr, Dallas, TX 75247',
    phone: '(214) 743-1200',
    email: 'info@metrocareservices.org',
    website: 'https://www.metrocareservices.org',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop',
    services: ['Crisis Services', 'Outpatient Treatment', 'Community Support', 'Substance Abuse Treatment'],
    hours: 'Crisis Line: 24/7 | Office: Mon-Fri 8AM-5PM'
  },
  {
    id: '9',
    name: 'Dallas Area Habitat for Humanity',
    category: 'housing',
    description: 'Building affordable homes and providing homeownership opportunities for Dallas families.',
    longDescription: 'Dallas Area Habitat for Humanity partners with families and communities to build affordable homes and provide pathways to homeownership. Through volunteer labor and donations, they help families achieve the strength, stability, and self-reliance they need.',
    address: '2800 N Hampton Rd, Dallas, TX 75212',
    phone: '(214) 678-2300',
    email: 'info@dallashabitat.org',
    website: 'https://dallasareahabitat.org',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop',
    services: ['Home Construction', 'Home Repairs', 'Homeownership Programs', 'ReStore'],
    hours: 'Mon-Fri: 8:30 AM - 5:00 PM'
  },
  {
    id: '10',
    name: 'United Way of Metropolitan Dallas',
    category: 'non-profit',
    description: 'Mobilizing the caring power of the community to improve lives and strengthen neighborhoods.',
    longDescription: 'United Way of Metropolitan Dallas mobilizes the caring power of the community to improve lives and strengthen neighborhoods. They focus on education, income, and health initiatives that create lasting change for individuals and families.',
    address: '1800 N Lamar St, Dallas, TX 75202',
    phone: '(214) 978-0000',
    email: 'info@unitedwaydallas.org',
    website: 'https://unitedwaydallas.org',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop',
    services: ['211 Helpline', 'Community Investment', 'Volunteer Programs', 'Emergency Assistance'],
    hours: '211 Helpline: 24/7 | Office: Mon-Fri 8AM-5PM'
  },
  {
    id: '11',
    name: 'Feeding Hope Dallas',
    category: 'food-assistance',
    description: 'Community-based food pantry serving families in need throughout Dallas neighborhoods.',
    longDescription: 'Feeding Hope Dallas operates community food pantries throughout Dallas, providing nutritious food to families in need. They work with local partners to ensure no family goes hungry and offer nutrition education programs.',
    address: '2929 Hickory St, Dallas, TX 75226',
    phone: '(214) 555-0123',
    email: 'info@feedinghopedallas.org',
    website: 'https://feedinghopedallas.org',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop',
    services: ['Food Pantry', 'Mobile Food Distribution', 'Nutrition Education', 'Holiday Meals'],
    hours: 'Tue-Sat: 9:00 AM - 4:00 PM'
  },
  {
    id: '12',
    name: 'Dallas Youth Services',
    category: 'youth-programs',
    description: 'After-school programs, summer camps, and youth development services for Dallas children.',
    longDescription: 'Dallas Youth Services provides comprehensive youth development programs including after-school tutoring, summer camps, sports leagues, and leadership development. They serve children and teens throughout Dallas neighborhoods.',
    address: '1500 Marilla St, Dallas, TX 75201',
    phone: '(214) 670-3600',
    email: 'youth@dallascityhall.com',
    website: 'https://dallasyouthservices.org',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop',
    services: ['After-School Programs', 'Summer Camps', 'Sports Leagues', 'Leadership Development'],
    hours: 'Mon-Fri: 3:00 PM - 8:00 PM | Sat: 9:00 AM - 5:00 PM'
  },
  {
    id: '13',
    name: 'Dallas Community Health Center',
    category: 'healthcare',
    description: 'Affordable primary care and preventive health services for underserved communities.',
    longDescription: 'Dallas Community Health Center provides affordable, quality healthcare to underserved communities. Services include primary care, dental care, behavioral health, and preventive services on a sliding fee scale.',
    address: '4500 Spring Ave, Dallas, TX 75210',
    phone: '(214) 555-0456',
    email: 'info@dallascommunityhc.org',
    website: 'https://dallascommunityhc.org',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&auto=format&fit=crop',
    services: ['Primary Care', 'Dental Services', 'Behavioral Health', 'Preventive Care'],
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 1:00 PM'
  },
  {
    id: '14',
    name: 'Dallas Arts District Foundation',
    category: 'community-events',
    description: 'Cultural programming and community events in the largest urban arts district in the nation.',
    longDescription: 'The Dallas Arts District Foundation supports cultural programming and community events in the largest contiguous urban arts district in the nation. They host free concerts, art exhibitions, and family-friendly events throughout the year.',
    address: '2100 Ross Ave, Dallas, TX 75201',
    phone: '(214) 953-1977',
    email: 'info@dallasartsdistrict.org',
    website: 'https://dallasartsdistrict.org',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop',
    services: ['Free Concerts', 'Art Exhibitions', 'Family Events', 'Cultural Programs'],
    hours: 'Events vary - check website for schedule'
  },
  {
    id: '15',
    name: 'Genesis Womens Shelter',
    category: 'housing',
    description: 'Safe shelter and comprehensive services for women and children fleeing domestic violence.',
    longDescription: 'Genesis Womens Shelter provides safe shelter and comprehensive services for women and children fleeing domestic violence. Services include emergency shelter, counseling, legal advocacy, and transitional housing programs.',
    address: 'Confidential Location, Dallas, TX',
    phone: '(214) 946-4357',
    email: 'info@genesisshelter.org',
    website: 'https://genesisshelter.org',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&auto=format&fit=crop',
    services: ['Emergency Shelter', 'Counseling', 'Legal Advocacy', 'Transitional Housing'],
    hours: 'Crisis Line: 24/7'
  },
  {
    id: '16',
    name: 'Literacy Instruction for Texas (LIFT)',
    category: 'education',
    description: 'Adult literacy programs helping Dallas residents improve reading and English skills.',
    longDescription: 'LIFT provides adult literacy programs to help Dallas residents improve their reading, writing, and English language skills. Programs include one-on-one tutoring, small group classes, and workplace literacy training.',
    address: '3000 Pegasus Park Dr, Dallas, TX 75247',
    phone: '(214) 520-0550',
    email: 'info@lift-texas.org',
    website: 'https://lift-texas.org',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop',
    services: ['Adult Literacy', 'ESL Classes', 'GED Preparation', 'Workplace Literacy'],
    hours: 'Mon-Thu: 9:00 AM - 8:00 PM | Fri: 9:00 AM - 5:00 PM'
  }
];

export const upcomingEvents = [
  {
    id: '1',
    title: 'Dallas Community Resource Fair',
    date: 'February 15, 2026',
    time: '10:00 AM - 4:00 PM',
    location: 'Fair Park, Dallas',
    description: 'Connect with over 100 community organizations offering resources and services.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Volunteer Dallas Day',
    date: 'March 8, 2026',
    time: '8:00 AM - 2:00 PM',
    location: 'Various Locations',
    description: 'Join thousands of volunteers making a difference across Dallas neighborhoods.',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Family Health & Wellness Expo',
    date: 'April 12, 2026',
    time: '9:00 AM - 3:00 PM',
    location: 'Kay Bailey Hutchison Convention Center',
    description: 'Free health screenings, fitness activities, and wellness resources for families.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Dallas Youth Leadership Summit',
    date: 'May 20, 2026',
    time: '9:00 AM - 5:00 PM',
    location: 'Dallas City Hall',
    description: 'Empowering young leaders to make a positive impact in their communities.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop'
  }
];

export const impactStats = [
  { label: 'Community Resources', value: '500+' },
  { label: 'Families Served Annually', value: '250K+' },
  { label: 'Volunteer Hours', value: '1M+' },
  { label: 'Partner Organizations', value: '200+' }
];
