import { FileText, Download, Search } from 'lucide-react';
import { useData } from '../hooks/useData';

export default function Resources() {
  const { resources } = useData();

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources</h1>
            <p className="text-gray-600 max-w-xl">
              Learning materials, technical guides, and project templates for 
              Corps Members and community partners.
            </p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources..."
              className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full md:w-64"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-emerald-200 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <FileText className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{resource.title}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      {resource.type}
                    </span>
                    <span className="text-xs text-gray-400">{resource.date}</span>
                  </div>
                </div>
              </div>
              <a
                href={resource.url}
                className="p-3 bg-white text-gray-400 rounded-xl hover:text-emerald-600 hover:bg-emerald-50 transition-all"
              >
                <Download className="h-5 w-5" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-emerald-900 rounded-[2rem] text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Contribute to our Knowledge Hub</h2>
          <p className="text-emerald-100/70 mb-8 max-w-lg mx-auto">
            Have a technical presentation or guide you'd like to share with the group? 
            Submit it to our editorial team.
          </p>
          <button className="px-8 py-3 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-400 transition-all">
            Submit Resource
          </button>
        </div>
      </div>
    </div>
  );
}
