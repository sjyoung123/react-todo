import { useEffect, useState } from "react";
import styled from "styled-components";

const TodayContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TodayDate = styled.h1`
  font-size: 38px;
  margin-bottom: 15px;
`;
const TodayTimeText = styled.span`
  font-size: 28px;
`;

function TodayTime() {
  const [timeStampNow, setTimeStampNow] = useState<number>();
  useEffect(() => {
    setInterval(() => setTimeStampNow(Date.now()), 1000);
  }, []);

  return (
    <>
      <TodayContainer>
        <TodayDate>
          {timeStampNow
            ? new Date(Number(timeStampNow)).toLocaleDateString()
            : ""}
        </TodayDate>
        <TodayTimeText>
          {timeStampNow
            ? new Date(Number(timeStampNow)).toLocaleTimeString("it-IT")
            : ""}
        </TodayTimeText>
      </TodayContainer>
    </>
  );
}
export default TodayTime;
