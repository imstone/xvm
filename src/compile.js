import {def, query} from './tools.js';
import parseText from './text.js'
export default function (el, options, partial) {
	//let nodeLinFn = partial || !options._asComponent
	compileNode(el, options)// : null;

} 

function compileNode (node, options) {
	node = node.firstChild;
	let type = node.nodeType;
	console.log(node.data.trim())
	console.log(type)
	if (type === 1) {

	}
	else if (type === 3 && node.data.trim()){
		return compileTextNode(node, options);
	}
	else {
		return null;
	}
}
function compileTextNode (node, options) {
	
	
	let tokens = parseText(node.wholeText)
	let next = node.nextSibling;
	while (next && next.nodeType === 3) {
		next._skip = true;
		next = next.nextSibling;
	};
	// 创建文档碎片
	let frag = document.createDocumentFragment()
	let el, token;
	for (let i = 0, l = tokens.length; i < 1; i ++) {
		token = tokens[i];
		el = token.tag
			? processTextToken(token, options)
			: document.createTextNode(token.value);
		frag.appendChild(el);
	}
	return makeTextNodeLinkFn(tokens, frag, options);
}