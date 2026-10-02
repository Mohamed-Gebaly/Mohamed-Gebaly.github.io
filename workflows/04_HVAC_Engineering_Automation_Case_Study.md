# HVAC Engineering Automation - Portfolio Demo

## 1) Objective

Show how HVAC domain logic can be represented in n8n as deterministic triage rules that classify maintenance priority and route to corrective or preventive action paths.

## 2) Business Problem

Maintenance teams need consistent triage logic for incoming HVAC issues. Free-text issue descriptions can hide urgency unless converted into explicit rules.

## 3) Workflow Files

- Workflow JSON: [04_HVAC_Engineering_Automation_Demo.json](04_HVAC_Engineering_Automation_Demo.json)

## 4) End-to-End Flow

Manual Trigger -> Capture HVAC Request -> Engineering Triage -> Check Priority -> Escalate Corrective or Create PM Action

## 5) Node-Level Logic

### Manual Trigger

- Starts demo execution.

### Capture HVAC Request (Code)

- Generates sample request data:
	- equipment id
	- system type
	- location
	- issue text

### Engineering Triage (Code)

- Applies rule-based keyword checks on issue text.
- Priority rules in current demo:
	- `Critical` when issue text contains critical markers
	- `High` when issue text indicates severe cooling/performance problems
	- `Normal` otherwise
- Maps priority to action recommendation:
	- corrective escalation for critical/high
	- preventive/routine maintenance for normal

### Check Priority (IF)

- Routes based on `priority == High` condition in current version.

### Escalate Corrective (Code)

- Adds route to corrective maintenance team.

### Create PM Action (Code)

- Adds route to preventive maintenance queue.

## 6) Example Input/Output

### Example Input

```json
{
	"equipment": "AHU-11",
	"systemType": "AHU",
	"location": "LER-11",
	"problem": "Supply air temperature is high and cooling is insufficient"
}
```

### Example Output (Corrective Route)

```json
{
	"equipment": "AHU-11",
	"systemType": "AHU",
	"location": "LER-11",
	"problem": "Supply air temperature is high and cooling is insufficient",
	"priority": "High",
	"action": "Corrective Maintenance Escalation",
	"triageBasis": "Deterministic engineering rule demo",
	"route": "Corrective Maintenance Team"
}
```

## 7) Current Limitations

- Rule-based triage only; no predictive model.
- Branch condition currently checks only high-path logic.
- No safety interlocks or permit-to-work controls.
- No CMMS/SAP integration in demo version.

## 8) Production Enhancement Path

1. Expand branching logic to explicitly handle critical, high, and normal paths.
2. Integrate with CMMS/SAP for work-order creation and tracking.
3. Add equipment master data lookups and SLA targets by system class.
4. Add alerting integrations (email/Teams/SMS) for critical issues.
5. Add governance logs for triage decision traceability.

## 9) Portfolio Positioning Note

This workflow demonstrates engineering decision logic for portfolio purposes and is not a production safety or maintenance-control system.
