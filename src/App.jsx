import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Instagram,
  Mail,
  ExternalLink,
  Code2,
  Server,
  Database,
  Terminal,
  Menu,
  X,
  Sun,
  Moon,
  Briefcase,
  Wifi,
  Award,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Logic Dark Mode
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark",
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // --- DATA (TRANSLATED TO ENGLISH) ---
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const skills = [
    {
      name: "Frontend & Web",
      icon: <Code2 size={24} />,
      desc: "HTML, CSS, JavaScript, ReactJS",
    },
    {
      name: "Backend Dev",
      icon: <Server size={24} />,
      desc: "PHP (Laravel, CodeIgniter), Python (Flask)",
    },
    {
      name: "Database",
      icon: <Database size={24} />,
      desc: "MySQL, MongoDB, Database Design",
    },
    {
      name: "IT Ops & Network",
      icon: <Wifi size={24} />,
      desc: "Linux, Windows, Troubleshooting, Basic Network Config",
    },
  ];

  // Certifications (Styled like Skills)
  const certifications = [
    {
      name: "BNSP Certification",
      icon: <Award size={24} />,
      desc: "Certified Web Developer (Sep 2023)",
    },
    {
      name: "BNSP Certification",
      icon: <Award size={24} />,
      desc: "Certified Database Programmer (Jul 2024)",
    },
  ];

  // Reordered Experience: Freelance -> MSIB -> Internship
  const experiences = [
    {
      role: "Freelance Photographer",
      company: "Self-Employed",
      period: "Jan 2024 - Present",
      desc: "Managed photoshoot schedules, coordinated with clients, and performed editing and digital photo file management.",
    },
    {
      role: "Full Stack Web Development (MSIB)",
      company: "LearningX",
      period: "Aug 2023 - Dec 2023",
      desc: "Learned full stack web development (HTML, CSS, JS, Python) and built databases using MongoDB.",
    },
    {
      role: "Administration & IT Support (Internship)",
      company: "Bea Cukai Malang",
      period: "Oct 2018 - Mar 2019",
      desc: "Performed software/hardware troubleshooting and managed office administration data.",
    },
  ];

  const projects = [
    {
      title: "Points Credit System",
      desc: "Web-based application for Student Activity Point Credit management (D3 Final Project).",
      tags: ["PHP", "MySQL", "Web App"],
      link: "https://github.com/codefucks007/sikp",
    },
    {
      title: "Popcorn - Find Your Favorite Movies",
      desc: "Popcorn is a front-end web application that allows users to explore movies, view detailed information such as director, cast, and genre, watch trailers via YouTube, and add movies to a favorites list for a more personalized experience.",
      tags: ["React", "Web App"],
      link: "https://popcorn-ecru.vercel.app/",
    },
    {
      title: "Portfolio Website",
      desc: "Responsive personal portfolio website with Dark Mode features.",
      tags: ["React", "Tailwind", "Framer Motion"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-teal-500 selection:text-white bg-gray-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-teal-600 dark:text-teal-400 font-mono tracking-tighter"
          >
            &lt;/&gt;
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                <span className="text-teal-600 dark:text-teal-400 mr-1 font-mono"></span>
                {link.name}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-slate-900 text-slate-800 dark:text-yellow-400 hover:scale-110 transition-transform"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="text-slate-800 dark:text-yellow-400"
            >
              {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-800 dark:text-slate-200"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 overflow-hidden"
            >
              <div className="flex flex-col px-6 py-4 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-teal-500"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section
        id="about"
        className="pt-32 pb-20 px-6 min-h-screen flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <p className="text-teal-600 dark:text-teal-400 font-mono mb-4 font-medium tracking-wide">
              Hi, my name is
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              Rudolph Benjamin.
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-500 dark:text-slate-400 mb-6">
              Information Systems Student.
            </h2>
            <div className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mb-8 leading-relaxed space-y-4">
              <p>
                Active student at Bhinneka Nusantara University with a high
                interest in Information Technology, focusing on Web Development
                and System Administration.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded font-medium transition-all shadow-lg shadow-teal-500/20"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-slate-300 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 rounded font-medium transition-all text-slate-900 dark:text-white"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Photo Section (CLEANED) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-teal-500/30 blur-3xl rounded-full"></div>

              {/* Photo Frame */}
              <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-br from-teal-400 to-transparent border border-teal-500/20 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Rudolph Benjamin"
                  className="w-full h-full object-cover rounded-full border-4 border-slate-100 dark:border-slate-900 hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src =
                      "https://ui-avatars.com/api/?name=Rudolph+Benjamin&background=0d9488&color=fff&size=512";
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE SECTION (REORDERED) */}
      <section
        id="experience"
        className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30"
      >
        <div className="max-w-4xl mx-auto">
          <SectionTitle number="01" title="Experience" />

          <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-800 ml-3 pl-8 relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-teal-600 border-4 border-white dark:border-slate-950"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {exp.role}
                </h3>
                <div className="text-teal-600 dark:text-teal-400 font-mono text-sm mb-2">
                  {exp.company} | {exp.period}
                </div>
                <p className="text-slate-600 dark:text-slate-400">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS & CERTIFICATIONS SECTION */}
      <section id="skills" className="py-24 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <SectionTitle number="02" title="Skills & Certifications" />

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-teal-500 transition-colors"
              >
                <div className="text-teal-600 dark:text-teal-400 mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                  {skill.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Certifications Grid (Styled Same as Skills) */}
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 pl-2 border-l-4 border-teal-500">
            National Certifications (BNSP)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="p-6 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-teal-500 transition-colors"
              >
                <div className="text-teal-600 dark:text-teal-400 mb-4">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                  {cert.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {cert.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION (UPDATED LINKS) */}
      <section
        id="projects"
        className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30"
      >
        <div className="max-w-6xl mx-auto">
          <SectionTitle number="03" title="Academic Projects" />

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-teal-500/30 transition-all group"
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <Briefcase
                      size={40}
                      className="text-teal-600 dark:text-teal-500"
                    />
                    {/* UPDATE: Added target="_blank" and rel="noopener noreferrer" */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-teal-600 dark:hover:text-teal-400"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-teal-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-teal-600 dark:text-teal-400 border border-slate-200 dark:border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-teal-600 dark:text-teal-400 font-mono mb-4">
            04. What's Next?
          </p>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg">
            I am currently open to new opportunities and collaborations. Whether
            you have a question or just want to say hi, I'll try my best to get
            back to you!
          </p>
          <a
            href="mailto:anakmanusia245@gmail.com"
            className="inline-block px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded font-bold transition-all duration-300 shadow-lg shadow-teal-500/30"
          >
            Send Email
          </a>

          <div className="mt-16 flex justify-center space-x-8">
            <SocialLink
              href="https://github.com/codefucks007"
              icon={<Github size={24} />}
            />
            <SocialLink
              href="https://www.instagram.com/999megapixel"
              icon={<Instagram size={24} />}
            />
          </div>
        </div>
      </section>

      <footer className="py-8 text-center bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <p className="text-slate-500 text-sm">
          Built by{" "}
          <span className="text-teal-600 dark:text-teal-400 font-medium">
            Rudolph Benjamin G.
          </span>
        </p>
      </footer>
    </div>
  );
}

const SectionTitle = ({ number, title }) => (
  <div className="flex items-center mb-12">
    <span className="text-teal-600 dark:text-teal-400 font-mono text-xl mr-2">
      {number}.
    </span>
    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
      {title}
    </h2>
    <span className="hidden md:block ml-6 h-px bg-slate-200 dark:bg-slate-700 w-40"></span>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:-translate-y-1 transition-all"
  >
    {icon}
  </a>
);

export default App;
