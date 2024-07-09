import React, { useState, useEffect } from 'react';
import { database } from '../../firebase'; // Firebase 데이터베이스 모듈 가져오기
import Nav from '../Nav/Navbar';
import { AccountContainer, Section, Title, Stat, StatText, StatValue, Header } from './style';
import { ref, onValue } from "firebase/database";

const Account = () => {
  const [points, setPoints] = useState(0); // 초기 포인트 값을 0으로 설정
  const [trashRed, setTrashRed] = useState(0); // 초기 플라스틱 쓰레기 개수를 0으로 설정
  const [trashBlue, setTrashBlue] = useState(0); // 초기 종이 쓰레기 개수를 0으로 설정

  useEffect(() => {
    const pointsRef = ref(database, 'Money'); // 'Money' 경로의 참조를 생성

    const unsubscribePoints = onValue(pointsRef, (snapshot) => {
      if (snapshot.exists()) {
        setPoints(snapshot.val()); // 데이터가 존재하면 points 상태를 업데이트
      } else {
        console.log("No data available for points");
      }
    });

    const trashRedRef = ref(database, 'trash/red'); // 'trash/red' 경로의 참조를 생성
    const trashBlueRef = ref(database, 'trash/blue'); // 'trash/blue' 경로의 참조를 생성

    const unsubscribeRed = onValue(trashRedRef, (snapshot) => {
      if (snapshot.exists()) {
        setTrashRed(snapshot.val()); // 데이터가 존재하면 trashRed 상태를 업데이트
      } else {
        console.log("No data available for trash/red");
      }
    });

    const unsubscribeBlue = onValue(trashBlueRef, (snapshot) => {
      if (snapshot.exists()) {
        setTrashBlue(snapshot.val()); // 데이터가 존재하면 trashBlue 상태를 업데이트
      } else {
        console.log("No data available for trash/blue");
      }
    });

    // Cleanup subscriptions on unmount
    return () => {
      unsubscribePoints();
      unsubscribeRed();
      unsubscribeBlue();
    };
  }, []);

  // 사용자가 살린 나무 그루 수 계산 (실수 형태로 표시)
  const treesSaved = (trashRed + trashBlue) / 1000000;

  return (
    <AccountContainer>
      <Nav isLoggedIn={true} username="abcd1234" />
      <Header>내 정보</Header>
      <Section>
        <Title>보유 포인트</Title>
        <Stat>{points}P</Stat>
      </Section>
      <Section>
        <Title>사용자가 살린 나무 그루 수</Title>
        <Stat>
          <StatText>나무 그루 수:</StatText>
          <StatValue>{treesSaved.toFixed(6)} 그루</StatValue> {/* 소수점 두 자리까지 표시 */}
        </Stat>
      </Section>
      <Section>
        <Title>재활용 횟수</Title>
        <Stat>{trashRed + trashBlue} 회</Stat>
      </Section>
      <Section>
        <Title>통계</Title>
        <Stat>
          <StatText>플라스틱:</StatText>
          <StatValue>{trashRed} 회</StatValue>
        </Stat>
        <Stat>
          <StatText>종이:</StatText>
          <StatValue>{trashBlue} 회</StatValue>
        </Stat>
      </Section>
    </AccountContainer>
  );
};

export default Account;
