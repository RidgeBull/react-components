import path from "path"
import { existsSync, readFileSync } from "fs"

export interface Config {
  componentsDir: string;
  style: string;
  baseColor: string;
  typescript: boolean;
}

export function getConfig(cwd: string): Config | null {
  const configPath = path.join(cwd, "react-components.json")

  if (!existsSync(configPath)) {
    return null
  }

  const configData = JSON.parse(readFileSync(configPath, "utf-8"))
  return configData as Config
}
