// src/components/Projects.tsx
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiExternalLink, HiCode, HiEye } from 'react-icons/hi'
import Image from 'next/image'

const projects = [
  {
    title: 'AI Analytics Platform',
    description: 'Платформа для аналитики данных с использованием машинного обучения',
    technologies: ['React', 'Python', 'TensorFlow', 'Docker'],
    image: 'https://media1.tenor.com/m/LeJ5AidK7aIAAAAd/minion-%D1%81%D0%B2%D0%BE.gif', // AI Dashboard
    demo: 'https://xn--80aneakq8a4c.xn--p1ai/',
    code: 'https://github.com',
  },
  {
    title: 'E-Commerce Marketplace',
    description: 'Масштабируемая платформа для онлайн-торговли',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Redux'],
    image: 'https://i.pinimg.com/736x/3e/5f/cd/3e5fcd366907b4911f67284f0ba203f2.jpg', // E-commerce
    demo: 'https://xn--80aneakq8a4c.xn--p1ai/',
    code: 'https://github.com',
  },
  {
    title: '3D Product Configurator',
    description: 'Интерактивный 3D конфигуратор товаров с Three.js',
    technologies: ['Three.js', 'React', 'WebGL', 'TypeScript'],
    image: 'https://media1.tenor.com/m/UHPNTQoTcuoAAAAd/%D1%81%D0%B2%D0%BE-%D0%BC%D0%B8%D0%BD%D1%8C%D0%BE%D0%BD.gif', // 3D Product
    demo: 'https://xn--80aneakq8a4c.xn--p1ai/',
    code: 'https://github.com',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Дашборд для аналитики социальных сетей',
    technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
    image: 'https://media1.tenor.com/m/NicOMQRxYpcAAAAC/%D1%81%D0%B2%D0%BE-%D0%BC%D0%B8%D0%BD%D1%8C%D0%BE%D0%BD%D1%8B.gif', // Social Media
    demo: 'https://xn--80aneakq8a4c.xn--p1ai/',
    code: 'https://github.com',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Проекты</h2>
          <p className="section-subtitle">
            Мои последние работы и достижения
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group"
              >
                <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                  >
                    <HiEye />
                    Демо
                    <HiExternalLink className="text-sm" />
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                  >
                    <HiCode />
                    Код
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}