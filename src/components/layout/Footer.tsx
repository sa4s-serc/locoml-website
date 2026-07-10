export function Footer() {
  return (
    <footer className="w-full bg-white border-t" style={{ borderColor: 'rgba(15,23,42,0.08)' }}>
      <div className="max-w-7xl mx-auto px-6 pt-[80px] pb-[48px] flex flex-col items-center justify-center">
        
        {/* Logos Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-[64px] md:gap-[120px] mb-[48px]">
          <a href="#" className="block">
            <img 
              src={`${import.meta.env.BASE_URL}SA4S.svg`} 
              alt="SA4S" 
              className="h-[120px] md:h-[140px] w-auto object-contain"
            />
          </a>
          <a href="#" className="block">
            <img 
              src={`${import.meta.env.BASE_URL}SERC.png`} 
              alt="SERC" 
              className="h-[100px] md:h-[120px] w-auto object-contain grayscale-[0.2]"
            />
          </a>
          <a href="#" className="block">
            <img 
              src={`${import.meta.env.BASE_URL}IIIT.png`} 
              alt="IIIT Hyderabad" 
              className="h-[80px] md:h-[96px] w-auto object-contain"
            />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-[15px] md:text-[16px] font-medium text-slate-500">
          <p>© 2026 Software Engineering Research Center, IIIT Hyderabad. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
