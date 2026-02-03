"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Trophy, Play, RefreshCw, Award, ArrowRight } from "lucide-react";

export default function CinematicQuiz({ quizData, color = "blue" }) {
  const [gameState, setGameState] = useState("start"); // start, playing, result
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  if (!quizData || quizData.length === 0) return null;

  const handleStart = () => {
    setGameState("playing");
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  const handleAnswer = (index) => {
    if (showFeedback) return;
    
    setSelectedAnswer(index);
    setShowFeedback(true);
    
    if (index === quizData[currentQuestion].correct) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(c => c + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setGameState("result");
    }
  };

  return (
    <section className="scroll-mt-32 mt-32 relative">
      {/* Ambient Background Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-${color}-500/5 blur-3xl rounded-full pointer-events-none`} />

      <div className="relative z-10 p-1 rounded-[3rem] bg-gradient-to-b from-white/5 to-transparent shadow-2xl overflow-hidden backdrop-blur-sm border border-white/5">
        <div className="bg-slate-950/80 rounded-[2.8rem] min-h-[500px] flex flex-col items-center justify-center p-8 md:p-12 text-center relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {gameState === "start" && (
              <motion.div
                key="start"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                className="max-w-md w-full"
              >
                <div className={`w-24 h-24 mx-auto bg-${color}-500/10 rounded-full flex items-center justify-center mb-8 ring-4 ring-${color}-500/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] shadow-${color}-500/30`}>
                  <Trophy size={40} className={`text-${color}-400`} />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                  Mastery Check
                </h2>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                  Prove your knowledge. Are you ready to test your understanding of {quizData.length} key concepts?
                </p>
                <button
                  onClick={handleStart}
                  className={`group relative px-8 py-4 bg-${color}-600 hover:bg-${color}-500 text-white font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto overflow-hidden`}
                >
                  <span className="relative z-10 flex items-center gap-2">START CHALLENGE <ArrowRight size={18} /></span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </motion.div>
            )}

            {gameState === "playing" && (
              <motion.div
                key="playing"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="w-full max-w-2xl"
              >
                {/* Progress Bar */}
                <div className="w-full h-1 bg-slate-800 rounded-full mb-12 overflow-hidden">
                  <motion.div 
                    className={`h-full bg-${color}-500`} 
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion) / quizData.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 leading-snug">
                  {quizData[currentQuestion].question}
                </h3>

                <div className="grid gap-4 mb-10">
                  {quizData[currentQuestion].options.map((option, idx) => {
                    const isSelected = selectedAnswer === idx;
                    const isCorrect = idx === quizData[currentQuestion].correct;
                    const showResult = showFeedback;

                    let btnStyle = `bg-slate-900 border-white/5 hover:border-${color}-500/50 hover:bg-slate-800`;
                    if (showResult) {
                      if (isCorrect) btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-400";
                      else if (isSelected) btnStyle = "bg-rose-500/20 border-rose-500 text-rose-400";
                      else btnStyle = "bg-slate-900 border-white/5 opacity-50";
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        disabled={showFeedback}
                        className={`p-5 rounded-xl border text-left font-medium transition-all flex items-center justify-between group ${btnStyle} ${showFeedback ? '' : 'active:scale-[0.98]'}`}
                      >
                        <span className="flex-1">{option}</span>
                        {showResult && isCorrect && <CheckCircle2 size={20} className="text-emerald-400" />}
                        {showResult && isSelected && !isCorrect && <XCircle size={20} className="text-rose-400" />}
                      </button>
                    );
                  })}
                </div>

                <div className="h-12 flex justify-center">
                    <AnimatePresence>
                        {showFeedback && (
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            onClick={nextQuestion}
                            className={`px-8 py-3 bg-${color}-600 hover:bg-${color}-500 text-white rounded-xl font-bold transition-colors flex items-center gap-2`}
                        >
                            {currentQuestion < quizData.length - 1 ? 'Next Question' : 'See Results'} <ArrowRight size={16} />
                        </motion.button>
                        )}
                    </AnimatePresence>
                </div>
              </motion.div>
            )}

            {gameState === "result" && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md w-full"
              >
                <div className="mb-8 relative inline-block">
                    <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className={`w-32 h-32 rounded-full bg-gradient-to-br from-${color}-500 to-${color}-700 flex items-center justify-center text-5xl shadow-[0_0_60px_rgba(0,0,0,0.6)]`}
                    >
                        {score === quizData.length ? "👑" : score > quizData.length / 2 ? "🌟" : "🎓"}
                    </motion.div>
                </div>
                
                <h2 className="text-4xl font-black text-white mb-4">
                  {score === quizData.length ? "Perfect Score!" : "Quiz Complete!"}
                </h2>
                <p className="text-2xl text-${color}-400 font-bold mb-8">
                  You scored {score} / {quizData.length}
                </p>
                
                <p className="text-slate-400 mb-10 leading-relaxed">
                  {score === quizData.length 
                    ? "Incredible! You have mastered these concepts completely." 
                    : "Great effort! Review the sections above to fill in any gaps."}
                </p>

                <button
                  onClick={handleStart}
                  className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-colors flex items-center gap-2 mx-auto border border-white/5"
                >
                  <RefreshCw size={16} /> Try Again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
