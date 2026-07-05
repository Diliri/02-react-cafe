// src/App.tsx
import { useState } from "react";

import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo.tsx";
import VoteOptions from "../VoteOptions/VoteOptions.tsx";
import VoteStats from "../VoteStats/VoteStats.tsx";
import Notification from "../Notification/Notification.tsx";

import type { Votes, VoteType } from "../../types/votes.ts";

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
  // console.log("Поточний стан голосів:", votes); перевірка кроку 4

  // Статистика - це сума властивостей об'єкта votes
  const totalVotes = votes.good + votes.neutral + votes.bad;
  // Відсоток позитивних відгуків
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;
  
return (
    <div className={css.app}>
      <CafeInfo />

      {/* Крок 8: кнопка Reset активна/видима, тільки якщо є хоча б 1 голос */}
      <VoteOptions 
        onVote={handleVote} 
        onReset={resetVotes} 
        canReset={totalVotes > 0} 
      />

      {/* Крок 7: Умовний рендеринг за допомогою тернарного оператора */}
      {totalVotes > 0 ? (
        <VoteStats 
          votes={votes} 
          totalVotes={totalVotes} 
          positiveRate={positiveRate} 
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}