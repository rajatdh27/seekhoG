"use client";
import { motion } from "framer-motion";

export default function SearchEnginesSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl">
          <span className="text-4xl">🔍</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Search Engines
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Elasticsearch, Full-text search, and Relevance
          </p>
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-8 rounded-xl border-l-4 border-teal-600 mb-8">
        <h3 className="text-2xl font-bold text-teal-900 dark:text-teal-100 mb-4">🔍 Full-Text Search</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          <strong>Full-text search</strong> engines allow users to search for text within documents, providing features like relevance scoring, fuzzy matching, and advanced query capabilities.
        </p>
        <p className="text-slate-700 dark:text-slate-300">
          Unlike database LIKE queries, search engines are optimized for text search with features like tokenization, stemming, and inverted indexes.
        </p>
      </div>

      {/* Elasticsearch Basics */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">📦 Elasticsearch Index Creation</h4>
        <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`// Create an index with mappings
PUT /products
{
  "settings": {
    "number_of_shards": 3,
    "number_of_replicas": 2,
    "analysis": {
      "analyzer": {
        "custom_analyzer": {
          "type": "custom",
          "tokenizer": "standard",
          "filter": ["lowercase", "stop", "snowball"]
        }
      }
    }
  },
  "mappings": {
    "properties": {
      "name": {
        "type": "text",
        "analyzer": "custom_analyzer"
      },
      "description": {
        "type": "text",
        "analyzer": "custom_analyzer"
      },
      "price": {
        "type": "float"
      },
      "category": {
        "type": "keyword"
      },
      "tags": {
        "type": "keyword"
      },
      "created_at": {
        "type": "date"
      },
      "in_stock": {
        "type": "boolean"
      }
    }
  }
}

// Index a document
POST /products/_doc/1
{
  "name": "Laptop Pro 15",
  "description": "High-performance laptop with 16GB RAM",
  "price": 1299.99,
  "category": "electronics",
  "tags": ["laptop", "computer", "portable"],
  "created_at": "2025-01-15T10:00:00Z",
  "in_stock": true
}`}
        </pre>
      </div>

      {/* Search Queries */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">🔎 Elasticsearch Query Examples</h4>
        <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`// Simple match query
GET /products/_search
{
  "query": {
    "match": {
      "name": "laptop"
    }
  }
}

// Multi-field search
GET /products/_search
{
  "query": {
    "multi_match": {
      "query": "gaming laptop",
      "fields": ["name^2", "description"],
      "type": "best_fields"
    }
  }
}

// Boolean query (combining conditions)
GET /products/_search
{
  "query": {
    "bool": {
      "must": [
        { "match": { "category": "electronics" } }
      ],
      "filter": [
        { "term": { "in_stock": true } },
        { "range": { "price": { "lte": 2000 } } }
      ],
      "should": [
        { "match": { "tags": "discount" } }
      ],
      "must_not": [
        { "match": { "name": "refurbished" } }
      ]
    }
  }
}

// Fuzzy search (typo tolerance)
GET /products/_search
{
  "query": {
    "fuzzy": {
      "name": {
        "value": "laptp",
        "fuzziness": "AUTO"
      }
    }
  }
}

// Aggregations (analytics)
GET /products/_search
{
  "size": 0,
  "aggs": {
    "categories": {
      "terms": { "field": "category" }
    },
    "avg_price": {
      "avg": { "field": "price" }
    },
    "price_ranges": {
      "range": {
        "field": "price",
        "ranges": [
          { "to": 500 },
          { "from": 500, "to": 1000 },
          { "from": 1000 }
        ]
      }
    }
  }
}

// Autocomplete / Search-as-you-type
GET /products/_search
{
  "query": {
    "match_phrase_prefix": {
      "name": {
        "query": "lap",
        "max_expansions": 10
      }
    }
  }
}`}
        </pre>
      </div>

      {/* Node.js Client */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">🟢 Elasticsearch Client (Node.js)</h4>
        <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`import { Client } from '@elastic/elasticsearch';

const client = new Client({
  node: 'http://localhost:9200',
  auth: {
    username: 'elastic',
    password: 'password'
  }
});

// Index a document
async function indexProduct(product) {
  const result = await client.index({
    index: 'products',
    id: product.id,
    document: product
  });
  return result;
}

// Search products
async function searchProducts(query) {
  const result = await client.search({
    index: 'products',
    query: {
      multi_match: {
        query: query,
        fields: ['name^2', 'description']
      }
    },
    size: 20,
    from: 0,
    sort: [
      { _score: 'desc' },
      { created_at: 'desc' }
    ]
  });

  return result.hits.hits.map(hit => ({
    ...hit._source,
    score: hit._score
  }));
}

// Update a document
async function updateProduct(id, updates) {
  await client.update({
    index: 'products',
    id: id,
    doc: updates
  });
}

// Delete a document
async function deleteProduct(id) {
  await client.delete({
    index: 'products',
    id: id
  });
}

// Bulk indexing
async function bulkIndexProducts(products) {
  const operations = products.flatMap(product => [
    { index: { _index: 'products', _id: product.id } },
    product
  ]);

  const result = await client.bulk({
    refresh: true,
    operations
  });

  return result;
}`}
        </pre>
      </div>

      {/* Search Concepts */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
          <div className="text-4xl mb-4">🔤</div>
          <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">Tokenization</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            Breaking text into searchable tokens (words)
          </p>
          <code className="text-xs bg-blue-100 dark:bg-blue-950 p-2 rounded block">
            "Hello World" → ["hello", "world"]
          </code>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
          <div className="text-4xl mb-4">🌱</div>
          <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">Stemming</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            Reducing words to their root form
          </p>
          <code className="text-xs bg-green-100 dark:bg-green-950 p-2 rounded block">
            "running" → "run"<br/>
            "runner" → "run"
          </code>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
          <div className="text-4xl mb-4">📊</div>
          <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">TF-IDF</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            Relevance scoring algorithm
          </p>
          <code className="text-xs bg-purple-100 dark:bg-purple-950 p-2 rounded block">
            Term Frequency × Inverse Document Frequency
          </code>
        </div>
      </div>

      {/* Alternative: Algolia */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">⚡ Alternative: Algolia</h4>
        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          Algolia is a hosted search-as-a-service platform optimized for speed and developer experience.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">Advantages</h5>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
              <li>Lightning-fast search (&lt;50ms)</li>
              <li>Typo tolerance built-in</li>
              <li>Easy to integrate</li>
              <li>No infrastructure management</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-orange-700 dark:text-orange-400 mb-2">Considerations</h5>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
              <li>Cost increases with usage</li>
              <li>Vendor lock-in</li>
              <li>Less flexible than Elasticsearch</li>
              <li>Limited customization</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl">
        <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">⭐ Search Best Practices</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">✅ DO</h5>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
                <li>Use analyzers for text processing</li>
                <li>Implement pagination properly</li>
                <li>Add filters before full-text search</li>
                <li>Use highlighting for results</li>
                <li>Monitor query performance</li>
                <li>Implement autocomplete/suggestions</li>
              </ul>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-red-700 dark:text-red-400 mb-2">❌ DON'T</h5>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
                <li>Use wildcards at the beginning (*term)</li>
                <li>Return all documents (use pagination)</li>
                <li>Ignore relevance scoring</li>
                <li>Over-complicate queries</li>
                <li>Skip index optimization</li>
                <li>Forget to handle typos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
