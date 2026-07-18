const STORE_KEY = "kunal_roadmap_v1";

export function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY)) || {};
  } catch {
    return {};
  }
}

export function saveState(state) {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

export function hasSavedState() {
  return localStorage.getItem(STORE_KEY) !== null;
}

export function countItems(phase, state) {
  let total = 0, done = 0;
  if (phase.isDsa) {
    phase.dsaTopics.forEach((_, i) => {
      total++;
      if (state["dsa-" + i]) done++;
    });
  } else {
    phase.steps.forEach(step => {
      step.items.forEach(it => {
        total++;
        if (state[it.id]) done++;
      });
    });
  }
  return { total, done };
}

export function pct(total, done) {
  return total ? Math.round((done / total) * 100) : 0;
}
