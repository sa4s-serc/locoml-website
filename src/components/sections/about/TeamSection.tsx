import React from 'react';
import { Container } from '@/components/layout/Layout';
import { teamData } from './teamData';
import { TeamGroup } from './TeamGroup';

export function TeamSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden border-t border-slate-100">
      
      {/* Subtle Blueprint Background (2% opacity) to match Hero */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.02] text-slate-900 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <Container className="relative z-10 w-full flex flex-col items-center">
        <TeamGroup 
          title="Faculty Advisor" 
          members={teamData.faculty} 
          layout="faculty" 
        />
        
        <TeamGroup 
          title="Research Team" 
          members={teamData.researchTeam} 
          layout="research" 
        />
        
        <TeamGroup 
          title="B.Tech Students" 
          members={teamData.btechStudents} 
          layout="btech" 
        />
        
        <TeamGroup 
          title="Interns" 
          members={teamData.interns} 
          layout="interns" 
        />
      </Container>
    </section>
  );
}
