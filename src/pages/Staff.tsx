import React from 'react';
import { Lock, Plus, Trash2, Users, Folder, FileText, LogOut } from 'lucide-react';
import { useData } from '../hooks/useData';

export default function Staff() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const { 
    projects, members, resources, requests,
    addProject, deleteProject, 
    addMember, deleteMember,
    addResource, deleteResource 
  } = useData();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'milan000000') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password. Access denied.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
          <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Lock className="h-8 w-8 text-emerald-600" />
          </div>
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">Staff Access</h1>
          <p className="text-center text-gray-500 mb-8 text-sm">Enter the administrative password to manage N.I.E.S.A.T content.</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                placeholder="••••••••"
              />
              {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
            </div>
            <button type="submit" className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all">
              Unlock Portal
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome back, Administrator.</p>
          </div>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-red-600 transition-colors"
          >
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Projects Management */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <Folder className="h-5 w-5 text-emerald-600" />
                  <h2 className="text-xl font-bold text-gray-900">Manage Projects</h2>
                </div>
                <button 
                  onClick={() => addProject({
                    id: Date.now().toString(),
                    title: 'New Project Title',
                    description: 'Project description goes here...',
                    date: new Date().toISOString().split('T')[0],
                    location: 'Location Name',
                    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800'
                  })}
                  className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-4">
                {projects.map(project => (
                  <div key={project.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{project.title}</h3>
                      <p className="text-xs text-gray-400">{project.location} • {project.date}</p>
                    </div>
                    <button onClick={() => deleteProject(project.id)} className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-900">Manage Members</h2>
                </div>
                <button 
                  onClick={() => addMember({
                    id: Date.now().toString(),
                    name: 'New Member Name',
                    role: 'General Member',
                    field: 'Engineer',
                    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
                  })}
                  className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {members.map(member => (
                  <div key={member.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <img src={member.imageUrl} className="w-8 h-8 rounded-full object-cover" referrerPolicy="no-referrer" />
                      <div>
                        <h3 className="font-bold text-gray-900 text-xs">{member.name}</h3>
                        <p className="text-[10px] text-gray-400">{member.role}</p>
                      </div>
                    </div>
                    <button onClick={() => deleteMember(member.id)} className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Management */}
          <div className="space-y-8">
            <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-purple-600" />
                  <h2 className="text-xl font-bold text-gray-900">Resources</h2>
                </div>
                <button 
                  onClick={() => addResource({
                    id: Date.now().toString(),
                    title: 'New Resource',
                    type: 'PDF',
                    url: '#',
                    date: new Date().toISOString().split('T')[0]
                  })}
                  className="p-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-3">
                {resources.map(resource => (
                  <div key={resource.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="text-xs font-bold text-gray-700 truncate max-w-[150px]">{resource.title}</span>
                    <button onClick={() => deleteResource(resource.id)} className="text-gray-400 hover:text-red-600">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-8">Community Requests</h2>
              <div className="space-y-4">
                {requests.length === 0 ? (
                  <p className="text-xs text-gray-400 italic">No pending requests.</p>
                ) : (
                  requests.map(request => (
                    <div key={request.id} className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{request.needType}</span>
                        <span className="text-[10px] text-gray-400">{request.date}</span>
                      </div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1">{request.name}</h3>
                      <p className="text-[11px] text-gray-600 line-clamp-2 mb-2">{request.description}</p>
                      <p className="text-[10px] text-gray-400 font-medium">📍 {request.location}</p>
                    </div>
                  ))
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
