


export const required = (value: string) => {
    if ( value && value.length > 0 ) return undefined;

    return 'Field is required!'
}


export const maxLength = (num: number) => (value: string) => {
    if (value && value.length > num) return `Max length text ${num} symbols.`

    return undefined;
}
