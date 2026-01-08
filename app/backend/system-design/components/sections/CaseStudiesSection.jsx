"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState("url-shortener");

  const tabs = [
    { id: "url-shortener", label: "URL Shortener", icon: "🔗" },
    { id: "twitter", label: "Twitter", icon: "🐦" },
    { id: "instagram", label: "Instagram", icon: "📸" },
    { id: "netflix", label: "Netflix", icon: "🎬" },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
          <span className="text-4xl">📚</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Design Case Studies
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Real-world system design examples
          </p>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex flex-wrap gap-2 bg-slate-100 dark:bg-slate-900 p-2 rounded-xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105"
                  : "bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Tab Content */}
      <div className="space-y-8">
        {activeTab === "url-shortener" && (
          <motion.div
            key="url-shortener"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl border-l-4 border-blue-600 mb-8">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">🔗 Design URL Shortener (like bit.ly)</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Design a service that takes long URLs and generates short, unique aliases.
              </p>
            </div>

            {/* Requirements */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
                <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4">Functional Requirements</h4>
                <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2 list-disc list-inside">
                  <li>Generate short URL from long URL</li>
                  <li>Redirect short URL to original URL</li>
                  <li>Custom short URLs (optional)</li>
                  <li>Link expiration (optional)</li>
                  <li>Analytics (click tracking)</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
                <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">Non-Functional Requirements</h4>
                <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2 list-disc list-inside">
                  <li>High availability (99.99%)</li>
                  <li>Low latency (&lt;100ms)</li>
                  <li>Read-heavy (100:1 ratio)</li>
                  <li>No duplicate short URLs</li>
                  <li>Scalable to billions of URLs</li>
                </ul>
              </div>
            </div>

            {/* Capacity Estimation */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🔢 Capacity Estimation</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`Assumptions:
- 500M new URLs per month
- 100:1 read/write ratio
- URL stored for 5 years

Traffic:
- Write: 500M / (30 days × 86400) ≈ 200 URLs/sec
- Read: 200 × 100 = 20,000 redirects/sec

Storage:
- 500 bytes per URL record (original + short + metadata)
- Monthly: 500M × 500 bytes = 250 GB
- 5 years: 250 GB × 12 × 5 = 15 TB

Bandwidth:
- Write: 200 URLs/sec × 500 bytes = 100 KB/sec
- Read: 20K × 500 bytes = 10 MB/sec

Short URL length:
- Base62 encoding (A-Z, a-z, 0-9) = 62 characters
- 6 characters = 62^6 = 56 billion combinations
- 7 characters = 62^7 = 3.5 trillion combinations`}
              </pre>
            </div>

            {/* Design */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🏗️ High-Level Design</h4>
              <pre className="text-xs font-mono text-cyan-400 overflow-auto whitespace-pre">
{`┌─────────┐
│  User   │
└────┬────┘
     │
     ▼
┌──────────────┐
│ Load Balancer│
└──────┬───────┘
       │
       ▼
┌──────────────────┐      ┌──────────────┐
│  API Servers     │─────▶│    Cache     │
│                  │      │   (Redis)    │
└──────┬───────────┘      └──────────────┘
       │
       ▼
┌──────────────────┐      ┌──────────────┐
│   Database       │      │   Counter    │
│  (PostgreSQL/    │      │   Service    │
│   Cassandra)     │      │  (Zookeeper) │
└──────────────────┘      └──────────────┘

API Design:
POST /api/shorten
{
  "longUrl": "https://example.com/very/long/url",
  "customAlias": "mylink" // optional
}
Response: { "shortUrl": "https://short.ly/abc123" }

GET /{shortCode}
→ 301 Redirect to original URL`}
              </pre>
            </div>

            {/* Key Generation */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">🔑 Short URL Generation Strategies</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-2">1. Hash-based (MD5/SHA)</h5>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Hash long URL, take first 6-7 characters
                  </p>
                  <code className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded block">
                    ✗ Collisions possible<br/>
                    ✓ No DB lookup for generation
                  </code>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">2. Counter-based</h5>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Auto-increment counter, encode to base62
                  </p>
                  <code className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded block">
                    ✓ No collisions<br/>
                    ✓ Shorter URLs<br/>
                    ✗ Predictable
                  </code>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-purple-700 dark:text-purple-400 mb-2">3. Random Generation</h5>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Generate random string, check uniqueness
                  </p>
                  <code className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded block">
                    ✓ Unpredictable<br/>
                    ✗ Need uniqueness check
                  </code>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-orange-700 dark:text-orange-400 mb-2">4. Key Generation Service (KGS)</h5>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Pre-generate keys, store in database
                  </p>
                  <code className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded block">
                    ✓ Fast, no collisions<br/>
                    ✓ Best for high scale
                  </code>
                </div>
              </div>
            </div>

            {/* Deep Dive */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">🎯 Deep Dive Topics</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li><strong>Cache Strategy:</strong> Cache popular short URLs in Redis (80/20 rule)</li>
                <li><strong>Database Choice:</strong> Cassandra for write-heavy, PostgreSQL with read replicas</li>
                <li><strong>Analytics:</strong> Use message queue (Kafka) to async process clicks</li>
                <li><strong>Rate Limiting:</strong> Prevent abuse, limit URLs per user/IP</li>
                <li><strong>Custom URLs:</strong> Check availability, reserve namespace</li>
                <li><strong>Expiration:</strong> TTL in database, cleanup jobs for expired URLs</li>
              </ul>
            </div>
          </motion.div>
        )}

        {activeTab === "twitter" && (
          <motion.div
            key="twitter"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-xl border-l-4 border-blue-600 mb-8">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">🐦 Design Twitter</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Design a microblogging platform with timeline, tweets, follows, and real-time updates.
              </p>
            </div>

            {/* Capacity */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🔢 Scale & Requirements</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`Scale:
- 500M users, 200M DAU
- 400M tweets/day (4,600 tweets/sec, peak: 10K/sec)
- Each user follows 200 people avg
- Timeline reads: 10:1 read/write ratio

Requirements:
✓ Post tweets (text, images, videos)
✓ Follow/unfollow users
✓ View timeline (home, user profile)
✓ Like, retweet, reply
✓ Search tweets
✓ Trending topics
✓ Real-time notifications`}
              </pre>
            </div>

            {/* Architecture */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🏗️ Architecture</h4>
              <pre className="text-xs font-mono text-cyan-400 overflow-auto whitespace-pre">
{`┌──────────────────────────────────────────────────┐
│              CDN (Images, Videos)                │
└──────────────────────────────────────────────────┘
                         │
┌─────────┐      ┌──────▼───────┐      ┌──────────┐
│  Users  │─────▶│Load Balancer │─────▶│   API    │
└─────────┘      └──────────────┘      │ Gateway  │
                                        └────┬─────┘
                         ┌──────────────────┼──────────────────┐
                         ▼                  ▼                  ▼
                  ┌────────────┐    ┌────────────┐    ┌────────────┐
                  │   Tweet    │    │  Timeline  │    │   User     │
                  │  Service   │    │  Service   │    │  Service   │
                  └─────┬──────┘    └─────┬──────┘    └─────┬──────┘
                        │                 │                  │
        ┌───────────────┼─────────────────┼──────────────────┘
        ▼               ▼                 ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│  PostgreSQL  │ │    Redis     │ │  Cassandra   │
│  (Users,     │ │  (Timeline   │ │  (Tweets,    │
│   Graphs)    │ │   Cache)     │ │   Time-      │
│              │ │              │ │   series)    │
└──────────────┘ └──────────────┘ └──────────────┘

Message Queue (Kafka)
  ├─ Tweet fanout to followers
  ├─ Notifications
  └─ Analytics`}
              </pre>
            </div>

            {/* Timeline Generation */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">📰 Timeline Generation Strategies</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Fan-out on Write (Push)</h5>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    When user tweets, push to all followers' timelines
                  </p>
                  <code className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded block mb-2">
                    ✓ Fast reads (pre-computed)<br/>
                    ✗ Slow writes (many followers)<br/>
                    ✗ Storage intensive
                  </code>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Use for: Regular users with &lt;10K followers
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">Fan-out on Read (Pull)</h5>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Fetch tweets from all following users at read time
                  </p>
                  <code className="text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded block mb-2">
                    ✓ Fast writes<br/>
                    ✗ Slow reads (merge from many users)<br/>
                    ✓ No duplicate storage
                  </code>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Use for: Celebrities with millions of followers
                  </p>
                </div>
              </div>
              <div className="mt-4 bg-amber-100 dark:bg-amber-900/30 p-4 rounded-lg">
                <p className="text-sm font-bold text-amber-900 dark:text-amber-100 mb-2">Hybrid Approach (Best):</p>
                <ul className="text-xs text-slate-700 dark:text-slate-300 list-disc list-inside">
                  <li>Fan-out on write for regular users (&lt;10K followers)</li>
                  <li>Fan-out on read for celebrities (&gt;10K followers)</li>
                  <li>Merge both at read time, cache aggressively</li>
                </ul>
              </div>
            </div>

            {/* Key Design Decisions */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">🎯 Key Design Decisions</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li><strong>Database:</strong> Cassandra for tweets (time-series), PostgreSQL for users/graphs</li>
                <li><strong>Cache:</strong> Redis for timelines (in-memory sorted sets by timestamp)</li>
                <li><strong>Search:</strong> Elasticsearch for full-text search, trending topics</li>
                <li><strong>Media:</strong> S3 for storage, CDN for delivery</li>
                <li><strong>Notifications:</strong> WebSockets for real-time, Firebase Cloud Messaging for mobile</li>
                <li><strong>Message Queue:</strong> Kafka for async fanout, analytics, notifications</li>
              </ul>
            </div>
          </motion.div>
        )}

        {activeTab === "instagram" && (
          <motion.div
            key="instagram"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-8 rounded-xl border-l-4 border-pink-600 mb-8">
              <h3 className="text-2xl font-bold text-pink-900 dark:text-pink-100 mb-4">📸 Design Instagram</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Design a photo-sharing platform with feed, stories, and social features.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
                <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">Core Features</h4>
                <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2 list-disc list-inside">
                  <li>Upload photos/videos</li>
                  <li>Follow users</li>
                  <li>News feed (timeline)</li>
                  <li>Like, comment on posts</li>
                  <li>Stories (24h expiry)</li>
                  <li>Direct messaging</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
                <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">Scale</h4>
                <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2 list-disc list-inside">
                  <li>2 billion users</li>
                  <li>500M DAU</li>
                  <li>100M photos/day</li>
                  <li>Average photo: 2MB</li>
                  <li>Read-heavy (100:1)</li>
                </ul>
              </div>
            </div>

            {/* Storage */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">💾 Storage Strategy</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`Photo Storage:
- Original: 2MB avg
- Thumbnails: 200KB, 50KB, 20KB
- Total per photo: ~2.3MB
- Daily: 100M × 2.3MB = 230TB/day
- Yearly: 230TB × 365 = 84PB/year

Storage Solution:
┌────────────────────────────────────┐
│ S3 / Object Storage                │
│                                    │
│ Bucket Structure:                  │
│ /photos/{userId}/{photoId}/        │
│   - original.jpg                   │
│   - thumb_large.jpg                │
│   - thumb_medium.jpg               │
│   - thumb_small.jpg                │
└────────────────────────────────────┘
         │
         ▼
┌────────────────────────────────────┐
│ CDN (CloudFront, CloudFlare)       │
│ - Cache images globally            │
│ - Reduce origin load by 90%+      │
└────────────────────────────────────┘

Metadata Database:
PostgreSQL/Cassandra:
- photo_id, user_id, caption
- upload_time, location
- likes_count, comments_count
- s3_urls (original, thumbnails)`}
              </pre>
            </div>

            {/* Feed Generation */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-4">📱 Feed Generation</h4>
              <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Ranked Feed Algorithm</h5>
                  <p className="mb-2">Instagram uses ML to rank posts based on:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Recency (newer posts scored higher)</li>
                    <li>Relationship (close friends, frequent interactions)</li>
                    <li>Interest (similar to previously liked content)</li>
                    <li>Engagement (predicted likes, comments, shares)</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">Feed Generation Process</h5>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Fetch recent posts from followed users (last 7 days)</li>
                    <li>Score each post using ML model</li>
                    <li>Sort by score</li>
                    <li>Cache top 50 posts in Redis</li>
                    <li>Return paginated results</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Architecture */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">🏗️ Key Components</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li><strong>Upload Service:</strong> Process images (resize, compress), generate thumbnails, upload to S3</li>
                <li><strong>Feed Service:</strong> Generate personalized feeds using ML ranking</li>
                <li><strong>Notification Service:</strong> Real-time likes, comments, follows via WebSockets</li>
                <li><strong>Stories Service:</strong> Auto-expire after 24h, separate storage from posts</li>
                <li><strong>Search Service:</strong> Elasticsearch for users, hashtags, places</li>
                <li><strong>Recommendation Engine:</strong> Suggest users to follow, content discovery</li>
              </ul>
            </div>
          </motion.div>
        )}

        {activeTab === "netflix" && (
          <motion.div
            key="netflix"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-xl border-l-4 border-red-600 mb-8">
              <h3 className="text-2xl font-bold text-red-900 dark:text-red-100 mb-4">🎬 Design Netflix</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Design a video streaming platform with recommendation, encoding, and global CDN.
              </p>
            </div>

            {/* Scale */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">📊 Scale & Challenges</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`Scale:
- 230M+ subscribers worldwide
- 15,000+ titles
- Streaming 1 billion hours/week
- 15% of global internet bandwidth

Challenges:
- Massive bandwidth requirements
- Global content delivery (<2s start time)
- Multiple video qualities (240p to 4K)
- Personalized recommendations
- Download for offline viewing
- Multiple device support`}
              </pre>
            </div>

            {/* Video Processing */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">🎥 Video Processing Pipeline</h4>
              <pre className="text-xs font-mono bg-white dark:bg-slate-800 p-4 rounded-lg overflow-auto whitespace-pre">
{`1. Upload Original Video
   │
   ▼
2. Transcode to Multiple Formats
   ├─ 4K (3840×2160) @ 25 Mbps
   ├─ 1080p @ 5 Mbps
   ├─ 720p @ 3 Mbps
   ├─ 480p @ 1.5 Mbps
   └─ 240p @ 0.5 Mbps
   │
   ▼
3. Adaptive Bitrate Encoding (ABR)
   - Split into chunks (2-10 seconds)
   - Create manifest file (MPD/M3U8)
   - Client adapts quality based on bandwidth
   │
   ▼
4. Store in Object Storage (S3)
   │
   ▼
5. Distribute to CDN (CloudFront, Akamai)
   - Edge locations worldwide
   - Cache popular content close to users`}
              </pre>
            </div>

            {/* CDN Strategy */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">🌐 Netflix CDN Strategy (Open Connect)</h4>
              <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Edge Caching</h5>
                  <p>Netflix places servers directly in ISP data centers:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Reduces network hops</li>
                    <li>Lowers ISP bandwidth costs</li>
                    <li>Improves streaming quality</li>
                    <li>Predictive caching (overnight downloads of popular content)</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">Viewing Patterns</h5>
                  <ul className="list-disc list-inside space-y-1">
                    <li>80% of viewing is from catalog (not new releases)</li>
                    <li>Pre-cache popular shows during off-peak hours</li>
                    <li>Regional popularity differs → regional caching</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Architecture */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">🎯 Key Services</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li><strong>Video Service:</strong> Metadata, thumbnails, preview clips</li>
                <li><strong>Streaming Service:</strong> ABR delivery, quality adaptation</li>
                <li><strong>Recommendation Engine:</strong> ML-based personalized suggestions</li>
                <li><strong>User Service:</strong> Profiles, watch history, preferences</li>
                <li><strong>Playback Service:</strong> Resume watching, progress tracking</li>
                <li><strong>Download Service:</strong> Offline viewing, DRM management</li>
                <li><strong>Analytics:</strong> Watch patterns, A/B testing, thumbnails</li>
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
