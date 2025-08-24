import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Monitor, 
  Database, 
  Settings, 
  CheckCircle, 
  Clock,
  Users,
  Award,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import LeadForm from '../components/LeadForm';

const ServicePage: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();

  const serviceData = {
    'website-development': {
      icon: Code,
      title: 'Website Development',
      subtitle: 'Custom Websites That Drive Results',
      description: 'Create stunning, responsive websites that engage your audience and drive conversions. From simple landing pages to complex web applications, we deliver solutions that exceed expectations.',
      features: [
        'Responsive Design',
        'SEO Optimized',
        'Fast Loading Speed',
        'Content Management',
        'E-commerce Integration',
        'Analytics & Tracking'
      ],
      process: [
        { title: 'Discovery', description: 'Understanding your goals and requirements' },
        { title: 'Design', description: 'Creating wireframes and visual designs' },
        { title: 'Development', description: 'Building with modern technologies' },
        { title: 'Testing', description: 'Quality assurance and optimization' },
        { title: 'Launch', description: 'Deployment and ongoing support' }
      ],
      technologies: ['React', 'Node.js', 'WordPress', 'Shopify', 'Next.js'],
      timeline: '2-8 weeks',
      startingPrice: '9,999 onwards'
    },
    'app-development': {
      icon: Smartphone,
      title: 'App Development',
      subtitle: 'Native & Cross-Platform Mobile Apps',
      description: 'Build powerful mobile applications that provide exceptional user experiences across iOS and Android platforms. From concept to app store deployment.',
      features: [
        'Native iOS & Android',
        'Cross-Platform Solutions',
        'UI/UX Design',
        'API Integration',
        'Push Notifications',
        'App Store Optimization'
      ],
      process: [
        { title: 'Strategy', description: 'Defining app concept and features' },
        { title: 'Prototype', description: 'Creating interactive mockups' },
        { title: 'Development', description: 'Building native or cross-platform' },
        { title: 'Testing', description: 'Beta testing and optimization' },
        { title: 'Deployment', description: 'App store submission and launch' }
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      timeline: '3-12 weeks',
      startingPrice: '14,999 onwards'
    },
    'pc-assembling': {
      icon: Monitor,
      title: 'PC Assembling',
      subtitle: 'Custom High-Performance PC Builds',
      description: 'Professional PC building services for gaming, workstation, and server requirements. We select the best components and ensure optimal performance.',
      features: [
        'Custom Component Selection',
        'Performance Optimization',
        'Cable Management',
        'Stress Testing',
        'Warranty Support',
        'Setup & Configuration'
      ],
      process: [
        { title: 'Consultation', description: 'Understanding your requirements' },
        { title: 'Design', description: 'Component selection and compatibility' },
        { title: 'Assembly', description: 'Professional building and testing' },
        { title: 'Optimization', description: 'Performance tuning and benchmarks' },
        { title: 'Delivery', description: 'Setup and training at your location' }
      ],
      technologies: ['Intel', 'AMD', 'NVIDIA', 'ASUS', 'MSI'],
      timeline: '1-2 weeks',
      startingPrice: '20000 onwards'
    },
    'crm': {
      icon: Database,
      title: 'CRM Solutions',
      subtitle: 'Streamline Customer Relationships',
      description: 'Implement powerful CRM systems that help you manage customer relationships, automate sales processes, and boost revenue growth.',
      features: [
        'Contact Management',
        'Sales Pipeline',
        'Marketing Automation',
        'Analytics & Reports',
        'Integration Capabilities',
        'Mobile Access'
      ],
      process: [
        { title: 'Assessment', description: 'Analyzing current processes' },
        { title: 'Planning', description: 'CRM strategy and customization' },
        { title: 'Implementation', description: 'Setup and configuration' },
        { title: 'Training', description: 'Team onboarding and support' },
        { title: 'Optimization', description: 'Ongoing improvements and updates' }
      ],
      technologies: ['Salesforce', 'HubSpot', 'Zoho', 'Pipedrive', 'Custom'],
      timeline: '2-6 weeks',
      startingPrice: '9,499'
    },
    'custom-software-development': {
      icon: Settings,
      title: 'Custom Software Development',
      subtitle: 'Tailored Solutions for Your Business',
      description: 'Develop bespoke software applications that address your unique business challenges and requirements. From enterprise systems to specialized tools.',
      features: [
        'Requirements Analysis',
        'Custom Architecture',
        'Scalable Solutions',
        'Integration Services',
        'Maintenance & Support',
        'Documentation'
      ],
      process: [
        { title: 'Analysis', description: 'Understanding business requirements' },
        { title: 'Architecture', description: 'Designing system structure' },
        { title: 'Development', description: 'Agile development methodology' },
        { title: 'Testing', description: 'Comprehensive QA and user testing' },
        { title: 'Deployment', description: 'Go-live support and monitoring' }
      ],
      technologies: ['Python', 'Java', '.NET', 'React', 'Node.js'],
      timeline: '4-16 weeks',
      startingPrice: '9,999'
    },
    'digital-marketing': {
    icon: TrendingUp,
    title: 'Digital Marketing Excellence',
    subtitle: 'Smart Strategies. Real Results.',
    description: 'Unlock the power of digital with our end-to-end marketing solutions designed to amplify your brand, boost visibility, and accelerate growth. From SEO that drives traffic to social media campaigns that spark conversations, we blend creativity with data-driven insights to deliver measurable ROI.',
    features: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click (PPC) Advertising',
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing Campaigns',
      'Analytics & Performance Tracking'
    ],
    process: [
      { title: 'Strategy', description: 'Analyzing your market and creating a comprehensive marketing plan' },
      { title: 'Campaign Setup', description: 'Setting up tracking, campaigns, and content calendars' },
      { title: 'Implementation', description: 'Executing campaigns across multiple channels' },
      { title: 'Optimization', description: 'Continuous monitoring and performance optimization' },
      { title: 'Reporting', description: 'Regular reports and strategy refinements' }
    ],
    technologies: ['Google Ads', 'Facebook Ads', 'Google Analytics', 'SEMrush', 'Mailchimp'],
    timeline: '2-4 weeks setup, ongoing campaigns',
    startingPrice: '1,999 onwards'
  }
  };

  const service = serviceData[serviceSlug as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600">The requested service could not be found.</p>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="hexagon mb-6">
                <ServiceIcon className="hexagon-icon w-12 h-12" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {service.title}
              </h1>
              <h2 className="text-2xl text-purple-600 font-semibold mb-6">
                {service.subtitle}
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center sm:text-left">
                  <Clock className="w-8 h-8 text-purple-600 mb-2 mx-auto sm:mx-0" />
                  <div className="text-sm text-gray-500 mb-1">Timeline</div>
                  <div className="font-semibold text-gray-900">{service.timeline}</div>
                </div>
                <div className="text-center sm:text-left">
                  <Users className="w-8 h-8 text-purple-600 mb-2 mx-auto sm:mx-0" />
                  <div className="text-sm text-gray-500 mb-1">Starting at</div>
                  <div className="font-semibold text-gray-900">{service.startingPrice}</div>
                </div>
                <div className="text-center sm:text-left">
                  <Award className="w-8 h-8 text-purple-600 mb-2 mx-auto sm:mx-0" />
                  <div className="text-sm text-gray-500 mb-1">Guarantee</div>
                  <div className="font-semibold text-gray-900">100% Satisfaction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <LeadForm 
                service={service.title}
                title="Get Your Free Quote"
                className="sticky top-24"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Included</h2>
            <p className="text-xl text-gray-600">Everything you need for a successful project</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="font-medium text-gray-900">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we deliver exceptional results</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <span className="text-2xl font-bold gradient-text">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < service.process.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-purple-400 absolute top-6 -right-4 transform rotate-90 md:rotate-0 md:top-6 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600">Cutting-edge tools and frameworks</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-purple-100 text-purple-800 rounded-full font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your {service.title.toLowerCase()} project and create something amazing together.
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Schedule a Free Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;