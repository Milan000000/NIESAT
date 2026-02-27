import { motion } from 'motion/react';
import { useData } from '../hooks/useData';

export default function Members() {
  const { members } = useData();

  const executives = members.filter(m => m.role !== 'General Member');
  const general = members.filter(m => m.role === 'General Member');

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Members</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated Corps Members driving innovation and change across Nigeria.
          </p>
        </div>

        {/* Executives */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">Executive Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {executives.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-emerald-100 rounded-full -rotate-6" />
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-emerald-600 font-semibold text-sm mb-2">{member.role}</p>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {member.field}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* General Members */}
        {general.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">General Members</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {general.map((member) => (
                <div key={member.id} className="text-center">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-20 h-20 mx-auto rounded-full object-cover mb-3 grayscale hover:grayscale-0 transition-all"
                    referrerPolicy="no-referrer"
                  />
                  <h4 className="text-sm font-bold text-gray-900">{member.name}</h4>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">{member.field}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
