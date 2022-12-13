import React from 'react';
import StickyBox from 'react-sticky-box';

import FollowSuggestion from '../FollowSuggestion';
import List from '../List';
import News from '../News';

import {
  Body,
  Container,
  SearchIcon,
  SearchInput,
  SearchWrapper
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title='Talvez você curta'
            elements={[
              <FollowSuggestion
                name='João Victor'
                nickname='joaovictor'
              />,
              <FollowSuggestion
                name='Vinicius Silva'
                nickname='vinisilva'
              />,
              <FollowSuggestion
                name='Maria Vitoria'
                nickname='marivitoria'
              />
            ]}
          />
          <List
            title='Talvez você curta'
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
          />
          <List
            title='Talvez você curta'
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
          />
          <List
            title='Talvez você curta'
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
          />
          <List
            title='Talvez você curta'
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
