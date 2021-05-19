# Install node image in container
FROM node:11.10.1

# Install nodemon for hot reloading
RUN npm install -g nodemon

# Install latest chrome dev package, which installs the necessary libs to
# make the bundled version of Chromium that Puppeteer installs work.
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
  && apt-get update \
  && apt-get install -y libxtst6 libxss1 google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf \
    --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*

# Create and set the working directory
RUN mkdir -p /app/server
WORKDIR /app/server

# Copy the dependency files to the container
COPY package*.json /app/server/

# Install dependencies
RUN npm install

# Copy the server files to the container
COPY . /app/server/

# Run the server
CMD ["npm", "run", "watch"]
