# MohamedGebaly.github.io

Portfolio website and workflow showcase for Mohamed Gebaly, focused on:

- n8n workflow automation
- AI-assisted request processing
- API and spreadsheet integration patterns
- HVAC and maintenance operations automation

## Repository Purpose

This repository contains:

- A live, single-page portfolio website in [index.html](index.html)
- Workflow demo files and case studies in [workflows/](workflows/)
- Clear separation between implemented learning work and portfolio demos

The portfolio is intentionally credential-free and safe to share publicly.

## Project Structure

- [index.html](index.html): Main portfolio website
- [assets/](assets/): Supporting static assets
- [workflows/](workflows/): n8n workflow JSON files and case-study documentation
- [workflows/README.md](workflows/README.md): Workflow documentation index and usage notes

## Workflow Catalog

| ID | Workflow | Type | Files |
|---|---|---|---|
| 01 | Maintenance Request Automation | Implemented learning project | [JSON](workflows/01_Maintenance_Request_Automation_Portfolio_Implementation.json) · [Case Study](workflows/01_Maintenance_Request_Automation_Case_Study.md) |
| 02 | AI Request Classification | Portfolio demo | [JSON](workflows/02_AI_Request_Classification_Demo.json) · [Case Study](workflows/02_AI_Request_Classification_Case_Study.md) |
| 03 | API and Google Sheets Integration | Portfolio demo | [JSON](workflows/03_API_GoogleSheets_Integration_Demo.json) · [Case Study](workflows/03_API_GoogleSheets_Integration_Case_Study.md) |
| 04 | HVAC Engineering Automation | Portfolio demo | [JSON](workflows/04_HVAC_Engineering_Automation_Demo.json) · [Case Study](workflows/04_HVAC_Engineering_Automation_Case_Study.md) |

## Local Preview

No build step is required.

1. Clone the repository.
2. Open [index.html](index.html) in a browser.
3. Optional: serve with a local static server for cleaner testing.

Example with Python:

```bash
python -m http.server 8080
```

Then open http://localhost:8080.

## Documentation Coverage

The repository now includes documentation for every workflow file:

- Problem context
- Workflow architecture
- Node-by-node behavior
- Example input and output
- Current limitations
- Production enhancement checklist

## What Should Be Enhanced Next

### Priority 1: Reliability and Correctness

- Add schema validation for workflow inputs before routing logic.
- Add explicit error branches for API/network failures.
- Add retry, timeout, and fallback behavior in integration workflows.

### Priority 2: Production Readiness

- Replace demo/manual triggers with webhook or form-driven triggers.
- Move constants and thresholds into environment variables.
- Add credential-managed nodes for real API, Gmail, and Google Sheets connections.

### Priority 3: Observability and Operations

- Add structured execution logs for each major decision point.
- Define workflow-level KPIs (classification accuracy, routing latency, escalation rate).
- Add audit-ready status updates for maintenance request lifecycle tracking.

### Priority 4: Testing and Governance

- Create test data sets for low, normal, high, and critical request scenarios.
- Add regression test checklist for every workflow update.
- Add versioning notes in each case-study file when workflow logic changes.

## Portfolio Positioning Notes

- Workflow 01 is an implemented learning project.
- Workflows 02-04 are portfolio demos and are not represented as paid production deployments.
- All examples are intentionally credential-free for public sharing.

## Contact

- GitHub: https://github.com/Mohamed-Gebaly
- LinkedIn: https://www.linkedin.com/in/eng-mohamed-gebaly/
- Email: MAshrafGebaly3@gmail.com
