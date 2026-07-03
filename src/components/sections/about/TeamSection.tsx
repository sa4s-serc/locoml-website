import React from 'react';
import { Container } from '@/components/layout/Layout';
import { teamData } from './teamData';
import { TeamGroup } from './TeamGroup';
import { Tag } from '@/components/ui/TypographyAndBadges';
import { motion } from 'framer-motion';

export function TeamSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden border-t border-slate-100">
      <Container className="relative z-10 w-full flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-5 md:mb-6"
        >
          <Tag className="border border-slate-200 bg-white px-3 py-1 text-xs font-mono tracking-wider">
            TEAM
          </Tag>
        </motion.div>

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
