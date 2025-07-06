'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Target, Users, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const values = [
    {
      icon: Shield,
      key: 'responsibility',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: Target,
      key: 'accuracy',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Users,
      key: 'trust',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Lightbulb,
      key: 'innovation',
      color: 'bg-yellow-100 text-yellow-600',
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
    <section id="about" className="py-20 bg-neutral-50">
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
            {t('about.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('about.description')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Values */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-neutral-900 mb-8"
            >
              {t('about.values.title')}
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.key}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200"
                >
                  <div className={`w-12 h-12 rounded-xl ${value.color} flex items-center justify-center mb-4`}>
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                    {t(`about.values.${value.key}`)}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <motion.div
              variants={itemVariants}
              className="relative bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 lg:p-12"
            >
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary-200/30 rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent-200/30 rounded-full blur-xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-bold text-2xl">G</span>
                    </div>
                    <h4 className="text-xl font-bold text-neutral-900 mb-2">
                      {t('footer.company')}
                    </h4>
                    <p className="text-neutral-600">
                      {t('footer.description')}
                    </p>
                  </div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="absolute -top-4 -right-4 w-24 h-24 bg-accent-500/20 rounded-2xl rotate-12 blur-sm"
                />
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary-500/20 rounded-2xl -rotate-12 blur-sm"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom section - Additional info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
            <div className="text-neutral-600">Տարվա փորձ</div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-neutral-600">Գոհ հաճախորդներ</div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
            <div className="text-neutral-600">Կատարված նախագծեր</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 