'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Server, Database, Cloud, ChevronDown, Menu, X, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('fr');

  const content = {
    fr: {
      nav: {
        about: 'À propos',
        experience: 'Expérience',
        education: 'Formation',
        skills: 'Compétences',
        contact: 'Contact'
      },
      hero: {
        greeting: 'Bonjour, je suis',
        role: 'Développeur Full Stack & Team Lead',
        subtitle: 'Spécialisé en architectures cloud, développement web moderne et automatisation',
        cta: 'Voir mes projets'
      },
      about: {
        title: 'À propos',
        description: 'Développeur full stack passionné avec une expertise en développement web moderne, architecture cloud et leadership technique. Spécialisé dans la création de solutions scalables et performantes pour améliorer l\'expérience utilisateur et optimiser les processus métier.'
      },
      experience: {
        title: 'Expérience Professionnelle',
        current: 'Actuel',
        jobs: [
          {
            title: 'Fullstack Developer | Team Lead',
            company: 'Zedka Services',
            period: 'Sept 2024 - Nov 2025',
            achievements: [
              'Conception et déploiement de solutions pour opérateurs et intégrateurs (SFR, AFC, BOALTING, ERIDIS)',
              'Développement d\'une plateforme innovante pour le marché des transferts, augmentant l\'engagement de 45%',
              'Administration VPS et automatisation des déploiements, réduisant les incidents de 20h/mois à 4h/mois',
              'Automatisation du flux de données via scripts Python orchestrés par cron',
              'Intégration de 10+ APIs externes pour consolider services et flux'
            ]
          },
          {
            title: 'Développeur Web Freelance',
            company: 'Freelance',
            period: '2023 - 2024',
            achievements: [
              'Développement d\'applications web avec Laravel, Symfony, Go, Angular et React',
              'Réduction de 300h+ de temps de développement via automatisation',
              'Déploiement conteneurisé réduisant le temps de 2h à 20min',
              'Amélioration du trafic à 600+ utilisateurs mensuels'
            ]
          },
          {
            title: 'Stagiaire Développeur Web',
            company: 'TERRAFORM',
            period: 'Mar 2024 - Juin 2024',
            achievements: [
              'Conception d\'une plateforme de réservation en ligne',
              'Environnement de développement conteneurisé',
              'Réduction du cycle de livraison de 12 à 8 jours'
            ]
          },
          {
            title: 'Stagiaire Développeur Web',
            company: 'MOBELITE',
            period: 'Juin 2023 - Sept 2023',
            achievements: [
              'Plateforme e-commerce avec Symfony et Docker',
              'Réduction de 80% des anomalies de code',
              'Optimisation du temps de chargement de 3,2s à 2,1s',
              'Augmentation du trafic de 40%'
            ]
          }
        ]
      },
      education: {
        title: 'Formation',
        degrees: [
          {
            degree: 'Mastère Professionnel en Génie Logiciel et Cloud Computing',
            school: 'Institut Supérieur des Etudes Technologiques, Sousse',
            period: 'Sept 2024 - Juin 2026 (prévu)',
            description: 'Formation axée sur le développement logiciel, l\'architecture cloud et la gestion de projets'
          },
          {
            degree: 'Licence en Développement des Systèmes Informatiques',
            school: 'Institut Supérieur des Etudes Technologiques, Sousse',
            period: 'Sept 2020 - Juin 2024'
          }
        ]
      },
      skills: {
        title: 'Compétences',
        categories: [
          {
            name: 'Frontend',
            icon: Code,
            skills: ['React', 'Angular', 'JavaScript', 'HTML/CSS', 'Tailwind', 'Bootstrap']
          },
          {
            name: 'Backend',
            icon: Server,
            skills: ['PHP', 'Node.js', 'Laravel', 'Symfony', '.NET', 'Python', 'Go', 'Java']
          },
          {
            name: 'Database & APIs',
            icon: Database,
            skills: ['GraphQL', 'Swagger', 'REST APIs', 'SQL']
          },
          {
            name: 'DevOps & Cloud',
            icon: Cloud,
            skills: ['Docker', 'AWS S3', 'Cloudflare', 'CI/CD', 'Git/GitHub', 'Kubernetes']
          }
        ],
        soft: {
          title: 'Compétences interpersonnelles',
          list: ['Leadership', 'Travail d\'équipe', 'Mentorat', 'Résolution de problèmes', 'Communication', 'Adaptabilité']
        },
        languages: {
          title: 'Langues',
          list: ['Arabe', 'Anglais', 'Français']
        }
      },
      contact: {
        title: 'Contact',
        subtitle: 'N\'hésitez pas à me contacter',
        location: 'Monastir, Tunisie'
      }
    },
    en: {
      nav: {
        about: 'About',
        experience: 'Experience',
        education: 'Education',
        skills: 'Skills',
        contact: 'Contact'
      },
      hero: {
        greeting: 'Hi, I\'m',
        role: 'Full Stack Developer & Team Lead',
        subtitle: 'Specialized in cloud architectures, modern web development and automation',
        cta: 'View My Work'
      },
      about: {
        title: 'About Me',
        description: 'Passionate full stack developer with expertise in modern web development, cloud architecture and technical leadership. Specialized in creating scalable and high-performance solutions to improve user experience and optimize business processes.'
      },
      experience: {
        title: 'Professional Experience',
        current: 'Current',
        jobs: [
          {
            title: 'Fullstack Developer | Team Lead',
            company: 'Zedka Services',
            period: 'Sept 2024 - Nov 2025',
            achievements: [
              'Designed and deployed solutions for operators and integrators (SFR, AFC, BOALTING, ERIDIS)',
              'Developed innovative platform for transfer market, increasing engagement by 45%',
              'VPS administration and deployment automation, reducing incidents from 20h/month to 4h/month',
              'Automated data flow via Python scripts orchestrated by cron',
              'Integrated 10+ external APIs to consolidate services and workflows'
            ]
          },
          {
            title: 'Freelance Web Developer',
            company: 'Freelance',
            period: '2023 - 2024',
            achievements: [
              'Web application development with Laravel, Symfony, Go, Angular and React',
              'Reduced 300h+ development time through automation',
              'Containerized deployment reducing time from 2h to 20min',
              'Improved traffic to 600+ monthly users'
            ]
          },
          {
            title: 'Web Developer Intern',
            company: 'TERRAFORM',
            period: 'Mar 2024 - June 2024',
            achievements: [
              'Designed online booking platform',
              'Containerized development environment',
              'Reduced delivery cycle from 12 to 8 days'
            ]
          },
          {
            title: 'Web Developer Intern',
            company: 'MOBELITE',
            period: 'June 2023 - Sept 2023',
            achievements: [
              'E-commerce platform with Symfony and Docker',
              '80% reduction in code anomalies',
              'Optimized loading time from 3.2s to 2.1s',
              '40% traffic increase'
            ]
          }
        ]
      },
      education: {
        title: 'Education',
        degrees: [
          {
            degree: 'Professional Master\'s in Software Engineering and Cloud Computing',
            school: 'Higher Institute of Technological Studies, Sousse',
            period: 'Sept 2024 - June 2026 (expected)',
            description: 'Training focused on software development, cloud architecture and project management'
          },
          {
            degree: 'Bachelor\'s in Information Systems Development',
            school: 'Higher Institute of Technological Studies, Sousse',
            period: 'Sept 2020 - June 2024'
          }
        ]
      },
      skills: {
        title: 'Skills',
        categories: [
          {
            name: 'Frontend',
            icon: Code,
            skills: ['React', 'Angular', 'JavaScript', 'HTML/CSS', 'Tailwind', 'Bootstrap']
          },
          {
            name: 'Backend',
            icon: Server,
            skills: ['PHP', 'Node.js', 'Laravel', 'Symfony', '.NET', 'Python', 'Go', 'Java']
          },
          {
            name: 'Database & APIs',
            icon: Database,
            skills: ['GraphQL', 'Swagger', 'REST APIs', 'SQL']
          },
          {
            name: 'DevOps & Cloud',
            icon: Cloud,
            skills: ['Docker', 'AWS S3', 'Cloudflare', 'CI/CD', 'Git/GitHub', 'Kubernetes']
          }
        ],
        soft: {
          title: 'Soft Skills',
          list: ['Leadership', 'Teamwork', 'Mentoring', 'Problem Solving', 'Communication', 'Adaptability']
        },
        languages: {
          title: 'Languages',
          list: ['Arabic', 'English', 'French']
        }
      },
      contact: {
        title: 'Contact',
        subtitle: 'Feel free to reach out',
        location: 'Monastir, Tunisia'
      }
    }
  };

  const t = content[language];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'education', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              MS
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`transition-colors ${
                    activeSection === key ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="px-3 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors text-sm"
              >
                {language === 'fr' ? 'EN' : 'FR'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 py-4 space-y-3">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className="block w-full text-left px-4 py-2 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  {value}
                </button>
              ))}
              <button
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="w-full px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
              >
                {language === 'fr' ? 'English' : 'Français'}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 text-lg mb-4 animate-fade-in">{t.hero.greeting}</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
            Mansour Stambouli
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 animate-fade-in">
            {t.hero.role}
          </h2>
          <p className="text-lg text-gray-400 mb-8 animate-fade-in">
            {t.hero.subtitle}
          </p>
          <div className="flex justify-center space-x-4 mb-12 animate-fade-in">
            <a href="https://github.com/stamboulii" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mansour-stambouli-b04bb712b/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:stamboulimansour@gmail.com" className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('experience')}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 animate-fade-in"
          >
            {t.hero.cta}
          </button>
          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">{t.about.title}</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <p className="text-lg text-gray-300 leading-relaxed">
              {t.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{t.experience.title}</h2>
          <div className="space-y-8">
            {t.experience.jobs.map((job, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">{job.title}</h3>
                    <p className="text-xl text-gray-300">{job.company}</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0">{job.period}</span>
                </div>
                <ul className="space-y-2 text-gray-300">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-400 mr-2">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{t.education.title}</h2>
          <div className="space-y-6">
            {t.education.degrees.map((degree, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">{degree.degree}</h3>
                <p className="text-lg text-gray-300 mb-2">{degree.school}</p>
                <p className="text-gray-400 mb-2">{degree.period}</p>
                {degree.description && <p className="text-gray-300">{degree.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{t.skills.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {t.skills.categories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-purple-500 transition-colors">
                  <Icon className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4">{t.skills.soft.title}</h3>
              <div className="flex flex-wrap gap-2">
                {t.skills.soft.list.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4">{t.skills.languages.title}</h3>
              <div className="flex flex-wrap gap-2">
                {t.skills.languages.list.map((lang, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-700 rounded-full text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-xl text-gray-400 mb-12">{t.contact.subtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="mailto:stamboulimansour@gmail.com" className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition-colors flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-400 mb-3" />
              <p className="text-gray-300">stamboulimansour@gmail.com</p>
            </a>
            <a href="tel:+21658362060" className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition-colors flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-400 mb-3" />
              <p className="text-gray-300">+216 58 36 20 60</p>
            </a>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-400 mb-3" />
              <p className="text-gray-300">{t.contact.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Mansour Stambouli. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;