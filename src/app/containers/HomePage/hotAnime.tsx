import React from 'react'
import { createSelector } from 'reselect'
import styled from 'styled-components';
import { useAppSelector } from '../../hooks';
import { makeSelectAnimePage } from './selectors'

const HomeAnimeContainer = styled.div`
max-width:1280px;
width:100%;
height:100%;
display:flex;
justify-content:space-evenly;
`
const AnimeItemContainer = styled.div`
width:17em;
height:18em;
display:flex;
flex-direction:column;
align-items:center;
`
const AnimeCover = styled.div`
width:auto;
height:15em;

img {
  width:auto;
  height:100%;
}
`
const AnimeTitle = styled.h6`
margin-top:8px;
font-size:15px;
color:#000;
font-weight:500;
`

const stateSelector = createSelector(makeSelectAnimePage, (animePage) => ({
  animePage
}))

function HotAnime() {
  const { animePage } = useAppSelector(stateSelector);

  const isEmptyAnimePage = !animePage || !animePage.media || animePage.media.length === 0;

  if (isEmptyAnimePage) return null;

  return (
    <HomeAnimeContainer>
      {animePage?.media?.map((anime) => (
        <AnimeItemContainer>
          <AnimeCover>
            <img src={anime?.coverImage?.extraLarge || ''} />
          </AnimeCover>
          <AnimeTitle>
            {anime?.title?.english}
          </AnimeTitle>
        </AnimeItemContainer>
      ))}
    </HomeAnimeContainer>
  )
}

export default HotAnime;