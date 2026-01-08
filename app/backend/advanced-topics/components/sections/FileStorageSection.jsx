"use client";
import { motion } from "framer-motion";

export default function FileStorageSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">
          <span className="text-4xl">📁</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            File Storage
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            S3, Object storage, and File uploads
          </p>
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-xl border-l-4 border-green-600 mb-8">
        <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">📁 Object Storage</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          <strong>Object storage</strong> systems like AWS S3 store files as objects with metadata, offering scalable, durable, and cost-effective storage for unstructured data.
        </p>
        <p className="text-slate-700 dark:text-slate-300">
          Unlike traditional file systems, object storage uses a flat namespace with unique keys, making it ideal for cloud applications.
        </p>
      </div>

      {/* Storage Options */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
          <div className="text-4xl mb-4">☁️</div>
          <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3">AWS S3</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            Industry-standard object storage with 99.999999999% durability
          </p>
          <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
            <li>• Unlimited scalability</li>
            <li>• Storage classes for cost optimization</li>
            <li>• Lifecycle policies</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
          <div className="text-4xl mb-4">🌊</div>
          <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">Google Cloud Storage</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            Google's object storage with strong consistency
          </p>
          <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
            <li>• Multi-regional availability</li>
            <li>• Integration with GCP services</li>
            <li>• Nearline/Coldline storage</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
          <div className="text-4xl mb-4">📦</div>
          <h4 className="text-xl font-bold text-cyan-900 dark:text-cyan-100 mb-3">Azure Blob Storage</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            Microsoft's object storage solution
          </p>
          <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
            <li>• Hot, Cool, Archive tiers</li>
            <li>• Azure integration</li>
            <li>• Hierarchical namespace</li>
          </ul>
        </div>
      </div>

      {/* AWS S3 Example */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">☁️ AWS S3 SDK (Node.js)</h4>
        <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

// Upload file to S3
async function uploadFile(file, key) {
  const command = new PutObjectCommand({
    Bucket: 'my-bucket',
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype,
    Metadata: {
      originalName: file.originalname,
      uploadedBy: 'user-123'
    }
  });

  const result = await s3Client.send(command);
  return result;
}

// Download file from S3
async function downloadFile(key) {
  const command = new GetObjectCommand({
    Bucket: 'my-bucket',
    Key: key
  });

  const result = await s3Client.send(command);
  return result.Body;
}

// Generate presigned URL for direct upload
async function getUploadUrl(key, expiresIn = 3600) {
  const command = new PutObjectCommand({
    Bucket: 'my-bucket',
    Key: key
  });

  const url = await getSignedUrl(s3Client, command, { expiresIn });
  return url;
}

// Generate presigned URL for direct download
async function getDownloadUrl(key, expiresIn = 3600) {
  const command = new GetObjectCommand({
    Bucket: 'my-bucket',
    Key: key
  });

  const url = await getSignedUrl(s3Client, command, { expiresIn });
  return url;
}

// Delete file from S3
async function deleteFile(key) {
  const command = new DeleteObjectCommand({
    Bucket: 'my-bucket',
    Key: key
  });

  await s3Client.send(command);
}

// List files in bucket
async function listFiles(prefix = '') {
  const command = new ListObjectsV2Command({
    Bucket: 'my-bucket',
    Prefix: prefix,
    MaxKeys: 100
  });

  const result = await s3Client.send(command);
  return result.Contents;
}`}
        </pre>
      </div>

      {/* Direct Upload with Presigned URL */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">📤 Direct Upload Pattern (Presigned URLs)</h4>
        <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`// Backend: Generate presigned URL
app.post('/api/upload/url', async (req, res) => {
  const { filename, contentType } = req.body;
  const key = \`uploads/\${req.user.id}/\${Date.now()}-\${filename}\`;

  // Generate presigned URL for direct client upload
  const uploadUrl = await getSignedUrl(
    s3Client,
    new PutObjectCommand({
      Bucket: 'my-bucket',
      Key: key,
      ContentType: contentType
    }),
    { expiresIn: 300 } // 5 minutes
  );

  res.json({
    uploadUrl,
    key,
    expiresIn: 300
  });
});

// Frontend: Upload directly to S3
async function uploadFileDirectly(file) {
  // 1. Get presigned URL from backend
  const response = await fetch('/api/upload/url', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      filename: file.name,
      contentType: file.type
    })
  });

  const { uploadUrl, key } = await response.json();

  // 2. Upload directly to S3 (bypasses your server)
  await fetch(uploadUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': file.type
    },
    body: file
  });

  // 3. Notify backend that upload is complete
  await fetch('/api/files', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      key,
      filename: file.name,
      size: file.size,
      type: file.type
    })
  });

  return key;
}

// Benefits:
// - No file goes through your server (saves bandwidth)
// - Faster uploads (direct to S3)
// - Scales better`}
        </pre>
      </div>

      {/* Multer File Upload */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">📁 Traditional Upload with Multer</h4>
        <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`import multer from 'multer';
import multerS3 from 'multer-s3';

// Configure multer to upload directly to S3
const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: 'my-bucket',
    metadata: (req, file, cb) => {
      cb(null, {
        fieldName: file.fieldname,
        uploadedBy: req.user?.id || 'anonymous'
      });
    },
    key: (req, file, cb) => {
      const key = \`uploads/\${req.user.id}/\${Date.now()}-\${file.originalname}\`;
      cb(null, key);
    }
  }),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    // Accept only images
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only images are allowed'));
    }
  }
});

// Single file upload
app.post('/api/upload', upload.single('file'), async (req, res) => {
  const file = req.file;

  // Save file metadata to database
  const fileRecord = await db.file.create({
    data: {
      key: file.key,
      filename: file.originalname,
      size: file.size,
      contentType: file.mimetype,
      url: file.location,
      userId: req.user.id
    }
  });

  res.json(fileRecord);
});

// Multiple files upload
app.post('/api/upload/multiple', upload.array('files', 5), async (req, res) => {
  const files = req.files;

  const fileRecords = await db.file.createMany({
    data: files.map(file => ({
      key: file.key,
      filename: file.originalname,
      size: file.size,
      contentType: file.mimetype,
      url: file.location,
      userId: req.user.id
    }))
  });

  res.json(fileRecords);
});`}
        </pre>
      </div>

      {/* Storage Classes */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">💾 S3 Storage Classes</h4>
        <div className="space-y-3">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">S3 Standard</h5>
            <p className="text-sm text-slate-700 dark:text-slate-300">Frequently accessed data • Low latency • $$$$</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-2">S3 Intelligent-Tiering</h5>
            <p className="text-sm text-slate-700 dark:text-slate-300">Automatic cost optimization • Unknown access patterns • $$$</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-purple-700 dark:text-purple-400 mb-2">S3 Standard-IA</h5>
            <p className="text-sm text-slate-700 dark:text-slate-300">Infrequent access • Backups, disaster recovery • $$</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-orange-700 dark:text-orange-400 mb-2">S3 Glacier</h5>
            <p className="text-sm text-slate-700 dark:text-slate-300">Archival • Minutes to hours retrieval • $</p>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl">
        <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">⭐ File Storage Best Practices</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">✅ DO</h5>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
                <li>Use presigned URLs for direct uploads</li>
                <li>Implement file size limits</li>
                <li>Validate file types on both client and server</li>
                <li>Use CDN for public files</li>
                <li>Implement lifecycle policies</li>
                <li>Enable versioning for important data</li>
                <li>Use proper access controls (IAM, bucket policies)</li>
              </ul>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-red-700 dark:text-red-400 mb-2">❌ DON'T</h5>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
                <li>Store files on application server disk</li>
                <li>Make all S3 buckets public</li>
                <li>Skip virus/malware scanning</li>
                <li>Use predictable file keys</li>
                <li>Forget to set CORS for direct uploads</li>
                <li>Store sensitive data without encryption</li>
                <li>Ignore storage costs (use lifecycle policies)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
