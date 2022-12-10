import React from 'react';
import {
  Avatar,
  Body,
  CommentIcon,
  Container,
  Content,
  Description,
  Dot,
  Header,
  Icons,
  ImageContent,
  LikeIcon,
  ReactIcon,
  Retweeted,
  RetweetIcon,
  Status,
} from './styles';

// import { Container } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <ReactIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>React</strong>
            <span>@reactjs</span>
            <Dot />
            <time>10 de Dez</time>
          </Header>

          <Description>Learn React Once and Write Everywhere</Description>

          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
