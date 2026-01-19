"use client";

import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Code2, Check, Copy } from "lucide-react";
import { useState } from "react";

const CodeBlock = ({ code, language, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-slate-950/70 backdrop-blur-md border border-slate-700/50 rounded-2xl shadow-lg overflow-hidden my-6"
    >
      <div className="flex justify-between items-center px-4 py-2 bg-slate-800/50">
        <div className="flex items-center gap-2">
          <Code2 size={16} className="text-purple-400" />
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">{title || language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-700/50 hover:bg-slate-700 text-slate-400 text-xs font-semibold transition-colors disabled:opacity-50"
          disabled={copied}
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{ 
          backgroundColor: 'transparent', 
          fontSize: '0.8rem',
          lineHeight: '1.5',
          padding: '1.5rem'
        }}
        codeTagProps={{
          className: 'font-mono'
        }}
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </motion.div>
  );
};

export default CodeBlock;