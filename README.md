# express-mock

This is a mock API server implementation (for use in automation testing) to create mock endpoints with static JSON data served directly to files.

## Usage

For an example, see the [routes/index.js](routes/index.js) on how it serves contents from [routes/data/users.json](routes/data/users.json) on `GET /users` request.

Starting the server is similar to any other [Express](https://expressjs.com) powered app:

```shell
# download dependencies
yarn install

# start the server
yarn start
```

## Docker

This project includes a [Docker](https://www.docker.com) compose [docker-compose.yml](docker-compose.yml), so you can simply run below command in a Terminal to get started:

```shell
docker-compose up --build -d
```

## Delay

It also implements a throttling middleware to emulate response delays if needed.
Delay (in milliseconds) can be configured during Docker image build, through environment or (per) request headers.

To set a delay during build time, pass the delay with the `docker build` command as below:

```shell
docker build --build-arg emulated_delay=1000 -t express-mock .
```

Or if you are using `docker-compose`:

```shell
export EMULATED_DELAY=5000 # on Unix
# or
set EMULATED_DELAY=5000 # on Windows, in Command Prompt
# or
$env:EMULATED_DELAY = '5000' # on Windows, in Powershell

docker-compose up --build -d
```

If you are running the server locally, you can set the global delay (in milliseconds) in environment before starting the server as below:

```shell
export EMULATED_DELAY=5000 # on Unix
# or
set EMULATED_DELAY=5000 # on Windows, in Command Prompt
# or
$env:EMULATED_DELAY = '5000' # on Windows, in Powershell

npm start
```

You can also pass the `X-Emulated-Delay` header in your requests to set or override the global (see above) delay setting.
To turn off the emulated delay for a specific request, you can pass `false` in `X-Emulated-Delay` header.
