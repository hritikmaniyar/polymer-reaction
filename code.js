function afterreaction() {
    let input = document.getElementById("polymer").value;
    class Stack {
	    constructor() {
		    this.items = [];
	    }
        push(element) {
	        this.items.push(element);
        }
        pop() {
            if (this.items.length == 0)
		        return "Underflow";
	        this.items.pop();
        }
        peek() {
           return this.items[this.items.length - 1];
        }
        isEmpty() {
	        return this.items.length == 0;
        }
    }
    var stack = new Stack();

    if(input.length == 0) {
        alert("No input!");
    }
    else {
        for (let i = 0; i < input.length; i++) {
            if(!stack.isEmpty() && ((stack.peek().toLowerCase() == input[i] && stack.peek() == input[i].toUpperCase()) || (stack.peek() == input[i].toLowerCase() && stack.peek().toUpperCase() == input[i]))) {
                stack.pop();
            }
            else {
                stack.push(input[i]);
            }
        }
        if(stack.isEmpty()) {
            alert("After full reaction there are 0 units remaining.");
        }
        else {
            var abc="";
            while(!stack.isEmpty()){
                abc+=stack.peek();
                stack.pop();
            }
            abc=reverseString(abc);
            alert("After full reaction total units remaining is: "+abc.length+" and new polymer is: "+abc);
        }
    }
}

function shortestpolymer() {
    let input = document.getElementById("polymer").value;
    class Stack {
	    constructor() {
		    this.items = [];
	    }
        push(element) {
	        this.items.push(element);
        }
        pop() {
            if (this.items.length == 0)
		        return "Underflow";
	        this.items.pop();
        }
        peek() {
           return this.items[this.items.length - 1];
        }
        isEmpty() {
	        return this.items.length == 0;
        }
    }

    if(input.length == 0) {
        alert("No input!");
    }
    else {
        const alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
		'q','r','s','t','u','v','w','x','y','z'];
        const m = new Map();
        for (let i = 0; i < alph.length; i++) {
            var abc="";
            var s = new Stack();
            for (let j = 0; j < input.length; j++) {
                if(input[j]==alph[i]){
                    if(!s.isEmpty() && s.peek()==(alph[i].toUpperCase())){
                        s.pop();
                    }
                    else if(input[j++]==(alph[i].toUpperCase) && (j++)<input.length){
                        j++;
                    }
                }
                else{
                    s.push(input[j]);
                }
            }
            while(!s.isEmpty()){
                abc+=s.peek();
                s.pop();
            }
            m.set(alph[i], abc);
        }
        var res;
        var mini=input.length;
        for (const [key, value] of m) {
            if(mini>value.length){
                res=value;
                mini=value.length;
            }
        }
        res=reverseString(res);
        alert("Length of shortest polymer is: "+res.length+" and the polymer is: "+res);
    }
}
function reverseString(str) {
    return str.split("").reverse().join("");
}