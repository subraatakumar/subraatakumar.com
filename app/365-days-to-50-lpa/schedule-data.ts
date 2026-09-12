export type ScheduleWeek = {
  week: number;
  days: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
};

export const schedule: ScheduleWeek[] = [
  { week: 1, days: "D1–5", monday: "Python refresher: syntax & typing", tuesday: "Collections refresher", wednesday: "Control flow & pattern matching", thursday: "Functions & comprehensions", friday: "Build Python CLI utility" },
  { week: 2, days: "D8–12", monday: "Functions deeper", tuesday: "*args/**kwargs, decorators", wednesday: "Modules/packages", thursday: "Exceptions & custom errors", friday: "Refactor CLI professionally" },
  { week: 3, days: "D15–19", monday: "OOP refresher", tuesday: "Dataclasses", wednesday: "Protocols/interfaces", thursday: "Type hints + mypy", friday: "Typed mini-project" },
  { week: 4, days: "D22–26", monday: "Files/JSON/CSV", tuesday: "pathlib", wednesday: "Logging", thursday: "Config/env management", friday: "File-processing service" },
  { week: 5, days: "D29–33", monday: "Virtual environments", tuesday: "pip/pyproject", wednesday: "pytest", thursday: "mocking/fixtures", friday: "Fully tested project" },
  { week: 6, days: "D36–40", monday: "Processes/threads refresher", tuesday: "asyncio", wednesday: "async/await", thursday: "Concurrency patterns", friday: "Async API client" },
  { week: 7, days: "D43–47", monday: "HTTP refresher", tuesday: "REST principles", wednesday: "HTTP clients", thursday: "Retries/timeouts", friday: "External API integration" },
  { week: 8, days: "D50–54", monday: "Clean-code refresher", tuesday: "Python architecture", wednesday: "Coding exercises", thursday: "Review/refactoring", friday: "Project 1: Production Python app" },
  { week: 9, days: "D57–61", monday: "HTTP/REST refresher", tuesday: "FastAPI setup", wednesday: "Routing", thursday: "Pydantic", friday: "CRUD API" },
  { week: 10, days: "D64–68", monday: "Dependency injection", tuesday: "Validation", wednesday: "Exception handling", thursday: "Middleware", friday: "Improve API architecture" },
  { week: 11, days: "D71–75", monday: "SQL refresher", tuesday: "PostgreSQL", wednesday: "SQLAlchemy", thursday: "Migrations", friday: "Database-backed API" },
  { week: 12, days: "D78–82", monday: "Auth concepts refresher", tuesday: "JWT", wednesday: "OAuth/OIDC", thursday: "RBAC", friday: "Secure API" },
  { week: 13, days: "D85–89", monday: "Caching refresher", tuesday: "Redis", wednesday: "Background jobs", thursday: "Queues", friday: "Async processing API" },
  { week: 14, days: "D92–96", monday: "Containers refresher", tuesday: "Dockerfile", wednesday: "Docker Compose", thursday: "Secrets/config", friday: "Containerize backend" },
  { week: 15, days: "D99–103", monday: "Testing pyramid refresher", tuesday: "Integration testing", wednesday: "API testing", thursday: "Load/performance testing", friday: "Project 2: Production FastAPI service" },
  { week: 16, days: "D106–110", monday: "Cloud refresher", tuesday: "Azure fundamentals", wednesday: "Resource groups", thursday: "Azure identity", friday: "Deploy API to Azure" },
  { week: 17, days: "D113–117", monday: "Compute options", tuesday: "App Service", wednesday: "Functions", thursday: "Container Apps", friday: "Compare architectures" },
  { week: 18, days: "D120–124", monday: "Networking refresher", tuesday: "Managed Identity", wednesday: "Azure RBAC", thursday: "Key Vault", friday: "Secure Azure architecture" },
  { week: 19, days: "D127–131", monday: "Observability refresher", tuesday: "Azure Monitor", wednesday: "Application Insights", thursday: "Logs/alerts", friday: "Observable API" },
  { week: 20, days: "D134–138", monday: "Git/GitHub refresher", tuesday: "GitHub Actions", wednesday: "Tests in CI", thursday: "Deployment pipeline", friday: "Production CI/CD" },
  { week: 21, days: "D141–145", monday: "AI/ML refresher", tuesday: "LLM fundamentals", wednesday: "Tokens/context", thursday: "Inference parameters", friday: "Raw LLM application" },
  { week: 22, days: "D148–152", monday: "Azure OpenAI overview", tuesday: "Model APIs", wednesday: "Structured output", thursday: "Streaming", friday: "FastAPI AI endpoint" },
  { week: 23, days: "D155–159", monday: "Prompting refresher", tuesday: "System/user prompts", wednesday: "Few-shot prompting", thursday: "Structured JSON", friday: "Prompt experiments" },
  { week: 24, days: "D162–166", monday: "Embeddings refresher", tuesday: "Vector similarity", wednesday: "Vector databases", thursday: "Chunking", friday: "Semantic-search prototype" },
  { week: 25, days: "D169–173", monday: "Search fundamentals", tuesday: "Azure AI Search", wednesday: "Indexing", thursday: "Vector + hybrid search", friday: "Search service" },
  { week: 26, days: "D176–180", monday: "RAG architecture refresher", tuesday: "Ingestion pipeline", wednesday: "Retrieval", thursday: "Grounded generation", friday: "RAG v1" },
  { week: 27, days: "D183–187", monday: "Chunking strategies", tuesday: "Metadata filtering", wednesday: "Reranking", thursday: "Citations", friday: "Improve retrieval quality" },
  { week: 28, days: "D190–194", monday: "RAG evaluation refresher", tuesday: "Relevance", wednesday: "Groundedness", thursday: "Failure analysis", friday: "Project 3: Production RAG system" },
  { week: 29, days: "D197–201", monday: "Agent fundamentals", tuesday: "Tool/function calling", wednesday: "Tool schemas", thursday: "State/context", friday: "Simple agent" },
  { week: 30, days: "D204–208", monday: "Azure AI Foundry overview", tuesday: "Agent creation", wednesday: "Instructions", thursday: "Tools", friday: "Foundry agent" },
  { week: 31, days: "D211–215", monday: "MCP refresher", tuesday: "MCP architecture", wednesday: "MCP server", thursday: "Authentication", friday: "Agent + MCP" },
  { week: 32, days: "D218–222", monday: "Workflow concepts", tuesday: "Multi-step agents", wednesday: "Retries", thursday: "Human-in-the-loop", friday: "Workflow agent" },
  { week: 33, days: "D225–229", monday: "LangGraph concepts", tuesday: "Nodes/edges", wednesday: "State", thursday: "Tool nodes", friday: "LangGraph workflow" },
  { week: 34, days: "D232–236", monday: "Memory concepts", tuesday: "Short/long-term state", wednesday: "PostgreSQL persistence", thursday: "Security", friday: "Persistent agent" },
  { week: 35, days: "D239–243", monday: "Multi-agent patterns", tuesday: "Coordinator pattern", wednesday: "Specialist agents", thursday: "Failure handling", friday: "Multi-agent experiment" },
  { week: 36, days: "D246–250", monday: "React refresher", tuesday: "AI chat UI", wednesday: "Streaming responses", thursday: "Tool/citation UI", friday: "React AI frontend" },
  { week: 37, days: "D253–257", monday: "RN architecture refresher", tuesday: "RN streaming", wednesday: "Authentication", thursday: "Offline/cache", friday: "Mobile AI client" },
  { week: 38, days: "D260–264", monday: "Multimodal AI refresher", tuesday: "Image input", wednesday: "Document processing", thursday: "Upload pipeline", friday: "Multimodal application" },
  { week: 39, days: "D267–271", monday: "Security refresher", tuesday: "Prompt injection", wednesday: "Data leakage", thursday: "Authorization boundaries", friday: "AI red-team exercise" },
  { week: 40, days: "D274–278", monday: "Evaluation fundamentals", tuesday: "Evaluation datasets", wednesday: "Evaluators", thursday: "Regression testing", friday: "Evaluation pipeline" },
  { week: 41, days: "D281–285", monday: "Foundry evaluation", tuesday: "Groundedness", wednesday: "Quality metrics", thursday: "Agent evaluation", friday: "Automated AI test suite" },
  { week: 42, days: "D288–292", monday: "Observability refresher", tuesday: "OpenTelemetry", wednesday: "LLM tracing", thursday: "Tool/agent traces", friday: "End-to-end tracing" },
  { week: 43, days: "D295–299", monday: "Performance refresher", tuesday: "Latency metrics", wednesday: "Token usage", thursday: "Cost tracking", friday: "AI operations dashboard" },
  { week: 44, days: "D302–306", monday: "Reliability patterns", tuesday: "Retries/timeouts", wednesday: "Rate limiting", thursday: "Fallback strategies", friday: "Harden AI system" },
  { week: 45, days: "D309–313", monday: "System-design refresher", tuesday: "Scalability", wednesday: "Queues/events", thursday: "Caching", friday: "Architecture document" },
  { week: 46, days: "D316–320", monday: "Project 4 architecture", tuesday: "Data model/backend", wednesday: "RAG architecture", thursday: "Agent architecture", friday: "Build core backend" },
  { week: 47, days: "D323–327", monday: "React/RN UI", tuesday: "Backend integration", wednesday: "Authentication", thursday: "Testing", friday: "Complete product" },
  { week: 48, days: "D330–334", monday: "Evaluation", tuesday: "Observability", wednesday: "CI/CD", thursday: "Azure deployment", friday: "Project 4: Production release" },
  { week: 49, days: "D337–341", monday: "System-design refresher", tuesday: "AI system design", wednesday: "RAG system design", thursday: "Agent architecture", friday: "Architecture mock interview" },
  { week: 50, days: "D344–348", monday: "Python interview refresher", tuesday: "APIs/backend", wednesday: "SQL/database", thursday: "Azure/cloud", friday: "Technical mock interview" },
  { week: 51, days: "D351–355", monday: "Resume positioning", tuesday: "GitHub cleanup", wednesday: "Project case studies", thursday: "LinkedIn/profile", friday: "Start targeted applications" },
  { week: 52, days: "D358–362", monday: "AI interview Q&A", tuesday: "System-design mock", wednesday: "RAG/agent mock", thursday: "Behavioural round", friday: "Full interview simulation" },
];
