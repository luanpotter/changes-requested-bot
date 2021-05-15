⚠️ **deprecated** I eventually figure it was easier to make a Github Action, check [this repo](https://github.com/luanpotter/changes-requested) instead. ⚠️

# changes-requested-bot

> A GitHub App built with [Probot](https://github.com/probot/probot) that Simple automation for a GitHub changes-requested workflow

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t changes-requested-bot .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> changes-requested-bot
```

## Contributing

If you have suggestions for how changes-requested-bot could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2021 Luan Nico <luanpotter27@gmail.com>
