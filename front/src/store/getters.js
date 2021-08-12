
export const getters = {
    // * Symbols
    getSymbols(state) {
        return state.symbols;
    },

    getRegisterListLength(state) {
        return state.registers.length;
    },

    // * Table footer
    getSumOfRegisterDonateInput(state) {
        return state.registers
            .reduce((accumulator, currentValue) => {
                const sum = accumulator + currentValue['donateInput']
                return sum
            }, 0)
    },

    getSumOfRegisterDonateOutput(state) {
        return state.registers
            .reduce((accumulator, currentValue) => {
                const sum = accumulator + currentValue['donateOutput']
                return sum
            }, 0)
    },

    getSumOfRegisterBankAccountInput(state) {
        return state.registers
            .reduce((accumulator, currentValue) => {
                const sum = accumulator + currentValue['cbInput']
                return sum
            }, 0)
    },

    getSumOfRegisterBankAccountOutput(state) {
        return state.registers
            .reduce((accumulator, currentValue) => {
                const sum = accumulator + currentValue['cbOutput']
                return sum
            }, 0)
    },

    getSumOfRegisterOtherInput(state) {
        return state.registers
            .reduce((accumulator, currentValue) => {
                const sum = accumulator + currentValue['otherInput']
                return sum
            }, 0)
    },

    getSumOfRegisterOtherOutput(state) {
        return state.registers
            .reduce((accumulator, currentValue) => {
                const sum = accumulator + currentValue['otherOutput']
                return sum
            }, 0)
    }


}