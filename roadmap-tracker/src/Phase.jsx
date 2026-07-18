import { countItems, pct } from "./progress";

function Check({ id, checked, onChange, children }) {
  return (
    <label className="item">
      <input type="checkbox" checked={!!checked} onChange={() => onChange(id)} />
      <span>{children}</span>
    </label>
  );
}

export default function Phase({ phase, state, open, onToggleOpen, onCheck, onNotes }) {
  const { total, done } = countItems(phase, state);
  const percent = pct(total, done);
  const notesKey = phase.id + "-notes";

  return (
    <div className={"phase" + (open ? " open" : "")}>
      <div className="phase-head" onClick={onToggleOpen}>
        <div style={{ flex: 1 }}>
          <div className="phase-title">{phase.title}</div>
          <div className="phase-sub">{phase.sub}</div>
          <div className="bar-row">
            <div className="bar-track">
              <div className="bar-fill" style={{ width: percent + "%" }} />
            </div>
            <div className="bar-pct">{percent}%</div>
          </div>
        </div>
        <div className="chevron">▶</div>
      </div>

      <div className="phase-body">
        {phase.resource && (
          <div className="res" style={{ margin: "4px 0 14px 0" }} dangerouslySetInnerHTML={{ __html: phase.resource }} />
        )}

        {phase.isDsa ? (
          <>
            <div className="dsa-grid">
              {phase.dsaTopics.map((topic, i) => {
                const key = "dsa-" + i;
                return (
                  <div className="dsa-row" key={key}>
                    <label>
                      <input type="checkbox" checked={!!state[key]} onChange={() => onCheck(key)} />
                      <span>{topic}</span>
                    </label>
                    <a href="https://namastedev.com/namaste-dsa-sheet" target="_blank" rel="noreferrer">Open sheet →</a>
                  </div>
                );
              })}
            </div>
            <div className="footer-note" style={{ textAlign: "left", marginTop: "10px" }}>
              Method per problem: attempt 20 min → study optimal → re-solve from memory 2 days later. ~3–5 problems/week.
            </div>
          </>
        ) : (
          phase.steps.map(step => (
            <div className="step" key={step.id}>
              <div className="step-title">{step.title}</div>
              {step.items.map(it => (
                <Check key={it.id} id={it.id} checked={state[it.id]} onChange={onCheck}>
                  {it.text}
                </Check>
              ))}
              {step.res && <div className="res" dangerouslySetInnerHTML={{ __html: step.res }} />}
            </div>
          ))
        )}

        {phase.capstone && (
          <div className="step">
            <div className="step-title">🏗 Capstone slice</div>
            <Check id={phase.id + "-capstone"} checked={state[phase.id + "-capstone"]} onChange={onCheck}>
              {phase.capstone}
            </Check>
          </div>
        )}

        {phase.exitbar && (
          <div className="exitbar">
            <div className="exitbar-title">✅ EXIT BAR — must pass all before moving on</div>
            {phase.exitbar.map((text, i) => {
              const key = phase.id + "-exit-" + i;
              return (
                <Check key={key} id={key} checked={state[key]} onChange={onCheck}>
                  {text}
                </Check>
              );
            })}
          </div>
        )}

        <label className="notes-label">📝 Notes / doubts for this phase</label>
        <textarea
          value={state[notesKey] || ""}
          placeholder="What clicked, what's still shaky, questions to bring to the coach..."
          onChange={e => onNotes(notesKey, e.target.value)}
        />
      </div>
    </div>
  );
}
