interface Config {
  port: number;
  appVersion: string;
  appTitle: string;
}

const config: Config = {
  port: import.meta.env.VITE_APP_DEV_PORT || 3001,
  appVersion: import.meta.env.VITE_APP_VERSION || "v0.0.1",
  appTitle: import.meta.env.VITE_APP_TITLE || "Devops Test App",
};

export default config;
