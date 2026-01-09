'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CalendarHeatmap from 'react-calendar-heatmap';
import { Tooltip } from 'react-tooltip';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Transition } from '@headlessui/react';
import 'react-calendar-heatmap/dist/styles.css';
import { 
  BookOpen, 
  Code2, 
  Trash2, 
  Plus, 
  Calendar, 
  Link as LinkIcon, 
  Smile, 
  Frown, 
  Meh,
  Activity,
  Trophy,
  Flame,
  X,
  ChevronDown,
  Check
} from 'lucide-react';
import { journeyAPI } from '../utils/api';

export default function JourneyPage() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Form State
  const [formData, setFormData] = useState({
    topic: 'DSA',
    subTopic: '',
    content: '',
    difficulty: 3,
    referenceLink: '',
    referenceTitle: '',
    platform: 'LeetCode',
    learningDate: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      fetchLogs(parsedUser.id);
    }
  }, []);

  // ... (keep fetchLogs, handleSubmit, handleDelete, getDifficultyColor, getPlatformIcon as is) ...

  const fetchLogs = async (userId) => {
    try {
      const { data, error } = await journeyAPI.getLogs(userId);
      if (data) setLogs(data);
    } catch (error) {
      console.error("Failed to fetch logs", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;

    try {
      const payload = {
        ...formData,
        userId: user.id
      };
      
      const { data, error } = await journeyAPI.saveLog(payload);
      if (data) {
        setLogs([data, ...logs]); // Optimistic update
        setShowForm(false);
        // Reset form (keep topic/date for convenience)
        setFormData({ ...formData, content: '', subTopic: '', referenceLink: '', referenceTitle: '' });
      }
    } catch (error) {
      console.error("Failed to save log", error);
    }
  };

  const handleDelete = async (id) => {
    if(!confirm("Are you sure you want to delete this entry?")) return;
    try {
      const { error } = await journeyAPI.deleteLog(id);
      if (!error) {
        setLogs(logs.filter(log => log.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete", error);
    }
  };

  const getDifficultyColor = (diff) => {
    if (diff <= 2) return "text-emerald-400 bg-emerald-400/10 border-emerald-400/20";
    if (diff === 3) return "text-amber-400 bg-amber-400/10 border-amber-400/20";
    return "text-rose-400 bg-rose-400/10 border-rose-400/20";
  };

  const getPlatformIcon = (platform) => {
    const p = platform?.toLowerCase() || '';
    if (p.includes('leetcode')) return '🟠';
    if (p.includes('github')) return '🐱';
    if (p.includes('youtube')) return '📺';
    if (p.includes('medium')) return '📝';
    if (p.includes('hackerrank')) return '🟩';
    return '🔗';
  };

  // Prepare heatmap data
  const heatmapValues = logs.map(log => ({
    date: log.learningDate,
    count: 1
  }));

  // Calculate stats
  const totalLogs = logs.length;
  const uniqueTopics = new Set(logs.map(log => log.topic)).size;
  
  // Calculate available years
  const years = Array.from(new Set([
    new Date().getFullYear(),
    ...logs.map(log => new Date(log.learningDate).getFullYear())
  ])).sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-end md:items-center gap-6"
        >
          <div>
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 tracking-tight">
              My Journey
            </h1>
            <p className="text-slate-400 text-lg flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-400" />
              Track your progress, one day at a time.
            </p>
          </div>
          
          <div className="flex gap-4">
             {/* Stats badges */}
             <div className="px-4 py-2 bg-slate-800/50 rounded-xl border border-slate-700/50 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-400" />
                <span className="font-bold text-slate-200">{totalLogs}</span>
                <span className="text-slate-500 text-sm">Entries</span>
             </div>
             <div className="px-4 py-2 bg-slate-800/50 rounded-xl border border-slate-700/50 flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-400" />
                <span className="font-bold text-slate-200">{uniqueTopics}</span>
                <span className="text-slate-500 text-sm">Topics</span>
             </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl font-bold shadow-lg shadow-blue-500/20 transition-all border border-blue-400/20"
            >
              {showForm ? (
                <>
                  <X className="w-5 h-5" /> Close
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5" /> New Entry
                </>
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Heatmap Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-800/80 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex items-center justify-between mb-6 relative z-10">
            <h2 className="text-xl font-bold text-slate-200 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-400" />
              {selectedYear} Activity
            </h2>
            
            <div className="flex items-center gap-4">
                <div className="text-xs text-slate-500 flex gap-2 items-center hidden md:flex">
                <span>Less</span>
                <div className="flex gap-1">
                    <div className="w-3 h-3 rounded bg-slate-800" />
                    <div className="w-3 h-3 rounded bg-emerald-900" />
                    <div className="w-3 h-3 rounded bg-emerald-700" />
                    <div className="w-3 h-3 rounded bg-emerald-500" />
                </div>
                <span>More</span>
                </div>

                <div className="flex bg-slate-950 rounded-lg p-1 border border-slate-800">
                    {years.map(year => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                                selectedYear === year 
                                ? 'bg-slate-800 text-blue-400 shadow-sm' 
                                : 'text-slate-500 hover:text-slate-300'
                            }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            </div>
          </div>
          
          <div className="w-full overflow-x-auto pb-2">
            <div className="min-w-[700px]">
              <CalendarHeatmap
                startDate={new Date(selectedYear, 0, 1)}
                endDate={new Date(selectedYear, 11, 31)}
                values={heatmapValues}
                classForValue={(value) => {
                  if (!value) return 'color-empty';
                  return `color-scale-${Math.min(value.count, 4)}`;
                }}
                tooltipDataAttrs={value => ({
                  'data-tooltip-id': 'heatmap-tooltip',
                  'data-tooltip-content': value.date ? `${new Date(value.date).toDateString()}: ${value.count} entries` : 'No activity',
                })}
                showWeekdayLabels
                gutterSize={3}
              />
              <Tooltip id="heatmap-tooltip" style={{ backgroundColor: "#1e293b", color: "#fff", borderRadius: "8px" }} />
            </div>
          </div>
        </motion.div>

        {/* Input Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              className="overflow-hidden"
            >
              <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-3xl border border-blue-500/30 shadow-2xl space-y-6 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                
                <h3 className="text-2xl font-bold text-white mb-6">Log Today's Progress</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Topic</label>
                    <Listbox value={formData.topic} onChange={(val) => setFormData({...formData, topic: val})}>
                      <div className="relative mt-1">
                        <ListboxButton className="relative w-full cursor-default rounded-xl bg-slate-950 py-4 pl-4 pr-10 text-left border border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm text-slate-200 transition-all">
                          <span className="block truncate">{formData.topic}</span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronDown className="h-5 w-5 text-slate-400" aria-hidden="true" />
                          </span>
                        </ListboxButton>
                        <Transition
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <ListboxOptions className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-slate-900 border border-slate-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {['DSA', 'Backend', 'Frontend', 'DevOps', 'System Design', 'Database', 'Cloud', 'Other'].map((topic, topicIdx) => (
                              <ListboxOption
                                key={topicIdx}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-3 pl-10 pr-4 ${
                                    active ? 'bg-blue-600/20 text-blue-200' : 'text-slate-300'
                                  }`
                                }
                                value={topic}
                              >
                                {({ selected }) => (
                                  <>
                                    <span className={`block truncate ${selected ? 'font-medium text-blue-400' : 'font-normal'}`}>
                                      {topic}
                                    </span>
                                    {selected ? (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-400">
                                        <Check className="h-5 w-5" aria-hidden="true" />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </ListboxOption>
                            ))}
                          </ListboxOptions>
                        </Transition>
                      </div>
                    </Listbox>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Sub-Topic</label>
                    <input 
                      type="text"
                      placeholder="e.g. Dynamic Programming, Docker..."
                      value={formData.subTopic}
                      onChange={(e) => setFormData({...formData, subTopic: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-slate-200 placeholder-slate-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Key Takeaways</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-slate-200 placeholder-slate-600 resize-none"
                    placeholder="What did you learn today? What challenged you?"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Reference Section - Optional */}
                  <div className="space-y-4 p-5 bg-slate-950/50 rounded-2xl border border-slate-800/50">
                    <h3 className="text-sm font-bold text-slate-300 flex items-center gap-2">
                      <LinkIcon className="w-4 h-4 text-blue-400" /> External Reference
                    </h3>
                    <div className="space-y-3">
                        <input 
                        type="text"
                        placeholder="Title (e.g. LeetCode 42)"
                        value={formData.referenceTitle}
                        onChange={(e) => setFormData({...formData, referenceTitle: e.target.value})}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm focus:border-blue-500 outline-none transition-colors"
                        />
                        <input 
                        type="url"
                        placeholder="Link (https://...)"
                        value={formData.referenceLink}
                        onChange={(e) => setFormData({...formData, referenceLink: e.target.value})}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm focus:border-blue-500 outline-none transition-colors"
                        />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Difficulty</label>
                    <div className="grid grid-cols-5 gap-2 bg-slate-950 rounded-2xl p-2 border border-slate-800">
                      {[1, 2, 3, 4, 5].map((level) => {
                        const isActive = formData.difficulty === level;
                        let colorClass = "bg-slate-800 text-slate-500 hover:bg-slate-700 hover:text-slate-300";
                        
                        if (isActive) {
                          if (level <= 2) colorClass = "bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]";
                          else if (level === 3) colorClass = "bg-amber-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.3)]";
                          else colorClass = "bg-rose-500 text-white shadow-[0_0_20px_rgba(244,63,94,0.3)]";
                        }

                        return (
                          <button
                            key={level}
                            type="button"
                            onClick={() => setFormData({...formData, difficulty: level})}
                            className={`
                              h-12 rounded-xl font-bold transition-all duration-300 text-lg flex items-center justify-center
                              ${colorClass}
                              ${isActive ? 'scale-105 z-10 ring-1 ring-white/20' : 'scale-100'}
                            `}
                          >
                            {level}
                          </button>
                        );
                      })}
                    </div>
                    <div className="flex justify-between px-2 text-xs font-bold tracking-widest opacity-80">
                        <span className="text-emerald-400">EASY</span>
                        <span className="text-amber-400 text-center pl-2">MED</span>
                        <span className="text-rose-400 text-right">HARD</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-slate-800">
                  <button type="submit" className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-bold text-white shadow-xl hover:shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                    Save Entry
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Timeline */}
        <div className="space-y-8 relative">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent hidden md:block transform -translate-x-1/2 rounded-full"></div>
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-800 md:hidden rounded-full"></div>
          
          <div className="text-center mb-12 relative z-10">
             <span className="px-6 py-2 bg-slate-900 border border-slate-700 rounded-full text-sm font-semibold text-slate-400 uppercase tracking-widest">Recent Activity</span>
          </div>

          {logs.map((log, index) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`relative flex flex-col md:flex-row gap-8 group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-slate-900 border-4 border-blue-500 rounded-full z-20 transform -translate-x-1.5 md:-translate-x-1/2 mt-6 shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>

              {/* Date (Desktop Side) */}
              <div className="hidden md:block md:w-1/2 text-right pt-6 px-12 opacity-60 group-hover:opacity-100 transition-opacity">
                 <div className={`text-2xl font-bold text-slate-200 ${index % 2 !== 0 ? 'text-left' : 'text-right'}`}>
                    {new Date(log.learningDate).toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}
                 </div>
                 <div className={`text-sm font-mono text-blue-400 ${index % 2 !== 0 ? 'text-left' : 'text-right'}`}>
                    {new Date(log.learningDate).getFullYear()}
                 </div>
              </div>

              {/* Content Card */}
              <div className="flex-1 md:w-1/2 pl-16 md:pl-0">
                {/* Mobile Date */}
                <div className="md:hidden mb-2 pl-1">
                    <span className="text-lg font-bold text-slate-200">
                        {new Date(log.learningDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                    </span>
                </div>

                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1">
                    {/* Difficulty Stripe */}
                    <div className={`absolute top-0 left-0 w-1 h-full ${
                        log.difficulty <= 2 ? 'bg-emerald-500' : log.difficulty === 3 ? 'bg-amber-500' : 'bg-rose-500'
                    }`} />

                    <div className="flex justify-between items-start mb-4 pl-2">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-800 text-blue-300 border border-slate-700 uppercase tracking-wider">
                            {log.topic}
                            </span>
                            {log.subTopic && (
                            <span className="text-sm text-slate-400 font-medium flex items-center gap-1">
                                <span className="text-slate-600">/</span> {log.subTopic}
                            </span>
                            )}
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase border ${getDifficultyColor(log.difficulty)}`}>
                                Lvl {log.difficulty}
                            </span>
                            <button 
                                onClick={() => handleDelete(log.id)}
                                className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                                title="Delete Entry"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <p className="text-slate-300 leading-relaxed whitespace-pre-wrap pl-2 text-base">
                        {log.content}
                    </p>

                    {/* Reference Section */}
                    {(log.referenceTitle || log.referenceLink) && (
                        <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-3 pl-2">
                            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-lg border border-slate-700">
                                {getPlatformIcon(log.platform)}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Resource</span>
                                <a 
                                href={log.referenceLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm text-blue-400 hover:text-blue-300 hover:underline font-medium truncate max-w-[200px] md:max-w-xs"
                                >
                                {log.referenceTitle || log.referenceLink}
                                </a>
                            </div>
                        </div>
                    )}
                </div>
              </div>
            </motion.div>
          ))}

          {logs.length === 0 && !loading && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Code2 className="w-10 h-10 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-300 mb-2">No Entries Yet</h3>
              <p className="text-slate-500 mb-8">Start your journey by adding your first learning log!</p>
              <button onClick={() => setShowForm(true)} className="text-blue-400 hover:text-blue-300 font-semibold">
                + Add First Entry
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}