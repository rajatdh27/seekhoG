import { useEffect } from "react";

export default function TableOfContents({ sections, activeSection, onSectionClick, language }) {
  useEffect(() => {
    const handleScroll = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200) {
            onSectionClick(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, onSectionClick]);

  return (
    <aside className="lg:w-64 lg:sticky lg:top-24 lg:self-start">
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
        <div className={`bg-gradient-to-r ${language.gradient} p-4`}>
          <h3 className="text-lg font-bold flex items-center gap-2">
            📚 Table of Contents
          </h3>
          <div className="text-sm text-white/80 mt-1">
            {language.icon} {language.name}
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSectionClick(section.id);
                    document.getElementById(section.id)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeSection === section.id
                      ? `bg-gradient-to-r ${language.gradient} text-white`
                      : "text-slate-400 hover:bg-slate-700/50 hover:text-slate-200"
                    }`}
                >
                  <span className="mr-2">{section.icon}</span>
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Progress */}
        <div className="p-4 border-t border-slate-700/50">
          <div className="flex justify-between text-xs text-slate-400 mb-2">
            <span>Progress</span>
            <span>{Math.round((sections.findIndex((s) => s.id === activeSection) + 1) / sections.length * 100)}%</span>
          </div>
          <div className="w-full bg-slate-700/50 rounded-full h-2">
            <div
              className={`bg-gradient-to-r ${language.gradient} h-2 rounded-full transition-all duration-300`}
              style={{ width: `${((sections.findIndex((s) => s.id === activeSection) + 1) / sections.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
