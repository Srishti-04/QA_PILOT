# 🚀 QA-Pilot

End-to-end testing project using Playwright demonstrating UI automation, API testing, and CI/CD integration.

---

## 🛠️ Tech Stack

* Playwright (TypeScript)
* Node.js
* GitHub Actions (CI/CD)

---

## 📂 Project Structure

```
QA-Pilot/
├── tests/
│   ├── login.spec.ts
│   └── api/
│       └── login.api.spec.ts
├── pages/
│   └── loginPage.ts
├── docs/
│   ├── test_cases.md
│   └── bug_report.md
├── .github/workflows/
│   └── playwright.yml
```

---

## ⚙️ Features

* UI automation using Page Object Model (POM)
* API testing using Playwright request
* Manual test cases & bug reports
* CI/CD integration with GitHub Actions

---

## 🧪 Test Scenarios

* ✔ Valid login
* ✔ Invalid login
* ✔ API create request
* ✔ API invalid request

---

## ▶️ Running Tests

Install dependencies:

```
npm install
```

Install browsers:

```
npx playwright install
```

Run tests:

```
npx playwright test
```

---

## 🔄 CI/CD

Tests run automatically on every push using GitHub Actions.
API tests execute in CI, while UI tests are skipped to avoid instability from external dependencies.

---

## 👨‍💻 Author

Suyash Kumar Jaiswal
