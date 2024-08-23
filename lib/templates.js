export function getPackageJsonTemplate(appName) {
  return JSON.stringify(
    {
      name: appName,
      version: "1.0.0",
      main: "app.js",
      scripts: {
        start: "node app.js",
      },
      dependencies: {
        express: "$4.18.2",
      },
    },
    null,
    2
  );
}

export function getIndexJsTemplate() {
  return `
        const express = require('express');
        const app = express();
        const port = process.env.PORT || 3000;

        app.get("/", (req, res) => {
            res.send("Hello world!");
        });

        app.listen(port, () => {
            console.log(\`Server is running on port \${port}\`\);   
        });

    `.trim();
}
