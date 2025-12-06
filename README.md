# Dmoney — REST API Testing (Postman & Newman)

Project containing manual and automated API tests for the Dmoney payment system. The test suite covers core financial flows (deposit, send money, withdraw, payment) and demonstrates API validation, reporting, and documentation.

**Table of Contents**
- **Overview:** Project purpose and scope
- **Technologies:** Tools used
- **Prerequisites:** Secrets and environment
- **Setup & Run:** Install and run commands
- **Postman & Newman:** Collections and docs
- **Test Cases:** Link to test case spreadsheet
- **Reports:** Generated HTML report location

**Overview:** This repository contains the Postman collection(s) and configuration used to validate the Dmoney API and a small Node.js wrapper for running tests with Newman and producing an HTML report.

**Technologies:**
- **Node.js:** test runner and scripts
- **Postman:** API collection & environment
- **Newman:** CLI runner for Postman collections
- **HTML Report Extra:** HTML reporter for Newman

**Prerequisites:**
- Node.js (12+ recommended)
- `SECRET_KEY` (and any other API credentials) — required to run tests against the API

**Setup & Run**

1. Install dependencies:

```
npm i
```

2. Run tests (uses Newman via `npm test`):

```
npm test
```

Notes:
- Ensure required environment variables (e.g. `SECRET_KEY`) are exported or set in the Postman environment before running the tests.

**Postman & Newman**
- Postman documentation: https://documenter.getpostman.com/view/49887090/2sB3dPTAsk
- Newman run is configured in `package.json` test script (runs the collection and generates an HTML report)

**Test Case File**
- Manual test cases and scenarios: https://docs.google.com/spreadsheets/d/1HPXTLORcY4HtqFTPeVBbc6Erk4JdniSGno8GmGUm8k4/edit?usp=sharing

**Reports**
- Generated HTML report: `Reports/report.html` (also viewable as attached screenshot in repository history)

**Caution / Secrets**
- This project requires a secret/API key to run tests against real endpoints. Never commit production credentials to the repository. Use environment variables or a Postman environment file excluded from source control.

**Project Structure (summary)**
- `package.json` — npm scripts and dependencies
- `report.js` — helper script for report generation (if present)
- `Reports/` — generated HTML report(s)

If you want, I can:
- Add an example `.env.example` and update `README.md` with env usage
- Add a `scripts` entry that runs Newman with a sample environment file

---
Generated and reorganized `README.md` for clarity and quick onboarding.
