
export const getters = {

    getCongregationName(state) {
        return state.congregationName;
    },

    getCityName(state) {
        return state.cityName;
    },

    getStateName(state) {
        return state.stateName;
    },

    getMonth(state) {
        return state.actualMonth;
    },

    getAllMonths(state) {
        return state.allMonths;
    },

    getYear(state) {
        return state.actualYear;
    },

    getReportDate(state) {
        const localeLanguage = navigator.language
        const date = new Date(state.actualYear, state.actualMonth, 0);

        const options = {
            day: 'numeric',
            year: 'numeric',
            month: 'long'
        }

        const fmtDate = Intl.DateTimeFormat(localeLanguage, options)
            .format(date)

        return fmtDate
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

    // * Register 
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
    },

    getMaxCode(state) {
        const registerCodes = state.registers.map((register) => register.code)
        const maxCode = Math.max(...registerCodes)
        return maxCode

    },

}