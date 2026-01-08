"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CICDSection() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: "📋" },
    { id: "github-actions", label: "GitHub Actions", icon: "🐙" },
    { id: "jenkins", label: "Jenkins", icon: "👨‍🔧" },
    { id: "gitlab-ci", label: "GitLab CI", icon: "🦊" },
    { id: "best-practices", label: "Best Practices", icon: "⭐" }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl">
          <span className="text-4xl">🔄</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            CI/CD Pipelines
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Automate testing, building, and deploying code changes
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
                ? "bg-gradient-to-r from-green-600 to-teal-600 text-white"
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
            <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-8 rounded-xl border-l-4 border-green-600 mb-8">
              <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">🔄 What is CI/CD?</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                <strong>CI/CD</strong> (Continuous Integration/Continuous Deployment) is a modern software development practice that automates the process of testing, building, and deploying code changes.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">Continuous Integration (CI)</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Developers merge code changes frequently, triggering automated builds and tests to catch issues early.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-bold text-teal-700 dark:text-teal-400 mb-2">Continuous Deployment (CD)</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Code that passes all tests is automatically deployed to production without manual intervention.
                  </p>
                </div>
              </div>
            </div>

            {/* Pipeline Stages */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-6">🔗 Pipeline Stages</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div className="flex-1 bg-white dark:bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700 dark:text-blue-400">Source</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Developer pushes code to version control (Git)</p>
                  </div>
                </div>
                <div className="text-center text-2xl text-green-600">↓</div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div className="flex-1 bg-white dark:bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-700 dark:text-purple-400">Build</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Compile code, install dependencies, create artifacts</p>
                  </div>
                </div>
                <div className="text-center text-2xl text-green-600">↓</div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div className="flex-1 bg-white dark:bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-bold text-orange-700 dark:text-orange-400">Test</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Run unit tests, integration tests, security scans</p>
                  </div>
                </div>
                <div className="text-center text-2xl text-green-600">↓</div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div className="flex-1 bg-white dark:bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-bold text-green-700 dark:text-green-400">Deploy</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Deploy to staging/production environments</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Fast Feedback", icon: "⚡", desc: "Catch bugs early in development", color: "yellow" },
                { title: "Reliable Releases", icon: "🎯", desc: "Consistent, repeatable deployments", color: "blue" },
                { title: "Reduced Risk", icon: "🛡️", desc: "Small, incremental changes", color: "green" }
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-gradient-to-br from-${benefit.color}-50 to-white dark:from-${benefit.color}-900/20 dark:to-slate-800 p-6 rounded-xl border-2 border-${benefit.color}-200 dark:border-${benefit.color}-700`}
                >
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "github-actions" && (
          <motion.div
            key="github-actions"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-gray-900/50 p-8 rounded-xl border-l-4 border-slate-700 mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">🐙 GitHub Actions</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                GitHub Actions is a CI/CD platform integrated directly into GitHub, allowing you to automate workflows with YAML configuration files.
              </p>
            </div>

            {/* Basic Workflow */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🚀 Basic CI Workflow</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# .github/workflows/ci.yml
name: CI Pipeline

# Trigger on push to main or pull requests
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  # Build and Test Job
  build-and-test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [16.x, 18.x, 20.x]  # Test multiple Node versions

    steps:
      # Step 1: Checkout code
      - name: Checkout repository
        uses: actions/checkout@v3

      # Step 2: Setup Node.js
      - name: Setup Node.js $\{\{ matrix.node-version \}\}
        uses: actions/setup-node@v3
        with:
          node-version: $\{\{ matrix.node-version \}\}
          cache: 'npm'

      # Step 3: Install dependencies
      - name: Install dependencies
        run: npm ci

      # Step 4: Run linting
      - name: Lint code
        run: npm run lint

      # Step 5: Run tests with coverage
      - name: Run tests
        run: npm test -- --coverage

      # Step 6: Upload coverage to Codecov
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/coverage-final.json
          flags: unittests
          name: codecov-umbrella
          fail_ci_if_error: true`}
              </pre>
            </div>

            {/* Advanced Deployment Workflow */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🚢 Advanced Deployment Workflow</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: $\{\{ github.repository \}\}

jobs:
  # Run tests before deployment
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18.x'
      - run: npm ci
      - run: npm test

  # Build and push Docker image
  build:
    needs: test
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Login to Container Registry
        uses: docker/login-action@v2
        with:
          registry: $\{\{ env.REGISTRY \}\}
          username: $\{\{ github.actor \}\}
          password: $\{\{ secrets.GITHUB_TOKEN \}\}

      - name: Extract metadata
        id: meta
        uses: docker/metadata-action@v4
        with:
          images: $\{\{ env.REGISTRY \}\}/$\{\{ env.IMAGE_NAME \}\}
          tags: |
            type=sha
            type=ref,event=branch
            type=semver,pattern={{version}}

      - name: Build and push image
        uses: docker/build-push-action@v4
        with:
          context: .
          push: true
          tags: $\{\{ steps.meta.outputs.tags \}\}
          labels: $\{\{ steps.meta.outputs.labels \}\}
          cache-from: type=gha
          cache-to: type=gha,mode=max

  # Deploy to Kubernetes
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup kubectl
        uses: azure/setup-kubectl@v3

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: $\{\{ secrets.AWS_ACCESS_KEY_ID \}\}
          aws-secret-access-key: $\{\{ secrets.AWS_SECRET_ACCESS_KEY \}\}
          aws-region: us-east-1

      - name: Update kubeconfig
        run: |
          aws eks update-kubeconfig --name production-cluster --region us-east-1

      - name: Deploy to Kubernetes
        run: |
          kubectl set image deployment/web-app \\
            web=$\{\{ env.REGISTRY \}\}/$\{\{ env.IMAGE_NAME \}\}:$\{\{ github.sha \}\}
          kubectl rollout status deployment/web-app

      - name: Verify deployment
        run: |
          kubectl get deployment web-app
          kubectl get pods -l app=web`}
              </pre>
            </div>

            {/* Reusable Workflows */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">♻️ Reusable Workflows</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Create reusable workflows to avoid duplication across multiple repositories.
              </p>
              <div className="bg-slate-900 p-4 rounded-lg">
                <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# .github/workflows/reusable-deploy.yml
name: Reusable Deploy Workflow

on:
  workflow_call:
    inputs:
      environment:
        required: true
        type: string
    secrets:
      deploy-token:
        required: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: $\{\{ inputs.environment \}\}
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to $\{\{ inputs.environment \}\}
        run: ./deploy.sh
        env:
          TOKEN: $\{\{ secrets.deploy-token \}\}

# Use in another workflow:
# jobs:
#   deploy-staging:
#     uses: ./.github/workflows/reusable-deploy.yml
#     with:
#       environment: staging
#     secrets:
#       deploy-token: $\{\{ secrets.STAGING_TOKEN \}\}`}
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "jenkins" && (
          <motion.div
            key="jenkins"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-xl border-l-4 border-red-600 mb-8">
              <h3 className="text-2xl font-bold text-red-900 dark:text-red-100 mb-4">👨‍🔧 Jenkins</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Jenkins is a self-hosted, open-source automation server that supports building, testing, and deploying applications with powerful plugin ecosystem.
              </p>
            </div>

            {/* Declarative Pipeline */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">📜 Declarative Pipeline</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`// Jenkinsfile (Declarative)
pipeline {
    agent any

    // Environment variables
    environment {
        DOCKER_REGISTRY = 'docker.io'
        IMAGE_NAME = 'myapp'
        DOCKER_CREDENTIALS = credentials('docker-hub-credentials')
    }

    // Build parameters
    parameters {
        choice(name: 'ENVIRONMENT', choices: ['dev', 'staging', 'prod'], description: 'Deployment environment')
        booleanParam(name: 'RUN_TESTS', defaultValue: true, description: 'Run test suite')
    }

    // Pipeline stages
    stages {
        stage('Checkout') {
            steps {
                // Checkout code from Git
                checkout scm
                echo "Building branch: \${env.GIT_BRANCH}"
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm ci'
                }
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Test') {
            when {
                expression { params.RUN_TESTS == true }
            }
            steps {
                sh 'npm test -- --coverage'
            }
            post {
                always {
                    // Publish test results
                    junit 'test-results/**/*.xml'
                    // Publish coverage report
                    publishHTML([
                        reportDir: 'coverage',
                        reportFiles: 'index.html',
                        reportName: 'Coverage Report'
                    ])
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image with build number tag
                    sh """
                        docker build -t \${DOCKER_REGISTRY}/\${IMAGE_NAME}:\${BUILD_NUMBER} .
                        docker tag \${DOCKER_REGISTRY}/\${IMAGE_NAME}:\${BUILD_NUMBER} \\
                                   \${DOCKER_REGISTRY}/\${IMAGE_NAME}:latest
                    """
                }
            }
        }

        stage('Push to Registry') {
            steps {
                script {
                    // Login and push to Docker registry
                    sh """
                        echo \${DOCKER_CREDENTIALS_PSW} | docker login -u \${DOCKER_CREDENTIALS_USR} --password-stdin
                        docker push \${DOCKER_REGISTRY}/\${IMAGE_NAME}:\${BUILD_NUMBER}
                        docker push \${DOCKER_REGISTRY}/\${IMAGE_NAME}:latest
                    """
                }
            }
        }

        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                script {
                    // Deploy based on environment parameter
                    if (params.ENVIRONMENT == 'prod') {
                        // Production deployment requires approval
                        input message: 'Deploy to Production?', ok: 'Deploy'
                    }

                    sh """
                        kubectl set image deployment/myapp \\
                            myapp=\${DOCKER_REGISTRY}/\${IMAGE_NAME}:\${BUILD_NUMBER} \\
                            --namespace=\${params.ENVIRONMENT}
                        kubectl rollout status deployment/myapp --namespace=\${params.ENVIRONMENT}
                    """
                }
            }
        }
    }

    // Post-build actions
    post {
        success {
            echo 'Pipeline succeeded!'
            // Send notification
            slackSend(color: 'good', message: "Build \${BUILD_NUMBER} succeeded")
        }
        failure {
            echo 'Pipeline failed!'
            slackSend(color: 'danger', message: "Build \${BUILD_NUMBER} failed")
        }
        always {
            // Cleanup
            sh 'docker system prune -f'
            cleanWs()
        }
    }
}`}
              </pre>
            </div>

            {/* Scripted Pipeline */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🔧 Scripted Pipeline (Advanced)</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`// Jenkinsfile (Scripted)
