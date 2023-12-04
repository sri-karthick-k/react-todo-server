FROM node:14.18.1

WORKDIR /app

ARG CACHEBUST
RUN echo $CACHEBUST

# Clone the repository and install dependencies
RUN git clone https://github.com/sri-karthick-k/react-todo-server.git . && \
    npm install

# Expose the port
EXPOSE 4000

# Run the application
CMD ["node", "index.js"]
