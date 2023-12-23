const open = ["(", "[", "{"]
const close = [")", "]", "}"]
const tokenMap = {
    '(': ')',
    '{': '}',
    '[': ']' 
}
const isDelimiterBalanced = (expression) => {
    const tokens = expression.split("")
    const stack = []
    const matchingClosingDelimiters = tokens.every(currentToken => {
        const openDelimiter = tokenMap[currentToken]
        if (openDelimiter){
            return stack.push(openDelimiter)
        } else {
            const lastExpectedClosedDelimiter = stack.pop()
            return currentToken === lastExpectedClosedDelimiter
        }
    })
    return matchingClosingDelimiters && stack.length === 0
}

module.exports = isDelimiterBalanced