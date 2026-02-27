import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="h-8 w-8 text-emerald-500" />
              <span className="font-bold text-xl tracking-tight text-white">N.I.E.S.A.T</span>
            </div>
            <p className="text-sm leading-relaxed max-w-md">
              Nigerian Innovation Engineers, Scientists and Applied Technologists. 
              An NYSC Community Development Service (CDS) group dedicated to bridging 
              the gap between innovation and community needs through engineering excellence.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-emerald-400 transition-colors">Our Projects</Link></li>
              <li><Link to="/resources" className="hover:text-emerald-400 transition-colors">Resources</Link></li>
              <li><Link to="/members" className="hover:text-emerald-400 transition-colors">Members</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-500" />
                <span>NYSC Secretariat, Abuja, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-500" />
                <span>+234 800 000 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-500" />
                <span>contact@niesat.org.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} N.I.E.S.A.T CDS Group. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
