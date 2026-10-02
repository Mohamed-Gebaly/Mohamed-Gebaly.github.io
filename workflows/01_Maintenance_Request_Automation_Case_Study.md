# Maintenance Request Automation - Portfolio Implementation

## 1) Objective

Demonstrate a practical maintenance-request routing workflow that normalizes request data, prevents duplicate processing, evaluates severity, and routes to urgent or standard maintenance paths.

## 2) Business Problem

Maintenance operations often process many requests manually. Without clear automation logic, requests can be duplicated, delayed, or routed inconsistently.

## 3) Workflow Files

- Workflow JSON: [01_Maintenance_Request_Automation_Portfolio_Implementation.json](01_Maintenance_Request_Automation_Portfolio_Implementation.json)

## 4) End-to-End Flow

New Maintenance Request -> Prepare Request Data -> Check Processing Status -> Check Severity -> Process Urgent Request or Process Normal Request

## 5) Node-Level Logic

### New Maintenance Request (Manual Trigger)

- Starts workflow execution for demo/testing.

### Prepare Request Data (Code)

- Creates normalized request fields:
  - request id
  - equipment
  - location
  - problem description
  - severity
  - processing status

### Check Processing Status (IF)

- Verifies whether status is empty.
- Prevents re-processing of already handled requests.

### Check Severity (IF)

- Checks `severity == High`.
- Routes to urgent or normal handling path.

### Process Urgent Request (Code)

- Sets:
  - `status`: `Urgent`
  - `route`: `Corrective Maintenance Team`
  - urgent notification note

### Process Normal Request (Code)

- Sets:
  - `status`: `Normal`
  - `route`: `Preventive Maintenance Team`
  - standard notification note

## 6) Example Input/Output

### Example Input

```json
{
  "requestId": "MR-001",
  "equipment": "AHU-11",
  "location": "LER-11",
  "problem": "Cooling performance is low",
  "severity": "High",
  "status": ""
}
```

### Example Output (Urgent Path)

```json
{
  "requestId": "MR-001",
  "equipment": "AHU-11",
  "location": "LER-11",
  "problem": "Cooling performance is low",
  "severity": "High",
  "status": "Urgent",
  "route": "Corrective Maintenance Team",
  "notification": "Urgent maintenance notification prepared"
}
```

## 7) Current Strengths

- Clear deterministic decision logic.
- Explicit branching for severity-based routing.
- Good baseline for expansion into production integrations.

## 8) Current Limitations

- Manual trigger in portfolio version.
- No direct CMMS/SAP integration.
- No SLA timer or escalation timeout handling.
- No persistent audit log store.

## 9) Production Enhancement Path

1. Replace manual trigger with form/webhook/CMMS event trigger.
2. Add connector nodes for CMMS/SAP update actions.
3. Add SLA timing checkpoints and automatic overdue escalations.
4. Add centralized logging and execution analytics.
5. Add role-based notifications (email/Teams/other channels).

## 10) Portfolio Positioning Note

This workflow is an implemented learning project and is credential-free by design for public portfolio sharing.
