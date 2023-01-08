import React, { FunctionComponent } from 'react';
import styled from "@emotion/styled";
import {GatsbyImage, IGatsbyImageData} from "gatsby-plugin-image";

type ProfileImageProps = {
  profileImage: IGatsbyImageData
} & ImageSize;

type ImageSize = {
  width: number;
  height: number;
}

const ProfileImageWrapper = styled(GatsbyImage)<ImageSize>`
  width: ${({ width }) => width + 'px'};
  height: ${({ height }) => height + 'px'};
  border-radius: 50%;
`;

const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
  width,
  height,
  profileImage
}) {
  return <ProfileImageWrapper image={profileImage} width={width} height={height} alt="프로필 이미지" />
}

export default ProfileImage