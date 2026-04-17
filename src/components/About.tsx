import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  HiCode, 
  HiDeviceMobile, 
  HiServer, 
  HiColorSwatch 
} from 'react-icons/hi'

const skills = [
  { name: 'Frontend', icon: HiCode, items: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js'], gradient: 'from-blue-500/10 to-purple-500/10', border: 'border-blue-500/20' },
  { name: 'Backend', icon: HiServer, items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'], gradient: 'from-green-500/10 to-emerald-500/10', border: 'border-green-500/20' },
  { name: 'Mobile', icon: HiDeviceMobile, items: ['React Native', 'Flutter', 'iOS', 'Android'], gradient: 'from-orange-500/10 to-red-500/10', border: 'border-orange-500/20' },
  { name: 'Design', icon: HiColorSwatch, items: ['Figma', 'Adobe XD', 'UI/UX', 'Animation'], gradient: 'from-pink-500/10 to-rose-500/10', border: 'border-pink-500/20' },
]

const experience = [
  {
    year: '2026 - Present',
    company: 'RUDN Sochi',
    position: 'Developer',
    description: 'Разработка масштабируемых веб-приложений в qwen ai',
    gradient: 'from-violet-500/10 to-purple-500/10',
  },
   
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Обо мне</h2>
          <p className="section-subtitle">
            Моя профессиональная история и навыки
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Кто я? блок с фоном */}
            <motion.div 
              className="glass-effect rounded-2xl p-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Кто я?</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Я разработчик с 5-дневным опытом создания веб-приложений. 
                Специализируюсь на React экосистеме и современных технологиях.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Постоянно учусь новому и следую трендам в веб-разработке. 
                Люблю создавать красивые и функциональные интерфейсы.
              </p>
            </motion.div>

            {/* Образование блок с фоном */}
            <motion.div 
              className="glass-effect rounded-2xl p-8 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 backdrop-blur-sm"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-emerald-400">Образование</h3>
              <ul className="space-y-4">
                <li className="p-4 rounded-lg bg-black/20 border border-emerald-500/20">
                  <h4 className="font-semibold text-primary text-emerald-300">РУДН Сочи</h4>
                  <p className="text-gray-400 mt-1">Информационные системы и программирование (2022-2026)</p>
                </li>
              </ul>
            </motion.div>
          </div>

          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Навыки</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card rounded-2xl p-6 bg-gradient-to-br ${skill.gradient} ${skill.border} border backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
              >
                <skill.icon className="text-4xl text-primary mb-4" />
                <h4 className="text-xl font-bold mb-3">{skill.name}</h4>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-400">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Опыт работы</h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-effect rounded-2xl p-6 bg-gradient-to-br ${exp.gradient} border border-violet-500/30 backdrop-blur-sm`}
              >
                <div className="flex flex-wrap gap-4 justify-between mb-2">
                  <h4 className="text-xl font-bold text-violet-300">{exp.company}</h4>
                  <span className="text-primary bg-violet-500/20 px-3 py-1 rounded-full text-sm">{exp.year}</span>
                </div>
                <h5 className="text-lg text-gray-300 mb-3">{exp.position}</h5>
                <p className="text-gray-400">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}