// src/components/Contacts.tsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  HiMail, 
  HiPhone, 
  HiLocationMarker,
  HiUser,
  HiDocumentText,
  HiChat
} from 'react-icons/hi'
import { 
  FaTelegram, 
  FaGithub,  
  FaYandex,
  FaVk,
  FaYoutube
} from 'react-icons/fa'
import { SiKinopoisk } from 'react-icons/si'
import emailjs from 'emailjs-com'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaTelegram, href: 'https://t.me', label: 'Telegram' },
  { icon: FaVk, href: 'https://vk.com', label: 'VK' },
  { icon: FaYandex, href: 'https://yandex.ru', label: 'Yandex' },
  { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: SiKinopoisk, href: 'https://kinopoisk.ru', label: 'Kinopoisk' },
]

export default function Contacts() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // Здесь нужно добавить ваши credentials из emailjs.com
      await emailjs.send(
        'service_cw0lqnf',
        'template_o41k8gg',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'tSUj2HY_oZM6_4W5q'
      )
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="contacts" className="py-20 bg-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Контакты</h2>
          <p className="section-subtitle">
            Свяжитесь со мной любым удобным способом
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <HiMail className="text-2xl text-primary" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a href="mailto:ivan@example.com" className="text-gray-400 hover:text-primary">
                        ivan@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <HiPhone className="text-2xl text-primary" />
                    <div>
                      <h4 className="font-semibold">Телефон</h4>
                      <a href="tel:+71234567890" className="text-gray-400 hover:text-primary">
                        +7 (123) 456-78-90
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <HiLocationMarker className="text-2xl text-primary" />
                    <div>
                      <h4 className="font-semibold">Локация</h4>
                      <p className="text-gray-400">Сочи, Россия</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Социальные сети</h4>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl text-gray-400 hover:text-primary transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Другие платформы</h3>
                <div className="space-y-4">
                  <a
                    href="https://music.yandex.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
                  >
                    <FaYandex />
                    Яндекс Музыка
                  </a>
                  <a
                    href="https://kinopoisk.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
                  >
                    <SiKinopoisk />
                    Кинопоиск
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">НЕ ПИШИТЕ МНЕ ПЛИЗЗЗ</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300">
                    <HiUser className="inline mr-2" />
                    Имя
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Имя"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300">
                    <HiMail className="inline mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="ivan@example.com"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300">
                    <HiDocumentText className="inline mr-2" />
                    Сообщение
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Ваше сообщение..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    'Отправка...'
                  ) : (
                    <>
                      <HiChat />
                      Отправить сообщение
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <p className="text-green-500 text-center">Сообщение отправлено успешно!</p>
                )}
                
                {status === 'error' && (
                  <p className="text-red-500 text-center">Ошибка при отправке. Попробуйте позже.</p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}