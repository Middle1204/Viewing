import React from 'react';
import Nav from '../Nav/Navbar';
import { AccountContainer, Section, Title, Stat, StatText, StatValue, Header } from './style';

const Account = () => {
  const points = 120; // 예시 포인트 값
  const treesSaved = 5; // 예시 아낀 나무 그루 수
  const earthSavedTime = 3600; // 예시 지구를 살린 시간 (초 단위)
  const trashDisposals = 20; // 예시 쓰레기 버린 횟수
  const trashStats = {
    plastic: 10,
    paper: 5,
    glass: 3,
    metal: 2,
  };

  return (
    <AccountContainer>
      <Nav isLoggedIn={true} username="abcd1234" />
      <Header>내 정보</Header>
      <Section>
        <Title>보유 포인트</Title>
        <Stat>{points}P</Stat>
      </Section>
      <Section>
        <Title>사용자가 아낀 나무 그루 수 & 지구 수명</Title>
        <Stat>
          <StatText>아낀 나무 그루 수:</StatText>
          <StatValue>{treesSaved} 그루</StatValue>
        </Stat>
        <Stat>
          <StatText>지구 수명 연장:</StatText>
          <StatValue>{earthSavedTime} 초</StatValue>
        </Stat>
      </Section>
      <Section>
        <Title>쓰레기 버린 횟수</Title>
        <Stat>{trashDisposals} 회</Stat>
      </Section>
      <Section>
        <Title>쓰레기 종류별 통계</Title>
        {Object.entries(trashStats).map(([type, count]) => (
          <Stat key={type}>
            <StatText>{type}:</StatText>
            <StatValue>{count} 회</StatValue>
          </Stat>
        ))}
      </Section>
    </AccountContainer>
  );
};

export default Account;
