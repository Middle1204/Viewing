import React, { useState, useEffect } from 'react';
import { database } from '../../firebase'; // Firebase 데이터베이스 모듈 가져오기
import Nav from '../Nav/Navbar';
import { MainAfterContainer, Background, Overlay, IconContainer, IconText, TreeIcon } from './style';
import treeIcon from '../../assets/tree.png';
import { ref, onValue } from "firebase/database";

const MainAfter = () => {
  const username = 'abcd1234'; // 예시 사용자 이름
  const [treesPlanted, setTreesPlanted] = useState(0); // 초기 심은 나무 수를 0으로 설정

  useEffect(() => {
    const plasticRef = ref(database, 'trash/red'); // 'trash/red' 경로의 참조를 생성
    const paperRef = ref(database, 'trash/blue'); // 'trash/blue' 경로의 참조를 생성

    let plasticCount = 0;
    let paperCount = 0;

    const unsubscribePlastic = onValue(plasticRef, (snapshot) => {
      if (snapshot.exists()) {
        plasticCount = snapshot.val();
        setTreesPlanted((plasticCount + paperCount) / 1000000); // 데이터가 존재하면 심은 나무 수 계산하여 업데이트
      } else {
        console.log("No data available for trash/red");
      }
    });

    const unsubscribePaper = onValue(paperRef, (snapshot) => {
      if (snapshot.exists()) {
        paperCount = snapshot.val();
        setTreesPlanted((plasticCount + paperCount) / 1000000); // 데이터가 존재하면 심은 나무 수 계산하여 업데이트
      } else {
        console.log("No data available for trash/blue");
      }
    });

    // Cleanup subscriptions on unmount
    return () => {
      unsubscribePlastic();
      unsubscribePaper();
    };
  }, []);

  return (
    <MainAfterContainer>
      <Nav isLoggedIn={true} username={username} />
      <Background />
      <Overlay />
      <IconContainer>
        <TreeIcon src={treeIcon} alt="tree icon" />
        <IconText>지금까지 아낀 나무:<br /> {treesPlanted.toFixed(6)} 그루</IconText>
      </IconContainer>
    </MainAfterContainer>
  );
};

export default MainAfter;
