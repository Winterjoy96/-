class SlotMachine {
    constructor(initialAmount) {
        if (initialAmount < 0) {
            throw new Error("Initial amount cannot be negative");
        }
        this.amount = initialAmount;
    }

    getTotalAmount() {
        return this.amount;
    }

    takeMoney(amount) {
        if (amount < 0) {
            throw new Error("Amount cannot be negative");
        }
        if (this.amount < amount) {
            throw new Error("Not enough money in the machine");
        }
        this.amount -= amount;
        return amount;
    }

    addMoney(amount) {
        if (amount < 0) {
            throw new Error("Amount cannot be negative");
        }
        this.amount += amount;
    }
}

class Casino {
    constructor(numSlotMachines, initialCasinoAmount) {
        if (numSlotMachines <= 0 || initialCasinoAmount < 0) {
            throw new Error("Invalid input values");
        }

        this.slotMachines = [];
        this.totalCasinoAmount = initialCasinoAmount;

        for (let i = 0; i < numSlotMachines; i++) {
            const initialMachineAmount = initialCasinoAmount / numSlotMachines;
            const machine = new SlotMachine(initialMachineAmount);
            this.slotMachines.push(machine);
        }
    }

    getTotalCasinoAmount() {
        return this.totalCasinoAmount;
    }

    getTotalNumSlotMachines() {
        return this.slotMachines.length;
    }

    addSlotMachine() {
        const newMachine = new SlotMachine(0);
        this.slotMachines.push(newMachine);
    }

    removeSlotMachine(machineIndex) {
        if (machineIndex < 0 || machineIndex >= this.slotMachines.length) {
            throw new Error("Invalid machine index");
        }

        const removedMachine = this.slotMachines.splice(machineIndex, 1)[0];
        const machineAmount = removedMachine.getTotalAmount();
        this.totalCasinoAmount -= machineAmount;

        if (this.slotMachines.length > 0) {
            const amountPerMachine = machineAmount / this.slotMachines.length;
            for (const machine of this.slotMachines) {
                machine.addMoney(amountPerMachine);
            }
        }
    }
}

const myCasino = new Casino(3, 1000);

// console.log("Total Casino Amount:", myCasino.getTotalCasinoAmount());

console.log("Total Number of Slot Machines:", myCasino.getTotalNumSlotMachines());

// myCasino.addSlotMachine();

myCasino.removeSlotMachine(1);

console.log("Total Number of Slot Machines (After Add and Remove):", myCasino.getTotalNumSlotMachines()); // fix 

const machine1 = myCasino.slotMachines[0];
// machine1.addMoney(500);
console.log("Machine 1 Amount:", machine1.getTotalAmount());
// console.log("Total Casino Amount:", myCasino.getTotalCasinoAmount());

// const machine2 = myCasino.slotMachines[1];
// machine2.takeMoney(200);
// console.log("Machine 2 Amount:", machine2.getTotalAmount());
// console.log("Total Casino Amount:", myCasino.getTotalCasinoAmount());
