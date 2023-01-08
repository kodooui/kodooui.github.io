import React, { ButtonHTMLAttributes, FunctionComponent, ReactNode, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

export type CategoryListProps = {
  selectedCategory: string;
  categoryEntities: {
    [key: string]: number;
  };
  changeCategory: (category: string) => void
}

const CategoryListWrapper = styled.div`
  padding: 68px 40px;
`

const CategoryListGroup = styled.div`
  position: relative;
`

const CategoryItem = styled(({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button type="button" {...props} />
))`
  display: block;
  position: relative;
  padding: 14px 20px;
  min-width: 150px;
  border-radius: 5px;
  font-size: 17px;
  text-align: left;
  
  &.is-active {
    font-weight: bold;
  }

  @supports not (mix-blend-mode: difference) {
    &.is-active {
      color: #fff;
      background-color: #5d89ff;
    }
  }
  
  &:not(.is-active):hover {
    color: #5d89ff;
    font-weight: 500;
  }
  
  & + button {
    margin-top: 8px;
  }
`;

const ShadowBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 48px;
  border-radius: 5px;
  transition: transform 0.3s ease-out;
  
  &:first-of-type{
    z-index: 1;

    @supports (mix-blend-mode: difference) {
      background-color: white;
      mix-blend-mode: difference;
    }
  }
  
  &:last-of-type {
    z-index: -1;

    @supports (mix-blend-mode: difference) {
      background-color: #5d89ff;
      filter: hue-rotate(180deg);
    }
  }
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryEntities,
  changeCategory,
}) {
  const categoryGroupRef = useRef<HTMLDivElement>(null);
  const [baseOffsetTop, setBaseOffsetTop] = useState(0);
  const [offsetTop, setOffsetTop] = useState(0);

  useEffect(() => {
    if (categoryGroupRef.current) {
      const { top } = categoryGroupRef.current.getBoundingClientRect();
      setBaseOffsetTop(top);
    }
  }, [])

  const onClickHandler = (el: HTMLButtonElement, name: string) => {
    const { top } = el.getBoundingClientRect();
    setOffsetTop(top - baseOffsetTop);
    changeCategory(name);
  }

  const categoryList = Object.entries(categoryEntities);
  const categoryAllIndex = categoryList.findIndex(category => category[0] === 'All');
  const categoryAll = categoryList.splice(categoryAllIndex, 1)[0];
  categoryList.unshift(categoryAll);

  return (
    <CategoryListWrapper>
      <CategoryListGroup ref={categoryGroupRef}>
        <ShadowBox style={{ transform: `translateY(${offsetTop}px)` }} />
        {categoryList.map(([name]) => (
          <CategoryItem
            className={selectedCategory === name ? 'is-active' : ''}
            onClick={e => onClickHandler(e.target as HTMLButtonElement, name)}
            key={name}
          >
            {name}
          </CategoryItem>
        ))}
        <ShadowBox style={{ transform: `translateY(${offsetTop}px)` }} />
      </CategoryListGroup>
    </CategoryListWrapper>
  )
}

export default CategoryList