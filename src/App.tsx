import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Terminal, 
  Database, 
  LineChart, 
  ChevronRight, 
  ArrowRight,
  Cpu,
  Layers,
  GraduationCap,
  Award,
  Download
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Upgraded Reveal component with repeat enabled by default for all elements
function Reveal({ 
  children, 
  animation = "slide-left", 
  repeat = true 
}: { 
  children: React.ReactNode, 
  animation?: "slide-left" | "high-slide",
  repeat?: boolean 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // If repeat is false, we stop watching after it appears once
          if (!repeat && ref.current) observer.unobserve(ref.current); 
        } else {
          // If repeat is true, we hide it again when it leaves the screen
          if (repeat) setIsVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" } 
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [repeat]);

  // Standard animation: Left to Right
  let hiddenStyles = "opacity-0 -translate-x-12";
  let visibleStyles = "opacity-100 translate-x-0 translate-y-0 scale-100";
  let transitionDuration = "duration-1000";

  // Dramatic High Slide animation (bottom to top, larger distance)
  if (animation === "high-slide") {
    hiddenStyles = "opacity-0 translate-y-32 scale-95";
    transitionDuration = "duration-[1500ms]";
  }

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${transitionDuration} ${
        isVisible ? visibleStyles : hiddenStyles
      }`}
    >
      {children}
    </div>
  );
}

export default function Portfolio() {
  // Track mouse coordinates for the custom cursor follower
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-hidden">
      
      {/* Custom Cursor Follower */}
      <div 
        className="fixed top-0 left-0 pointer-events-none z-[100] hidden md:flex items-center justify-center w-10 h-10 bg-cyan-500/20 border border-cyan-400 text-cyan-200 rounded-full font-bold text-sm shadow-[0_0_15px_rgba(34,211,238,0.4)] backdrop-blur-sm transition-all duration-100 ease-out"
        style={{ 
          transform: `translate(${mousePosition.x - 20}px, ${mousePosition.y - 20}px)` 
        }}
      >
      97
      </div>

      {/* Background Gradient Mesh & Ambient Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-fuchsia-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Navigation - Glassmorphism */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-extrabold text-2xl tracking-tighter bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
            VARDHAN
          </span>
          <div className="hidden md:flex gap-5 lg:gap-8 text-sm font-semibold tracking-wide text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">ABOUT</a>
            <a href="#skills" className="hover:text-fuchsia-400 transition-colors">SKILLS</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">EDUCATION</a>
            <a href="#projects" className="hover:text-fuchsia-400 transition-colors">PROJECTS</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">CERTIFICATIONS</a>
            <a href="#experience" className="hover:text-fuchsia-400 transition-colors">EXPERIENCE</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-6xl mx-auto">
        
        {/* HERO SECTION - UPDATED WITH PROFILE PICTURE */}
        <section id="about" className="min-h-[70vh] flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center lg:items-start pt-10 gap-12 lg:gap-8">
          
          {/* Left Side: Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-3/5">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-300 font-medium text-sm mb-8 backdrop-blur-md">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
                3rd year B.Tech CS Student • Backend Dev
              </div>
            </Reveal>
            
            <Reveal animation="high-slide">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-6 leading-tight">
                Punnana <br />
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-500 bg-clip-text text-transparent">
                  Harshavardhan
                </span> Naidu
              </h1>
            </Reveal>
            
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-light text-slate-400 mb-8 max-w-3xl leading-relaxed">
                Aspiring Software Developer specializing in <strong className="text-slate-200 font-semibold">backend architecture</strong>, <strong className="text-slate-200 font-semibold">data visualization</strong>, and building dynamic, scalable prototypes.
              </h2>
            </Reveal>
            
            <Reveal>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
                <a href="#projects" className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.5)] overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                
                <a href="/resum2.pdf" download="Harsha_Resume.pdf" className="inline-flex justify-center items-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md">
                  <Download size={20} /> Download Resume
                </a>

                <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-transparent text-slate-300 border border-transparent hover:border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all backdrop-blur-md">
                  Contact Me
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Side: Profile Picture Profile */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
            <Reveal animation="high-slide">
              <div className="relative group">
                {/* Glowing ring behind the image */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                
                {/* Image Container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] rounded-full p-2 bg-slate-900 border border-white/10 overflow-hidden flex items-center justify-center">
                  
                  {/* !!! REPLACE "src" BELOW WITH YOUR ACTUAL IMAGE PATH !!! */}
                  <img
                    src="harsha.jpeg" 
                    alt="Punnana Harshavardhan Naidu"
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  
                </div>
              </div>
            </Reveal>
          </div>

        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24">
          <Reveal>
            <div className="mb-16 text-center md:text-left">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4">Technical Arsenal</h3>
              <div className="h-1 w-24 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full mx-auto md:mx-0"></div>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Reveal>
              <div className="group h-full bg-white/[0.03] backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/[0.06] hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Terminal className="text-cyan-400" size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Languages</h4>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  Java, Python, C++, SQL, C
                </p>
              </div>
            </Reveal>
            
            <Reveal>
              <div className="group h-full bg-white/[0.03] backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/[0.06] hover:border-fuchsia-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 bg-fuchsia-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Database className="text-fuchsia-400" size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Backend & DB</h4>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  MySQL, JDBC, DatabaseHelper Architectures
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="group h-full bg-white/[0.03] backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/[0.06] hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <LineChart className="text-indigo-400" size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Visualization</h4>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  Python (Seaborn: Relational, Categorical, Distribution)
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="group h-full bg-white/[0.03] backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/[0.06] hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Layers className="text-blue-400" size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Core & Leadership</h4>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  Data Structures, OOP, NCC Naval Wing Leadership
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-24">
          <Reveal>
            <div className="mb-16">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4">Education</h3>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"></div>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="bg-white/[0.03] backdrop-blur-lg border border-white/10 p-8 md:p-10 rounded-[2rem] hover:bg-white/[0.06] hover:border-cyan-500/50 transition-all duration-300 mb-6">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center shrink-0">
                  <GraduationCap className="text-cyan-400" size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">Bachelor of Technology in Computer Science</h4>
                  <p className="text-cyan-400 font-medium mb-3">Lendi Institute Of Engineering and Technology • 2024 - Present</p>
                  <p className="text-slate-400 leading-relaxed">
                    Focusing on linear data structures, backend architecture, algorithm classification, and building scalable software prototypes.
                  </p>
                  <p className="text-cyan-400 font-medium mt-3">
                    8.99 CGPA (Current)
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="bg-white/[0.03] backdrop-blur-lg border border-white/10 p-8 md:p-10 rounded-[2rem] hover:bg-white/[0.06] hover:border-cyan-500/50 transition-all duration-300 mb-6">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center shrink-0">
                  <GraduationCap className="text-cyan-400" size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">Intermediate</h4>
                  <p className="text-cyan-400 font-medium mb-3">Sri Viswa Junior College • 2022 - 2024</p>
                  <p className="text-slate-400 leading-relaxed">
                    Completed intermediate education with a focus on mathematics, physics, and computer science, laying the foundation for advanced studies in technology and software development.
                  </p>
                  <p className="text-cyan-400 font-medium mt-3">
                    96.7 Percentage
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="bg-white/[0.03] backdrop-blur-lg border border-white/10 p-8 md:p-10 rounded-[2rem] hover:bg-white/[0.06] hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center shrink-0">
                  <GraduationCap className="text-cyan-400" size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">Matriculation</h4>
                  <p className="text-cyan-400 font-medium mb-3">Z.P.High School • 2024</p>
                  <p className="text-slate-400 leading-relaxed">
                    Completed matriculation with a strong foundation in core subjects, preparing for higher education in the field of technology and engineering.
                  </p>
                  <p className="text-cyan-400 font-medium mt-3">
                    84.83 Percentage
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24">
          <Reveal>
            <div className="mb-16">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4">Featured Projects</h3>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"></div>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal>
              <div className="group relative bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-12 overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
                <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-cyan-500/20 transition-colors"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 font-bold text-xs uppercase tracking-wider mb-6">
                    <Cpu size={14} /> Prototype
                  </div>
                  <h4 className="text-3xl md:text-4xl font-black text-white mb-4">LECTRONOTE</h4>
                  <p className="text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
                    A dynamic educational prototype designed to streamline student scheduling and content accessibility through advanced pipeline integration.
                  </p>
                  <a href="https://lectronote-jfv.caffeine.xyz/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6 font-semibold">
                    View Project <ArrowRight className="shrink-0" size={20} />
                  </a>
                  
                  <ul className="grid md:grid-cols-2 gap-4 text-slate-400">
                    <li className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <ChevronRight className="text-cyan-400 shrink-0 mt-0.5" size={20} />
                      <span>Integrated class registration and dynamic calendar synchronization mapping.</span>
                    </li>
                    <li className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <ChevronRight className="text-cyan-400 shrink-0 mt-0.5" size={20} />
                      <span>Bilingual (English/Telugu) text-to-speech with complex class translation pipeline.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="group relative bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-12 overflow-hidden hover:border-fuchsia-500/30 transition-all duration-500">
                <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-fuchsia-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-fuchsia-500/20 transition-colors"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-fuchsia-500/10 text-fuchsia-400 font-bold text-xs uppercase tracking-wider mb-6">
                    <Database size={14} /> Backend System
                  </div>
                  <h4 className="text-3xl md:text-4xl font-black text-white mb-4">Library Management System</h4>
                  <p className="text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
                    A robust backend architecture engineered to track and manage extensive library inventories efficiently with optimized database connections.
                  </p>
                  
                  <ul className="grid md:grid-cols-2 gap-4 text-slate-400">
                    <li className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <ChevronRight className="text-fuchsia-400 shrink-0 mt-0.5" size={20} />
                      <span>Engineered with Java & MySQL; utilizing JDBC for seamless tuple insertion/querying.</span>
                    </li>
                    <li className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <ChevronRight className="text-fuchsia-400 shrink-0 mt-0.5" size={20} />
                      <span>Custom <code>DatabaseHelper</code> class implemented for highly optimized IDE connections.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="group relative bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-12 overflow-hidden hover:border-fuchsia-500/30 transition-all duration-500">
                <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-fuchsia-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-fuchsia-500/20 transition-colors"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-fuchsia-500/10 text-fuchsia-400 font-bold text-xs uppercase tracking-wider mb-6">
                    <Database size={14} /> Backend System
                  </div>
                  <h4 className="text-3xl md:text-4xl font-black text-white mb-4">GVMC-File Management System</h4>
                  <p className="text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
                    A comprehensive backend solution designed for efficient management of digital files within the GVMC-FFile ecosystem.
                  </p>
                    <a href="https://phvn007.github.io/GVMC-File-Management-System/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-fuchsia-400 hover:text-fuchsia-300 transition-colors mb-6 font-semibold">
                    View Project <ArrowRight className="shrink-0" size={20} />
                  </a>
                  <ul className="grid md:grid-cols-2 gap-4 text-slate-400">
                    <li className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <ChevronRight className="text-fuchsia-400 shrink-0 mt-0.5" size={20} />
                      <span>Build through modern backend frameworks and best practices.</span>
                    </li>
                    <li className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <ChevronRight className="text-fuchsia-400 shrink-0 mt-0.5" size={20} />
                      <span>Custom <code>DatabaseHelper</code> class implemented for highly optimized IDE connections.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="group relative bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-12 overflow-hidden hover:border-fuchsia-500/30 transition-all duration-500">
                <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-fuchsia-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-fuchsia-500/20 transition-colors"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-fuchsia-500/10 text-fuchsia-400 font-bold text-xs uppercase tracking-wider mb-6">
                    <Database size={14} /> Dynamic Dashboard
                  </div>
                  <h4 className="text-3xl md:text-4xl font-black text-white mb-4">Netflix Content Analyzer</h4>
                  <p className="text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
                    A Dynamic dashboard for the comprehensive analysis of Netflix content, providing insights into trends, genres, and user engagement through interactive visualizations.
                  </p>
                  
                  <ul className="grid md:grid-cols-2 gap-4 text-slate-400">
                    <li className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <ChevronRight className="text-fuchsia-400 shrink-0 mt-0.5" size={20} />
                      <span>Tableau integration for data visualization and reporting.</span>
                    </li>
                    <li className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <ChevronRight className="text-fuchsia-400 shrink-0 mt-0.5" size={20} />
                      <span>Custom <code>DataVisualizer</code> class for optimized database operations.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          {/* CURRENTLY WORKING ON SECTION */}
          <Reveal>
            <div className="mb-16 mt-32">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4">Currently Working On</h3>
              <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal>
              <div className="group relative bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-12 overflow-hidden hover:border-indigo-500/30 transition-all duration-500">
                <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-indigo-500/20 transition-colors"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 font-bold text-xs uppercase tracking-wider mb-6">
                    <Database size={14} /> Architecture
                  </div>
                  <h4 className="text-3xl md:text-4xl font-black text-white mb-4">Institutional ERP platform</h4>
                  <p className="text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
                    Developing a comprehensive ERP platform for institutional management, focusing on seamless integration of academic, administrative, and financial operations.
                  </p>
                  
                  <ul className="grid md:grid-cols-2 gap-4 text-slate-400">
                    <li className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <ChevronRight className="text-indigo-400 shrink-0 mt-0.5" size={20} />
                      <span>Seamless integration of academic, administrative, and financial modules.</span>
                    </li>
                    <li className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <ChevronRight className="text-indigo-400 shrink-0 mt-0.5" size={20} />
                      <span>Real-time reporting and analytics capabilities.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="group relative bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-12 overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
                <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-cyan-500/20 transition-colors"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 font-bold text-xs uppercase tracking-wider mb-6">
                    <Cpu size={14} /> Architecture
                  </div>
                  <h4 className="text-3xl md:text-4xl font-black text-white mb-4">Form Compilation and Notification System</h4>
                  <p className="text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
                    Designing a robust backend architecture for a form compilation and notification system, ensuring efficient data handling and timely alerts.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4 text-slate-400">
                    <li className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <ChevronRight className="text-cyan-400 shrink-0 mt-0.5" size={20} />
                      <span>Efficient form data processing and validation mechanisms.</span>
                    </li>
                    <li className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <ChevronRight className="text-cyan-400 shrink-0 mt-0.5" size={20} />
                      <span>Real-time notification generation and delivery system.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
            <div className="space-y-8">
            <Reveal>
              <div className="group relative bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-12 overflow-hidden hover:border-indigo-500/30 transition-all duration-500">
                <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-indigo-500/20 transition-colors"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 font-bold text-xs uppercase tracking-wider mb-6">
                    <Database size={14} /> Architecture
                  </div>
                  <h4 className="text-3xl md:text-4xl font-black text-white mb-4">Life Drop</h4>
                  <p className="text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
                    Developing a comprehensive backend architecture for a blood donation platform, facilitating efficient donor-recipient matching and real-time notifications.
                  </p>
                  
                  <ul className="grid md:grid-cols-2 gap-4 text-slate-400">
                    <li className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <ChevronRight className="text-indigo-400 shrink-0 mt-0.5" size={20} />
                      <span>A platform for managing blood donation operations.</span>
                    </li>
                    <li className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <ChevronRight className="text-indigo-400 shrink-0 mt-0.5" size={20} />
                      <span>Real-time availability tracking for blood units.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className="py-24">
          <Reveal>
            <div className="mb-16">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4">Certifications</h3>
              <div className="h-1 w-24 bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-full"></div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Reveal>
              <div className="group h-full bg-white/[0.03] backdrop-blur-lg border border-white/10 p-6 rounded-3xl hover:bg-white/[0.06] hover:border-fuchsia-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-fuchsia-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="text-fuchsia-400" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white leading-tight">NCC Naval Wing Leadership</h4>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  Completed specialized naval subjects, rigorous weapon training, and comprehensive leadership curriculum.
                </p>
              </div>
            </Reveal>
            
            <Reveal>
              <div className="group h-full bg-white/[0.03] backdrop-blur-lg border border-white/10 p-6 rounded-3xl hover:bg-white/[0.06] hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="text-cyan-400" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white leading-tight">HackYatra Participant</h4>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  Visakhapatnam Circuit hackathon core team member demonstrating rapid prototyping and backend integration.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="group h-full bg-white/[0.03] backdrop-blur-lg border border-white/10 p-6 rounded-3xl hover:bg-white/[0.06] hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="text-indigo-400" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white leading-tight">VETI Level 5</h4>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  Completed versant certification in english language proficiency, demonstrating advanced communication skills and comprehension.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="group h-full bg-white/[0.03] backdrop-blur-lg border border-white/10 p-6 rounded-3xl hover:bg-white/[0.06] hover:border-fuchsia-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-fuchsia-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="text-fuchsia-400" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white leading-tight">Wonder of Wonders 2026</h4>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  Recognized participant at the GITAM University premier student developer festival and technology conference.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="group h-full bg-white/[0.03] backdrop-blur-lg border border-white/10 p-6 rounded-3xl hover:bg-white/[0.06] hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="text-cyan-400" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white leading-tight">Google Cloud Data Analytics</h4>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  Completed cloud data analytics certification, demonstrating proficiency in data analysis, visualization, and cloud-based data management.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="group h-full bg-white/[0.03] backdrop-blur-lg border border-white/10 p-6 rounded-3xl hover:bg-white/[0.06] hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="text-indigo-400" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white leading-tight">Data Analytics</h4>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  Demonstrated proficiency in data analysis, visualization, and cloud-based data management.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* EXPERIENCE SECTION - NO SLIDING EFFECTS */}
        <section id="experience" className="py-24">
          <div className="mb-16">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4">Experience & Community</h3>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full"></div>
          </div>

          <div className="relative border-l border-white/20 ml-6 md:ml-8 space-y-12">
            
            <div className="pl-10 relative group">
              <div className="absolute w-5 h-5 bg-slate-950 border-4 border-cyan-400 rounded-full -left-[10.5px] top-1 shadow-[0_0_15px_rgba(34,211,238,0.8)] group-hover:scale-125 transition-transform"></div>
              <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-3 border border-cyan-500/20">July 2026</span>
              <h4 className="text-2xl font-bold text-white mb-2">HackYatra x Visakhapatnam Circuit</h4>
              <p className="text-cyan-400 font-medium mb-3">Team CHAOS</p>
              <p className="text-slate-400 leading-relaxed bg-white/5 p-5 rounded-2xl border border-white/5 backdrop-blur-sm">
                Competed as a core member, collaborating to build innovative solutions under strict hackathon deadlines. Showcased rapid prototyping and backend integration skills.
              </p>
            </div>

            <div className="pl-10 relative group">
              <div className="absolute w-5 h-5 bg-slate-950 border-4 border-fuchsia-400 rounded-full -left-[10.5px] top-1 shadow-[0_0_15px_rgba(232,121,249,0.8)] group-hover:scale-125 transition-transform"></div>
              <span className="inline-block py-1 px-3 rounded-full bg-fuchsia-500/10 text-fuchsia-300 text-xs font-bold tracking-widest uppercase mb-3 border border-fuchsia-500/20">July 2026</span>
              <h4 className="text-2xl font-bold text-white mb-2">Wonder of Wonders (WOW) 2026</h4>
              <p className="text-fuchsia-400 font-medium mb-3">GITAM University</p>
              <p className="text-slate-400 leading-relaxed bg-white/5 p-5 rounded-2xl border border-white/5 backdrop-blur-sm">
                Participated in the premier student developer festival, networking with peers and engaging with emerging technological frameworks and best practices.
              </p>
            </div>

            <div className="pl-10 relative group">
              <div className="absolute w-5 h-5 bg-slate-950 border-4 border-indigo-400 rounded-full -left-[10.5px] top-1 shadow-[0_0_15px_rgba(129,140,248,0.8)] group-hover:scale-125 transition-transform"></div>
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-bold tracking-widest uppercase mb-3 border border-indigo-500/20">April 2026</span>
              <h4 className="text-2xl font-bold text-white mb-2">IWD Vizag 2026</h4>
              <p className="text-indigo-400 font-medium mb-3">Organized by GDG & WTM Vizag</p>
              <p className="text-slate-400 leading-relaxed bg-white/5 p-5 rounded-2xl border border-white/5 backdrop-blur-sm">
                Attended the major tech conference at Lendi Institute of Engineering and Technology focusing on diversity, innovation, and modern software trends.
              </p>
            </div>

            <div className="pl-10 relative group">
              <div className="absolute w-5 h-5 bg-slate-950 border-4 border-indigo-400 rounded-full -left-[10.5px] top-1 shadow-[0_0_15px_rgba(129,140,248,0.8)] group-hover:scale-125 transition-transform"></div>
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-bold tracking-widest uppercase mb-3 border border-indigo-500/20">2020-2022</span>
              <h4 className="text-2xl font-bold text-white mb-2">N.C.C Platoon Commander</h4>
              <p className="text-indigo-400 font-medium mb-3">3A Naval Unit</p>
              <p className="text-slate-400 leading-relaxed bg-white/5 p-5 rounded-2xl border border-white/5 backdrop-blur-sm">
                Led a team of cadets in various training exercises and community service initiatives.
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer className="relative border-t border-white/10 bg-slate-950/80 backdrop-blur-xl pt-20 pb-10 overflow-hidden" id="contact">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
        
        <Reveal>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-black text-white mb-6">Let's Build Something.</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg">
              Whether it's a backend system, database architecture, or a dynamic new prototype, I'm ready to collaborate.
            </p>
            
            <div className="flex justify-center gap-6 mb-16">
              <a href="https://github.com/phvn007" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:-translate-y-2 transition-all duration-300 group">
                <FaGithub size={28} className="group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              </a>
              <a href="https://www.linkedin.com/in/punnana-harshavardhan-naidu-a8880234a" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-fuchsia-400 hover:bg-fuchsia-500/10 hover:border-fuchsia-500/30 hover:-translate-y-2 transition-all duration-300 group">
                <FaLinkedin size={28} className="group-hover:drop-shadow-[0_0_10px_rgba(232,121,249,0.8)]" />
              </a>
              <a href="mailto:phvnaidu007@gmail.com" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-500/30 hover:-translate-y-2 transition-all duration-300 group">
                <Mail size={28} className="group-hover:drop-shadow-[0_0_10px_rgba(129,140,248,0.8)]" />
              </a>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium tracking-wide text-slate-500 uppercase">
              <p>© 2026 Punnana Harshavardhan Naidu</p>
              <p>Designed for Scale & Performance</p>
            </div>
          </div>
        </Reveal>
      </footer>
      
    </div>
  );
}