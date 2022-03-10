

const main = async () => {
  const ejs = require("ejs");
  const CSV = require("csv-parse");
  const fs = require("fs");

  const csv = await CSV.parse("./csa_member_entries.csv"); // array of objects

  const htmlString = await ejs.compile(
    `
    <html>
    <head></head>
      <body>
        <div>
          <% for(let i = 0; i < csv.length; i++) { %>
            <div>
                <%= csv[i].companyName %>
            </div>
          <% } %>
        </div>
        <script >
            console.log("Hello World");
        </script>
      </body>
    <html>`,
    { data: csv }
  );

  fs.writeFileSync("./index.html", htmlString);
};
main();
