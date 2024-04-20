import React, { useMemo } from "react";
import * as s from "./Avatar.styles";

export interface AvatarColorsProps {
  border: string;
  shadow: string;
  dropshadow: string;
}

export interface AvatarProps {
  user?: {
    avatar?: { url: string };
    countryCode?: string;
    type: "student" | "parent" | "teacher" | "tutor";
  };
  colors?: AvatarColorsProps;
  countryCode?: string;
  src?: string;
  size?: string;
  flagHidden?: boolean;
}

const Avatar = (props: AvatarProps) => {
  const countryCode = useMemo(() => {
    return props.user?.countryCode || props.countryCode;
  }, [props]);

  const avatarUrl = useMemo(() => {
    const avatarUrl = props.user?.avatar?.url || props.src;
    if (avatarUrl) return avatarUrl;
    if (!avatarUrl && props.user?.type === "student")
      return "https://cdn.nightzookeeper.com/edu-assets/images/empty-avatar.png";
    return "https://cdn.nightzookeeper.com/nzk-assets/empty-avatar.png";
  }, [props]);

  const flagUrl = useMemo(() => {
    if (!countryCode) return undefined;
    return `https://cdn.nightzookeeper.com/edu-assets/images/flags/${countryCode}.png`;
  }, [countryCode]);

  const flagShown = useMemo(() => {
    if (flagUrl && !props.flagHidden) return true;
    return false;
  }, [flagUrl, props]);

  return (
    <s.Wrapper $size={props.size} $colors={props.colors}>
      {flagShown && <s.Flag src={flagUrl} />}
      <s.AvatarImage $src={avatarUrl} />
    </s.Wrapper>
  );
};

Avatar.defaultProps = {
  size: "60px",
  flagHidden: false,
  colors: {
    border: "#8B26D4",
    shadow: "#53167E",
    dropshadow: "rgba(0,0,0,0.4)",
  },
};

export default Avatar;
