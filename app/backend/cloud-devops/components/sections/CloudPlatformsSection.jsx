"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CloudPlatformsSection() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: "📋" },
    { id: "aws", label: "AWS", icon: "🟠" },
    { id: "azure", label: "Azure", icon: "🔵" },
    { id: "gcp", label: "GCP", icon: "🔴" },
    { id: "comparison", label: "Comparison", icon: "⚖️" }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
          <span className="text-4xl">☁️</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Cloud Platforms
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            AWS, Azure, GCP - major cloud service providers
          </p>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 dark:border-slate-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 font-semibold rounded-t-lg transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-8">
        {activeTab === "overview" && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl border-l-4 border-purple-600 mb-8">
              <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">☁️ Cloud Computing Platforms</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                Cloud platforms provide on-demand computing resources, allowing you to build, deploy, and scale applications without managing physical infrastructure.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                The "Big Three" cloud providers - AWS, Azure, and GCP - dominate the market, each offering hundreds of services across compute, storage, databases, networking, AI/ML, and more.
              </p>
            </div>

            {/* The Big Three */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  name: "AWS",
                  icon: "🟠",
                  fullName: "Amazon Web Services",
                  share: "~32%",
                  launched: "2006",
                  color: "orange",
                  strength: "Largest ecosystem, most services"
                },
                {
                  name: "Azure",
                  icon: "🔵",
                  fullName: "Microsoft Azure",
                  share: "~23%",
                  launched: "2010",
                  color: "blue",
                  strength: "Enterprise integration, hybrid cloud"
                },
                {
                  name: "GCP",
                  icon: "🔴",
                  fullName: "Google Cloud Platform",
                  share: "~10%",
                  launched: "2008",
                  color: "red",
                  strength: "Data analytics, ML, Kubernetes"
                }
              ].map((platform, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-gradient-to-br from-${platform.color}-50 to-white dark:from-${platform.color}-900/20 dark:to-slate-800 p-6 rounded-xl border-2 border-${platform.color}-200 dark:border-${platform.color}-700`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r from-${platform.color}-400 to-${platform.color}-600 rounded-xl flex items-center justify-center mb-4`}>
                    <span className="text-3xl">{platform.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">{platform.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{platform.fullName}</p>
                  <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                    <p><strong>Market Share:</strong> {platform.share}</p>
                    <p><strong>Launched:</strong> {platform.launched}</p>
                    <p><strong>Key Strength:</strong> {platform.strength}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Core Service Categories */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-gray-900/50 p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">🏗️ Core Service Categories</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: "🖥️", name: "Compute", desc: "Virtual machines, containers, serverless" },
                  { icon: "💾", name: "Storage", desc: "Object, block, file storage systems" },
                  { icon: "🗄️", name: "Databases", desc: "Relational, NoSQL, in-memory databases" },
                  { icon: "🌐", name: "Networking", desc: "VPC, load balancers, CDN, DNS" },
                  { icon: "🤖", name: "AI/ML", desc: "Machine learning, computer vision, NLP" },
                  { icon: "🔐", name: "Security", desc: "IAM, encryption, DDoS protection" }
                ].map((category, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                    <div className="text-3xl mb-2">{category.icon}</div>
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">{category.name}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{category.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud Benefits */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
                <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4">✅ Benefits</h4>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Scalability:</strong> Scale resources up/down on demand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Cost-Effective:</strong> Pay only for what you use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Global Reach:</strong> Deploy to regions worldwide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>High Availability:</strong> Built-in redundancy and failover</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Fast Innovation:</strong> Access to latest technologies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-700">
                <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">⚠️ Considerations</h4>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">⚡</span>
                    <span><strong>Vendor Lock-in:</strong> Migration can be complex</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">⚡</span>
                    <span><strong>Cost Management:</strong> Bills can spiral without monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">⚡</span>
                    <span><strong>Security:</strong> Shared responsibility model</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">⚡</span>
                    <span><strong>Complexity:</strong> Hundreds of services to learn</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">⚡</span>
                    <span><strong>Compliance:</strong> Data residency and regulations</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "aws" && (
          <motion.div
            key="aws"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 p-8 rounded-xl border-l-4 border-orange-600 mb-8">
              <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4">🟠 Amazon Web Services (AWS)</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                AWS is the largest and most widely adopted cloud platform, offering over 200 fully featured services from data centers globally.
              </p>
            </div>

            {/* Core AWS Services */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🚀 Core AWS Services</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-bold text-orange-400 mb-2">Compute</h5>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• <strong>EC2:</strong> Virtual servers in the cloud</li>
                      <li>• <strong>Lambda:</strong> Serverless compute</li>
                      <li>• <strong>ECS/EKS:</strong> Container orchestration</li>
                      <li>• <strong>Fargate:</strong> Serverless containers</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-bold text-blue-400 mb-2">Storage</h5>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• <strong>S3:</strong> Object storage</li>
                      <li>• <strong>EBS:</strong> Block storage for EC2</li>
                      <li>• <strong>EFS:</strong> Managed file system</li>
                      <li>• <strong>Glacier:</strong> Archive storage</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-bold text-green-400 mb-2">Databases</h5>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• <strong>RDS:</strong> Managed relational DB</li>
                      <li>• <strong>DynamoDB:</strong> NoSQL database</li>
                      <li>• <strong>Aurora:</strong> MySQL/PostgreSQL compatible</li>
                      <li>• <strong>ElastiCache:</strong> In-memory cache</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-bold text-purple-400 mb-2">Networking</h5>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• <strong>VPC:</strong> Virtual private cloud</li>
                      <li>• <strong>Route 53:</strong> DNS service</li>
                      <li>• <strong>CloudFront:</strong> CDN</li>
                      <li>• <strong>ELB:</strong> Load balancing</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-bold text-pink-400 mb-2">Security & Identity</h5>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• <strong>IAM:</strong> Identity & access management</li>
                      <li>• <strong>Cognito:</strong> User authentication</li>
                      <li>• <strong>KMS:</strong> Key management</li>
                      <li>• <strong>WAF:</strong> Web application firewall</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-bold text-cyan-400 mb-2">Developer Tools</h5>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• <strong>CodePipeline:</strong> CI/CD service</li>
                      <li>• <strong>CodeBuild:</strong> Build service</li>
                      <li>• <strong>CodeDeploy:</strong> Deployment</li>
                      <li>• <strong>CloudFormation:</strong> Infrastructure as Code</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* AWS Lambda Example */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">⚡ AWS Lambda Function Example</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre mb-4">
{`// Lambda function to process S3 events
exports.handler = async (event, context) => {
    const AWS = require('aws-sdk');
    const s3 = new AWS.S3();

    // Get S3 bucket and object key from event
    const bucket = event.Records[0].s3.bucket.name;
    const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\\+/g, ' '));

    try {
        // Get object from S3
        const params = { Bucket: bucket, Key: key };
        const data = await s3.getObject(params).promise();

        // Process the data
        const content = data.Body.toString('utf-8');
        console.log('File content:', content);

        // Example: Upload processed file
        await s3.putObject({
            Bucket: bucket,
            Key: \`processed/\${key}\`,
            Body: content.toUpperCase(),
            ContentType: data.ContentType
        }).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'File processed successfully' })
        };
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};`}
              </pre>
            </div>

            {/* AWS CLI Examples */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">💻 AWS CLI Examples</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# EC2 - Launch an instance
aws ec2 run-instances \\
  --image-id ami-0abcdef1234567890 \\
  --instance-type t2.micro \\
  --key-name my-key-pair \\
  --security-group-ids sg-0123456789abcdef0 \\
  --subnet-id subnet-0bb1c79de3EXAMPLE

# S3 - Upload a file
aws s3 cp myfile.txt s3://my-bucket/myfile.txt

# S3 - Sync a directory
aws s3 sync ./local-folder s3://my-bucket/remote-folder

# Lambda - Invoke function
aws lambda invoke \\
  --function-name my-function \\
  --payload '{"key": "value"}' \\
  response.json

# DynamoDB - Put item
aws dynamodb put-item \\
  --table-name Users \\
  --item '{"UserId": {"S": "123"}, "Name": {"S": "John Doe"}}'

# CloudFormation - Deploy stack
aws cloudformation deploy \\
  --template-file template.yml \\
  --stack-name my-stack \\
  --capabilities CAPABILITY_IAM`}
              </pre>
            </div>

            {/* Infrastructure as Code */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">📜 CloudFormation Template Example</h4>
              <div className="bg-slate-900 p-4 rounded-lg">
                <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# template.yml - Simple web application stack
AWSTemplateFormatVersion: '2010-09-09'
Description: 'Web application with EC2 and RDS'

Parameters:
  InstanceType:
    Type: String
    Default: t2.micro
    AllowedValues: [t2.micro, t2.small, t2.medium]

Resources:
  # VPC and Networking
  VPC:
    Type: AWS::EC2::VPC
    Properties:
      CidrBlock: 10.0.0.0/16
      EnableDnsHostnames: true
      Tags:
        - Key: Name
          Value: WebAppVPC

  # Web Server Security Group
  WebServerSG:
    Type: AWS::EC2::SecurityGroup
    Properties:
      GroupDescription: Allow HTTP and SSH
      VpcId: !Ref VPC
      SecurityGroupIngress:
        - IpProtocol: tcp
          FromPort: 80
          ToPort: 80
          CidrIp: 0.0.0.0/0
        - IpProtocol: tcp
          FromPort: 22
          ToPort: 22
          CidrIp: 0.0.0.0/0

  # EC2 Instance
  WebServer:
    Type: AWS::EC2::Instance
    Properties:
      InstanceType: !Ref InstanceType
      ImageId: ami-0abcdef1234567890
      SecurityGroupIds:
        - !Ref WebServerSG
      UserData:
        Fn::Base64: !Sub |
          #!/bin/bash
          yum update -y
          yum install -y httpd
          systemctl start httpd
          systemctl enable httpd
          echo "<h1>Hello from CloudFormation!</h1>" > /var/www/html/index.html

  # RDS Database
  Database:
    Type: AWS::RDS::DBInstance
    Properties:
      DBInstanceClass: db.t2.micro
      Engine: postgres
      MasterUsername: admin
      MasterUserPassword: !Ref DBPassword
      AllocatedStorage: 20

Outputs:
  WebServerPublicIP:
    Description: Public IP of web server
    Value: !GetAtt WebServer.PublicIp
  DatabaseEndpoint:
    Description: RDS endpoint
    Value: !GetAtt Database.Endpoint.Address`}
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "azure" && (
          <motion.div
            key="azure"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-xl border-l-4 border-blue-600 mb-8">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">🔵 Microsoft Azure</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Azure is Microsoft's cloud platform, excelling in hybrid cloud scenarios and enterprise integration with Microsoft products.
              </p>
            </div>

            {/* Core Azure Services */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🚀 Core Azure Services</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-bold text-blue-400 mb-2">Compute</h5>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• <strong>Virtual Machines:</strong> IaaS compute</li>
                      <li>• <strong>App Service:</strong> PaaS for web apps</li>
                      <li>• <strong>Azure Functions:</strong> Serverless compute</li>
                      <li>• <strong>AKS:</strong> Managed Kubernetes</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-bold text-cyan-400 mb-2">Storage</h5>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• <strong>Blob Storage:</strong> Object storage</li>
                      <li>• <strong>Disk Storage:</strong> VM disks</li>
                      <li>• <strong>File Storage:</strong> SMB file shares</li>
                      <li>• <strong>Queue Storage:</strong> Message queuing</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-bold text-green-400 mb-2">Databases</h5>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• <strong>SQL Database:</strong> Managed SQL Server</li>
                      <li>• <strong>Cosmos DB:</strong> Globally distributed NoSQL</li>
                      <li>• <strong>MySQL/PostgreSQL:</strong> Managed databases</li>
                      <li>• <strong>Redis Cache:</strong> In-memory cache</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-bold text-purple-400 mb-2">Networking</h5>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• <strong>Virtual Network:</strong> Private network</li>
                      <li>• <strong>DNS:</strong> Domain name system</li>
                      <li>• <strong>CDN:</strong> Content delivery</li>
                      <li>• <strong>Load Balancer:</strong> Traffic distribution</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-bold text-pink-400 mb-2">Security & Identity</h5>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• <strong>Active Directory:</strong> Identity service</li>
                      <li>• <strong>Key Vault:</strong> Secrets management</li>
                      <li>• <strong>Security Center:</strong> Unified security</li>
                      <li>• <strong>Sentinel:</strong> SIEM solution</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-bold text-orange-400 mb-2">Developer Tools</h5>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• <strong>DevOps:</strong> CI/CD pipelines</li>
                      <li>• <strong>GitHub Actions:</strong> Automation</li>
                      <li>• <strong>App Insights:</strong> APM monitoring</li>
                      <li>• <strong>ARM Templates:</strong> Infrastructure as Code</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Azure Functions Example */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">⚡ Azure Functions Example</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`// HTTP Trigger Function (Node.js)
module.exports = async function (context, req) {
    context.log('HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));

    if (name) {
        context.res = {
            status: 200,
            body: {
                message: \`Hello, \${name}! This is an Azure Function.\`,
                timestamp: new Date().toISOString()
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
    } else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};

// Blob Trigger Function
module.exports = async function (context, myBlob) {
    context.log("Blob trigger function processing blob \\n Name:", context.bindingData.name,
                "\\n Blob Size:", myBlob.length, "Bytes");

    // Process blob content
    const content = myBlob.toString('utf8');
    const processedData = content.toUpperCase();

    // Output to another blob
    context.bindings.outputBlob = processedData;
};`}
              </pre>
            </div>

            {/* Azure CLI Examples */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">💻 Azure CLI Examples</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# Create a resource group
az group create \\
  --name myResourceGroup \\
  --location eastus

# Create a VM
az vm create \\
  --resource-group myResourceGroup \\
  --name myVM \\
  --image UbuntuLTS \\
  --admin-username azureuser \\
  --generate-ssh-keys

# Create a storage account
az storage account create \\
  --name mystorageaccount \\
  --resource-group myResourceGroup \\
  --location eastus \\
  --sku Standard_LRS

# Create an AKS cluster
az aks create \\
  --resource-group myResourceGroup \\
  --name myAKSCluster \\
  --node-count 3 \\
  --enable-addons monitoring \\
  --generate-ssh-keys

# Deploy a web app
az webapp create \\
  --resource-group myResourceGroup \\
  --plan myAppServicePlan \\
  --name myUniqueAppName \\
  --runtime "NODE|18-lts"

# Create SQL Database
az sql db create \\
  --resource-group myResourceGroup \\
  --server myserver \\
  --name myDatabase \\
  --service-objective S0`}
              </pre>
            </div>

            {/* ARM Template */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">📜 ARM Template Example</h4>
              <div className="bg-slate-900 p-4 rounded-lg">
                <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {
    "appName": {
      "type": "string",
      "metadata": {
        "description": "The name of the web app"
      }
    }
  },
  "variables": {
    "appServicePlanName": "[concat(parameters('appName'), '-plan')]",
    "location": "[resourceGroup().location]"
  },
  "resources": [
    {
      "type": "Microsoft.Web/serverfarms",
      "apiVersion": "2021-02-01",
      "name": "[variables('appServicePlanName')]",
      "location": "[variables('location')]",
      "sku": {
        "name": "S1",
        "tier": "Standard"
      }
    },
    {
      "type": "Microsoft.Web/sites",
      "apiVersion": "2021-02-01",
      "name": "[parameters('appName')]",
      "location": "[variables('location')]",
      "dependsOn": [
        "[resourceId('Microsoft.Web/serverfarms', variables('appServicePlanName'))]"
      ],
      "properties": {
        "serverFarmId": "[resourceId('Microsoft.Web/serverfarms', variables('appServicePlanName'))]",
        "siteConfig": {
          "nodeVersion": "18-lts"
        }
      }
    }
  ],
  "outputs": {
    "webAppUrl": {
      "type": "string",
      "value": "[concat('https://', reference(parameters('appName')).defaultHostName)]"
    }
  }
}`}
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "gcp" && (
          <motion.div
            key="gcp"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-xl border-l-4 border-red-600 mb-8">
              <h3 className="text-2xl font-bold text-red-900 dark:text-red-100 mb-4">🔴 Google Cloud Platform (GCP)</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                GCP is Google's cloud platform, known for data analytics, machine learning capabilities, and Kubernetes (which Google created).
              </p>
            </div>

            {/* Core GCP Services */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🚀 Core GCP Services</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-bold text-red-400 mb-2">Compute</h5>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• <strong>Compute Engine:</strong> Virtual machines</li>
                      <li>• <strong>App Engine:</strong> PaaS platform</li>
                      <li>• <strong>Cloud Functions:</strong> Serverless functions</li>
                      <li>• <strong>GKE:</strong> Managed Kubernetes</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-bold text-blue-400 mb-2">Storage</h5>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• <strong>Cloud Storage:</strong> Object storage</li>
                      <li>• <strong>Persistent Disk:</strong> Block storage</li>
                      <li>• <strong>Filestore:</strong> Managed NFS</li>
                      <li>• <strong>Archive Storage:</strong> Long-term storage</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-bold text-green-400 mb-2">Databases</h5>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• <strong>Cloud SQL:</strong> Managed MySQL/PostgreSQL</li>
                      <li>• <strong>Firestore:</strong> NoSQL document DB</li>
                      <li>• <strong>Spanner:</strong> Globally distributed DB</li>
                      <li>• <strong>Memorystore:</strong> Managed Redis</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-bold text-yellow-400 mb-2">Data & Analytics</h5>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• <strong>BigQuery:</strong> Data warehouse</li>
                      <li>• <strong>Dataflow:</strong> Stream/batch processing</li>
                      <li>• <strong>Pub/Sub:</strong> Messaging service</li>
                      <li>• <strong>Dataproc:</strong> Managed Spark/Hadoop</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-bold text-purple-400 mb-2">AI & ML</h5>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• <strong>Vertex AI:</strong> ML platform</li>
                      <li>• <strong>AutoML:</strong> Automated ML</li>
                      <li>• <strong>Vision AI:</strong> Image analysis</li>
                      <li>• <strong>Natural Language:</strong> Text analysis</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-bold text-cyan-400 mb-2">Networking</h5>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• <strong>VPC:</strong> Virtual Private Cloud</li>
                      <li>• <strong>Cloud Load Balancing:</strong> Global LB</li>
                      <li>• <strong>Cloud CDN:</strong> Content delivery</li>
                      <li>• <strong>Cloud DNS:</strong> Domain name system</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Cloud Functions Example */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">⚡ Cloud Functions Example</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`// HTTP Function (Node.js)
const functions = require('@google-cloud/functions-framework');

functions.http('helloWorld', (req, res) => {
  const name = req.query.name || req.body.name || 'World';

  res.status(200).json({
    message: \`Hello, \${name}!\`,
    timestamp: new Date().toISOString()
  });
});

// Cloud Storage Trigger
const {Storage} = require('@google-cloud/storage');
const storage = new Storage();

exports.processFile = async (data, context) => {
  const file = data;
  const bucket = storage.bucket(file.bucket);
  const fileObj = bucket.file(file.name);

  // Download file
  const [contents] = await fileObj.download();

  // Process data
  const processedData = contents.toString('utf8').toUpperCase();

  // Upload processed file
  const outputFile = bucket.file(\`processed/\${file.name}\`);
  await outputFile.save(processedData);

  console.log(\`File \${file.name} processed successfully\`);
};

// Pub/Sub Trigger
exports.messagePubSub = (event, context) => {
  const message = event.data
    ? Buffer.from(event.data, 'base64').toString()
    : 'No message';

  console.log('Pub/Sub message:', message);

  // Process message
  const data = JSON.parse(message);
  // ... handle data
};`}
              </pre>
            </div>

            {/* gcloud CLI Examples */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">💻 gcloud CLI Examples</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# Create a VM instance
gcloud compute instances create my-instance \\
  --zone=us-central1-a \\
  --machine-type=e2-medium \\
  --image-family=ubuntu-2004-lts \\
  --image-project=ubuntu-os-cloud

# Create a GKE cluster
gcloud container clusters create my-cluster \\
  --zone=us-central1-a \\
  --num-nodes=3 \\
  --enable-autoscaling \\
  --min-nodes=1 \\
  --max-nodes=5

# Deploy a Cloud Function
gcloud functions deploy helloWorld \\
  --runtime nodejs18 \\
  --trigger-http \\
  --allow-unauthenticated

# Create Cloud Storage bucket
gsutil mb -l us-central1 gs://my-unique-bucket-name

# Upload to Cloud Storage
gsutil cp myfile.txt gs://my-bucket/

# BigQuery - Run a query
bq query --use_legacy_sql=false \\
  'SELECT name, COUNT(*) as count
   FROM \`project.dataset.table\`
   GROUP BY name
   ORDER BY count DESC
   LIMIT 10'

# Create a Cloud SQL instance
gcloud sql instances create my-instance \\
  --database-version=POSTGRES_14 \\
  --tier=db-f1-micro \\
  --region=us-central1`}
              </pre>
            </div>

            {/* Deployment Manager Template */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-3">📜 Deployment Manager Template</h4>
              <div className="bg-slate-900 p-4 rounded-lg">
                <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# deployment.yaml
resources:
  # Compute Instance
  - name: web-server
    type: compute.v1.instance
    properties:
      zone: us-central1-a
      machineType: zones/us-central1-a/machineTypes/n1-standard-1
      disks:
        - deviceName: boot
          type: PERSISTENT
          boot: true
          autoDelete: true
          initializeParams:
            sourceImage: projects/debian-cloud/global/images/family/debian-11
      networkInterfaces:
        - network: global/networks/default
          accessConfigs:
            - name: External NAT
              type: ONE_TO_ONE_NAT
      metadata:
        items:
          - key: startup-script
            value: |
              #!/bin/bash
              apt-get update
              apt-get install -y nginx
              systemctl start nginx
              systemctl enable nginx

  # Cloud Storage Bucket
  - name: my-app-bucket
    type: storage.v1.bucket
    properties:
      location: US
      storageClass: STANDARD

  # Cloud SQL Instance
  - name: my-database
    type: sqladmin.v1beta4.instance
    properties:
      region: us-central1
      databaseVersion: POSTGRES_14
      settings:
        tier: db-f1-micro
        ipConfiguration:
          authorizedNetworks:
            - value: 0.0.0.0/0`}
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "comparison" && (
          <motion.div
            key="comparison"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-xl border-l-4 border-indigo-600 mb-8">
              <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-4">⚖️ Cloud Platform Comparison</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Comparing AWS, Azure, and GCP across key dimensions to help you choose the right platform.
              </p>
            </div>

            {/* Service Comparison Table */}
            <div className="overflow-x-auto mb-8">
              <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <table className="w-full text-sm">
                  <thead className="bg-slate-100 dark:bg-slate-700">
                    <tr>
                      <th className="p-4 text-left font-bold text-slate-900 dark:text-slate-100">Service Type</th>
                      <th className="p-4 text-left font-bold text-orange-600">AWS</th>
                      <th className="p-4 text-left font-bold text-blue-600">Azure</th>
                      <th className="p-4 text-left font-bold text-red-600">GCP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    <tr>
                      <td className="p-4 font-semibold text-slate-900 dark:text-slate-100">Virtual Machines</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">EC2</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">Virtual Machines</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">Compute Engine</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900 dark:text-slate-100">Serverless Functions</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">Lambda</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">Azure Functions</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">Cloud Functions</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900 dark:text-slate-100">Kubernetes</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">EKS</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">AKS</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">GKE ⭐</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900 dark:text-slate-100">Object Storage</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">S3</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">Blob Storage</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">Cloud Storage</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900 dark:text-slate-100">Relational DB</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">RDS</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">SQL Database</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">Cloud SQL</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900 dark:text-slate-100">NoSQL DB</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">DynamoDB</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">Cosmos DB</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">Firestore</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900 dark:text-slate-100">Data Warehouse</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">Redshift</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">Synapse Analytics</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">BigQuery ⭐</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900 dark:text-slate-100">Message Queue</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">SQS</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">Queue Storage</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">Pub/Sub</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900 dark:text-slate-100">CDN</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">CloudFront</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">Azure CDN</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">Cloud CDN</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900 dark:text-slate-100">Infrastructure as Code</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">CloudFormation</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">ARM Templates</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">Deployment Manager</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Strengths & Use Cases */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">🟠</span>
                  <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100">AWS Strengths</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">✓</span>
                    <span><strong>Most Mature:</strong> Largest service catalog</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">✓</span>
                    <span><strong>Ecosystem:</strong> Huge community & resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">✓</span>
                    <span><strong>Market Leader:</strong> Most widely adopted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">✓</span>
                    <span><strong>Global Reach:</strong> Most regions worldwide</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-orange-200 dark:border-orange-700">
                  <p className="text-xs font-semibold text-orange-800 dark:text-orange-300 mb-2">Best For:</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Startups, SaaS companies, general purpose workloads</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">🔵</span>
                  <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100">Azure Strengths</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span><strong>Microsoft Stack:</strong> .NET, Windows Server, AD</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span><strong>Hybrid Cloud:</strong> Azure Arc, on-prem integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span><strong>Enterprise Focus:</strong> Strong compliance & governance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span><strong>Office 365:</strong> Seamless integration</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-700">
                  <p className="text-xs font-semibold text-blue-800 dark:text-blue-300 mb-2">Best For:</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Enterprises, Microsoft shops, hybrid cloud scenarios</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border-2 border-red-200 dark:border-red-700">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">🔴</span>
                  <h4 className="text-xl font-bold text-red-900 dark:text-red-100">GCP Strengths</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✓</span>
                    <span><strong>Data & Analytics:</strong> BigQuery, Dataflow excellence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✓</span>
                    <span><strong>ML/AI:</strong> TensorFlow, Vertex AI, AutoML</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✓</span>
                    <span><strong>Kubernetes:</strong> Best K8s experience (GKE)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✓</span>
                    <span><strong>Network:</strong> Google's global fiber network</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-red-200 dark:border-red-700">
                  <p className="text-xs font-semibold text-red-800 dark:text-red-300 mb-2">Best For:</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Data science, ML workloads, containerized apps</p>
                </div>
              </div>
            </div>

            {/* Pricing Comparison */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4">💰 Pricing Models</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-orange-600 mb-2">AWS</h5>
                  <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                    <li>• Pay-as-you-go pricing</li>
                    <li>• Reserved instances (1-3 years)</li>
                    <li>• Spot instances for batch workloads</li>
                    <li>• Savings Plans</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-blue-600 mb-2">Azure</h5>
                  <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                    <li>• Pay-as-you-go pricing</li>
                    <li>• Reserved VM instances</li>
                    <li>• Azure Hybrid Benefit (license portability)</li>
                    <li>• Dev/Test pricing</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-red-600 mb-2">GCP</h5>
                  <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                    <li>• Pay-as-you-go pricing</li>
                    <li>• Sustained use discounts (automatic)</li>
                    <li>• Committed use discounts</li>
                    <li>• Preemptible VMs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Multi-Cloud Strategy */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">🌐 Multi-Cloud Strategy</h4>
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-purple-700 dark:text-purple-400 mb-2">Why Multi-Cloud?</h5>
                  <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                    <li>• <strong>Avoid Vendor Lock-in:</strong> Reduce dependency on single provider</li>
                    <li>• <strong>Best of Breed:</strong> Use each cloud's strengths (AWS compute, GCP ML, Azure hybrid)</li>
                    <li>• <strong>Redundancy:</strong> Increased reliability and disaster recovery</li>
                    <li>• <strong>Geographic Coverage:</strong> Optimize for regional requirements</li>
                    <li>• <strong>Cost Optimization:</strong> Leverage competitive pricing</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-pink-700 dark:text-pink-400 mb-2">Multi-Cloud Challenges</h5>
                  <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                    <li>• <strong>Complexity:</strong> Managing multiple platforms and tooling</li>
                    <li>• <strong>Skills Gap:</strong> Team needs expertise in multiple clouds</li>
                    <li>• <strong>Cost:</strong> Data egress fees between clouds</li>
                    <li>• <strong>Networking:</strong> Connecting workloads across clouds</li>
                    <li>• <strong>Security:</strong> Consistent policies across platforms</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-indigo-700 dark:text-indigo-400 mb-2">Tools for Multi-Cloud</h5>
                  <div className="grid grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <div>• Terraform (IaC)</div>
                    <div>• Kubernetes (orchestration)</div>
                    <div>• Consul (service mesh)</div>
                    <div>• Prometheus (monitoring)</div>
                    <div>• Vault (secrets)</div>
                    <div>• Pulumi (IaC)</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
