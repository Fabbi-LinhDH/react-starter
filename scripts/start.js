import { execa } from "execa";

await execa("yarn", ["workspace", "app", "run", "start"], {
  stdio: "inherit",
});
