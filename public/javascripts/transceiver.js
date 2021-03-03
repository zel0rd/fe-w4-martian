const _ = {
    $: (selector) => document.querySelector(selector),
    $all: (selector) => document.querySelectorAll(selector),
    addClass: (node, className) => node.classList.add(className),
    removeClass: (node, className) => node.classList.remove(className),
    contains: (node, className) => node.classList.contains(className)
}

const PROMPT = _.$(".prompt1");

PROMPT.addEventListener("keyup", (e) => {
    if(e.key === 'Enter') {
        const array = [];
        array.push(PROMPT.value.split(" "));
        
    }
})