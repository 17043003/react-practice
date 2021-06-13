FROM node:lts
RUN yarn global add create-react-app
RUN yarn global add redux react-redux

EXPOSE 3000
