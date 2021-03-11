import React from "react";
import { Avatar, Flex, Optional, TextPlaceholder } from "@gatsby-tv/components";
import { useTheme } from "@gatsby-tv/utilities";

export interface SkeletonProps {
  channel?: boolean;
}

export function isSkeletonProps(props: any): props is SkeletonProps {
  return (props as SkeletonProps).channel !== undefined;
}

export function Skeleton(props: SkeletonProps): React.ReactElement {
  const theme = useTheme();

  return (
    <Flex gap={theme.spacing[1]} align="center">
      <Flex.Item shrink={0}>
        <Avatar size={theme.avatar.larger} />
      </Flex.Item>
      <Flex column w={1} gap={theme.spacing[0.5]}>
        <TextPlaceholder heading w={0.8} font={theme.font[4]} />
        <TextPlaceholder w={0.4} font={theme.font[5]} />
        <TextPlaceholder w={0.4} font={theme.font[5]} />
      </Flex>
    </Flex>
  );
}