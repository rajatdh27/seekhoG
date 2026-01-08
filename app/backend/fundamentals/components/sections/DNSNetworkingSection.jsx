"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function DNSNetworkingSection() {
  const [domainInput, setDomainInput] = useState("example.com");
  const [showDNSLookup, setShowDNSLookup] = useState(false);

  const handleDNSLookup = () => {
    setShowDNSLookup(true);
    setTimeout(() => setShowDNSLookup(false), 4000);
  };

  const dnsSteps = [
    { step: "1", title: "Browser Cache", desc: "Check if IP is cached locally", icon: "💻" },
    { step: "2", title: "OS Cache", desc: "Check operating system's DNS cache", icon: "🖥️" },
    { step: "3", title: "Router", desc: "Query your router's DNS cache", icon: "📡" },
    { step: "4", title: "ISP DNS", desc: "Ask ISP's recursive DNS server", icon: "🌐" },
    { step: "5", title: "Root Server", desc: "Query root nameservers (.)", icon: "🌍" },
    { step: "6", title: "TLD Server", desc: "Query .com/.org TLD servers", icon: "🏢" },
    { step: "7", title: "Authoritative", desc: "Get IP from domain's nameserver", icon: "🎯" },
    { step: "8", title: "Return IP", desc: "IP address returned to browser", icon: "✅" }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl">
          <span className="text-4xl">🌐</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            DNS & Networking
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            The internet's phonebook and how computers communicate
          </p>
        </div>
      </div>

      {/* What is DNS */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl border-l-4 border-cyan-600">
          <h3 className="text-2xl font-bold text-cyan-900 dark:text-cyan-100 mb-4">
            🎯 What is DNS?
          </h3>
          <p className="text-lg text-cyan-900 dark:text-cyan-100 mb-4">
            <strong>DNS (Domain Name System)</strong> is like the internet's phonebook. It translates human-readable domain names
            (like google.com) into machine-readable IP addresses (like 142.250.185.46) that computers use to communicate.
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <p className="font-mono text-sm">
              <strong>example.com → DNS → 93.184.216.34 → Website loads!</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Interactive DNS Lookup */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎬 Interactive DNS Lookup Simulator
        </h3>
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-8 rounded-xl">
          <label className="block text-sm font-semibold mb-3 text-slate-700 dark:text-slate-300">
            Enter a domain name:
          </label>
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              value={domainInput}
              onChange={(e) => setDomainInput(e.target.value)}
              className="flex-1 px-4 py-3 border-2 border-cyan-300 dark:border-cyan-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="example.com"
            />
            <button
              onClick={handleDNSLookup}
              className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all"
            >
              Lookup DNS
            </button>
          </div>

          {showDNSLookup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3"
            >
              {dnsSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.3 }}
                  className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-cyan-300 dark:border-cyan-700 flex items-center gap-4"
                >
                  <div className="text-3xl">{step.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100">
                      Step {step.step}: {step.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{step.desc}</p>
                  </div>
                  {idx === dnsSteps.length - 1 && (
                    <div className="bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded text-green-700 dark:text-green-400 font-mono text-sm">
                      192.0.2.1
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}

          {!showDNSLookup && (
            <div className="text-center text-slate-500 dark:text-slate-400 py-8">
              Click "Lookup DNS" to see how DNS resolution works step by step
            </div>
          )}
        </div>
      </div>

      {/* DNS Record Types */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          📋 DNS Record Types
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              type: "A",
              name: "Address Record",
              desc: "Maps domain to IPv4 address",
              example: "example.com → 93.184.216.34",
              color: "blue"
            },
            {
              type: "AAAA",
              name: "IPv6 Address",
              desc: "Maps domain to IPv6 address",
              example: "example.com → 2606:2800:220:1::",
              color: "cyan"
            },
            {
              type: "CNAME",
              name: "Canonical Name",
              desc: "Alias one domain to another",
              example: "www.example.com → example.com",
              color: "purple"
            },
            {
              type: "MX",
              name: "Mail Exchange",
              desc: "Specifies mail servers",
              example: "example.com → mail.example.com",
              color: "green"
            },
            {
              type: "TXT",
              name: "Text Record",
              desc: "Store text information",
              example: "SPF, DKIM, domain verification",
              color: "yellow"
            },
            {
              type: "NS",
              name: "Name Server",
              desc: "Delegates subdomain to nameservers",
              example: "example.com → ns1.nameserver.com",
              color: "orange"
            }
          ].map((record, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className={`bg-gradient-to-br from-${record.color}-50 to-${record.color}-100 dark:from-${record.color}-900/20 dark:to-${record.color}-800/20 p-5 rounded-xl border border-${record.color}-200 dark:border-${record.color}-800`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className={`px-3 py-1 bg-${record.color}-600 text-white rounded font-mono font-bold text-sm`}>
                  {record.type}
                </div>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">{record.name}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{record.desc}</p>
              <div className="bg-white/50 dark:bg-slate-800/50 p-2 rounded">
                <code className="text-xs">{record.example}</code>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* OSI Model */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🏗️ OSI Model - 7 Layers of Networking
        </h3>
        <div className="space-y-3">
          {[
            { layer: "7", name: "Application", desc: "HTTP, FTP, SMTP, DNS", purpose: "User interaction", icon: "👤", color: "red" },
            { layer: "6", name: "Presentation", desc: "Encryption, Compression", purpose: "Data formatting", icon: "🔄", color: "orange" },
            { layer: "5", name: "Session", desc: "Session management", purpose: "Connection control", icon: "🔗", color: "yellow" },
            { layer: "4", name: "Transport", desc: "TCP, UDP", purpose: "End-to-end delivery", icon: "🚚", color: "green" },
            { layer: "3", name: "Network", desc: "IP, Routing", purpose: "Addressing & routing", icon: "🗺️", color: "blue" },
            { layer: "2", name: "Data Link", desc: "MAC, Switches", purpose: "Node-to-node transfer", icon: "🔌", color: "indigo" },
            { layer: "1", name: "Physical", desc: "Cables, Signals", purpose: "Physical transmission", icon: "⚡", color: "purple" }
          ].map((layer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`bg-gradient-to-r from-${layer.color}-50 to-${layer.color}-100 dark:from-${layer.color}-900/30 dark:to-${layer.color}-800/30 p-4 rounded-xl border-l-4 border-${layer.color}-500 flex items-center gap-4`}
            >
              <div className="text-4xl">{layer.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className={`px-2 py-1 bg-${layer.color}-600 text-white rounded font-bold text-sm`}>
                    Layer {layer.layer}
                  </span>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">{layer.name}</h4>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-slate-600 dark:text-slate-400">{layer.purpose}</span>
                  <span className="text-slate-500 dark:text-slate-500">|</span>
                  <code className="text-xs bg-white/50 dark:bg-slate-800/50 px-2 py-1 rounded">{layer.desc}</code>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* TCP vs UDP */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚖️ TCP vs UDP
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-800/30 p-6 rounded-xl border-2 border-green-300 dark:border-green-700"
          >
            <h4 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4 flex items-center gap-2">
              <span>🤝</span> TCP
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              <strong>Transmission Control Protocol</strong> - Reliable, connection-oriented
            </p>
            <ul className="space-y-2 text-sm mb-4">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Reliable:</strong> Guarantees delivery</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Ordered:</strong> Packets arrive in order</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Error checking:</strong> Detects & retransmits lost packets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>3-way handshake:</strong> Establishes connection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span><strong>Slower:</strong> Overhead for reliability</span>
              </li>
            </ul>
            <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded-lg">
              <p className="text-sm font-semibold mb-1">Use cases:</p>
              <p className="text-xs">HTTP, HTTPS, Email (SMTP), File Transfer (FTP), SSH</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-800/30 p-6 rounded-xl border-2 border-orange-300 dark:border-orange-700"
          >
            <h4 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4 flex items-center gap-2">
              <span>⚡</span> UDP
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              <strong>User Datagram Protocol</strong> - Fast, connectionless
            </p>
            <ul className="space-y-2 text-sm mb-4">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Fast:</strong> Low overhead</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>No connection:</strong> Fire and forget</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Broadcasting:</strong> Send to multiple receivers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span><strong>Unreliable:</strong> No delivery guarantee</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span><strong>Unordered:</strong> Packets may arrive out of order</span>
              </li>
            </ul>
            <div className="bg-orange-100 dark:bg-orange-900/40 p-3 rounded-lg">
              <p className="text-sm font-semibold mb-1">Use cases:</p>
              <p className="text-xs">Video streaming, VoIP, Gaming, DNS queries, Live broadcasts</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* IP Addresses */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔢 IP Addresses
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">IPv4</h4>
            <div className="space-y-3">
              <div className="bg-white dark:bg-slate-800 p-3 rounded">
                <code className="text-lg font-mono">192.168.1.1</code>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• 32-bit address (4 bytes)</li>
                <li>• 4 octets (0-255 each)</li>
                <li>• ~4.3 billion addresses</li>
                <li>• Running out of addresses</li>
              </ul>
              <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded mt-3">
                <p className="text-xs font-semibold mb-1">Private ranges:</p>
                <code className="text-xs">10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16</code>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
            <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">IPv6</h4>
            <div className="space-y-3">
              <div className="bg-white dark:bg-slate-800 p-3 rounded">
                <code className="text-sm font-mono">2001:0db8:85a3::8a2e:0370:7334</code>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• 128-bit address (16 bytes)</li>
                <li>• 8 groups of 4 hex digits</li>
                <li>• 340 undecillion addresses</li>
                <li>• Future of internet addressing</li>
              </ul>
              <div className="bg-purple-100 dark:bg-purple-900/40 p-3 rounded mt-3">
                <p className="text-xs font-semibold mb-1">Benefits:</p>
                <p className="text-xs">More addresses, built-in security (IPsec), no NAT needed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Common Ports */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🚪 Common Network Ports
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { port: "20/21", service: "FTP", desc: "File Transfer" },
            { port: "22", service: "SSH", desc: "Secure Shell" },
            { port: "23", service: "Telnet", desc: "Unsecure remote login" },
            { port: "25", service: "SMTP", desc: "Email sending" },
            { port: "53", service: "DNS", desc: "Domain Name System" },
            { port: "80", service: "HTTP", desc: "Web traffic" },
            { port: "443", service: "HTTPS", desc: "Secure web traffic" },
            { port: "3306", service: "MySQL", desc: "MySQL database" },
            { port: "5432", service: "PostgreSQL", desc: "PostgreSQL database" },
            { port: "27017", service: "MongoDB", desc: "MongoDB database" },
            { port: "6379", service: "Redis", desc: "Redis cache" },
            { port: "3000", service: "Node.js", desc: "Common dev server" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
              className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-xl border border-cyan-200 dark:border-cyan-800"
            >
              <div className="flex items-center justify-between mb-2">
                <code className="text-lg font-bold text-cyan-700 dark:text-cyan-400">{item.port}</code>
                <span className="text-xs bg-cyan-200 dark:bg-cyan-800 px-2 py-1 rounded">{item.service}</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800">
        <h3 className="text-xl font-semibold mb-4 text-cyan-900 dark:text-cyan-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-cyan-600 dark:text-cyan-400 mt-1">•</span>
            <span>DNS translates domain names to IP addresses - it's the internet's phonebook</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-600 dark:text-cyan-400 mt-1">•</span>
            <span>The OSI model has 7 layers from Physical (cables) to Application (HTTP, FTP)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-600 dark:text-cyan-400 mt-1">•</span>
            <span>TCP is reliable but slower (web, email), UDP is fast but unreliable (streaming, gaming)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-600 dark:text-cyan-400 mt-1">•</span>
            <span>IPv4 addresses are running out (4.3B), IPv6 provides 340 undecillion addresses</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
