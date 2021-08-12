
// * Format the date for input html field of type date 
// * Use this function only in input html field of type date
export const formatDateForInputDateHtmlField = (timestamp) => {
    const date = new Date(timestamp)

    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const day = (date.getDate()).toString().padStart(2, "0")

    const fmtDate = `${year}-${month}-${day}`

    return fmtDate

}

// * MapFn function for obtainAllMonthsOfYear
const allMonths = (_, item) => {
    const localeLanguage = navigator.language

    const options = {
        month: 'long'
    }

    const date = new Date(0, item, 1);

    const monthName = Intl.DateTimeFormat(localeLanguage, options)
        .format(date)

    return {
        code: item + 1,
        name: monthName,
    }
}

export const actualYear = () => {
    const date = new Date()
    const cuurentYear = date.getFullYear()
    return cuurentYear
}


// * Obtain all months of a year
export const obtainAllMonthsOfYear = () => {
    const totalMonthsInYear = 12;
    const result = Array.from({ length: totalMonthsInYear }, allMonths);

    return result
}

// export default { formatDateForInputDateHtmlField }