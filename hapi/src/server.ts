import Hapi from "@hapi/hapi";
import { dataperson } from "./__mock__/dataperson";

const init = async () => {
  const pathPrefix = "/api";

  const server = Hapi.server({
    port: 5000,
    host: "0.0.0.0",
    routes: {
      cors: true,
    },
  });

  server.route([
    {
      method: "GET",
      path: `${pathPrefix}/`,
      handler: (request, h) => {
        return "Hello World again! ROOT";
      },
    },
    {
      method: "GET",
      path: `${pathPrefix}/data`,
      handler: (request, h) => {
        return dataperson;
      },
    },
  ]);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
