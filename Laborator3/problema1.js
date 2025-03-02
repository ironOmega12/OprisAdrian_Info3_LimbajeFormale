class CoffeeMachineAutomaton {
    constructor() {
        this.states = { q0: "Asteptare", q1: "Cafea", q2: "Ceai", q3: "Cappuccino", q4: "Ciocolata Calda", qf: "Final" };
        this.currentState = "q0";
    }

    transition(input) {
        const transitions = {
            q0: { C: "q1", T: "q2", A: "q3", H: "q4" },
            q1: { OK: "qf" },
            q2: { OK: "qf" },
            q3: { OK: "qf" },
            q4: { OK: "qf" },
            qf: { OK: "q0" }
        };

        if (transitions[this.currentState] && transitions[this.currentState][input]) {
            this.currentState = transitions[this.currentState][input];
            console.log(`Tranzitie: ${input} -> Stare curenta: ${this.states[this.currentState]}`);
        } else {
            console.log("Eroare / tranzitie invalida");
        }
    }
}

const automat = new CoffeeMachineAutomaton();
automat.transition("C"); 
automat.transition("OK");
automat.transition("OK");
