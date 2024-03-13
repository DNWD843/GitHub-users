export const enum PluralizeConfigKeys {
    nominativeCaseForm = 'nominativeCaseForm',
    genitiveCaseForm = 'genitiveCaseForm',
    pluralForm = 'pluralForm',
}
export type PluralizedTextForms = Record<PluralizeConfigKeys, string>

export const pluralize = ({ quantity, textForms }: { quantity: number; textForms: PluralizedTextForms }): string => {
    const value = Math.abs(quantity) % 100
    const lastDigit = value % 10

    if (value > 10 && value < 20) {
        return textForms[PluralizeConfigKeys.pluralForm]
    }
    if (lastDigit > 1 && lastDigit < 5) {
        return textForms[PluralizeConfigKeys.genitiveCaseForm]
    }
    if (lastDigit === 1) {
        return textForms[PluralizeConfigKeys.nominativeCaseForm]
    }

    return textForms[PluralizeConfigKeys.pluralForm]
}
