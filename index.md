---
layout: default
title: Anderson Marzola
---

<style>
:root {
  --bg: #0b0f19;
  --bg-soft: #121826;
  --panel: #111827;
  --panel-2: #0f172a;
  --text: #e5eefc;
  --muted: #9fb0c9;
  --line: rgba(148, 163, 184, 0.18);
  --accent: #38bdf8;
  --accent-2: #60a5fa;
  --success: #34d399;
  --warning: #f59e0b;
  --shadow: 0 12px 28px rgba(0,0,0,.30);
  --radius: 20px;
}
body {
  background: linear-gradient(180deg, #09101a 0%, #0b0f19 100%);
  color: var(--text);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
}
.page-content, .wrapper, main {
  max-width: 1180px;
}
a { color: #8fdcff; text-decoration: none; }
a:hover { color: white; }
.hero {
  background:
    radial-gradient(circle at top right, rgba(56,189,248,.16), transparent 24%),
    radial-gradient(circle at bottom left, rgba(96,165,250,.12), transparent 20%),
    linear-gradient(145deg, #0f172a 0%, #0a1220 100%);
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 34px;
  box-shadow: var(--shadow);
  margin: 18px 0 28px 0;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 26px;
  align-items: center;
}
.eyebrow {
  display: inline-block;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(56,189,248,.10);
  color: #b9ecff;
  border: 1px solid rgba(56,189,248,.22);
  font-size: 13px;
  letter-spacing: .04em;
  text-transform: uppercase;
}
.hero h1 {
  margin: 14px 0 8px 0;
  font-size: 46px;
  line-height: 1.05;
}
.hero h2 {
  margin: 0 0 14px 0;
  font-size: 22px;
  color: #b9d3ff;
  font-weight: 600;
}
.hero p {
  font-size: 18px;
  line-height: 1.65;
  color: var(--muted);
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 18px;
}
.btn {
  display: inline-block;
  padding: 12px 18px;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,.03);
  color: var(--text);
  font-weight: 600;
}
.btn-primary {
  background: linear-gradient(90deg, rgba(56,189,248,.22), rgba(96,165,250,.22));
  border-color: rgba(96,165,250,.28);
}
.stat-stack {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.stat-card, .panel, .project-card, .timeline-card {
  background: linear-gradient(180deg, rgba(17,24,39,.96), rgba(13,19,33,.96));
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
.stat-card {
  padding: 18px;
}
.stat-label {
  color: var(--muted);
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: .05em;
}
.stat-value {
  font-size: 24px;
  font-weight: 700;
  margin-top: 8px;
}
.section-title {
  margin: 36px 0 14px 0;
  font-size: 28px;
}
.section-subtitle {
  color: var(--muted);
  margin-top: -2px;
}
.panel {
  padding: 22px;
}
.badge-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.project-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.project-card {
  padding: 22px;
}
.project-card h3 {
  margin-top: 0;
  margin-bottom: 10px;
}
.project-meta {
  color: var(--muted);
  font-size: 14px;
  margin-bottom: 10px;
}
.project-card ul {
  margin-top: 10px;
  padding-left: 18px;
  color: var(--muted);
}
.project-link {
  display: inline-block;
  margin-top: 10px;
  font-weight: 600;
}
.kpi-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}
.kpi {
  padding: 18px;
  border-radius: 18px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,.02);
}
.kpi strong {
  display: block;
  font-size: 24px;
  margin-bottom: 6px;
}
.two-col {
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  gap: 18px;
}
.timeline-card {
  padding: 22px;
}
.timeline-item {
  padding: 14px 0;
  border-bottom: 1px solid var(--line);
}
.timeline-item:last-child { border-bottom: none; }
.muted { color: var(--muted); }
.note {
  border-left: 4px solid var(--accent);
  padding: 12px 16px;
  background: rgba(56,189,248,.06);
  border-radius: 12px;
  color: #cdeefe;
}
.footer-box {
  margin-top: 28px;
  padding: 18px 20px;
  border-radius: 18px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,.02);
  color: var(--muted);
}
@media (max-width: 900px) {
  .hero-grid, .project-grid, .two-col, .kpi-row { grid-template-columns: 1fr; }
  .hero h1 { font-size: 36px; }
}
</style>

<div class="hero">
  <div class="hero-grid">
    <div>
      <span class="eyebrow">Portfolio • Architecture • Technical Leadership</span>
      <h1>Anderson Marzola</h1>
      <h2>Tech Lead • .NET Architect • Senior Software Engineer</h2>
      <p>
        I build enterprise systems, APIs and cloud-native solutions with strong emphasis on
        <strong>.NET</strong>, <strong>Azure</strong>, <strong>SQL Server</strong>,
        <strong>Angular</strong>, <strong>Docker</strong>, <strong>Kubernetes</strong>,
        <strong>CI/CD</strong> and <strong>observability</strong>.
      </p>
      <p>
        My goal is to bridge business needs and robust engineering through scalable architecture,
        practical leadership and production-ready delivery.
      </p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="https://github.com/ajmarzola">View GitHub</a>
        <a class="btn" href="cv/Anderson_Marzola_CV.pdf">Download CV</a>
        <a class="btn" href="#featured-projects">Featured Projects</a>
        <a class="btn" href="#contact">Contact</a>
      </div>
    </div>
    <div class="stat-stack">
      <div class="stat-card">
        <div class="stat-label">Experience</div>
        <div class="stat-value">15+ years</div>
        <div class="muted">Building software since 2010</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Primary Focus</div>
        <div class="stat-value">.NET & Azure</div>
        <div class="muted">Architecture, APIs and cloud delivery</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Current Positioning</div>
        <div class="stat-value">Tech Lead</div>
        <div class="muted">Hands-on leadership and solution design</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Portfolio Direction</div>
        <div class="stat-value">Cloud-Native</div>
        <div class="muted">Microservices, Kubernetes and observability</div>
      </div>
    </div>
  </div>
</div>

![Executive Banner](assets/executive-banner.svg)

## Executive Summary

<div class="panel">
  <p>
    Software Engineer since <strong>2010</strong>, with more than <strong>15 years of experience</strong>
    delivering enterprise applications, backend services, integrations and business-critical systems.
  </p>
  <p>
    My current positioning is centered on <strong>technical leadership</strong>,
    <strong>solution architecture</strong> and <strong>cloud-native engineering</strong>.
    I work across backend design, API strategy, modernization initiatives, DevOps enablement and scalable deployment models.
  </p>
  <p>
    I am also pursuing a <strong>Postgraduate Degree in .NET Systems Architecture at FIAP</strong>,
    where I develop practical portfolio projects involving microservices, event-driven workflows,
    container orchestration, monitoring and end-to-end architecture design.
  </p>
</div>

## Core Stack

<div class="panel">
  <div class="badge-wrap">

![C#](https://img.shields.io/badge/C%23-5C2D91?style=for-the-badge&logo=csharp&logoColor=white)
![.NET](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![ASP.NET Core](https://img.shields.io/badge/ASP.NET%20Core-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-0F0F11?style=for-the-badge&logo=angular&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![SQL Server](https://img.shields.io/badge/SQL%20Server-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white)
![Azure](https://img.shields.io/badge/Azure-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![Microservices](https://img.shields.io/badge/Microservices-Architecture-111827?style=for-the-badge)
![CI/CD](https://img.shields.io/badge/CI%2FCD-Delivery-111827?style=for-the-badge)
![Observability](https://img.shields.io/badge/Observability-Monitoring-111827?style=for-the-badge)

  </div>
</div>

## Value Proposition

<div class="kpi-row">
  <div class="kpi"><strong>Architecture</strong> APIs, distributed systems and scalable solution design.</div>
  <div class="kpi"><strong>Leadership</strong> Hands-on technical guidance, code review and delivery quality.</div>
  <div class="kpi"><strong>Cloud</strong> Azure, Docker, Kubernetes, CI/CD and platform readiness.</div>
  <div class="kpi"><strong>Execution</strong> Enterprise focus with practical engineering and maintainability.</div>
</div>

## Featured Projects {#featured-projects}

<div class="project-grid">
  <div class="project-card">
    <h3>FIAP Cloud Games</h3>
    <div class="project-meta">Cloud-native architecture project • microservices • observability</div>
    <p>
      A postgraduate flagship project designed to demonstrate a production-oriented platform
      with distributed services, event-driven communication and operational visibility.
    </p>
    <ul>
      <li>Microservices architecture with service separation by business capability</li>
      <li>Containerized services with Docker</li>
      <li>Kubernetes orchestration and scalable deployment model</li>
      <li>Prometheus and Grafana for monitoring and observability</li>
    </ul>
    <p><strong>Stack:</strong> .NET • Azure • Docker • Kubernetes • Messaging • Monitoring</p>
    <a class="project-link" href="https://github.com/ajmarzola?tab=repositories">Open repositories →</a>
  </div>

  <div class="project-card">
    <h3>AgroSolutions</h3>
    <div class="project-meta">Distributed platform • environment strategy • infrastructure maturity</div>
    <p>
      A modular architecture proposal focused on service decomposition, deployment organization,
      observability and technical consistency across environments.
    </p>
    <ul>
      <li>Service-oriented decomposition and clean project organization</li>
      <li>Container-first structure for local and cloud scenarios</li>
      <li>Deployment overlays and environment-specific configuration</li>
      <li>Monitoring and telemetry as part of the architecture baseline</li>
    </ul>
    <p><strong>Stack:</strong> .NET • Docker • Kubernetes • YAML • Monitoring • DevOps</p>
    <a class="project-link" href="https://github.com/ajmarzola?tab=repositories">Open repositories →</a>
  </div>

  <div class="project-card">
    <h3>Digital Certificate Signing Solution</h3>
    <div class="project-meta">Document signing • browser extension flow • backend integration</div>
    <p>
      Architecture proposal for secure PDF signing using Brazilian digital certificates,
      combining user workflow, API integration and storage strategy.
    </p>
    <ul>
      <li>Certificate selection and signing flow design</li>
      <li>Secure backend integration for PDF handling</li>
      <li>Practical product-oriented approach for enterprise use cases</li>
      <li>Cloud storage compatibility for signed documents</li>
    </ul>
    <p><strong>Stack:</strong> .NET • Web API • PDF • Certificates • Azure Blob Storage</p>
  </div>

  <div class="project-card">
    <h3>News Aggregator App</h3>
    <div class="project-meta">API integrations • mobile concept • personalized content delivery</div>
    <p>
      A cloud-based architecture concept combining personalized news aggregation,
      external integrations, notification strategy and shareable content generation.
    </p>
    <ul>
      <li>Interest-based aggregation with custom API strategy</li>
      <li>Mobile application concept with .NET MAUI</li>
      <li>External feeds and content integration model</li>
      <li>Push notifications and shareable card generation planning</li>
    </ul>
    <p><strong>Stack:</strong> .NET MAUI • ASP.NET Core • Azure • Cosmos DB • Notification Hubs</p>
  </div>
</div>

## GitHub Presence

<div class="two-col">
  <div class="panel">
    <h3>Contribution Activity</h3>
    <p class="muted">Live graph to reinforce active engineering work and public portfolio visibility.</p>
    <img alt="GitHub Contribution Graph" src="https://github-readme-activity-graph.vercel.app/graph?username=ajmarzola&theme=github-dark&hide_border=true&area=true" />
  </div>
  <div class="panel">
    <h3>GitHub Metrics</h3>
    <p class="muted">Useful visual signals for recruiters, peers and technical stakeholders.</p>
    <img alt="GitHub Stats" src="https://github-readme-stats.vercel.app/api?username=ajmarzola&show_icons=true&theme=transparent&hide_border=true" />
    <br/><br/>
    <img alt="Top Languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=ajmarzola&layout=compact&theme=transparent&hide_border=true" />
  </div>
</div>

## Experience & Education

<div class="two-col">
  <div class="timeline-card">
    <h3>Professional Snapshot</h3>
    <div class="timeline-item">
      <strong>Senior Systems Analyst / Tech Lead</strong><br/>
      <span class="muted">FIESP – Federation of Industries of the State of São Paulo</span>
      <p class="muted">
        Development and evolution of enterprise software, backend services, integrations,
        architecture improvements, technical collaboration and delivery support for strategic systems.
      </p>
    </div>
    <div class="timeline-item">
      <strong>Software Engineering Journey Since 2010</strong>
      <p class="muted">
        Experience across web systems, desktop solutions, APIs, database design,
        integration services and modernization initiatives.
      </p>
    </div>
  </div>

  <div class="timeline-card">
    <h3>Education</h3>
    <div class="timeline-item">
      <strong>Postgraduate Degree in .NET Systems Architecture</strong><br/>
      <span class="muted">FIAP</span>
    </div>
    <div class="timeline-item">
      <strong>Technologist Degree in Data Processing</strong><br/>
      <span class="muted">FATEC</span>
    </div>
    <div class="timeline-item">
      <strong>Professional Direction</strong>
      <p class="muted">
        Focused on architecture, technical leadership, cloud engineering and
        high-value enterprise solution delivery.
      </p>
    </div>
  </div>
</div>

## CV & Contact {#contact}

<div class="panel">
  <p>
    This page is designed to work as the professional entry point to my GitHub presence.
    Add the final links below to complete the experience.
  </p>

  <div class="note">
    Replace the placeholders with your final professional e-mail, LinkedIn URL and repository-specific links.
  </div>

  <p style="margin-top:16px;">
    <strong>CV:</strong> <a href="cv/Anderson_Marzola_CV.pdf">Download PDF</a><br/>
    <strong>GitHub:</strong> <a href="https://github.com/ajmarzola">github.com/ajmarzola</a><br/>
    <strong>LinkedIn:</strong> add your final LinkedIn URL here<br/>
    <strong>Email:</strong> add your professional e-mail here
  </p>
</div>

<div class="footer-box">
  Designed to present a curated, senior-level portfolio with an executive dark aesthetic and a clear architecture-focused positioning.
</div>
