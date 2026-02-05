![Playwright CI](https://github.com/malkiqmuki/playwright-automation-portfolio/actions/workflows/playwright-ci.yml/badge.svg)

# Playwright Automation Portfolio

## Project Overview
UI automation framework built with Playwright and TypeScript.
The project demonstrates real-world QA automation practices using Page Object Model.

## Tech Stack
- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
- GitHub Actions (CI/CD)
- HTML Reports

## Test Scope
### UI Tests
- Authentication (positive & negative)
- Cart and checkout flow
- Negative checkout scenarios

## Framework Design
- Page Object Model (POM)
- Data-driven testing
- Reusable utilities
- Screenshots & traces on failure

## Testing Strategy

This project demonstrates a real-world QA automation approach using Playwright.

Key decisions:
- Page Object Model (POM) is used to separate test logic from UI selectors.
- Authentication is handled once via Playwright storageState and reused across tests to reduce execution time and flakiness.
- Cross-browser testing (Chromium, Firefox, WebKit) is executed in CI using GitHub Actions.
- Screenshots, videos, and traces are captured automatically on test failures.
- API testing is included using public APIs to demonstrate backend validation patterns.

The goal is to create stable, maintainable, and CI-friendly automated tests.

## How to Run Tests
```bash
npm install
npx playwright test