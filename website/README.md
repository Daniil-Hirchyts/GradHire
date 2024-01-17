# GradHire website

The PHP application for GradHire, an internship and apprenticeship platform developed during the third semester
of the BUT Informatique at IUT Montpellier–Sète in 2023–2024.

## Features

- Students browsed and filtered offers, submitted applications and followed their placement progress.
- Employers managed company accounts and offers and communicated with candidates.
- University staff administered accounts and applications, managed placement agreements and scheduled visits
  and oral defences.
- Shared features included CSV imports, notifications, newsletters, calendars, statistics, PDF documents,
  LDAP authentication and a chat panel connected to the [chatbot service](../chatbot/).

## Structure

The application used PHP 8.2 and an MVC structure. Controllers handled requests, model and repository classes
accessed PostgreSQL through PDO, and views rendered the pages. Tailwind CSS and JavaScript provided the interface.

| Path | Contents |
| --- | --- |
| [src/controller/](src/controller/) | Request handlers |
| [src/model/](src/model/) | Domain objects, repositories and form handling |
| [src/view/](src/view/) | PHP views and reusable components |
| [public_html/](public_html/) | Web entry point and public assets |
| [src/config.php](src/config.php) | Database, authentication and service configuration |

## Local development

Requirements: PHP 8.2 with PDO PostgreSQL and Intl, Node.js/npm, and a PostgreSQL database with the
application schema. Set the database and service configuration in `src/config.php` for the local environment.

From `website/`:

```bash
npm install
npm run watch
```

In a second terminal, from the same directory:

```bash
npm run dev
```

Open <http://localhost:8080>. `npm run build` generates the CSS without the watcher. The npm scripts build
the interface and start PHP; they do not create or populate the database.

The Dockerfile also builds the CSS and serves PHP on container port 8080. The current Compose file maps
host port 8080 to container port 80, so its port mapping needs correction before that configuration can serve the site.

## Team

Marius Brouty, Clément Garro, Giovanni Gozzo and Daniil Hirchyts.

The [project report](https://drive.google.com/file/d/1cxeMwlNlAfpbL-QIwYSCCJOAMf-A2NXo/view) contains the design diagrams and coursework documentation.

## License

La permission est par la présente accordée, gratuitement, à toute personne obtenant une copie
de ce logiciel et des fichiers de documentation associés (le "Logiciel"), pour traiter
le Logiciel sans restriction, y compris sans limitation les droits
d'utilisation, de copie, de modification, de fusion, de publication, de distribution, de sous-licence, et/ou de vente
des copies du Logiciel, et de permettre aux personnes à qui le Logiciel est
fourni de le faire, sous réserve des conditions suivantes:

* La mention de copyright ci-dessus et cet avis de permission doivent être inclus dans tous
les copies ou portions substantielles du Logiciel.

* Le contenu du Site est mis à disposition pour une utilisation libre et sans restriction, en vertu des conditions énoncées ci-après.

* L'Utilisateur qui souhaite réutiliser toute partie du code de projet doit obligatoirement spécifier le ou les auteurs originaux du Site.

* Avant toute réutilisation du Site, que ce soit en totalité ou en partie, il est nécessaire de demander et d'obtenir la permission des auteurs de son contenu.

* Il est interdit de réutiliser le Site ou une partie de son contenu dans un but lucratif, à moins que l'Utilisateur ait obtenu l'autorisation préalable et explicite des auteurs.

* L'utilisation du Site est exclusivement réservée aux membres du personnel de l'Institut Universitaire de Technologie (IUT) de Montpellier-Sète. Toute autre utilisation par une personne non membre du personnel susmentionné est strictement interdite.

* Toutes actions illicites, telles que les injonctions, les attaques XSS et autres types d'infractions cybernétiques, sont strictement interdites. Toute violation de cette nature sera traitée conformément à la loi en vigueur. Une exception est faite pour les professeurs de l'IUT qui peuvent effectuer de telles actions dans le cadre de leurs recherches académiques.

* Toute violation de ces conditions pourrait entraîner des conséquences juridiques.

Copyright (c) 2023-2024 GradHire
- BROUTY Marius
- GARRO Clément
- GOZZO Giovanni
- HIRCHYTS Daniil
