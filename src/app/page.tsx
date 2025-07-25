"use client";

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AnimatedDivider from '@/components/AnimatedDivider';
import { SignatureResidences } from '@/components/SignatureResidences';
import { GridBackgroundWrapper } from '@/components/backgrounds/GridBackgroundWrapper';
import { DotBackgroundWrapper } from '@/components/backgrounds/DotBackgroundWrapper';
import { SpotlightBackgroundWrapper } from '@/components/backgrounds/SpotlightBackgroundWrapper';
import { NewLaunchesGrid } from '@/components/NewLaunches';
import { EmaarDistinctionsScroll } from '@/components/EmaarDistinctions';
import { emaarDistinctionsArray } from '@/lib/constants';
import { SeeWhatPeopleSay } from '@/components/InfiniteMovingCards';
import { FeaturedCommunities3DCard } from '@/components/FeaturedCommunities';
import { BuildingScrollAnimation } from '@/components/BuildingScrollAnimation';
import { Footer } from '@/components/Footer';
import { ModeToggle } from '@/components/shared/ToggleMode';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />

      {/* Featured Properties */}
      <SpotlightBackgroundWrapper className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Signature Residences
              </motion.h2>
              <AnimatedDivider />
              <motion.p
                className="text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Curated selection of exclusive properties designed for the discerning few
              </motion.p>
            </div>
            <SignatureResidences />
          </div>
        </div>
      </SpotlightBackgroundWrapper>

      <DotBackgroundWrapper className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              New
            </motion.h2>
            <AnimatedDivider />
            <motion.p
              className="text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The latest developments from Emaar
            </motion.p>
            <NewLaunchesGrid />
          </div>
        </div>
      </DotBackgroundWrapper>

      {/* Premium Features */}
      <DotBackgroundWrapper className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              The Emaar Distinction
            </motion.h2>
            <AnimatedDivider />
            <motion.p
              className="text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Unparalleled amenities and services that redefine luxury living
            </motion.p>
            <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {emaarDistinctionsArray.map((item) => (
                <EmaarDistinctionsScroll
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  gradient={item.gradient}
                  category={item.category}
                />
              ))}
            </div>
          </div>
        </div>
      </DotBackgroundWrapper>

      {/* Neighborhoods */}
      <GridBackgroundWrapper className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Iconic communities
            </motion.h2>
            <AnimatedDivider />
            <motion.p
              className="text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Master-planned communities designed for extraordinary living experiences
            </motion.p>
            <FeaturedCommunities3DCard />
          </div>
        </div>
      </GridBackgroundWrapper>

      {/* Testimonials */}
      <GridBackgroundWrapper className="py-20 dark:bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Resident Experiences
            </motion.h2>
            <AnimatedDivider />
            <motion.p
              className="text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Dreams Built by Emaar, Told by You
            </motion.p>
          </div>

        </div>
        <SeeWhatPeopleSay />
      </GridBackgroundWrapper>

      {/* CTA Section */}
      <section className="py-5 dark:bg-black">
        <BuildingScrollAnimation />
      </section>

      <Footer />

      <div className="fixed bottom-25 right-9 z-50">
        <ModeToggle />
      </div>
    </div>
  );
}
