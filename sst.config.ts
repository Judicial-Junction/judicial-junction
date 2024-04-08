import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  // eslint-disable-next-line no-unused-vars
  config(_input) {
    return {
      name: "judicial-junction",
      region: "ap-south-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {
        logging: "combined",
        timeout: "60 seconds",
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