node {
    def app
    def imageTag = "build-\${env.BUILD_NUMBER}"

    try {
        stage('Checkout') {
            checkout scm
        }

        stage('Build') {
            // Parallel execution for faster builds
            parallel(
                'Build App': {
                    sh 'npm ci && npm run build'
                },
                'Build Docker': {
                    app = docker.build("myapp:\${imageTag}")
                }
            )
        }

        stage('Test') {
            parallel(
                'Unit Tests': {
                    sh 'npm run test:unit'
                },
                'Integration Tests': {
                    sh 'npm run test:integration'
                },
                'Security Scan': {
                    sh 'npm audit --audit-level=moderate'
                }
            )
        }

        stage('Push Image') {
            docker.withRegistry('https://registry.hub.docker.com', 'docker-credentials') {
                app.push(imageTag)
                app.push('latest')
            }
        }

        stage('Deploy to Staging') {
            sh """
                kubectl set image deployment/myapp myapp=myapp:\${imageTag} -n staging
                kubectl rollout status deployment/myapp -n staging
            """

            // Run smoke tests
            sh 'npm run test:smoke -- --env=staging'
        }

        stage('Deploy to Production') {
            timeout(time: 24, unit: 'HOURS') {
                input message: 'Deploy to production?', ok: 'Deploy'
            }

            sh """
                kubectl set image deployment/myapp myapp=myapp:\${imageTag} -n production
                kubectl rollout status deployment/myapp -n production
            """
        }

        currentBuild.result = 'SUCCESS'

    } catch (Exception e) {
        currentBuild.result = 'FAILURE'
        throw e
    } finally {
        // Cleanup and notifications
        echo "Build result: \${currentBuild.result}"
        notifyBuild(currentBuild.result)
    }
}

