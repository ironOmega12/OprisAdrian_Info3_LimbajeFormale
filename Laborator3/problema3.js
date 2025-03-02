class DFA {
  constructor(transitions, startState, finalStates) {
    this.transitions = transitions;
    this.startState = startState;
    this.finalStates = new Set(finalStates);
  }

  process(inputString) {
    let currentState = this.startState;
    for (let symbol of inputString) {
      if (this.transitions[currentState] && this.transitions[currentState][symbol]) {
        currentState = this.transitions[currentState][symbol];
      } else {
        return false;
      }
    }
    return this.finalStates.has(currentState);
  }
}

const dfaTransitions = {
  q0: { a: "q0q1", b: "q0" },
  q0q1: { a: "q0q1", b: "q0q2" },
  q0q2: { a: "q0q1q2", b: "q0q2" },
  q0q1q2: { a: "q0q1q2", b: "q0q2" },
};

const startStateDFA = "q0";
const finalStatesDFA = ["q0q2", "q0q1q2"];

const dfa = new DFA(dfaTransitions, startStateDFA, finalStatesDFA);

const testInputs = ["aab", "ab", "bbb", "aaa", "bab"];
testInputs.forEach((input) => {
  console.log(`Input: ${input} -> Acceptat: ${dfa.process(input)}`);
});
