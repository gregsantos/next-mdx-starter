FROM mhart/alpine-node:10
# Set the default working directory
WORKDIR /usr/src
# We first add only the files required for installing deps
# If package.json or yarn.lock don't change, no need to re-install later
COPY package.json yarn.lock ./
# We install our deps
RUN yarn
# Copy the relevant files to the working directory
COPY . .
# We run the build export, and expose as /public
RUN yarn build && yarn export -- -o /public