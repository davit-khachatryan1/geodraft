'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <span className="text-2xl font-bold">{t('footer.company')}</span>
              </div>
              <p className="text-neutral-300 text-lg leading-relaxed max-w-md">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4 pt-4">
                <motion.a
                  href="tel:+374XXXXXXXX"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="mailto:info@geodraft.am"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <MapPin className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">Նավիգացիա</h3>
              <div className="space-y-3">
                {[
                  { key: 'home', section: 'hero' },
                  { key: 'about', section: 'about' },
                  { key: 'services', section: 'services' },
                  { key: 'gallery', section: 'gallery' },
                  { key: 'contact', section: 'contact' },
                ].map((item) => (
                  <motion.button
                    key={item.key}
                    onClick={() => scrollToSection(item.section)}
                    whileHover={{ x: 5 }}
                    className="block text-neutral-300 hover:text-white transition-colors duration-300"
                  >
                    {t(`nav.${item.key}`)}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">Ծառայություններ</h3>
              <div className="space-y-3">
                {[
                  { key: 'surveying' },
                  { key: 'cadastral' },
                  { key: 'legal' },
                  { key: 'consulting' },
                ].map((item) => (
                  <motion.button
                    key={item.key}
                    onClick={() => scrollToSection('services')}
                    whileHover={{ x: 5 }}
                    className="block text-neutral-300 hover:text-white transition-colors duration-300"
                  >
                    {t(`services.${item.key}.title`)}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-800 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-neutral-400 text-sm"
            >
              © 2024 {t('footer.company')}. {t('footer.rights')}.
            </motion.p>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full transition-colors duration-300"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm">Վերադառնալ վեր</span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
} 