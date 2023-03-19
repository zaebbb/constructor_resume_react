export function upperLetter(str = ''){
    return str[0].toUpperCase() + str.slice(1)
}

export function formatDate(date){
    return date.split('-').reverse().join('.')
}

export function formatSalary(salary){
    return String(salary)
        .split('')
        .reverse()
        .map((item, i) => (i + 1) % 3 === 0 ? ` ${item}` : item)
        .reverse()
        .join('')
}
