import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Layers } from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import { defaultSystemsHero } from '../data/defaultContent';
import { OrbitalSystem } from './OrbitalSystem';
import { NodeInspectorModal } from './NodeInspectorModal';
import { ConsultationModal } from './ConsultationModal';
import { PolySolutionsSection } from './PolySolutionsSection';
import { SystemNodeId } from '../data/systemsData';

export const SystemsArchitectureSection: React.FC = () => {
  const { data } = useCMS();
  const hero = data.systemsHero || defaultSystemsHero;
  const prefix = hero.titlePrefix === 'Turning complex policy challenges'
    ? 'Turning complex policy challenges into'
    : (hero.titlePrefix || 'Turning complex policy challenges into');
  const highlight = prefix.trim().endsWith('into') && hero.titleHighlight?.trim().startsWith('into ')
    ? hero.titleHighlight.trim().slice(5)
    : hero.titleHighlight;

  const [selectedStoryNodeId, setSelectedStoryNodeId] = useState<SystemNodeId | null>(null);
  const [inspectedNodeId, setInspectedNodeId] = useState<SystemNodeId | null>(null);
  const [activeStoryThemeIndex, setActiveStoryThemeIndex] = useState<number>(0);
  const [isStoryOpen, setIsStoryOpen] = useState<boolean>(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [consultationDomain, setConsultationDomain] = useState<SystemNodeId | null>(null);

  const themeNodeMap: Record<number, SystemNodeId> = {
    0: 'institutions',
    1: 'policy',
    2: 'technology',
    3: 'evidence',
    4: 'finance',
    5: 'delivery',
  };

  const handleSelectNode = (nodeId: SystemNodeId) => {
    setSelectedStoryNodeId(nodeId);
    setInspectedNodeId(nodeId);
  };

  const handleThemeChange = (index: number) => {
    setActiveStoryThemeIndex(index);
    if (themeNodeMap[index]) {
      setSelectedStoryNodeId(themeNodeMap[index]);
    }
  };

  const handleCloseStory = () => {
    setIsStoryOpen(false);
    setSelectedStoryNodeId(null);
  };

  const handleOpenConsultation = (domain?: SystemNodeId) => {
    setConsultationDomain(domain || 'core');
    setIsConsultationOpen(true);
  };

  return (
    <div className="relative w-full bg-[#050a12] text-slate-100 selection:bg-[#ff7e67]/30 selection:text-[#ff9d8c]">
      
      {/* Background Lighting Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[650px] h-[650px] bg-teal-950/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#ff7e67]/5 rounded-full blur-[160px]" />
      </div>

      {/* Hero Systems Architecture & Orbital Section */}
      <section
        id="systems-hero"
        className="relative w-full min-h-[90vh] flex flex-col justify-center py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-[1500px] mx-auto z-10 bg-[#050a12]"
      >
        <div className="flex flex-col items-center w-full my-auto py-4">
          {/* Header Block: Headline & Narrative */}
          <div className="flex flex-col items-center text-center max-w-[1500px] w-full mx-auto space-y-4 mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#38d9c0] uppercase">
                {hero.badge}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-[49px] font-bold text-white tracking-normal sm:tracking-tight leading-snug sm:leading-[1.2] md:leading-[1.25] py-1.5 overflow-visible w-[1500px] max-w-full"
            >
              <span className="w-auto text-[54px] inline-block">{prefix}</span>{' '}
              <span className="italic font-normal text-[#ff7e67] tracking-normal inline-block">
                {highlight}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl pt-1 font-normal"
            >
              {hero.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <button
                id="btn-discuss-assignment"
                onClick={() => handleOpenConsultation('core')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#ff7e67] hover:bg-[#ff694f] text-[#050a12] font-bold text-sm sm:text-base tracking-wide transition-all shadow-lg shadow-[#ff7e67]/20 hover:shadow-xl hover:shadow-[#ff7e67]/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Discuss an Assignment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="btn-explore-capabilities"
                onClick={() => {
                  setIsStoryOpen(true);
                  const diagram = document.querySelector('#systems-hero');
                  if (diagram) {
                    window.scrollBy({ top: 350, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#081220] hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-500 font-semibold text-sm sm:text-base tracking-wide transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Explore Our Capabilities</span>
                <Layers className="w-4 h-4 text-[#38d9c0]" />
              </button>
            </motion.div>

            {/* Reassurance Bar */}
            <motion.div
              id="reassurance-bar"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 px-5 sm:px-7 py-2 sm:py-2.5 rounded-full bg-[#f5f5f5] border border-gray-200/90 shadow-sm flex flex-nowrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-[13px] font-medium tracking-wide whitespace-nowrap max-w-full overflow-x-auto no-scrollbar"
            >
              {[
                'Policy & Economic Advisory',
                'Project Preparation',
                'Development Finance',
                'Institutional Reform',
                'MEL & Impact',
                'Digital & Responsible AI',
              ].map((item, idx, arr) => (
                <React.Fragment key={item}>
                  <span className="cursor-default whitespace-nowrap text-[#000000]">
                    {item}
                  </span>
                  {idx < arr.length - 1 && (
                    <span className="text-slate-400 select-none font-bold">·</span>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* Duplicate of Header Block */}
          <div className="flex flex-col items-center text-center max-w-[1500px] w-full mx-auto space-y-4 mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#38d9c0] uppercase">
                BUILT FOR COMPLEX MANDATES
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-[49px] font-bold text-white tracking-normal sm:tracking-tight leading-snug sm:leading-[1.2] md:leading-[1.25] py-1.5 overflow-visible w-[1500px] max-w-full"
            >
              <span className="block w-auto text-[54px]">From evidence to decisions.</span>
              <span className="block italic font-normal text-[#00ff00] tracking-normal mt-1">
                From decisions to delivery.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl pt-1 font-normal"
            >
              Development challenges rarely fit within one ministry, one sector or one financing instrument. IP3 brings together economics, public policy, finance, institutional analysis, technology and implementation expertise to help clients move through the full decision cycle.
            </motion.p>
          </div>
          

          {/* Full-width Diagram: IP3 Center Hub + 4 Connected Cards (image.png layout) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex items-center justify-center relative"
          >
            <OrbitalSystem
              onSelectNode={handleSelectNode}
              selectedNodeId={selectedStoryNodeId}
              onExploreCapabilities={() => {
                setIsStoryOpen(true);
                const diagram = document.querySelector('#poly-solutions-master-section') || document.querySelector('#systems-hero');
                if (diagram) {
                  diagram.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* What Clients Hire IP3 to Deliver Section */}
      <section
        id="client-deliverables-section"
        className="relative w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-[1500px] mx-auto z-10 bg-[#050a12] border-t border-slate-800/80"
      >
        <div className="flex flex-col items-center text-center max-w-[1500px] w-full mx-auto space-y-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#38d9c0] uppercase">
              WHAT WE DO
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-[49px] font-bold text-white tracking-normal sm:tracking-tight leading-snug sm:leading-[1.2] md:leading-[1.25] py-1.5 overflow-visible w-[1500px] max-w-full"
          >
            <span className="block w-auto text-3xl sm:text-4xl md:text-[54px]">What clients hire IP3 to deliver.</span>
            <span className="block text-2xl sm:text-3xl font-normal text-slate-300 italic tracking-normal mt-2">
              (Six cards, each = client problem + deliverables)
            </span>
          </motion.h2>

          <div className="w-full max-w-5xl space-y-6 pt-6 text-left">
            <motion.p
              id="policy-strategy-advisory-paragraph"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-left w-full text-lg sm:text-xl md:text-2xl leading-relaxed text-slate-200"
            >
              <strong className="font-bold text-white tracking-tight">
                Policy, Economics & Strategy Advisory
              </strong>{' '}
              <span className="text-slate-400 font-light">—</span>{' '}
              <span className="italic text-[#38d9c0] font-medium">
                "We need to understand the problem and choose a defensible course of action."
              </span>{' '}
              <span className="text-[#38d9c0] font-bold mx-1">→</span>{' '}
              <span className="text-slate-300 font-normal">
                diagnostics, modeling, political-economy analysis, regulatory reviews, sector strategies, fiscal and cost-benefit analysis, reform road maps.
              </span>
            </motion.p>

            <motion.p
              id="program-project-design-paragraph"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-left w-full text-lg sm:text-xl md:text-2xl leading-relaxed text-slate-200"
            >
              <strong className="font-bold text-white tracking-tight">
                Program & Project Design
              </strong>{' '}
              <span className="text-slate-400 font-light">—</span>{' '}
              <span className="italic text-[#38d9c0] font-medium">
                "We have a mandate or funding window but need an implementable program."
              </span>{' '}
              <span className="text-[#38d9c0] font-bold mx-1">→</span>{' '}
              <span className="text-slate-300 font-normal">
                feasibility studies, theories of change, concepts, results frameworks, implementation and financing plans, risk registers, project-preparation support.
              </span>
            </motion.p>

            <motion.p
              id="finance-capital-mobilization-paragraph"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-left w-full text-lg sm:text-xl md:text-2xl leading-relaxed text-slate-200"
            >
              <strong className="font-bold text-white tracking-tight">
                Development Finance & Private Capital Mobilization
              </strong>{' '}
              <span className="text-slate-400 font-light">—</span>{' '}
              <span className="italic text-[#38d9c0] font-medium">
                "Public funding is insufficient; how do we make this investable?"
              </span>{' '}
              <span className="text-[#38d9c0] font-bold mx-1">→</span>{' '}
              <span className="text-slate-300 font-normal">
                investment cases, blended-finance strategy, PPP advisory, financial models, bankability assessments, climate-finance strategy, pipelines, market sounding, de-risking.
              </span>
            </motion.p>

            <motion.p
              id="institutions-governance-delivery-paragraph"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-left w-full text-lg sm:text-xl md:text-2xl leading-relaxed text-slate-200"
            >
              <strong className="font-bold text-white tracking-tight">
                Institutions, Governance & Delivery
              </strong>{' '}
              <span className="text-slate-400 font-light">—</span>{' '}
              <span className="italic text-[#38d9c0] font-medium">
                "A policy exists, but institutions cannot implement it consistently."
              </span>{' '}
              <span className="text-[#38d9c0] font-bold mx-1">→</span>{' '}
              <span className="text-slate-300 font-normal">
                institutional diagnostics, governance frameworks, PFM reform, delivery models, process redesign, capacity development, change management.
              </span>
            </motion.p>

            <motion.p
              id="mel-impact-paragraph"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-left w-full text-lg sm:text-xl md:text-2xl leading-relaxed text-slate-200"
            >
              <strong className="font-bold text-white tracking-tight">
                Monitoring, Evaluation, Learning & Impact
              </strong>{' '}
              <span className="text-slate-400 font-light">—</span>{' '}
              <span className="italic text-[#38d9c0] font-medium">
                "We need to know what is working, why, for whom, and whether it can scale."
              </span>{' '}
              <span className="text-[#38d9c0] font-bold mx-1">→</span>{' '}
              <span className="text-slate-300 font-normal">
                MEL frameworks, baselines, process/impact evaluations, learning agendas, outcome harvesting, dashboards, adaptive management.
              </span>
            </motion.p>

            <motion.p
              id="data-digital-ai-paragraph"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-left w-full text-lg sm:text-xl md:text-2xl leading-relaxed text-slate-200"
            >
              <strong className="font-bold text-white tracking-tight">
                Data, Digital & Responsible AI
              </strong>{' '}
              <span className="text-slate-400 font-light">—</span>{' '}
              <span className="italic text-[#38d9c0] font-medium">
                "We need to modernize systems without creating new governance, exclusion or accountability risks."
              </span>{' '}
              <span className="text-[#38d9c0] font-bold mx-1">→</span>{' '}
              <span className="text-slate-300 font-normal">
                DPI diagnostics, digital-government strategy, data governance, interoperability, AI readiness and governance, service design, digital inclusion.
              </span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* Unified Poly-Solutions Architecture & Eight Systems Master Section */}
      <PolySolutionsSection
        isOpen={isStoryOpen}
        onClose={handleCloseStory}
        activeThemeIndex={activeStoryThemeIndex}
        onThemeChange={handleThemeChange}
      />

      {/* Node Inspector Modal */}
      <NodeInspectorModal
        nodeId={inspectedNodeId}
        onClose={() => setInspectedNodeId(null)}
        onSelectAnotherNode={(nodeId) => setInspectedNodeId(nodeId)}
        onConsultDomain={(nodeId) => handleOpenConsultation(nodeId)}
      />

      {/* Strategic Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialDomain={consultationDomain}
      />
    </div>
  );
};
