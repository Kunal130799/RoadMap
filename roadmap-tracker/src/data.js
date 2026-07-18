export const DATA = [
  {
    id: "phase0", title: "Phase 0 — Setup", sub: "One sitting, before anything else",
    steps: [
      { id: "p0-slots", title: "Weekly time slots fixed", items: [
        { id: "p0-1", text: "DSA slots picked (e.g. Mon/Wed/Fri, ~45 min)" },
        { id: "p0-2", text: "Foreground learning + capstone slots picked (bulk of hrs)" },
      ]},
      { id: "p0-log", title: "Learning log started", items: [
        { id: "p0-3", text: "Log file/note created — one line per session (learned / confused)" },
      ]},
      { id: "p0-repo", title: "Capstone repo created", items: [
        { id: "p0-4", text: "Empty repo created with README plan (4 slices)" },
      ]},
      { id: "p0-audit", title: "Portfolio audit — deferred until after Phase 1", items: [
        { id: "p0-5", text: "(Do this AFTER Phase 1 — you'll have the vocabulary to audit your own architecture honestly)" },
      ]},
    ]
  },
  {
    id: "dsa", title: "Continuous Thread A — DSA", sub: "Runs the whole time · Namaste DSA Sheet, in C#",
    isDsa: true,
    resource: '✅ <a href="https://namastedev.com/namaste-dsa-sheet" target="_blank" rel="noreferrer">Namaste DSA Sheet</a> — 165 problems, your complete plan. Add nothing else.',
    dsaTopics: [
      "1. Foundation", "2. Arrays", "3. Linked List", "4. Strings", "5. Stack & Queues",
      "6. Binary Search", "7. Two Pointers & Sliding Window", "8. Binary Tree", "9. Binary Search Tree",
      "10. Heap", "11. Backtracking", "12. Greedy", "13. Dynamic Programming", "14. Graphs"
    ]
  },
  {
    id: "frontend", title: "Continuous Thread B — Frontend", sub: "Woven into every phase · Namaste React",
    steps: [
      { id: "fe-1", title: "Foundations", items: [
        { id: "fe-1a", text: "JavaScript solid (closures, promises, event loop) — only if shaky" },
        { id: "fe-1b", text: "React fundamentals + hooks" },
        { id: "fe-1c", text: "Custom hooks" },
      ], res: '✅ <a href="https://namastedev.com/learn" target="_blank" rel="noreferrer">Namaste React</a> (your spine) <span class="tag owned">OWNED</span> · 🆓 <a href="https://react.dev" target="_blank" rel="noreferrer">react.dev</a> docs <span class="tag free">FREE</span> · 🆓 Namaste JavaScript (if needed) <span class="tag free">FREE</span>' },
      { id: "fe-2", title: "Application-level skills", items: [
        { id: "fe-2a", text: "State management (Redux / context)" },
        { id: "fe-2b", text: "Data fetching" },
        { id: "fe-2c", text: "Forms & validation" },
        { id: "fe-2d", text: "Real-time (SignalR client)" },
        { id: "fe-2e", text: "Render performance" },
        { id: "fe-2f", text: "TypeScript fluency" },
      ], res: '🆓 <a href="https://www.typescriptlang.org/docs/handbook/intro.html" target="_blank" rel="noreferrer">TypeScript Handbook</a> <span class="tag free">FREE</span>' },
    ]
  },
  {
    id: "phase1", title: "Phase 1 — Backend / C# / .NET depth", sub: "~6–8 weeks · Go from \"I use these\" to \"I can defend every one cold\"",
    steps: [
      { id: "p1-1", title: "1.1 C# language depth — the atoms", items: [
        { id: "p1-1a", text: "Types, records, pattern matching, LINQ (deferred execution), IDisposable/using, generics" },
        { id: "p1-1b", text: "Async/await properly: state machine, Task vs ValueTask, ConfigureAwait, cancellation tokens, deadlocks, thread-pool starvation" },
        { id: "p1-1c", text: "GC basics: generations, allocations, when things get collected" },
      ], res: '🆓 <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noreferrer">Microsoft Learn — C# guide</a> <span class="tag free">FREE</span> · 🆓 <a href="https://blog.stephencleary.com/" target="_blank" rel="noreferrer">Stephen Cleary\'s blog</a> + "There Is No Thread" <span class="tag free">FREE</span> · 📘 Concurrency in C# Cookbook (optional book)' },
      { id: "p1-2", title: "1.2 ASP.NET Core Web API — the framework", items: [
        { id: "p1-2a", text: "Middleware pipeline (and why order matters), routing, model binding, filters" },
        { id: "p1-2b", text: "Dependency Injection: lifetimes (singleton/scoped/transient) + captive-dependency trap" },
        { id: "p1-2c", text: "Minimal APIs vs controllers, configuration, logging, error handling" },
      ], res: '🆓 <a href="https://learn.microsoft.com/en-us/aspnet/core/" target="_blank" rel="noreferrer">Microsoft Learn — ASP.NET Core fundamentals</a> <span class="tag free">FREE</span> · 🆓 <a href="https://andrewlock.net/" target="_blank" rel="noreferrer">Andrew Lock</a> & <a href="https://www.stevejgordon.co.uk/" target="_blank" rel="noreferrer">Steve Gordon</a> blogs <span class="tag free">FREE</span>' },
      { id: "p1-3", title: "1.3 EF Core & data access — persistence", items: [
        { id: "p1-3a", text: "Change tracking, LINQ → SQL translation" },
        { id: "p1-3b", text: "N+1 problem — how to spot/kill it, AsNoTracking" },
        { id: "p1-3c", text: "Transactions, optimistic concurrency, migrations under control, split queries" },
      ], res: '🆓 <a href="https://learn.microsoft.com/en-us/ef/core/" target="_blank" rel="noreferrer">Microsoft Learn — EF Core docs</a> <span class="tag free">FREE</span> · 📘 EF Core in Action (Jon Smith)' },
      { id: "p1-4", title: "1.4 Auth & security", items: [
        { id: "p1-4a", text: "JWT + refresh tokens, RBAC" },
        { id: "p1-4b", text: "Password/secret handling, common OWASP issues at API level" },
      ], res: '🆓 <a href="https://learn.microsoft.com/en-us/aspnet/core/security/" target="_blank" rel="noreferrer">Microsoft Learn — ASP.NET Core security</a> <span class="tag free">FREE</span> · 🆓 Milan Jovanović\'s auth articles <span class="tag free">FREE</span>' },
      { id: "p1-5", title: "1.5 Architecture & patterns — ties it together", items: [
        { id: "p1-5a", text: "Clean Architecture, CQRS + MediatR" },
        { id: "p1-5b", text: "Repository vs EF-as-repository, validation (FluentValidation)" },
        { id: "p1-5c", text: "When these patterns are overkill — articulate it" },
      ], res: '🆓 <a href="https://www.milanjovanovic.tech/" target="_blank" rel="noreferrer">Milan Jovanović</a> (blog + YouTube) <span class="tag free">FREE</span> · 🆓 <a href="https://github.com/jasontaylordev/CleanArchitecture" target="_blank" rel="noreferrer">Jason Taylor Clean Architecture template</a> <span class="tag free">FREE</span> · 🎥 optional Udemy ASP.NET Core + Clean Architecture (2025/26-rated) <span class="tag udemy">UDEMY</span>' },
    ],
    capstone: "Domain model + Web API for the capstone — clean architecture, EF Core, JWT auth + RBAC, core CRUD endpoints.",
    exitbar: [
      "Can whiteboard: request → Kestrel → middleware → controller → EF → DB",
      "Can name a deadlock you could cause with async + 3 fixes",
      "Can defend every architectural choice in your capstone from first principles"
    ]
  },
  {
    id: "phase2", title: "Phase 2 — Database + System Design", sub: "~8–10 weeks · DB depth is the foundation for system design",
    steps: [
      { id: "p2-1", title: "2.1 SQL fundamentals", items: [
        { id: "p2-1a", text: "SELECT/JOIN/GROUP BY/subqueries/CTEs, set-based thinking (skim if solid)" },
      ], res: '🆓 <a href="https://sqlbolt.com/" target="_blank" rel="noreferrer">SQLBolt</a> (interactive) <span class="tag free">FREE</span> · 🆓 Microsoft Learn — T-SQL <span class="tag free">FREE</span>' },
      { id: "p2-2", title: "2.2 Indexing — the depth that makes you dangerous", items: [
        { id: "p2-2a", text: "Clustered vs non-clustered, covering indexes" },
        { id: "p2-2b", text: "Composite index column order, when an index HURTS" },
      ], res: '🆓 <a href="https://use-the-index-luke.com/" target="_blank" rel="noreferrer">use-the-index-luke.com</a> (canonical) <span class="tag free">FREE</span> · 📘 SQL Performance Explained' },
      { id: "p2-3", title: "2.3 Query tuning & execution plans", items: [
        { id: "p2-3a", text: "Reading an execution plan, SARGability, statistics" },
        { id: "p2-3b", text: "Why a query goes parallel, common anti-patterns" },
      ], res: '🆓 <a href="https://www.brentozar.com/" target="_blank" rel="noreferrer">Brent Ozar</a> free blog/videos <span class="tag free">FREE</span>' },
      { id: "p2-4", title: "2.4 Transactions, isolation & concurrency", items: [
        { id: "p2-4a", text: "Isolation levels and the anomaly each prevents" },
        { id: "p2-4b", text: "Locking vs blocking vs deadlocks, NOLOCK and why it's a trap" },
      ], res: '🆓 Microsoft Learn + Brent Ozar <span class="tag free">FREE</span>' },
      { id: "p2-5", title: "2.5 Schema design", items: [
        { id: "p2-5a", text: "Normalization vs deliberate denormalization, keys/constraints" },
        { id: "p2-5b", text: "SQL Server vs PostgreSQL vs Cosmos — articulate the tradeoffs" },
      ]},
      { id: "p2-6", title: "2.6 System design — building blocks", items: [
        { id: "p2-6a", text: "Caching layers, message queues, load balancing" },
        { id: "p2-6b", text: "Horizontal vs vertical scaling, CAP/consistency in plain terms, idempotency" },
      ], res: '🆓 <a href="https://github.com/donnemartin/system-design-primer" target="_blank" rel="noreferrer">System Design Primer</a> <span class="tag free">FREE</span> · 📘 ByteByteGo (Alex Xu)' },
      { id: "p2-7", title: "2.7 System design — patterns", items: [
        { id: "p2-7a", text: "Rate limiting, retry/circuit-breaker, outbox pattern" },
        { id: "p2-7b", text: "Event-driven basics, observability" },
      ], res: '🆓 <a href="https://www.milanjovanovic.tech/" target="_blank" rel="noreferrer">Milan Jovanović</a> — .NET distributed patterns <span class="tag free">FREE</span> · 🆓 Microsoft eShop reference app <span class="tag free">FREE</span>' },
      { id: "p2-8", title: "2.8 The big decision", items: [
        { id: "p2-8a", text: "Monolith vs microservices from first principles (coupling, deployment, operational cost)" },
        { id: "p2-8b", text: "Turn your real migration report into a crisp interview story" },
      ]},
      { id: "p2-9", title: "2.9 Practice (most important part)", items: [
        { id: "p2-9a", text: "Design 8–10 systems out loud on paper/Excalidraw (URL shortener, rate limiter, notification service, 100× SLA Dashboard, etc.)" },
      ]},
    ],
    capstone: "Design + tune the real schema. Add Hangfire background jobs, blob storage, Redis caching, SignalR real-time status, rate limiting, OpenTelemetry/App Insights. Dockerize. CI/CD via Azure DevOps YAML.",
    exitbar: [
      "Can run a 45-min \"design system X for 1M users\" discussion end to end",
      "Can take a slow query and make it fast — AND explain why",
      "Can re-tell your microservices→monolith call from first principles"
    ]
  },
  {
    id: "phase3", title: "Phase 3 — AI / Agentic (your moat)", sub: "~6–8 weeks · Deepen + migrate, not learn cold",
    steps: [
      { id: "p3-1", title: "3.1 LLM & RAG fundamentals", items: [
        { id: "p3-1a", text: "Embeddings, chunking strategies (fixed/semantic/overlap)" },
        { id: "p3-1b", text: "Vector search, hybrid search, re-ranking, why naive RAG hallucinates" },
      ], res: '🆓 Microsoft Learn — Azure AI Search RAG docs <span class="tag free">FREE</span>' },
      { id: "p3-2", title: "3.2 Microsoft.Extensions.AI — the .NET AI foundation", items: [
        { id: "p3-2a", text: "IChatClient, IEmbeddingGenerator, DI-based provider swapping" },
      ], res: '🆓 Microsoft Learn <span class="tag free">FREE</span> · 🆓 MS devblogs "Better Together" series <span class="tag free">FREE</span>' },
      { id: "p3-3", title: "3.3 Semantic Kernel — deep", items: [
        { id: "p3-3a", text: "Plugins, memory, prompt templates, filters — articulate what you already use" },
      ], res: '🆓 Microsoft Learn — Semantic Kernel <span class="tag free">FREE</span> · 🎥 optional Udemy "Understanding Semantic Kernel SDK" / "Semantic Kernel C#" <span class="tag udemy">UDEMY</span>' },
      { id: "p3-4", title: "3.4 Microsoft Agent Framework (MAF) — the current layer", items: [
        { id: "p3-4a", text: "Agents, tools/function calling, multi-agent workflows" },
        { id: "p3-4b", text: "MCP integration, human-in-the-loop, checkpointing" },
        { id: "p3-4c", text: "⭐ Migrate one existing SK project to MAF — standout portfolio move" },
      ], res: '🆓 Microsoft Learn — Agent Framework docs + "from Semantic Kernel" migration guide <span class="tag free">FREE</span>' },
      { id: "p3-5", title: "3.5 Evaluation & production", items: [
        { id: "p3-5a", text: "RAG/agent evaluation: groundedness, faithfulness, relevance" },
        { id: "p3-5b", text: "Token cost management, observability, prompt-injection safety, structured outputs" },
      ], res: '🆓 Microsoft Learn <span class="tag free">FREE</span> · 🎥 optional "Generative AI for .NET Developers with Azure AI Services" <span class="tag udemy">UDEMY</span>' },
    ],
    capstone: "RAG pipeline (chunk + embed uploaded docs → vector search) + an agentic assistant on MAF with tools (search docs, summarize, create tasks) + a basic eval harness.",
    exitbar: [
      "Can whiteboard a full RAG pipeline + 3 quality-degraders and fixes",
      "Can say when to use one LLM call vs an agent vs multi-agent (incl. \"just write a function\")",
      "Can walk your MAF assistant's architecture"
    ]
  },
  {
    id: "interview", title: "Interview Readiness", sub: "Light in Phase 1, ramps up from Phase 2",
    steps: [
      { id: "ir-1", title: "Ongoing practices", items: [
        { id: "ir-1a", text: "Each exit bar turned into out-loud answers (record yourself)" },
        { id: "ir-1b", text: "Each capstone slice → architecture walkthrough + STAR story" },
        { id: "ir-1c", text: "Weekly mock interviews (DSA + system design + capstone defense)" },
        { id: "ir-1d", text: "GitHub cleaned up + 1–2 technical write-ups published" },
        { id: "ir-1e", text: "(Optional) AZ-204 certification" },
      ]},
    ]
  },
];
