import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Lightbulb, Users, BookOpen, Settings } from 'lucide-react';
import { useData } from '../hooks/useData';

export default function Home() {
  const { projects } = useData();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000"
            alt="Engineering background"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
              NYSC CDS Group
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Innovating for <span className="text-emerald-500">Nigeria's</span> Future.
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Nigerian Innovation Engineers, Scientists and Applied Technologists (N.I.E.S.A.T) 
              is a community of young professionals dedicated to solving local challenges through 
              technical excellence and civic service.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all flex items-center gap-2 shadow-lg shadow-emerald-600/20"
              >
                View Our Projects <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Submit a Request
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                To deploy innovative engineering and scientific solutions that address 
                critical infrastructure and technological gaps in Nigerian communities.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Settings className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                A Nigeria where every community has access to sustainable technology 
                and home-grown innovation driven by patriotic young professionals.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Our Values</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Integrity, Innovation, Collaboration, and Service. We believe in 
                technical excellence as a tool for national development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Impact</h2>
              <p className="text-gray-600">Recent projects completed by our CDS group.</p>
            </div>
            <Link to="/projects" className="text-emerald-600 font-semibold flex items-center gap-1 hover:underline">
              All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">{project.date}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">{project.description}</p>
                  <div className="flex items-center gap-2 text-xs text-emerald-600 font-bold">
                    <MapPin className="h-3 w-3" /> {project.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to make a difference?</h2>
          <p className="text-emerald-100 mb-12 max-w-2xl mx-auto text-lg">
            Whether you are a community leader with a technical need or a corporate sponsor 
            looking to support local innovation, we want to hear from you.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-emerald-600 rounded-xl font-bold hover:bg-emerald-50 transition-all shadow-xl"
            >
              Contact Us
            </Link>
            <Link
              to="/members"
              className="px-8 py-4 bg-emerald-700 text-white rounded-xl font-bold hover:bg-emerald-800 transition-all"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function MapPin({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
