import React from "react";
import { TextDisplay, TextBox } from "@gatsby-tv/components";
import { useTheme } from "@gatsby-tv/utilities";

import { Listing } from "@src/components/Listing";
import { useRecommendedFeed } from "@src/utilities/feeds";

export default function IndexPage(): React.ReactElement {
  const theme = useTheme();
  const feed = useRecommendedFeed();

  return (
    <>
      <TextBox margin={[theme.spacing.baseLoose, theme.spacing.none]}>
        <TextDisplay font="large">Recommended</TextDisplay>
      </TextBox>
      <Listing grid generator={feed} />
    </>
  );
}
