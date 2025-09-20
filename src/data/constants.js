import {EMULATION_RESOURCES} from "./emulation";
import {GUIDE_RESOURCES} from "./guide";
import {PLUGIN_RESOURCES} from "./plugin";
import {ROM_RESOURCES} from "./rom";
import {VALVE_RESOURCES} from "./valve";
import {NON_STEAM_LAUNCHER_RESOURCES} from "./non_steam_launcher";
import {GAME_REVIEW_RESOURCES} from "./game_review";
import {SCRIPT_RESOURCES} from "./script";
import {DEVELOPER_TOOLS} from "./devtools";
import {OTHER_RESOURCES} from "./other";
import {resourceTitleComparator} from "../utils";

const ALL_RESOURCES = {
  "Emulation": EMULATION_RESOURCES,
  "Guides": GUIDE_RESOURCES,
  "Plugins": PLUGIN_RESOURCES,
  "ROM": ROM_RESOURCES,
  "Valve": VALVE_RESOURCES,
  "Launchers": NON_STEAM_LAUNCHER_RESOURCES,
  "GameReviews": GAME_REVIEW_RESOURCES,
  "Scripts": SCRIPT_RESOURCES,
  "DevTools": DEVELOPER_TOOLS,
  "Other": OTHER_RESOURCES,
}

const ALL_RESOURCES_SORTED = Object.fromEntries(
  Object.entries(ALL_RESOURCES).map(
    ([title, resources]) => {
      return [title, resources.sort(resourceTitleComparator)];
    }
  )
);

export const PAGE_RESOURCE_MAP = Object.assign(
  {},
  {"": ALL_RESOURCES_SORTED},
  Object.fromEntries(
    Object.entries(ALL_RESOURCES_SORTED).map(
      ([title, resources]) => [title, {[title]: resources}]
    )
  )
);

export const GITHUB_REPO_URL = "https://www.github.com/studyhog/deck";