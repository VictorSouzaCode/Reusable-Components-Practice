
import type { Counts } from "../../App";
import rawConfig from "./buttonConfig.json"

// This file makes sure TypeScript understands the JSON and exports it with correct types.

export type ButtonConfig = {
    variant: keyof Counts | "reset";
    size: "sm" | "md" | "lg" | "xl";
    borders: "light" | "medium" | "heavy";
    increment: number,
    label: string,
    disabled?: boolean,
};

export const buttonConfig: ButtonConfig[] = rawConfig as ButtonConfig[];

// solutions for typescript errors in this code that i was having Use a type assertion when exporting "as ButtonConfig[];"
// Tell TS: trust me, this JSON matches ButtonConfig[].
// This will silence the error while still giving you proper autocomplete for consumers of buttonConfig.

// Solution 2: Add a runtime validator (safer)
// If you want extra safety (catch errors if someone edits the JSON incorrectly), you can validate it at runtime with something like zod]


/*

import { z } from "zod";
import rawConfig from "./buttonConfig.json";
import type { Counts } from "../../App";

const buttonConfigSchema = z.object({
  variant: z.string(), // could refine further
  size: z.enum(["sm", "md", "lg", "xl"]),
  borders: z.enum(["light", "medium", "heavy"]),
  increment: z.number(),
  label: z.string(),
  disabled: z.boolean().optional(),
});

const arraySchema = z.array(buttonConfigSchema);

export type ButtonConfig = z.infer<typeof buttonConfigSchema>;
export const buttonConfig: ButtonConfig[] = arraySchema.parse(rawConfig);

This way, if your JSON has "border": "thicc" instead of "heavy", it’ll throw an error at runtime instead of silently breaking.
*/

// About tsconfig.json vs tsconfig.app.json

// Since you’re in a monorepo-style config:
// tsconfig.json is just a "root project config" that references others.
// tsconfig.app.json is the one actually used by your frontend app.
//So you did the right thing: keep resolveJsonModule and esModuleInterop inside tsconfig.app.json, not the root tsconfig.json.

// added in "compilerOptions":
// "resolveJsonModule": true,
//    "esModuleInterop": true,

// in the tsconfig.app.json