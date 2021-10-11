import PropTypes from "prop-types";
import styled from "styled-components";
import { FatText } from "../shared";
import Comment from "./Comment";

const CommentsContainer = styled.div`
  margin-top: 2vw;
`;
const CommentCount = styled.span`
  margin-top: 1vw;
  opacity: 0.7;
  font-size: 0.8vw;
  font-weight: 600;
  display: block;
`;
function Comments({ author, caption, commentNumber, comments }) {
  return (
    <CommentsContainer>
      <Comment author={author} payload={caption} />
      <CommentCount>
        {commentNumber === 1 ? "1 comment" : `${commentNumber} comments`}
      </CommentCount>
      {comments?.map((comment) => (
        <Comment key={comment.id} author={author} payload={caption}></Comment>
      ))}
    </CommentsContainer>
  );
}

Comments.propTypes = {
  author: PropTypes.string.isRequired,
  caption: PropTypes.string,
  commentNumber: PropTypes.number.isRequired,
  comments: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.shape({
        avatar: PropTypes.string,
        username: PropTypes.string.isRequired,
      }),
      payload: PropTypes.string.isRequired,
      isMine: PropTypes.bool.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ),
};

export default Comments;
