# Workflow Portfolio Documentation

This folder contains n8n workflow exports and case-study documentation used in the portfolio website.

## Contents

### 01) Maintenance Request Automation

- JSON: [01_Maintenance_Request_Automation_Portfolio_Implementation.json](01_Maintenance_Request_Automation_Portfolio_Implementation.json)
- Case study: [01_Maintenance_Request_Automation_Case_Study.md](01_Maintenance_Request_Automation_Case_Study.md)
- Status: Implemented learning project

### 02) AI Request Classification

- JSON: [02_AI_Request_Classification_Demo.json](02_AI_Request_Classification_Demo.json)
- Case study: [02_AI_Request_Classification_Case_Study.md](02_AI_Request_Classification_Case_Study.md)
- Status: Portfolio demo

### 03) API and Google Sheets Integration

- JSON: [03_API_GoogleSheets_Integration_Demo.json](03_API_GoogleSheets_Integration_Demo.json)
- Case study: [03_API_GoogleSheets_Integration_Case_Study.md](03_API_GoogleSheets_Integration_Case_Study.md)
- Status: Portfolio demo

### 04) HVAC Engineering Automation

- JSON: [04_HVAC_Engineering_Automation_Demo.json](04_HVAC_Engineering_Automation_Demo.json)
- Case study: [04_HVAC_Engineering_Automation_Case_Study.md](04_HVAC_Engineering_Automation_Case_Study.md)
- Status: Portfolio demo

## How To Use These Files In n8n

1. Open n8n.
2. Import a workflow JSON file from this folder.
3. Execute with test data (manual trigger in current demo versions).
4. Review execution output and branch decisions.

## Documentation Standard Used

Each case-study file documents:

- business context
- architecture and flow
- node-by-node behavior
- sample input/output
- current limitations
- production enhancement path

## Positioning and Scope

- Workflow 01 is an implemented learning project.
- Workflows 02-04 are demos and not presented as paid production deployments.
- No live credentials are stored in this repository.

## Recommended Next Enhancements

- Add webhook-based production trigger variants.
- Add credentialed versions for Google Sheets, Gmail, and internal APIs.
- Add retry/error branches and operational logging.
- Add scenario test matrix per workflow and version history notes.
