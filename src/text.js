/**
 * Parse a template text string into an array of tokens.
 *
 * @param {String} text
 * @return {Array<Object> | null}
 *               - {String} type
 *               - {String} value
 *               - {Boolean} [html]
 *               - {Boolean} [oneTime]
 */
const regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g
export default function(text) {
    console.log(vm)
    var tokens = []
    text = text.replace(regexEscapeRE, '');
    tokens.push({
        value: text.trim()
    })
    console.log(text)
    return tokens
}