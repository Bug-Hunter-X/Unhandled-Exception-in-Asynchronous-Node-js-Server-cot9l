# Unhandled Exception in Asynchronous Node.js Server

This repository demonstrates a common issue in Node.js servers: unhandled exceptions within asynchronous operations.  The `bug.js` file showcases a server that can hang due to an unhandled error. `bugSolution.js` provides a solution to gracefully handle the exceptions.

## Problem

The `bug.js` server simulates a long-running asynchronous operation. If an error occurs during this operation (e.g., a database query failure), the server might not handle it correctly leading to an unresponsive state.

## Solution

The `bugSolution.js` file demonstrates a robust approach to handling errors in asynchronous code using `try...catch` blocks and appropriate error handling mechanisms within the asynchronous callback function. This ensures that the server remains responsive even in the presence of errors.

## How to Reproduce the Bug

1.  Clone the repository.
2.  Navigate to the directory containing `bug.js`.
3.  Run the server: `node bug.js`
4.  Observe the server's response time and behavior. Note any issues.

## How to Run the Solution

1.  Navigate to the directory containing `bugSolution.js`.
2.  Run the server: `node bugSolution.js`
3.  Test the server's response time and robustness under error conditions.