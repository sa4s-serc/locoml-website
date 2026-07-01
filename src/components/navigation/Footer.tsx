import { Link } from 'react-router-dom';
import { Icons } from '@/constants/icons';

export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                <Icons.Layers className="h-5 w-5" />
              </div>
              <span className="font-heading text-xl font-bold text-heading">LoCoML</span>
            </Link>
            <p className="text-sm text-paragraph max-w-xs">
              Engineering the next generation of scalable machine learning architecture.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 font-heading font-semibold text-heading">Platform</h4>
            <ul className="space-y-2 text-sm text-paragraph">
              <li><Link to="/platform" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/architecture" className="hover:text-primary transition-colors">Architecture</Link></li>
              <li><Link to="/docs" className="hover:text-primary transition-colors">Documentation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-semibold text-heading">Research</h4>
            <ul className="space-y-2 text-sm text-paragraph">
              <li><Link to="/paper" className="hover:text-primary transition-colors">Paper</Link></li>
              <li><Link to="/publications" className="hover:text-primary transition-colors">Publications</Link></li>
              <li><Link to="/roadmap" className="hover:text-primary transition-colors">Roadmap</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-semibold text-heading">Company</h4>
            <ul className="space-y-2 text-sm text-paragraph">
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">GitHub <Icons.ExternalLink className="h-3 w-3" /></a></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between border-t border-border pt-8 text-sm text-paragraph">
          <p>© {new Date().getFullYear()} LoCoML. All rights reserved.</p>
          <div className="mt-4 flex gap-4 md:mt-0">
            <Link to="/privacy" className="hover:text-heading transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-heading transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
