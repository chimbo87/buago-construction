import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Droplets, Award } from 'lucide-react';

const QuickContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    serviceType: '',
    urgency: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const serviceTypes = [
    'Borehole Drilling',
    'Water Source Location',
    'Pump Installation',
    'Borehole Maintenance',
    'Water Quality Testing',
    'Emergency Water Supply'
  ];

  const urgencyLevels = [
    'Standard (1-2 weeks)',
    'Priority (3-7 days)',
    'Emergency (24-48 hours)'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          serviceType: '',
          urgency: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (showSuccess) {
    return (
      <section className="py-12 bg-gradient-to-br from-emerald-50 to-sky-50">
        <div className="max-w-3xl mx-auto px-3">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Thank You for Your Inquiry!
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              We've received your request and our team will contact you within 24 hours 
              to discuss your borehole drilling needs.
            </p>
            <div className="bg-emerald-50 rounded-md p-3">
              <p className="text-emerald-700 text-xs font-medium">
                📞 For urgent matters, call us directly at: <strong>+263 77 295 1768</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gradient-to-br from-emerald-50 to-sky-50">
      <div className="max-w-5xl mx-auto px-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Column - Info */}
          <div>
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <Droplets className="w-6 h-6 text-emerald-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Get Your Free Quote
                </h2>
              </div>
              <p className="text-base text-gray-600 mb-4">
                Ready to secure reliable water access? Our experts are standing by to 
                assess your needs and provide a comprehensive drilling solution.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-emerald-600 rounded-full p-2 mr-3">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">Call Us Direct</h4>
                  <p className="text-gray-600 text-xs">+263 77 295 1768</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-sky-600 rounded-full p-2 mr-3">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">Email Us</h4>
                  <p className="text-gray-600 text-xs">info@dolphinesborehole.co.zw</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-amber-600 rounded-full p-2 mr-3">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">Service Areas</h4>
                  <p className="text-gray-600 text-xs">Harare, Marondera,Rusape & Wedza</p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-emerald-50 rounded-md p-4">
              <h4 className="font-semibold text-emerald-800 text-sm mb-1.5">Why Choose Us?</h4>
              <ul className="text-xs text-emerald-700 space-y-1">
                <li>✓ 10+ years of proven experience</li>
                <li>✓ Advanced geological surveying technology</li>
                <li>✓ 95% success rate in water location</li>
                <li>✓ Full maintenance and support services</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Full Name 
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Phone Number 
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+263 XX XXX XXXX"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Email Address 
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Project Location 
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm ${
                    errors.location ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="City, Province or GPS coordinates"
                />
                {errors.location && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.location}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Service Required 
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm ${
                      errors.serviceType ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a service</option>
                    {serviceTypes.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.serviceType && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.serviceType}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Timeline
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm"
                  >
                    <option value="">Select timeline</option>
                    {urgencyLevels.map((level) => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm resize-none"
                  placeholder="Tell us about your water needs, property size, current water situation, or any specific requirements..."
                />
              </div>

              <div className="bg-sky-50 rounded-md p-3">
                <p className="text-sky-800 text-xs">
                  <strong>💡 Pro Tip:</strong> Include details about your property size, current water source (if any), 
                  and intended water usage to help us provide the most accurate quote.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                onClick={handleSubmit}
                className={`w-full py-2.5 px-4 rounded-md font-semibold text-white transition-all duration-200 flex items-center justify-center text-sm ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-emerald-600 hover:bg-emerald-700 hover:shadow-md transform hover:-translate-y-0.5'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending Request...
                  </>
                ) : (
                  <>
                    Get My Free Quote
                    <Send className="w-4 h-4 ml-1.5" />
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to be contacted by our team regarding your inquiry. 
                We respect your privacy and never share your information.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Why Thousands Choose Our Drilling Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-semibold text-gray-800 text-sm mb-1.5">Guaranteed Results</h4>
                <p className="text-xs text-gray-600">98% success rate with money-back guarantee</p>
              </div>
              
              <div className="text-center">
                <div className="bg-sky-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-sky-600" />
                </div>
                <h4 className="font-semibold text-gray-800 text-sm mb-1.5">24/7 Support</h4>
                <p className="text-xs text-gray-600">Emergency response and ongoing maintenance</p>
              </div>
              
              <div className="text-center">
                <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="font-semibold text-gray-800 text-sm mb-1.5">Licensed & Insured</h4>
                <p className="text-xs text-gray-600">Fully certified with comprehensive coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickContactForm;