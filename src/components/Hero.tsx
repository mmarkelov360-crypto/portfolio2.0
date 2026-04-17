'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { HiArrowDown, HiDownload } from 'react-icons/hi'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block mb-2">Привет, я</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Хабибуллин Рамазан
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-20">
            <TypeAnimation
              sequence={[
                'Восхитительный',
                2000,
                'Мощный',
                2000,
                'Жесткий',
                2000,
                'Крутой',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Создаю современные веб-приложения через чат гпт за 10 минут и 3 запроса
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Посмотреть проекты
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 bg-white/10 backdrop-blur-lg rounded-full font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              <HiDownload />
              Скачать резюме
            </a>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="text-3xl text-white">
            <HiArrowDown />
          </a>
        </motion.div>
      </div>
    </section>
  )
}