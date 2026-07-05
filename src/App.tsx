// src/App.tsx
import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "./components/CafeInfo/CafeInfo.tsx";
import VoteOptions from "./components/VoteOptions/VoteOptions.tsx";
import VoteStats from "./components/VoteStats/VoteStats.tsx";
//import CafeInfo from "./components/CafeInfo/CafeInfo.tsx";

import type { Votes, VoteType } from "./types/votes.ts";

export default function App() {

  // Стан для об'єкта голосів
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });

  // Правильна функція для голосування (оновлює конкретне поле)
  const handleVote = (type: VoteType) => {
    setVotes((prevVotes) => ({
      // spread оператор копіює усі значення в новий масив
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  // Функція для скидання стану в початковий вигляд
  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        {/* Передача функції та стану через пропси */}
        <VoteOptions 
          onVote={handleVote} 
          onReset={resetVotes} 
          canReset={true} 
        />
    
        <VoteStats 
          votes={votes} 
          totalVotes={0} 
          positiveRate={0} 
        />
      </div>

    </>
  );
}
