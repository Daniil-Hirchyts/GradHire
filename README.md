# GradHire

**Internship and apprenticeship management platform with an AI assistance service · 2023–2024**

We developed **GradHire** during the third semester of the **BUT Informatique at IUT Montpellier–Sète**. The project centralised internship and apprenticeship offers, applications and academic follow-up for students, employers and university staff.

The completed work included a PHP web platform and a separate chatbot API connected to the website's chat interface.

## Components

| Component | Completed work | Main technologies |
| --- | --- | --- |
| [Website](website/) | Accounts, offers, applications, placement agreements, academic follow-up, calendars, imports and dashboards. | PHP 8.2, PostgreSQL, Tailwind CSS, JavaScript |
| [Chatbot service](chatbot/) | Authenticated chat endpoints, conversation history and AI-generated assistance integrated into the website. | Node.js, TypeScript, Express, OpenAI API, PostgreSQL, JWT |

## The web platform

We implemented separate workflows for the platform's main user groups:

| User group | Implemented features |
| --- | --- |
| **Students** | Offer browsing and filtering, applications, application-status views and access to placement follow-up information. |
| **Employers** | Account registration, offer creation and management, candidate communication and company information. |
| **University staff** | Offer and account administration, application supervision, placement agreements, visits, defence scheduling, feedback and assessment records. |

Shared functionality included:

- Authentication with account roles and an LDAP integration.
- Offer and academic-data imports, with validation and database updates.
- Calendars for visits and oral defences.
- Notifications, email communication and newsletters.
- Dashboards with statistics, charts and offer summaries.
- Placement-document and PDF functionality.
- Reusable forms, validation rules and interface components.
- Personalised navigation and a chat panel connected to the chatbot service.

The website used an object-oriented PHP MVC structure. Controllers handled requests, repositories accessed PostgreSQL through PDO, and views assembled the user interface. Tailwind CSS and JavaScript supported the forms, tables, calendars, charts and navigation.

Source: [controllers](website/src/controller/), [models and repositories](website/src/model/), [views](website/src/view/) and [frontend scripts](website/public_html/resources/js/).

## The chatbot service

The chatbot provided a separate API for assistance within the platform. Its implementation included:

- Express routes for retrieving conversations and submitting messages.
- JWT authentication middleware.
- User-role context in the assistant's instructions.
- OpenAI chat-completion requests.
- Conversation history held in memory for each authenticated user.
- User information and roles retrieved from PostgreSQL.
- Integration with the website's JavaScript chat interface.

TypeScript organised the service into routes, middleware, database access and an OpenAI request module. Separate Docker configurations were included for the website and chatbot.

Source: [chat routes](chatbot/routes/Chatbot.ts), [authentication middleware](chatbot/middlewares/authMiddleware.ts), [OpenAI module](chatbot/lib/ChatGpt.ts) and [website chat integration](website/public_html/resources/js/chatbot.js).

## Project team

- **[Marius Brouty](https://github.com/Marius-brt)**
- **[Clément Garro](https://github.com/Clement-Garro)**
- **Giovanni Gozzo**
- **[Daniil Hirchyts](https://github.com/Daniil-Hirchyts)**

The original history also included contributions by **[Lucas34750](https://github.com/Lucas34750)**. All original authorship records were retained.

## Project history

Development was recorded between September 2023 and January 2024. Both application snapshots and their original histories were preserved, including website work from development branches. The original branch and pull-request references were recorded in [history/original-refs.json](history/original-refs.json).

The original [website README](website/README.md), application configurations and build scripts were retained with their respective components.

## License

The website's original license, including its attribution and additional usage conditions, was retained unchanged in [LICENSE](LICENSE) and [website/LICENSE](website/LICENSE). The chatbot's [package metadata](chatbot/package.json) declared MIT. Bundled third-party components retained their original notices.
