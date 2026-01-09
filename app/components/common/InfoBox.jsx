export default function InfoBox({ children, type = "info" }) {
  const colors = {
    info: "bg-blue-500/10 border-blue-500/30 text-blue-300",
    success: "bg-green-500/10 border-green-500/30 text-green-300",
    warning: "bg-yellow-500/10 border-yellow-500/30 text-yellow-300",
  };

  return (
    <div className={`${colors[type]} border rounded-xl p-6 mb-6`}>
      {children}
    </div>
  );
}
