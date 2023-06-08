// import { registerApplication, start } from "single-spa";
// import {
//   constructApplications,
//   constructRoutes,
//   constructLayoutEngine,
// } from "single-spa-layout";
// import microfrontendLayout from "./microfrontend-layout.html";

// const routes = constructRoutes(microfrontendLayout);
// const applications = constructApplications({
//   routes,
//   loadApp({ name }) {
//     return System.import(name);
//   },
// });
// const layoutEngine = constructLayoutEngine({ routes, applications });

// applications.forEach(registerApplication);
// layoutEngine.activate();
// start();

import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@react-app/react-app",
  app: () => System.import("@react-app/react-app"),
  activeWhen: ["/"],
  customProps: {value: "xyz"}
});

// registerApplication('@company/micro1', () => System.import('@company/micro1'), isActive.micro1, { "authToken": "test" });

registerApplication({
  name: "@second-react-app/second-react-app",
  app: () => System.import("@second-react-app/second-react-app"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
