/*
 ULTIMATE DETAILED GUIDE: JavaScript Execution Context & Call Stack
1. Core Fundamentals of JavaScript Execution
Initial Setup
JavaScript creates a Global Execution Context (GEC) before executing any code
GEC is the base environment where all global code is executed -> this gec is stored inside the variable this
Different environments provide different global objects:
Browser → window object
Node.js → global object
This is why window.setTimeout works in browser but not in Node.js s
Execution Context Structure
Every execution context (global or functional) has two components:

Memory Component (Variable Environment)

Stores variables and functions as key-value pairs
Also known as the Creation Phase
All variables initially get 'undefined' value
Functions are stored in their entirety ss
Code Component (Thread of Execution)

Place where code is executed line by line
Also known as the Execution Phase
Actual values are assigned to variables
Function calls are processed ss
2. Detailed Execution Process
Phase 1: Memory Creation Phase
Step-by-step process:

Scans entire code
Allocates memory for all variables (initialized with undefined)
Stores complete function definitions
No code execution happens at this stage s
Phase 2: Code Execution Phase
Code is executed line by line
When variables are encountered:
Previous undefined value is replaced with actual value
When functions are encountered:
New execution context is created
Process repeats (memory phase → execution phase) ss
3. Function Execution Context (FEC)
Creation Process
Created whenever a function is invoked
Each function gets its own mini-universe of execution
Contains its own memory and code component ss
Function Execution Steps
New execution context is created
Memory phase occurs first
Parameters and arguments are registered
Variables declared inside function are allocated memory
Execution phase follows
Code inside function is executed line by line
Returns control to calling context when done s
4. Call Stack Deep Dive
Purpose and Function
Acts as a tracking mechanism for execution contexts
Manages the order of code execution
Follows LIFO (Last In First Out) principle ss
Call Stack Operations
Push Operation
Global execution context is pushed first
Function execution contexts are pushed when functions are called
Pop Operation
Function context is popped when function execution completes
Global context is popped when program ends s
Debugging with Call Stack
Can be visualized in browser dev tools
Shows current execution state
Helps track function calls and returns
Essential for debugging complex code flows s
5. Interview-Specific Points
Key Concepts to Remember
JavaScript is:
Single threaded (one command at a time)
Synchronous in nature (by default)
Execution context creation is two-phased
Call stack maintains execution order ss
Common Interview Questions
What is execution context?
Difference between global and function execution context?
How does call stack work?
What happens in memory creation phase?
What happens in code execution phase?
Best Practices for Interviews
Always explain the two phases clearly
Use examples to demonstrate call stack
Mention environment differences (browser vs Node.js)
Be clear about LIFO principle in call stack ss
6. Practical Implications
Performance Considerations
Understanding execution context helps in:
Memory management
Code optimization
Debugging
Understanding scope and closures
Debug Tips
Use browser dev tools to visualize call stack
Monitor memory allocation
Track function execution contexts s
This comprehensive guide covers every aspect of JavaScript execution context and call stack. Understanding these concepts thoroughly will help you excel in your interview. Remember to not just memorize but understand the flow and reasoning behind each concept.





*/