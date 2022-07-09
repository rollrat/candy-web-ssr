import React from "react";
import styled from "styled-components";
import AppBar from "../../components/AppBar";
import BottomNavigation from "../../components/layouts/nav/BottomNavigation";

export default function WritePage() {
  function auto_grow(element: any) {
    element.style.height = "5px";
    element.style.height = element.scrollHeight + "px";
  }

  return (
    <>
      <AppBar title={"글 쓰기"} showUnderLine alignCenter />

      <WriteForm action="/api/v1/article" method="post">
        <input type="hidden" name="boardKey" value="test" />

        <TitleText placeholder="제목" name="title" />
        <UnderLine />
        <BodyText
          placeholder="본문에 #을 이용해 태그를 입력해보세요."
          onInput={(e) => auto_grow(e.currentTarget)}
          name="value"
        />
        {/* <CancelButton type="submit" value={"취소"} /> */}
        <PostButton type="submit" value={"등록"} />
      </WriteForm>

      <BottomNavigation selected={2} />
    </>
  );
}

const WriteForm = styled.form`
  display: flex;
  padding: 16px;
  flex-direction: column;
  /* height: 400px; */
  margin-top: 51px;
  margin-bottom: 42px;
  /* flex: 1 1 auto; */
`;

const TitleText = styled.input`
  font-family: NotoSansCJKKR;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.7px;
  border: 0;
  align-items: stretch;
  width: 100%;

  &:focus {
    outline: none;
  }

  &:placeholder {
    color: #a2a5a9;
  }

  textarea::placeholder {
    color: #000000;
  }
`;

const UnderLine = styled.div`
  height: 1px;
  margin-top: 12px;
  background-color: #f1f1f1;
`;

const BodyText = styled.textarea`
  font-family: NotoSansCJKKR;
  font-size: 12px;
  letter-spacing: 0.7px;
  width: 100%;
  height: 100%;
  align-items: stretch;
  margin-top: 20px;
  flex-grow: 1;
  border: 0;
  transition-duration: 0ms;
  resize: none;
  overflow: hidden;

  &:focus {
    outline: none;
  }

  &:placeholder {
    color: #a2a5a9;
  }

  textarea::placeholder {
    color: #000000;
  }
`;

const PostButton = styled.input`
  border: none;
  outline: none;
  background: none;

  width: 100%;
  margin-top: 25px;
  padding: 10px 25px;
  border-radius: 5px;
  background-color: #5673eb;

  font-family: NotoSansCJKKR;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ededed;

  :hover {
    background-color: #b0bdf3;
  }
`;

const CancelButton = styled(PostButton)`
  background-color: #ededed;
  color: black;

  :hover {
    background-color: #c9c9c9;
  }
`;
