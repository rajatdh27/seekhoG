export default function CodeBlock({ children, title }) {
  return (
    <div className="bg-slate-950/80 rounded-xl p-6 mb-6 border border-slate-800">
      {title && (
        <div className="text-sm font-bold text-yellow-400 mb-3">
          💻 {title}
        </div>
      )}
      <div className="overflow-x-auto">
        <pre className="text-sm">
          <code className="text-green-400">{children}</code>
        </pre>
      </div>
    </div>
  );
}
