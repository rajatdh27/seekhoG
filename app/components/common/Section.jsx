export default function Section({ children, id }) {
  return (
    <section
      id={id}
      className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-8 scroll-mt-24"
    >
      {children}
    </section>
  );
}
