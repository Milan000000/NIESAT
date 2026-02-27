import { motion } from 'motion/react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import { useData } from '../hooks/useData';

export default function Projects() {
  const { projects } = useData();

  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h1>
          <p className="text-gray-600 max-w-2xl">
            A showcase of engineering and scientific interventions carried out by the 
            N.I.E.S.A.T CDS group across various communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <MapPin className="h-3.5 w-3.5 text-emerald-600" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="h-3.5 w-3.5 text-emerald-600" />
                    {project.date}
                  </div>
                </div>
                <button className="mt-8 w-full py-3 bg-gray-50 text-gray-900 rounded-xl text-sm font-bold hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center gap-2">
                  View Details <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
