[commit-shield]: https://img.shields.io/github/last-commit/Kaspary/feedget-nlw-rocketseat?style=for-the-badge&logo=GitHub
[commit-url]: https://github.com/Kaspary/chat-websockets/commits/main
[linkedin-shield]: https://img.shields.io/badge/-João%20Pedro%20Kaspary-6633cc?style=for-the-badge&logo=Linkedin&colorB=2366c2
[linkedin-url]: https://linkedin.com/in/joao-pedro-kaspary
[github-shield]: https://img.shields.io/github/followers/Kaspary?label=João%20Pedro%20Kaspary&style=for-the-badge&logo=GitHub
[github-url]: https://github.com/Kaspary

[![commit-shield]][commit-url]
[![linkedin-shield]][linkedin-url]
[![GitHub followers][github-shield]][github-url]

# FeedGet
## NLW Return Rocketseat

- [Protótipo](https://www.figma.com/file/iqGVSju6Nudg28BKU3MYwq/FeedGet---NLW-Return?node-id=100%3A2114)
- [Projeto original](https://github.com/rodrigorgtic/feedback-widget)

## 💻 Projeto
Aplicação web, mobile e back-end para o envio de feedbacks. Desenvolvido em formato de widget, permite o envio de feedbacks com mensagens de texto e screenshots.

## 🛠️ Features
- Automação de screenshots
- Comunicação http entre serviços
- Persiste feedbacks em banco 
- Envio de e-mails

## ✨ Tecnologias
- React
- React Native
- Express
- Node
- Typescript
- Expo
- Mailtrap
- Axios
- Prisma
- Tailwind

## Executando o projeto

Para executar os projetos é necessário Node v18.1.0. É recomendado a utlização do NVM para gerenciar as versões.

### Api & Web

- Instalar dependências
```
npm install
```

- Variáveis de ambiente
    - Copiar o arquivo `env.example` para `.env`
    - Preencher com os valores do ambiente

- Executar o serviço
```
npm run dev
```

#### Prisma
Para executar o prisma studio, rodar o seguinte comando
```
npx prisma studio
```
### Mobile
- Instalar expo
```
npm install --global expo-cli
```
- Instalar dependências
```
npm install
```
- Executar servidor Expo
```
expo start
```