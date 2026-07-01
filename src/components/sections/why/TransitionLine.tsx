import { FadeUp } from '@/components/animations/Animations';
import { Icons } from '@/constants/icons';

export function TransitionLine() {
  return (
    <FadeUp delay={0.8} className="mt-24 flex flex-col items-center justify-center text-center">
      <h3 className="font-heading text-2xl font-medium text-heading sm:text-3xl max-w-2xl">
        Build. Train. Deploy.<br />
        <span className="text-primary font-bold">One Platform.</span>
      </h3>
      
      <div className="mt-12 flex flex-col items-center">
        <div className="h-24 w-[2px] bg-gradient-to-b from-primary/40 to-transparent" />
        <Icons.ChevronDown className="mt-2 h-5 w-5 text-primary/40 animate-bounce" />
        <span className="mt-4 font-mono text-[10px] uppercase tracking-widest text-primary/60">
          See how everything works together
        </span>
      </div>
    </FadeUp>
  );
}
