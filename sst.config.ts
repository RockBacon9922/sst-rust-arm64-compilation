/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "arm64-compilation",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Function("demo", {
      url: true,
      runtime: "rust",
      handler: ".demo",
      architecture: "arm64",
    });
  },
});
