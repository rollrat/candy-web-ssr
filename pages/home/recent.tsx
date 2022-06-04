import { NextPage } from 'next';
import React from 'react'
import ArticleHeaderItem from '../../components/ArticleHeaderItem';
import Divide from '../../components/Divide';
import NavigationLayout from '../../components/layouts/NavigationLayout';
import SelectButton from '../../components/SelectButton';

const Recent: NextPage = () => {
  return (
    <NavigationLayout page={1}>
      <Divide />
      <div style={{ padding: "16px", width: "108px" }}>
        <SelectButton content="게시판 · 태그 선택" />
      </div>
      <div style={{ padding: "0 16px 16px 16px" }}>
        <ArticleHeaderItem />
        <ArticleHeaderItem />
        <ArticleHeaderItem />
      </div>
    </NavigationLayout>
  );
};

export default Recent;