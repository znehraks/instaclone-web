import styled from "styled-components";
import sanitizeHtml from "sanitize-html";
import PropTypes from "prop-types";
import { FatText } from "../shared";

const CommentContainer = styled.div`
  margin-top: 1vw;
`;
const CommentCaption = styled.span`
  margin-left: 1vw;
  mark {
    background: inherit;
    color: ${(props) => props.theme.accent};
    font-weight: 600;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
function Comment({ author, payload }) {
  const cleanedPayload = sanitizeHtml(
    payload.replace(/#[\w]+/g, "<mark>$&</mark>"),
    {
      allowedTags: ["mark"],
    }
  );
  return (
    <CommentContainer>
      <FatText>{author}</FatText>
      <CommentCaption
        dangerouslySetInnerHTML={{
          __html: cleanedPayload,
        }}
      ></CommentCaption>
    </CommentContainer>
  );
}

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
};

export default Comment;
