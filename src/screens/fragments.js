import gql from "graphql-tag";

export const PHOTO_FRAGMENT = gql`
  fragment PhotoFragment on Photo {
    id
    file
    likes
    commentNumber
    isLiked
  }
`;

// export const COMMENT_FRAGMENT = gql``;
