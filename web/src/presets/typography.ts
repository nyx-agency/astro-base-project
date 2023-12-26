// Path: web/src/presets/typography.ts

import { type Preset, definePreset } from "unocss";

// https://unocss.dev/config/presets#presets
export default definePreset((options?: Preset) => {
  console.log("src/presets/typography.ts -> definePreset -> options", options);
  return {
    name: "typography",
    rules: [
      // ...
    ],
    variants: [
      // ...
    ],
    // it supports most of the configuration you could have in the root config
  };
});