def notifyBuild(String buildStatus) {
    def color = buildStatus == 'SUCCESS' ? 'good' : 'danger'
    slackSend(color: color, message: "Build \${env.BUILD_NUMBER}: \${buildStatus}")
}`}
              </pre>
            </div>

            {/* Multi-branch Pipeline */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">🌿 Multi-branch Pipeline</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Automatically create pipelines for each branch in your repository.
              </p>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✅</span>
                  <span>Automatically discovers branches and creates jobs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✅</span>
                  <span>PR validation with automatic cleanup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✅</span>
                  <span>Branch-specific deployment strategies</span>
                </li>
              </ul>
            </div>
          </motion.div>
        )}

        {activeTab === "gitlab-ci" && (
          <motion.div
            key="gitlab-ci"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-xl border-l-4 border-orange-600 mb-8">
              <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4">🦊 GitLab CI/CD</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                GitLab CI/CD is built into GitLab, providing seamless integration with your Git workflow using .gitlab-ci.yml configuration.
              </p>
            </div>

            {/* Basic Pipeline */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🚀 Basic Pipeline</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# .gitlab-ci.yml
# Define pipeline stages
stages:
  - build
  - test
  - deploy

# Global variables
variables:
  DOCKER_DRIVER: overlay2
  DOCKER_TLS_CERTDIR: "/certs"
  IMAGE_TAG: $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA

# Cache node_modules for faster builds
cache:
  paths:
    - node_modules/

# Build job
build:
  stage: build
  image: node:18-alpine
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - dist/
    expire_in: 1 hour

# Unit tests
test:unit:
  stage: test
  image: node:18-alpine
  script:
    - npm ci
    - npm run test:unit -- --coverage
  coverage: '/Statements\\s*:\\s*(\\d+\\.\\d+)%/'
  artifacts:
    reports:
      coverage_report:
        coverage_format: cobertura
        path: coverage/cobertura-coverage.xml

# Integration tests
test:integration:
  stage: test
  image: node:18-alpine
  services:
    - postgres:14-alpine
  variables:
    POSTGRES_DB: testdb
    POSTGRES_USER: testuser
    POSTGRES_PASSWORD: testpass
  script:
    - npm ci
    - npm run test:integration

# Deploy to staging
deploy:staging:
  stage: deploy
  image: alpine:latest
  before_script:
    - apk add --no-cache curl
  script:
    - curl -X POST $STAGING_WEBHOOK_URL
  environment:
    name: staging
    url: https://staging.example.com
  only:
    - develop

# Deploy to production
deploy:production:
  stage: deploy
  image: alpine:latest
  script:
    - curl -X POST $PRODUCTION_WEBHOOK_URL
  environment:
    name: production
    url: https://example.com
  only:
    - main
  when: manual  # Require manual trigger`}
              </pre>
            </div>

            {/* Docker Build and Push */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🐳 Docker Build & Push</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# .gitlab-ci.yml
stages:
  - build
  - push
  - deploy

# Build Docker image
docker:build:
  stage: build
  image: docker:24-dind
  services:
    - docker:24-dind
  before_script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
  script:
    # Build with build arguments
    - |
      docker build \\
        --build-arg NODE_ENV=production \\
        --build-arg BUILD_DATE=$(date -u +'%Y-%m-%dT%H:%M:%SZ') \\
        --build-arg VCS_REF=$CI_COMMIT_SHA \\
        --cache-from $CI_REGISTRY_IMAGE:latest \\
        -t $IMAGE_TAG \\
        -t $CI_REGISTRY_IMAGE:latest \\
        .
    # Push images
    - docker push $IMAGE_TAG
    - docker push $CI_REGISTRY_IMAGE:latest
  only:
    - main
    - develop

# Deploy to Kubernetes
k8s:deploy:
  stage: deploy
  image: bitnami/kubectl:latest
  script:
    # Update kubeconfig
    - kubectl config set-cluster k8s --server="\${KUBE_URL}" --insecure-skip-tls-verify=true
    - kubectl config set-credentials admin --token="\${KUBE_TOKEN}"
    - kubectl config set-context default --cluster=k8s --user=admin
    - kubectl config use-context default

    # Update deployment
    - kubectl set image deployment/myapp myapp=$IMAGE_TAG -n production
    - kubectl rollout status deployment/myapp -n production

    # Verify deployment
    - kubectl get pods -l app=myapp -n production
  environment:
    name: production
    kubernetes:
      namespace: production
  only:
    - main
  when: manual`}
              </pre>
            </div>

            {/* Advanced Features */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">⚡ Advanced Features</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# .gitlab-ci.yml with advanced features
# Include external pipeline configs
include:
  - project: 'company/ci-templates'
    file: '/templates/.docker-build.yml'
  - template: Security/SAST.gitlab-ci.yml
  - template: Security/Dependency-Scanning.gitlab-ci.yml

stages:
  - build
  - test
  - security
  - deploy

# Use YAML anchors for reusability
.node_template: &node_config
  image: node:18-alpine
  cache:
    key: \${CI_COMMIT_REF_SLUG}
    paths:
      - node_modules/
  before_script:
    - npm ci

# Parallel matrix jobs
test:multiple-versions:
  <<: *node_config
  stage: test
  parallel:
    matrix:
      - NODE_VERSION: ["16", "18", "20"]
  image: node:\${NODE_VERSION}-alpine
  script:
    - npm test

# Deploy with blue-green strategy
deploy:blue-green:
  stage: deploy
  script:
    - |
      # Deploy to green environment
      kubectl apply -f k8s/deployment-green.yml
      kubectl rollout status deployment/myapp-green

      # Run smoke tests
      ./smoke-tests.sh https://green.example.com

      # Switch traffic to green
      kubectl patch service myapp -p '{"spec":{"selector":{"version":"green"}}}'

      # Wait and verify
      sleep 30

      # Scale down blue
      kubectl scale deployment myapp-blue --replicas=0
  environment:
    name: production
    url: https://example.com
  only:
    - main
  when: manual

# Review apps for merge requests
deploy:review:
  stage: deploy
  script:
    - kubectl create namespace review-$CI_COMMIT_REF_SLUG || true
    - kubectl apply -f k8s/ -n review-$CI_COMMIT_REF_SLUG
  environment:
    name: review/$CI_COMMIT_REF_SLUG
    url: https://$CI_COMMIT_REF_SLUG.review.example.com
    on_stop: stop:review
  only:
    - merge_requests

# Cleanup review apps
stop:review:
  stage: deploy
  script:
    - kubectl delete namespace review-$CI_COMMIT_REF_SLUG
  environment:
    name: review/$CI_COMMIT_REF_SLUG
    action: stop
  when: manual
  only:
    - merge_requests`}
              </pre>
            </div>

            {/* GitLab-Specific Features */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Auto DevOps",
                  icon: "🤖",
                  desc: "Zero-config CI/CD with automatic detection",
                  color: "blue"
                },
                {
                  title: "Review Apps",
                  icon: "🔍",
                  desc: "Temporary environments for MRs",
                  color: "green"
                },
                {
                  title: "Built-in Registry",
                  icon: "📦",
                  desc: "Container and package registries included",
                  color: "purple"
                },
                {
                  title: "Security Scanning",
                  icon: "🔒",
                  desc: "SAST, DAST, dependency scanning built-in",
                  color: "red"
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-gradient-to-br from-${feature.color}-50 to-white dark:from-${feature.color}-900/20 dark:to-slate-800 p-6 rounded-xl border-2 border-${feature.color}-200 dark:border-${feature.color}-700`}
                >
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "best-practices" && (
          <motion.div
            key="best-practices"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-8 rounded-xl border-l-4 border-amber-600 mb-8">
              <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-4">⭐ CI/CD Best Practices</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Essential practices for building reliable, secure, and efficient CI/CD pipelines.
              </p>
            </div>

            {/* Pipeline Design */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
                <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4 flex items-center gap-2">
                  <span>✅</span> DO: Pipeline Design
                </h4>
                <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span><strong>Fail Fast:</strong> Run quick tests first, expensive ones later</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span><strong>Parallel Jobs:</strong> Run independent stages concurrently</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span><strong>Caching:</strong> Cache dependencies to speed up builds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span><strong>Artifacts:</strong> Pass build outputs between stages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span><strong>Idempotent:</strong> Same input = same output always</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border-2 border-red-200 dark:border-red-700">
                <h4 className="text-xl font-bold text-red-900 dark:text-red-100 mb-4 flex items-center gap-2">
                  <span>❌</span> DON'T: Anti-patterns
                </h4>
                <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Manual Steps:</strong> Avoid manual interventions in CI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Snowflake Configs:</strong> Don't hardcode environment-specific values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Ignored Failures:</strong> Never allow failing tests to be ignored</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Long Pipelines:</strong> Don't let builds take hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>No Rollback:</strong> Always have a rollback strategy</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Deployment Strategies */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🚀 Deployment Strategies</h4>
              <div className="space-y-6">
                {[
                  {
                    name: "Blue-Green Deployment",
                    desc: "Two identical environments, switch traffic instantly",
                    pros: ["Zero downtime", "Instant rollback", "Test in production-like environment"],
                    cons: ["2x infrastructure cost", "Database migrations tricky"]
                  },
                  {
                    name: "Canary Deployment",
                    desc: "Gradually roll out to subset of users",
                    pros: ["Minimal risk", "Real user testing", "Easy rollback"],
                    cons: ["Complex routing", "Requires monitoring"]
                  },
                  {
                    name: "Rolling Deployment",
                    desc: "Update instances one at a time",
                    pros: ["No extra infrastructure", "Gradual rollout"],
                    cons: ["Slow rollout", "Version coexistence issues"]
                  }
                ].map((strategy, idx) => (
                  <div key={idx} className="bg-slate-800 p-5 rounded-lg border border-slate-700">
                    <h5 className="text-lg font-bold text-blue-400 mb-2">{strategy.name}</h5>
                    <p className="text-sm text-slate-300 mb-3">{strategy.desc}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-semibold text-green-400 mb-2">Pros:</p>
                        <ul className="space-y-1">
                          {strategy.pros.map((pro, i) => (
                            <li key={i} className="text-xs text-slate-400 flex items-start gap-1">
                              <span className="text-green-400">✓</span>
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-red-400 mb-2">Cons:</p>
                        <ul className="space-y-1">
                          {strategy.cons.map((con, i) => (
                            <li key={i} className="text-xs text-slate-400 flex items-start gap-1">
                              <span className="text-red-400">✗</span>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Best Practices */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-red-900 dark:text-red-100 mb-4">🔒 Security Best Practices</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-bold text-red-700 dark:text-red-400 mb-2">Secrets Management</h5>
                    <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                      <li>• Use secret managers (HashiCorp Vault, AWS Secrets Manager)</li>
                      <li>• Never commit secrets to version control</li>
                      <li>• Rotate credentials regularly</li>
                      <li>• Use environment variables for config</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-bold text-orange-700 dark:text-orange-400 mb-2">Dependency Scanning</h5>
                    <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                      <li>• Run npm audit / pip-audit in pipeline</li>
                      <li>• Use Snyk, Dependabot for vulnerability alerts</li>
                      <li>• Pin dependency versions</li>
                      <li>• Scan Docker images for vulnerabilities</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-bold text-purple-700 dark:text-purple-400 mb-2">Access Control</h5>
                    <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                      <li>• Use least privilege principle</li>
                      <li>• Separate dev/staging/prod credentials</li>
                      <li>• Enable MFA for CI/CD systems</li>
                      <li>• Audit pipeline access logs</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                    <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Code Signing</h5>
                    <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                      <li>• Sign container images</li>
                      <li>• Verify artifact signatures</li>
                      <li>• Use SBOM (Software Bill of Materials)</li>
                      <li>• Implement supply chain security</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Monitoring and Observability */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">📊 Monitoring & Observability</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Pipeline Metrics</h5>
                  <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                    <li>• Build duration</li>
                    <li>• Success/failure rate</li>
                    <li>• Deployment frequency</li>
                    <li>• Lead time for changes</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-cyan-700 dark:text-cyan-400 mb-2">Quality Gates</h5>
                  <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                    <li>• Code coverage thresholds</li>
                    <li>• Security scan results</li>
                    <li>• Performance benchmarks</li>
                    <li>• Smoke test results</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-teal-700 dark:text-teal-400 mb-2">Alerts & Notifications</h5>
                  <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                    <li>• Failed build alerts</li>
                    <li>• Deployment notifications</li>
                    <li>• Security vulnerability alerts</li>
                    <li>• Integration with Slack/Teams</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
