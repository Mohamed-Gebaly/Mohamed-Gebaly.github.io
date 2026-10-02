# AI Request Classification - Portfolio Demo

## 1) Objective

Demonstrate how an unstructured maintenance request can be converted into structured fields, classified by priority, and routed to the correct action path.

This portfolio version is deterministic and credential-free, so it can be imported and tested immediately in n8n.

## 2) Business Problem

Operations teams receive free-text requests that are inconsistent in wording and urgency. Without structured classification, requests can be delayed or routed incorrectly.

## 3) Workflow Files

- Workflow JSON: [02_AI_Request_Classification_Demo.json](02_AI_Request_Classification_Demo.json)

## 4) End-to-End Flow

Manual Trigger -> Prepare Request -> AI Classification Demo -> Check Priority -> Route High Priority or Route Standard Request

## 5) Node-Level Logic

### Manual Trigger

- Starts the demo execution.
- Used for local testing.

### Prepare Request (Code)

- Creates a sample request payload with fields such as request text, equipment, location, and severity.

### AI Classification Demo (Code)

- Simulates classification logic using deterministic rules.
- Sets:
	- `category`: `Maintenance`
	- `priority`: `High` when severity is high or text indicates cooling failure, otherwise `Normal`
	- `ai_step`: clear marker that this is a portfolio simulation

### Check Priority (IF)

- Branches on `priority == High`.

### Route High Priority (Code)

- Adds urgent routing metadata (`Urgent Maintenance Team`, `Escalate`).

### Route Standard Request (Code)

- Adds normal routing metadata (`Standard Maintenance Queue`, `Process`).

## 6) Example Input/Output

### Example Input

```json
{
	"request": "AHU in LER-11 is not cooling properly",
	"equipment": "AHU-11",
	"location": "LER-11",
	"severity": "High"
}
```

### Example Output (High-Priority Path)

```json
{
	"request": "AHU in LER-11 is not cooling properly",
	"equipment": "AHU-11",
	"location": "LER-11",
	"severity": "High",
	"category": "Maintenance",
	"priority": "High",
	"ai_step": "Portfolio simulation — replace with an LLM node for production",
	"route": "Urgent Maintenance Team",
	"action": "Escalate"
}
```

## 7) Current Limitations

- No real LLM/API model call yet.
- No confidence score or classification rationale field.
- No exception path for malformed input.
- Manual trigger only.

## 8) Production Enhancement Path

1. Replace `AI Classification Demo` with an LLM node or AI service.
2. Enforce structured JSON output with schema validation.
3. Add confidence threshold logic and human-review fallback.
4. Add webhook/form trigger for real intake channels.
5. Add execution logging and metrics for misclassification analysis.

## 9) Portfolio Positioning Note

This workflow is a portfolio demo. It is not represented as a production deployment or paid client implementation.
