// Lets `node --test` resolve the project's `@/*` -> `src/*` alias so the pure
// filter logic can be tested with the built-in test runner and Node's native
// TypeScript stripping. No test-runner dependency, nothing to install.
import { register } from "node:module";
import { pathToFileURL } from "node:url";

register(
  "data:text/javascript," +
    encodeURIComponent(`
      import { pathToFileURL } from "node:url";
      const root = ${JSON.stringify(pathToFileURL(process.cwd() + "/src/").href)};
      export function resolve(specifier, context, next) {
        if (specifier.startsWith("@/")) {
          const path = specifier.slice(2);
          const target = /\\.[cm]?[jt]sx?$/.test(path) ? path : path + ".ts";
          return next(root + target, context);
        }
        return next(specifier, context);
      }
    `),
  import.meta.url,
);
