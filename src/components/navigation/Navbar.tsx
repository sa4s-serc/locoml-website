import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icons } from '@/constants/icons';
import { cn } from '@/utils/cn';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/common/Logo';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Platform', path: '/platform' },
  { name: 'Research', path: '/research' },
  { name: 'About', path: '/about' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-border py-3 shadow-sm'
          : 'bg-transparent py-5'
      )}
    >
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 md:px-8">
        <Logo />

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex absolute inset-x-0 items-center justify-center gap-8 pointer-events-none">
          <div className="flex items-center gap-8 pointer-events-auto">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  location.pathname === link.path ? 'text-primary' : 'text-paragraph'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        <div className="hidden items-center gap-4 md:flex relative z-10">
          <a
            href="https://github.com/sa4s-serc/locoml"
            target="_blank"
            rel="noopener noreferrer"
            className="text-paragraph hover:text-heading transition-colors"
            aria-label="GitHub"
          >
            <Icons.GitBranch className="h-5 w-5" />
          </a>
          <Button size="sm">Get Started</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="flex items-center text-heading md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <Icons.X className="h-6 w-6" />
          ) : (
            <Icons.Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full flex w-full flex-col bg-white border-b border-border shadow-lg p-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-base font-medium transition-colors hover:text-primary',
                  location.pathname === link.path ? 'text-primary' : 'text-heading'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Divider className="my-2" />
            <div className="flex items-center justify-between">
              <a
                href="https://github.com/sa4s-serc/locoml"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-paragraph hover:text-heading transition-colors"
              >
                <Icons.GitBranch className="h-5 w-5" />
                <span className="font-medium text-sm">GitHub</span>
              </a>
              <Button size="sm">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

// Simple Divider for mobile menu since it's not exported from Layout
function Divider({ className }: { className?: string }) {
  return <hr className={cn('border-t border-border', className)} />;
}
