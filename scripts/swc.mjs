// @ts-check
// https://github.com/swc-project/swc-node/issues/743
import { register } from "node:module";
import { pathToFileURL } from "node:url";

register("@swc-node/register/esm", pathToFileURL("./"));
