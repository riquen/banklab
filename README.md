# BankLab

BankLab is a learning project focused on building and evolving a modern financial application with React.

The project starts as a frontend application and will gradually evolve to cover frontend architecture, microfrontends, cloud infrastructure, backend development, data, distributed systems, and system design.

## Goals

The main goals of this project are:

- Strengthen React and JavaScript fundamentals.
- Practice frontend architecture and technical decision-making.
- Build a React SPA without relying on Next.js.
- Explore state management strategies and their trade-offs.
- Implement microfrontends using Module Federation.
- Practice frontend deployment using AWS.
- Introduce Infrastructure as Code.
- Later evolve the project into a complete full-stack system.

## Current Stack

- React
- TypeScript
- Vite
- React Router
- Sass
- Faker.js
- ESLint
- Prettier

The stack will evolve as new requirements are introduced.

Some technologies expected to be explored later include:

- Zustand
- TanStack Query
- Storybook
- Module Federation
- AWS S3
- AWS CloudFront
- Terraform
- Node.js
- PostgreSQL
- Redis
- Messaging / Queues
- Docker
- Kubernetes

## Project Direction

The application will simulate a digital banking environment.

Initial domains may include:

- Authentication
- Dashboard
- Accounts
- Transactions
- Transfers
- Cards

The first version will use mocked data.

As the project evolves, mocked data will be replaced by real APIs and backend services.

## Architecture Evolution

The project intentionally starts simple.

```text
React SPA
   ↓
Mocked data
   ↓
Client and server state strategies
   ↓
Feature-based architecture
   ↓
Microfrontends
   ↓
Module Federation
   ↓
AWS deployment
   ↓
Infrastructure as Code
   ↓
Backend APIs
   ↓
Database / Cache / Queues
   ↓
Distributed systems
```

Technologies will be introduced when there is a concrete problem or requirement that justifies them.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Code Quality

Run ESLint:

```bash
npm run lint
```

Format the project with Prettier:

```bash
npm run format
```

Check formatting without modifying files:

```bash
npm run format:check
```

Before considering a change complete, the following commands should succeed:

```bash
npm run lint
npm run build
npm run format:check
```

## Development Workflow

Changes should preferably be developed in dedicated branches instead of directly on `main`.

Example:

```bash
git checkout -b feat/application-shell
```

The intended workflow is:

```text
Issue
  ↓
Branch
  ↓
Implementation
  ↓
Lint / Build / Format check
  ↓
Pull Request
  ↓
Code Review
  ↓
Merge
```

The project will also be used to practice architecture discussions and code reviews, so implementation decisions and trade-offs are part of the learning process.
