Explained key words used in functions

parameter: A named variable in a function definition that describes the data the function expects.
Example: function greet(name) { ... } — `name` is a parameter.

argument: The actual value passed to a function when it is called.
Example: greet('Alice') — `'Alice'` is an argument.

variable: A named storage location for data. Inside functions variables can be parameters, local variables (declared with `let`/`const`/`var`) or references to outer-scope values.
Example: function add(a, b) { let sum = a + b; return sum; }

string: A primitive data type representing text, written with single or double quotes or backticks for templates.
Example: const s = "hello"; or `const s = `hello ${name}`;`

placeholder: Informally used to mean a temporary or example value used in demonstrations. In functions you often see placeholders in parameter lists (e.g., `function fn(x) {}`) or template placeholders in template literals (`${...}`).

Additional common function keywords (short explanations and examples)

return value: The value a function returns to its caller when it executes `return`.
Example: function square(x) { return x * x; } // square(3) -> 9

callback: A function passed as an argument to be executed later by the receiving function.
Example: setTimeout(() => console.log('later'), 1000); // the arrow function is a callback

higher-order function: A function that accepts other functions as arguments or returns a function.
Example: function map(arr, fn) { const out = []; for (let i of arr) out.push(fn(i)); return out; }

scope: The region of code where a binding (variable) is visible. `let`/`const` are block-scoped; `var` is function-scoped.
Example: if (true) { let x = 1 } console.log(x) // ReferenceError

hoisting: The JavaScript behavior where function declarations and `var` declarations are moved to the top of their scope at runtime. `let`/`const` are not hoisted in the same usable way.
Example: sayHi(); function sayHi(){ console.log('hi') } // works because function is hoisted

arrow function: A compact function syntax using `=>`. Arrow functions do not have their own `this` or `arguments` binding.
Example: const add = (a, b) => a + b;

default parameter: A parameter with a default value used when the caller omits that argument.
Example: function greet(name = 'friend') { console.log('Hi', name) }

rest parameter: Collects remaining arguments into an array: `...rest`.
Example: function sum(...nums) { return nums.reduce((s,n) => s + n, 0); }

tiny style notes (specific to this repo)
- Keep examples short and instructive — most files here use `console.log` and visible comments rather than tests or UI.
- Use `let`/`const` consistently (prefer `const` when a binding shouldn't change).

If you want, I can add a tiny example file `Day-08-Function/examples.js` that demonstrates all of the above in one place.

