// src/App.tsx
import css from "./App.module.css";
import CafeInfo from "./components/CafeInfo/CafeInfo.tsx";

export default function App() {
  return (
    <>
      <div className={css.app}>
        <CafeInfo />
      </div>
    </>
  );
}
