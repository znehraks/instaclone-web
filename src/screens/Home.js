import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Photo from "../components/feed/Photo";
import PageTitle from "../components/PageTitle";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      id
      user {
        username
        avatar
      }
      file
      caption
      comments
      likes
      createdAt
      isMine
      isLiked
    }
  }
`;

const Home = () => {
  const { data } = useQuery(FEED_QUERY);
  return (
    <div>
      <PageTitle title="Home"></PageTitle>
      {data?.seeFeed?.map((photo) => (
        <Photo
          key={photo.id}
          id={photo.id}
          user={photo.user}
          file={photo.file}
          isLiked={photo.isLiked}
          likes={photo.likes}
          // {...photo}
        />
      ))}
    </div>
  );
};

export default Home;
