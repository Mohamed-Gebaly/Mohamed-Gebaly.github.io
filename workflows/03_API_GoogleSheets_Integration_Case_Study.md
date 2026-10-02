# API and Google Sheets Integration - Portfolio Demo

## 1) Objective

Demonstrate a practical integration pattern where structured data is transformed, sent through an HTTP API call, evaluated with business logic, and prepared for spreadsheet update actions.

## 2) Business Problem

Inventory-related processes often require collecting stock data, deciding when reorders are needed, and recording outcomes in shared spreadsheets.

## 3) Workflow Files

- Workflow JSON: [03_API_GoogleSheets_Integration_Demo.json](03_API_GoogleSheets_Integration_Demo.json)

## 4) End-to-End Flow

Manual Trigger -> Source Data -> Prepare API Payload -> HTTP Demo API -> Check Reorder Requirement -> Prepare Sheets Update or No Reorder

## 5) Node-Level Logic

### Manual Trigger

- Starts the demo flow manually.

### Source Data (Code)

- Creates sample inventory data:
	- item
	- current stock
	- minimum stock
	- quantity to order

### Prepare API Payload (Code)

- Transforms source data into a clean API payload object.
- Keeps threshold value for post-call decision logic.

### HTTP Demo API (HTTP Request)

- Sends POST request to `https://httpbin.org/anything`.
- Uses JSON body from prepared payload.
- Demonstrates API integration without sensitive credentials.

### Check Reorder Requirement (IF)

- Compares returned stock quantity against threshold.
- Routes to reorder or no-action branch.

### Prepare Sheets Update (Code)

- Builds spreadsheet-ready status object:
	- `Reorder Required`
	- next step note

### No Reorder (Code)

- Builds status object indicating no purchase action is required.

## 6) Example Input/Output

### Example Source Input

```json
{
	"item": "R134a Cylinder",
	"currentStock": 3,
	"minimumStock": 5,
	"quantityToOrder": 10
}
```

### Example Output (Reorder Path)

```json
{
	"status": "Reorder Required",
	"nextStep": "Update Google Sheets",
	"note": "Portfolio demo — connect real Sheets credentials in production"
}
```

## 7) Current Limitations

- Uses HTTP test endpoint, not a business API.
- No real Google Sheets node/credentials in this public demo.
- No retry/backoff behavior for network/API failures.
- Manual trigger instead of event-based process.

## 8) Production Enhancement Path

1. Replace test endpoint with real procurement/inventory API.
2. Add authenticated Google Sheets append/update nodes.
3. Add error handling branch, retries, and timeout strategy.
4. Externalize reorder thresholds and vendor settings.
5. Add audit fields (request id, timestamp, operator/system source).

## 9) Portfolio Positioning Note

This is a portfolio demo workflow and not represented as a production or paid client deployment.
