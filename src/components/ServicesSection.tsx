'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, FileText, Scale, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ServicesSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: MapPin,
      key: 'surveying',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: FileText,
      key: 'cadastral',
      gradient: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      icon: Scale,
      key: 'legal',
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      icon: MessageCircle,
      key: 'consulting',
      gradient: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6"
          >
            {t('services.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            {t('services.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-neutral-800 transition-colors">
                  {t(`services.${service.key}.title`)}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors">
                  {t(`services.${service.key}.description`)}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
              <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-12 lg:p-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Պատրաստ ենք սկսել ձեր նախագիծը
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Մեր փորձառու թիմը պատրաստ է տրամադրել ձեզ բարձրորակ ծառայություններ և մասնագիտական խորհրդատվություն
            </p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Կապվել մեզ հետ
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 