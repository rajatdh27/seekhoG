"use client";

import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import TableOfContents from "@/app/components/common/TableOfContents";
import SectionSkeleton from "@/app/components/common/SectionSkeleton";
import ProgressIndicator from "@/app/components/common/ProgressIndicator";

// Eager load the first section
import DockerSection from "./components/sections/DockerSection";

// Lazy load other sections
const KubernetesSection = lazy(() => import("./components/sections/KubernetesSection"));
const CICDSection = lazy(() => import("./components/sections/CICDSection"));
const CloudPlatformsSection = lazy(() => import("./components/sections/CloudPlatformsSection"));

const sections = [
  { id: "docker", title: "Docker & Containers", component: DockerSection },
  { id: "kubernetes", title: "Kubernetes Orchestration", component: KubernetesSection },
  { id: "cicd", title: "CI/CD Pipelines", component: CICDSection },
  { id: "cloud-platforms", title: "Cloud Platforms", component: CloudPlatformsSection },
];

export default function CloudDevOpsPage() {
  const [activeSection, setActiveSection] = useState("docker");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 dark:from-sky-700 dark:via-blue-800 dark:to-indigo-700 text-white py-16 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="text-6xl">☁️</div>
            <h1 className="text-5xl md:text-6xl font-bold">Cloud & DevOps</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-sky-100 max-w-3xl"
          >
            Master Docker, Kubernetes, CI/CD pipelines, and cloud platforms for modern application deployment!
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 mt-8"
          >
            <a
              href="#docker"
              className="px-6 py-3 bg-white text-sky-600 rounded-lg font-semibold hover:bg-sky-50 transition-colors"
            >
              Start Learning
            </a>
            <a
              href="#kubernetes"
              className="px-6 py-3 bg-sky-700 text-white rounded-lg font-semibold hover:bg-sky-800 transition-colors border border-sky-500"
            >
              Kubernetes
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents */}
          <aside className="lg:w-64 lg:sticky lg:top-4 lg:self-start">
            <TableOfContents
              sections={sections}
              activeSection={activeSection}
              onSectionClick={setActiveSection}
            />
          </aside>

          {/* Content Sections */}
          <main className="flex-1 space-y-16 min-w-0 overflow-hidden">
            {sections.map((section, index) => {
              const Component = section.component;
              return (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={index === 0 ? { opacity: 1, y: 0 } : undefined}
                  whileInView={index === 0 ? undefined : { opacity: 1, y: 0 }}
                  viewport={index === 0 ? undefined : { once: true, margin: "0px" }}
                  transition={{ duration: 0.5 }}
                  className="scroll-mt-20"
                >
                  {index === 0 ? (
                    <Component />
                  ) : (
                    <Suspense fallback={<SectionSkeleton />}>
                      <Component />
                    </Suspense>
                  )}
                </motion.section>
              );
            })}
          </main>
        </div>
      </div>

      {/* Circular Progress Indicator */}
      <ProgressIndicator
        sections={sections}
        activeSection={activeSection}
        colorClass="sky-600"
        colorClassDark="sky-500"
      />
    </div>
  );
}
