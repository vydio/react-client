/* eslint-disable @typescript-eslint/no-empty-interface */

import "styled-components";
import {} from "styled-components/cssprop";
import { Theme } from "@gatsby-tv/components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
