import React from "react";
import {
  Avatar,
  Optional,
  TextPlaceholder,
  DiscreteSize,
} from "@gatsby-tv/components";

import { VideoInfoFormat } from "@lib/types";

import styles from "./Info.scss";

export interface SkeletonProps {
  format?: VideoInfoFormat;
  avatar?: DiscreteSize;
}

export function Skeleton(props: SkeletonProps): React.ReactElement {
  const { format = "full", avatar } = props;

  return (
    <Optional
      component="div"
      active={Boolean(avatar)}
      $props={{ className: styles.AvatarContainer }}
    >
      {avatar && <Avatar className={styles.Avatar} size={avatar} />}
      <div className={styles.Info}>
        <TextPlaceholder font="body-large" heading width={0.6} />
        <TextPlaceholder width={0.4} />
        {format === "full" && <TextPlaceholder width={0.4} />}
      </div>
    </Optional>
  );
}