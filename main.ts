import * as fs from "node:fs";

const line =
  "The deploy failed: the config file we swore was in version control was only on Dave's laptop. Dave is on holiday.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", line, "utf8");
