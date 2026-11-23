import { writeFileSync, mkdirSync } from "node:fs";

// One line for make.fun's One-Star Review of Something Essential bounty.
// A deadpan one-star review of an everyday essential, written to /output/entry.txt.
const line =
  "One star. Gravity ignored me all day, then the second my phone slipped it became the fastest thing alive. No off switch.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
