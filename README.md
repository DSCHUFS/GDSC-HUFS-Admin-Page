# GDSC HUFS 관리자 페이지

[![MadeWithVueJs.com shield](https://madewithvuejs.com/storage/repo-shields/1444-shield.svg)](https://madewithvuejs.com/p/aura/shield-link)

GDSC 한국외대 챕터 관리자 페이지 <br>
[바로가기](https://gdsc-hufs-admin.web.app/) <br>
[템플릿 소스코드(Aura Admin)](https://github.com/gdg-x/aura-admin) <br>

### Show some :heart: and :star: the repo to support the project

### If you are using Aura, Kindly [fill this form](https://forms.gle/SNpajdAnqbSac2AV9) for Aura Web App Directory

## Overview

본 웹페이지는 GDG Jalandhar 커뮤니티에서 제작한 Aura Admin 웹 템플릿을 사용하여 제작/배포 하였습니다.

Aura Admin is the Web App that helps you to mange the Tech Communities like GDGs, DSCs or any other tech communities.

The template is created by [GDG Jalandhar](https://meetup.com/GDG-Jalandhar/) team experience of running meetups/events.

## Features

| Feature                       | Description                                                          |
| ----------------------------- | -------------------------------------------------------------------- |
| **Fast and optimized**        | PWA on Lighthouse                                                    |
| **Works offline**             | Can work offline                                                     |
| **Mobile first**              | Mobo Friendly Web app can be installed as a native app on your phone |
| **SEO optimized**             | index all content and get to the top in search results               |
| **Easy in management**        | Store all the data in Cloud Firestore                                |
| **Trigger Push Notification** | Trigger Push Notification to Aura Main                               |
| **User Management**           | Role based Authentication for the Team                               |
| **Connect**                   | Team Member can communicate in Group                                 |
| **Usability**                 | Any Tech Communities can use                                         |

## Getting Started

1. Clone this repo locally
1. Setup Environment
   - Install [Node.js (v8.9.4 or above)](https://nodejs.org/en/download/)
   - Install vue cli: `npm install -g @vue/cli`
1. Install project dependencies: `npm install`
1. Run locally: `npm run serve`
1. When you are ready to build for production, use the following command -
   - `npm run build`
   - A directory named dist will be created

## Deployment on Firebase

1. Install required tools for performing Firebase deployment
   - Install Firebase CLI: `npm i -g firebase-tools`
1. Login into Firebase CLI using the following command - `firebase login`
1. The Firebase accont must have access authority to this project
1. In your terminal at the root directory of the project, build and deploy using the following command
   - `firebase deploy`

### Template Documentation

1. [Full documentation](https://docs.google.com/document/d/1WhpMxCE-H47em73F-8pcNGETye5Qun8cY3Jdg7jx6DE/edit?usp=sharing).

## Technology Stack

- [VueJS](https://vuejs.org/)
- [Vuetify](https://vuetifyjs.com/en/)
- [Firebase](https://firebase.google.com/)
- [Service Worker & PWA](https://www.npmjs.com/package/vue-pwa)
- [Workbox](https://developers.google.com/web/tools/workbox)

## Contributing

Awesome! Contributions of all kinds are greatly appreciated. To help smoothen the process we have a few non-exhaustive guidelines to follow which should get you going in no time.

### Submitting a Pull Request

- Squash commits
- Lint your code with eslint (config provided)
- Include relevant test updates/additions
- Pull requests _must_ be made against `develop` branch. Any other branch (unless specified by the maintainers) will get rejected.

## Contributors

<b>Maintainer:</b> [최원혁](https://github.com/devluce) <br>
<b>Template Author:</b> [Vrijraj Singh](https://github.com/vrijraj) <br>
