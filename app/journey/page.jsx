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
  Check,
  FileText,
  Table,
  CheckSquare,
  Square
} from 'lucide-react';
import { journeyAPI } from '../utils/api';

export default function JourneyPage() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedLogs, setSelectedLogs] = useState([]);

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

  const handleExport = async (type) => {
    if (selectedLogs.length === 0) return;
    
    try {
      const payload = {
        userId: user.id,
        logIds: selectedLogs
      };

      const exportFn = type === 'excel' ? journeyAPI.exportExcel : journeyAPI.exportPdf;
      const response = await exportFn(payload);
      
      // Create a blob link to download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `journey.${type === 'excel' ? 'xlsx' : 'pdf'}`);
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(`Export to ${type} failed`, error);
    }
  };

  const toggleSelection = (id) => {
    setSelectedLogs(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    if (selectedLogs.length === logs.length && logs.length > 0) {
      setSelectedLogs([]);
    } else {
      setSelectedLogs(logs.map(l => l.id));
    }
  };

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
        setSelectedLogs(selectedLogs.filter(sid => sid !== id));
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
  const currentYear = new Date().getFullYear();
  const years = Array.from(new Set([
    currentYear,
    ...logs.map(log => new Date(log.learningDate).getFullYear())
  ])).sort((a, b) => b - a);

  // Calculate year progress (days active / total days)
  const logsInSelectedYear = logs.filter(l => new Date(l.learningDate).getFullYear() === selectedYear);
  const activeDaysCount = new Set(logsInSelectedYear.map(l => l.learningDate)).size;
  const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  const totalDaysInYear = isLeapYear(selectedYear) ? 366 : 365;
  const yearProgress = (activeDaysCount / totalDaysInYear) * 100;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-600/10 via-purple-600/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-white/5 pb-10"
        >
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tighter">
              Learning Journey
            </h1>
            <p className="text-slate-400 text-lg flex items-center gap-2 font-medium">
              <Activity className="w-5 h-5 text-blue-500" />
              Documenting the path to mastery.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center w-full lg:w-auto">
             {/* Stats Summary */}
             <div className="hidden sm:flex gap-3 mr-4">
                <div className="px-4 py-2 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center min-w-24">
                    <span className="text-2xl font-black text-white">{totalLogs}</span>
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Logs</span>
                </div>
                <div className="px-4 py-2 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center min-w-24">
                    <span className="text-2xl font-black text-white">{activeDaysCount}</span>
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Days</span>
                </div>
             </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowForm(!showForm)}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold shadow-2xl transition-all border ${
                showForm 
                ? 'bg-slate-800 border-white/10 text-white' 
                : 'bg-gradient-to-br from-blue-600 to-indigo-700 border-blue-400/20 text-white hover:shadow-blue-500/25'
              }`}
            >
              {showForm ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              {showForm ? 'Cancel Entry' : 'Log Today'}
            </motion.button>
          </div>
        </motion.div>

        {/* Heatmap Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900/40 backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden group"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 relative z-10">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20">
                    <Calendar className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">Contribution Graph</h2>
                    <p className="text-slate-500 text-sm font-medium">Activity in {selectedYear}</p>
                </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
                <div className="flex bg-black/40 rounded-xl p-1 border border-white/5 shadow-inner">
                    {years.map(year => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${
                                selectedYear === year 
                                ? 'bg-white/10 text-blue-400 shadow-xl' 
                                : 'text-slate-500 hover:text-slate-300'
                            }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>
                
                <div className="hidden lg:flex items-center gap-2 text-[10px] font-bold text-slate-600 uppercase tracking-widest bg-black/20 px-3 py-2 rounded-lg border border-white/5">
                    <span>Less</span>
                    <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-sm bg-slate-800" />
                        <div className="w-3 h-3 rounded-sm bg-emerald-900" />
                        <div className="w-3 h-3 rounded-sm bg-emerald-700" />
                        <div className="w-3 h-3 rounded-sm bg-emerald-500" />
                    </div>
                    <span>More</span>
                </div>
            </div>
          </div>
          
          <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
            <div className="min-w-[800px] px-2">
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
                  'data-tooltip-content': value.date ? `${new Date(value.date).toLocaleDateString(undefined, { dateStyle: 'full' })}: ${value.count} activity` : 'No contributions',
                })}
                showWeekdayLabels
                gutterSize={4}
              />
              <Tooltip id="heatmap-tooltip" style={{ backgroundColor: "#0f172a", color: "#f8fafc", borderRadius: "12px", border: "1px solid #334155", fontWeight: "bold" }} />
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
          
          <div className="flex flex-col items-center gap-4 mb-16 relative z-10">
             <div className="px-6 py-2 bg-slate-900 border border-white/5 rounded-full shadow-xl">
                <span className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">Timeline</span>
             </div>
             
             {logs.length > 0 && (
               <div className="flex items-center gap-6">
                  <button 
                    onClick={selectAll}
                    className={`flex items-center gap-2 text-xs font-bold transition-all px-4 py-2 rounded-lg border ${
                        selectedLogs.length === logs.length && logs.length > 0
                        ? 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                        : 'bg-black/20 border-white/5 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {selectedLogs.length === logs.length && logs.length > 0 ? <CheckSquare className="w-4 h-4"/> : <Square className="w-4 h-4"/>}
                    {selectedLogs.length === logs.length && logs.length > 0 ? 'Deselect All' : 'Select All for Export'}
                  </button>
                  
                  {selectedLogs.length > 0 && (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[10px] font-black text-blue-500 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20"
                      >
                        Export Mode Active
                      </motion.div>
                  )}
               </div>
             )}
          </div>

          {logs.map((log, index) => {
            const isSelected = selectedLogs.includes(log.id);
            return (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.05 }}
                className={`relative flex flex-col md:flex-row gap-8 group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Node & Line Segment */}
                <div className="absolute left-6 md:left-1/2 w-5 h-5 bg-slate-950 border-[3px] border-blue-500 rounded-full z-20 transform -translate-x-1.5 md:-translate-x-1/2 mt-8 shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-transform duration-500 group-hover:scale-125"></div>

                {/* Date (Desktop Side) */}
                <div className="hidden md:block md:w-1/2 text-right pt-8 px-12">
                   <div className={`transition-all duration-500 ${isSelected ? 'opacity-100 scale-110' : 'opacity-40 group-hover:opacity-100'}`}>
                      <div className={`text-2xl font-black text-white ${index % 2 !== 0 ? 'text-left' : 'text-right'}`}>
                          {new Date(log.learningDate).toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}
                      </div>
                      <div className={`text-sm font-mono font-bold text-blue-500 ${index % 2 !== 0 ? 'text-left' : 'text-right'}`}>
                          {new Date(log.learningDate).getFullYear()}
                      </div>
                   </div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 md:w-1/2 pl-16 md:pl-0 transition-all duration-500 ${isSelected ? 'scale-[1.03] z-10' : 'group-hover:scale-[1.01]'}`}>
                  {/* Mobile Date */}
                  <div className="md:hidden mb-3 pl-1 flex items-center gap-3">
                      <span className="text-xl font-black text-white">
                          {new Date(log.learningDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                      </span>
                      <span className="h-px flex-1 bg-white/10"></span>
                  </div>

                  <div className={`
                    bg-slate-900/40 backdrop-blur-xl p-8 rounded-[2rem] border transition-all duration-500 relative overflow-hidden
                    ${isSelected 
                      ? 'border-blue-500/50 bg-blue-500/5 shadow-[0_0_50px_rgba(59,130,246,0.2)] ring-1 ring-blue-500/20' 
                      : 'border-white/5 hover:border-blue-500/30 shadow-2xl group-hover:bg-slate-900/60'
                    }
                  `}>
                      {/* Selection UI */}
                      <div className={`absolute top-6 right-6 z-30 transition-all duration-300 ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                        <button 
                          onClick={() => toggleSelection(log.id)}
                          className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 transition-all shadow-lg ${
                            isSelected 
                            ? 'bg-blue-600 border-blue-400 text-white rotate-0' 
                            : 'bg-black/40 border-white/10 text-transparent hover:border-blue-500 -rotate-12 hover:rotate-0'
                          }`}
                        >
                          <Check className="w-6 h-6" />
                        </button>
                      </div>

                      {/* Difficulty Stripe */}
                      <div className={`absolute top-0 left-0 w-1.5 h-full transition-colors duration-500 ${
                          log.difficulty <= 2 ? 'bg-emerald-500' : log.difficulty === 3 ? 'bg-amber-500' : 'bg-rose-500'
                      }`} />

                      <div className="flex justify-between items-start mb-6 pr-12">
                          <div className="flex flex-wrap items-center gap-3">
                              <span className="px-4 py-1.5 rounded-xl text-[10px] font-black bg-white/5 text-blue-400 border border-white/10 uppercase tracking-[0.2em]">
                                {log.topic}
                              </span>
                              {log.subTopic && (
                                <span className="text-sm text-slate-500 font-bold tracking-tight">
                                  {log.subTopic}
                                </span>
                              )}
                          </div>
                      </div>

                      <p className="text-slate-300 leading-relaxed whitespace-pre-wrap text-lg font-medium mb-8 pr-4">
                          {log.content}
                      </p>

                      <div className="flex items-center justify-between mt-auto">
                        {/* Reference Section */}
                        {(log.referenceTitle || log.referenceLink) ? (
                            <div className="flex items-center gap-4 group/link">
                                <div className="w-10 h-10 rounded-2xl bg-black/40 flex items-center justify-center text-xl border border-white/5 group-hover/link:border-blue-500/50 transition-colors">
                                    {getPlatformIcon(log.platform)}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] text-slate-600 uppercase font-black tracking-widest">Resource</span>
                                    <a 
                                      href={log.referenceLink} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="text-sm text-blue-400/80 group-hover/link:text-blue-400 transition-colors font-bold truncate max-w-[150px] sm:max-w-xs"
                                    >
                                      {log.referenceTitle || 'View Resource'}
                                    </a>
                                </div>
                            </div>
                        ) : <div />}

                        <div className="flex items-center gap-4">
                            <div className={`flex flex-col items-end`}>
                                <span className="text-[9px] text-slate-600 uppercase font-black tracking-widest">Difficulty</span>
                                <span className={`text-sm font-black ${
                                    log.difficulty <= 2 ? 'text-emerald-400' : log.difficulty === 3 ? 'text-amber-400' : 'text-rose-400'
                                }`}>
                                    Level {log.difficulty}
                                </span>
                            </div>
                            <button 
                                onClick={() => handleDelete(log.id)}
                                className="p-3 text-slate-700 hover:text-rose-500 hover:bg-rose-500/10 rounded-2xl transition-all border border-transparent hover:border-rose-500/20"
                                title="Delete Entry"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                      </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

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

      {/* Floating Bulk Actions Bar */}
      <AnimatePresence>
        {selectedLogs.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-2xl"
          >
            <div className="bg-slate-900/80 backdrop-blur-2xl border border-blue-500/50 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg">
                  {selectedLogs.length}
                </div>
                <div className="hidden sm:block">
                  <div className="text-white font-bold text-sm">Items Selected</div>
                  <button onClick={() => setSelectedLogs([])} className="text-xs text-slate-400 hover:text-white transition-colors">Clear Selection</button>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleExport('excel')}
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-emerald-900/20"
                >
                  <Table className="w-4 h-4" />
                  <span className="hidden xs:inline">Excel</span>
                </button>
                <button
                  onClick={() => handleExport('pdf')}
                  className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-rose-900/20"
                >
                  <FileText className="w-4 h-4" />
                  <span className="hidden xs:inline">PDF</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Circular Progress Indicator */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="bg-slate-900/80 backdrop-blur-xl rounded-full shadow-2xl p-4 border border-white/10 group cursor-help">
          <div className="relative w-20 h-20">
            <svg className="w-20 h-20 transform -rotate-90">
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="currentColor"
                strokeWidth="6"
                fill="none"
                className="text-white/5"
              />
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="url(#progress-gradient)"
                strokeWidth="6"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 36}`}
                strokeDashoffset={`${2 * Math.PI * 36 * (1 - yearProgress / 100)}`}
                className="transition-all duration-1000 ease-out"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-black text-white leading-none">
                {Math.round(yearProgress)}%
              </span>
              <span className="text-[8px] uppercase font-bold text-slate-500 tracking-tighter">Yearly</span>
            </div>
          </div>
          
          {/* Hover Stats */}
          <div className="absolute bottom-full right-0 mb-4 w-48 opacity-0 group-hover:opacity-100 transition-all pointer-events-none translate-y-2 group-hover:translate-y-0">
            <div className="bg-slate-900 border border-white/10 rounded-2xl p-4 shadow-2xl">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Goal Progress</div>
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Active Days</span>
                        <span className="text-white font-bold">{activeDaysCount}</span>
                    </div>
                    <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full" style={{ width: `${yearProgress}%` }} />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}