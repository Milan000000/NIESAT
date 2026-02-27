import { motion } from 'motion/react';
import { Shield, Target, Heart, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            About <span className="text-emerald-600">N.I.E.S.A.T</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            The Nigerian Innovation Engineers, Scientists and Applied Technologists (N.I.E.S.A.T) 
            is a specialized Community Development Service (CDS) group under the National Youth 
            Service Corps (NYSC).
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
              alt="Team collaborating"
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Origin</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded by a group of passionate Corps Members with backgrounds in STEM, 
                N.I.E.S.A.T was born out of a desire to move beyond traditional CDS activities 
                and provide high-impact technical solutions to local communities.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h2>
              <p className="text-gray-600 leading-relaxed">
                We identify communities with specific technical needs—ranging from clean water 
                access and renewable energy to digital literacy and agricultural mechanization—and 
                leverage our collective expertise to design and implement sustainable solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Objectives */}
        <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Objectives</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Impact", desc: "Solving real-world problems with engineering." },
              { icon: Shield, title: "Sustainability", desc: "Building solutions that last for generations." },
              { icon: Heart, title: "Service", desc: "Giving back to our host communities with pride." },
              { icon: Award, title: "Excellence", desc: "Maintaining high standards in all our projects." }
            ].map((obj, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <obj.icon className="h-8 w-8 text-emerald-600 mb-6" />
                <h3 className="font-bold text-gray-900 mb-2">{obj.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
