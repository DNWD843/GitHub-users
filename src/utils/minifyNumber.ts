import {
    BILLION_NUMBER_LENGTH,
    EXPONENT_OF_TEN_FOR_MILLION,
    EXPONENT_OF_TEN_FOR_ONE,
    EXPONENT_OF_TEN_FOR_THOUSAND,
    MILLION_NUMBER_LENGTH,
    THOUSAND_NUMBER_LENGTH,
} from '../constants'

const computeExponent = (number: number): { value: number; suffix: string } => {
    const numberLength = String(number).length

    if (numberLength < THOUSAND_NUMBER_LENGTH) {
        return { value: EXPONENT_OF_TEN_FOR_ONE, suffix: '' }
    }

    if (numberLength < MILLION_NUMBER_LENGTH) {
        return { value: EXPONENT_OF_TEN_FOR_THOUSAND, suffix: 'k' }
    }

    if (numberLength < BILLION_NUMBER_LENGTH) {
        return { value: EXPONENT_OF_TEN_FOR_MILLION, suffix: 'M' }
    }

    return { value: EXPONENT_OF_TEN_FOR_ONE, suffix: '' }
}

export const minifyNumber = (longNumber: number): string => {
    const exponent = computeExponent(longNumber)

    if (!exponent.value) {
        return String(longNumber)
    }

    const minifiedNumber = (longNumber / Math.pow(10, exponent.value)).toFixed(1)

    return `${minifiedNumber}${exponent.suffix}`
}
