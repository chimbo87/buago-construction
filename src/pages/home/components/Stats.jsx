import React, { useState, useEffect, useRef } from "react";
import { Users, Clock, Layers, HeadphonesIcon, Shield, Truck, Star, Home } from "lucide-react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    {
      id: 1,
      icon: Users,
      number: 2000,
      suffix: "+",
      label: "Happy Customers",
      duration: 2000
    },
    {
      id: 2,
      icon: Truck,
      number: 5000,
      suffix: "+",
      label: "Furniture Delivered",
      duration: 1800
    },
    {
      id: 3,
      icon: Home,
      number: 100,
      suffix: "+",
      label: "Collections",
      duration: 1500
    },
    {
      id: 4,
      icon: Shield,
      number: 5,
      suffix: " Year",
      label: "Warranty",
      duration: 1200
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section className="py-12 lg:py-16 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-4 left-4 w-20 h-20 bg-blue-600/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-4 right-4 w-24 h-24 bg-blue-600/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-600/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
            Bruno Furnitures <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text">Milestones</span>
          </h2>
          <p className="text-sm text-blue-100 max-w-xl mx-auto">
            Trusted by homeowners across Zimbabwe, delivering quality furniture with exceptional service and support.
          </p>
        </div>

        {/* Stats Grid */}
        <div 
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <StatCard 
              key={stat.id}
              stat={stat}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Individual Stat Card Component
const StatCard = ({ stat, isVisible }) => {
  const [count, setCount] = useState(0);
  const { icon: Icon, number, suffix, label, duration } = stat;

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = number;
      const increment = end / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, number, duration]);

  return (
    <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center hover:transform hover:-translate-y-2 transition-all duration-500 hover:shadow-xl hover:shadow-blue-600/10">
      {/* Icon */}
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Animated Number */}
      <div className="text-2xl lg:text-3xl font-bold text-blue-300 mb-2">
        {count}{suffix}
      </div>

      {/* Label */}
      <div className="text-sm text-blue-100 font-medium">
        {label}
      </div>

      {/* Animated Progress Bar */}
      <div className="mt-4 w-full bg-blue-900/50 rounded-full h-1 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: isVisible ? '100%' : '0%',
            transitionDelay: '300ms'
          }}
        />
      </div>
    </div>
  );
};

export default Stats;