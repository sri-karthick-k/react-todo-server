FROM ubuntu:23.04

RUN apt update && \
    apt install -y nodejs npm git 

# RUN pacman -Scc --noconfirm

RUN npm install -g yarn

RUN git clone https://github.com/sri-karthick-k/react-todo-server.git

WORKDIR /react-todo-server

RUN yarn install

CMD [ "node", "index.js" ]