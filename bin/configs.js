export const metadata = {
  command: "qse",
  name: "Quick Start Express",
  version: "v1.0.6-beta",
  description:
    "A simple CLI tool to generate Express servers from multiple available templates.",
  oneLineDescription: "A simple Express.js server generator CLI tool.",
};

export const commands = {
  version: {
    command: "-v, --version",
    description: "Prints current qse version",
  },
  init: {
    command: "init",
    description: "Initialize a new Express server.",
    options: [
      {
        flags: "-t, --template <template>",
        description: "Specify template to use",
      },
      {
        flags: "-n, --name <name>",
        description: "Specify the name of the package",
      },
      {
        flags: "--remove-nodemon",
        description: "Disable hot-reload support using nodemon",
      },
    ],
  },
  list: {
    command: "list",
    description: "List all available commands and options.",
  },
  clear: {
    command: "clear",
    description: "Clear the directory.",
  },
};

export const templates = {
  basic: {
    name: "basic",
  },
  express_pg_sequelize: {
    name: "express_pg_sequelize",
  },
  express_mysql: {
    name: "express_mysql",
  },
  express_pg_prisma: {
    name: "express_pg_prisma",
  },
  express_oauth_microsoft: {
    name: "express_oauth_microsoft",
  },
  express_oauth_google: {
    name: "express_oauth_google",
  },
};

export const questions = {
  type: 'list',
  message: 'Select a template',
  name: 'template',
  choices: Object.values(templates).map(template => template.name)
}