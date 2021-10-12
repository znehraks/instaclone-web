import styled from "styled-components";
import sanitizeHtml from "sanitize-html";
import PropTypes from "prop-types";
import { FatText } from "../shared";
import { Link } from "react-router-dom";
import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($id: Int!) {
    deleteComment(id: $id) {
      ok
    }
  }
`;

const CommentContainer = styled.div`
  margin-top: 1vw;
`;
const CommentCaption = styled.span`
  margin-left: 1vw;
  a {
    background: inherit;
    color: ${(props) => props.theme.accent};
    font-weight: 600;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const CommentDelete = styled.button`
  background: inherit;
  border: none;
`;
function Comment({ id, photoId, author, payload, isMine }) {
  const updateDeleteComment = (cache, result) => {
    const {
      data: {
        deleteComment: { ok, error },
      },
    } = result;
    if (ok) {
      cache.evict({ id: `Comment:${id}` });
      cache.modify({
        id: `Photo:${photoId}`,
        fields: {
          commentNumber(prev) {
            return prev - 1;
          },
        },
      });
    }
  };
  const [deleteCommentMutataion] = useMutation(DELETE_COMMENT_MUTATION, {
    variables: {
      id,
    },
    update: updateDeleteComment,
  });
  const onDeleteClick = () => {
    deleteCommentMutataion();
  };

  return (
    <CommentContainer>
      <Link to={`/users/${author}`}>
        <FatText>{author}</FatText>
      </Link>
      <CommentCaption>
        {payload.split(" ").map((word, index) =>
          /#[\w]+/.test(word) ? (
            <React.Fragment key={index}>
              <Link key={index} to={`/hashtags/${word}`}>
                {word}
              </Link>{" "}
            </React.Fragment>
          ) : (
            <React.Fragment key={index}>{word} </React.Fragment>
          )
        )}
      </CommentCaption>
      {isMine ? <CommentDelete onClick={onDeleteClick}>X</CommentDelete> : null}
    </CommentContainer>
  );
}

Comment.propTypes = {
  id: PropTypes.number,
  photoId: PropTypes.number,
  author: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
  isMine: PropTypes.bool,
};

export default Comment;
