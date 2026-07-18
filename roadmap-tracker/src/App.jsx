import { useEffect, useRef, useState } from "react";
import { DATA } from "./data";
import Phase from "./Phase";
import { loadState, saveState, hasSavedState, countItems, pct } from "./progress";
import "./App.css";

function App() {
  const [state, setState] = useState(loadState);
  const [openPhases, setOpenPhases] = useState(() =>
    hasSavedState() ? {} : { phase0: true }
  );
  const [showSaved, setShowSaved] = useState(false);
  const saveTimer = useRef(null);

  useEffect(() => {
    saveState(state);
    setShowSaved(true);
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => setShowSaved(false), 900);
  }, [state]);

  function handleCheck(key) {
    setState(s => ({ ...s, [key]: !s[key] }));
  }

  function handleNotes(key, value) {
    setState(s => ({ ...s, [key]: value }));
  }

  function toggleOpen(id) {
    setOpenPhases(o => ({ ...o, [id]: !o[id] }));
  }

  let total = 0, done = 0;
  DATA.forEach(phase => {
    const c = countItems(phase, state);
    total += c.total;
    done += c.done;
  });
  const overallPct = pct(total, done);

  return (
    <>
      <header>
        <h1>🧭 Kunal's Full-Stack .NET + AI Roadmap</h1>
        <p>Depth over speed · Prerequisite-first · 10–15 hrs/week</p>
        <div className="overall-bar-wrap">
          <div className="bar-row">
            <div className="bar-track">
              <div className="bar-fill" style={{ width: overallPct + "%" }} />
            </div>
            <div className="bar-pct">{overallPct}%</div>
          </div>
        </div>
      </header>

      <div className="container">
        {DATA.map(phase => (
          <Phase
            key={phase.id}
            phase={phase}
            state={state}
            open={!!openPhases[phase.id]}
            onToggleOpen={() => toggleOpen(phase.id)}
            onCheck={handleCheck}
            onNotes={handleNotes}
          />
        ))}
      </div>

      <div className={"savepill" + (showSaved ? " show" : "")}>Saved ✓</div>
    </>
  );
}

export default App;
