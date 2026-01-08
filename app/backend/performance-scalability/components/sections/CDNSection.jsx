"use client";
import { motion } from "framer-motion";

export default function CDNSection() {
  const cdnProviders = [
    {
      name: "CloudFront (AWS)",
      icon: "☁️",
      features: ["225+ edge locations", "AWS integration", "Lambda@Edge", "Real-time logs"],
      pricing: "$0.085/GB",
      bestFor: "AWS-heavy infrastructure"
    },
    {
      name: "Cloudflare",
      icon: "🔶",
      features: ["Free tier available", "DDoS protection", "Workers (edge compute)", "Web firewall"],
      pricing: "Free - $200/mo",
      bestFor: "Small to enterprise, security focus"
    },
    {
      name: "Fastly",
      icon: "⚡",
      features: ["Instant purge", "Edge compute (VCL)", "Real-time analytics", "Image optimization"],
      pricing: "$0.12/GB",
      bestFor: "High-traffic, real-time content"
    },
    {
      name: "Akamai",
      icon: "🌐",
      features: ["Largest network", "Enterprise security", "Media delivery", "IoT support"],
      pricing: "Enterprise",
      bestFor: "Fortune 500, media companies"
    }
  ];

  const cdnBenefits = [
    {
      benefit: "Faster Load Times",
      icon: "⚡",
      desc: "Serve content from nearest location",
      improvement: "40-60% faster",
      example: "User in Tokyo gets content from Tokyo edge, not US origin"
    },
    {
      benefit: "Reduced Bandwidth Costs",
      icon: "💰",
      desc: "Offload traffic from origin servers",
      improvement: "60-90% less origin traffic",
      example: "Static assets cached at edge, not fetched from origin"
    },
    {
      benefit: "Better Availability",
      icon: "🛡️",
      desc: "Serve from cache if origin down",
      improvement: "99.99% uptime",
      example: "Users get cached content even during origin outages"
    },
    {
      benefit: "DDoS Protection",
      icon: "🔒",
      desc: "Absorb attack traffic at edge",
      improvement: "Protection from Tbps attacks",
      example: "Malicious traffic blocked before reaching origin"
    }
  ];

  const cachingStrategies = [
    {
      strategy: "Cache-Control Headers",
      desc: "Control how long content is cached",
      code: `Cache-Control: public, max-age=31536000, immutable
// Cache for 1 year, never revalidate

Cache-Control: public, max-age=3600, must-revalidate
// Cache for 1 hour, then check with origin

Cache-Control: no-store
// Never cache (sensitive data)`
    },
    {
      strategy: "Cache Invalidation",
      desc: "Clear cached content when updated",
      code: `// CloudFront invalidation
aws cloudfront create-invalidation \\
  --distribution-id E1234 \\
  --paths "/*" "/images/*"

// Versioned URLs (cache busting)
style.css?v=1.2.3
style.a8f3d2c.css  // Hash-based`
    },
    {
      strategy: "Edge Caching Rules",
      desc: "Custom caching behavior per path",
      code: `// Cache static assets for 1 year
/static/* → max-age=31536000

// Cache API responses for 5 minutes
/api/* → max-age=300

// Never cache dynamic pages
/dashboard/* → no-cache`
    }
  ];

  const edgeComputing = [
    {
      service: "CloudFront Functions",
      icon: "⚡",
      desc: "Lightweight edge compute (< 1ms)",
      useCases: ["URL rewrites", "Header manipulation", "A/B testing", "Auth checks"],
      code: `function handler(event) {
  var request = event.request;
  var uri = request.uri;

  // Rewrite /blog → /blog/index.html
  if (uri.endsWith('/')) {
    request.uri += 'index.html';
  }

  return request;
}`
    },
    {
      service: "Lambda@Edge",
      icon: "🔧",
      desc: "Full Lambda at edge (Node/Python)",
      useCases: ["Image resizing", "SEO optimization", "Personalization", "Complex auth"],
      code: `exports.handler = async (event) => {
  const response = event.Records[0].cf.response;

  // Add security headers
  response.headers['strict-transport-security'] = [{
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000'
  }];

  return response;
};`
    },
    {
      service: "Cloudflare Workers",
      icon: "👷",
      desc: "JavaScript at edge (V8 isolates)",
      useCases: ["API gateway", "HTML rewriting", "Load balancing", "Full apps"],
      code: `addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // Serve from cache or origin
  let response = await caches.default.match(request);

  if (!response) {
    response = await fetch(request);
    event.waitUntil(
      caches.default.put(request, response.clone())
    );
  }

  return response;
}`
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl">
          <span className="text-4xl">🌐</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            CDN & Edge Computing
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Content delivery networks, edge locations, and performance optimization
          </p>
        </div>
      </div>

      {/* What is CDN */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl border-l-4 border-cyan-600">
          <h3 className="text-2xl font-bold text-cyan-900 dark:text-cyan-100 mb-4">
            📡 What is a CDN?
          </h3>
          <p className="text-lg text-cyan-900 dark:text-cyan-100 mb-4">
            A <strong>Content Delivery Network</strong> is a geographically distributed network of servers that cache and deliver content from locations closest to users.
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <code className="text-sm">
              User (Tokyo) → Tokyo Edge Server (cache hit) → Fast! ⚡<br/>
              User (Tokyo) → US Origin Server (no CDN) → Slow... 🐌
            </code>
          </div>
        </div>
      </div>

      {/* CDN Benefits */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ✨ CDN Benefits
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {cdnBenefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl border-2 border-cyan-300 dark:border-cyan-700"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-4xl">{benefit.icon}</span>
                <h4 className="text-xl font-bold text-cyan-900 dark:text-cyan-100">{benefit.benefit}</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{benefit.desc}</p>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg mb-3">
                <p className="text-xs font-semibold text-green-900 dark:text-green-100">
                  📊 Improvement: {benefit.improvement}
                </p>
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  <strong>Example:</strong> {benefit.example}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CDN Providers */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🏢 Popular CDN Providers
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {cdnProviders.map((cdn, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{cdn.icon}</span>
                  <h4 className="text-lg font-bold text-blue-900 dark:text-blue-100">{cdn.name}</h4>
                </div>
                <span className="text-xs bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">{cdn.pricing}</span>
              </div>

              <div className="mb-3">
                <p className="text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">Features:</p>
                <div className="grid grid-cols-2 gap-1">
                  {cdn.features.map((feature, i) => (
                    <span key={i} className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded">
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded">
                <p className="text-xs"><strong>Best for:</strong> {cdn.bestFor}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CDN Caching Strategies */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🗃️ CDN Caching Strategies
        </h3>
        <div className="space-y-6">
          {cachingStrategies.map((strategy, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-xl border border-cyan-200 dark:border-cyan-800"
            >
              <div className="p-5 border-b border-cyan-200 dark:border-cyan-800">
                <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">{strategy.strategy}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{strategy.desc}</p>
              </div>
              <div className="bg-slate-900 p-4 rounded-b-xl">
                <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">{strategy.code}</pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Edge Computing */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚡ Edge Computing
        </h3>
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl border-l-4 border-cyan-600 mb-6">
          <p className="text-lg text-cyan-900 dark:text-cyan-100">
            Run code at edge locations (closer to users) for faster response times and dynamic content generation
          </p>
        </div>

        <div className="space-y-6">
          {edgeComputing.map((edge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-300 dark:border-blue-700"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-4xl">{edge.icon}</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">{edge.service}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{edge.desc}</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-blue-700 dark:text-blue-400 mb-2">Use Cases:</p>
                    <div className="flex flex-wrap gap-2">
                      {edge.useCases.map((useCase, i) => (
                        <span key={i} className="text-xs bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg">
                    <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">{edge.code}</pre>
                  </div>
                </div>
              </div>
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
            <span>CDNs drastically improve load times (40-60%) by serving content from nearest edge location</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-600 dark:text-cyan-400 mt-1">•</span>
            <span>Use appropriate Cache-Control headers: long TTL for static assets, short for dynamic content</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-600 dark:text-cyan-400 mt-1">•</span>
            <span>Edge computing allows running code at CDN edge for dynamic personalization and faster processing</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-600 dark:text-cyan-400 mt-1">•</span>
            <span>CDNs provide DDoS protection and improved availability as bonus benefits</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
