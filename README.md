# JavaScript_Learning
# 📘 JavaScript Handbook – Exercise Solutions

> A collection of my solutions to the practice exercises from the **JavaScript Handbook**.

---

## 📖 About

Welcome to my **JavaScript Handbook Exercise Solutions** repository!

This repository contains my solutions to the practice exercises from the JavaScript Handbook. The goal of this project is to strengthen my JavaScript fundamentals, improve problem-solving skills, and build a consistent coding habit.

The exercises are organized chapter by chapter for better readability and easy navigation.

---

# 📚 Chapters

## 📖 Part I — Language Foundations

* [ ] Chapter 01 — Getting Started
      
      Practice Exercise
      ------------------
      1. Print your name, your department, and your university on three separate lines.
      2. Write a program with a comment on top describing what it does, then print any sentence.
      3. Deliberately remove a quotation mark from a console.log line, run it, and read the error message
      carefully. Getting comfortable with errors starts now.
          
* [ ] Chapter 02 — Variables & Data Types

      Practice Exercise
      ------------------
      1. Create const variables for your name and department and a let variable for your semester. Print a
      sentence using a template literal.
      2. Predict the output of console.log(typeof null) — then run it and search the web for why the
      answer is surprising.
      3. Convert the string "19.5" to a number, add 0.5, and print the result.

* [ ] Chapter 03 — Operators & Control Flow

      Practice Exercise
      ------------------
      1. Write a program that prints whether a number is positive, negative, or zero.
      2. Given a temperature variable, print 'Hot' above 32, 'Pleasant' between 20 and 32, otherwise
      'Cold'.
      3. Use the ternary operator to print 'Even' or 'Odd' for a given number.
      4. Write a switch that maps a month number (1–12) to its season in Bangladesh.
      
* [ ] Chapter 04 — Loops

      Practice Exercise
      ------------------
      1. Print all even numbers from 2 to 50 using a for loop.
      2. Compute the sum of numbers from 1 to 100 with a loop, then verify with the formula n(n+1)/2.
      3. Print the multiplication table of 7 (7 x 1 = 7 ... 7 x 10 = 70).
      4. Print a 5-row pyramid of stars using nested loops.
      5. FizzBuzz: for 1 to 30, print 'Fizz' for multiples of 3, 'Buzz' for multiples of 5, 'FizzBuzz' for both,
      otherwise the number. This is a famous interview question — solve it without AI.
      
* [ ] Chapter 05 — Functions

      Practice Exercise
      ------------------
      1. Write a function isEven(n) that returns true or false, then use it inside a loop from 1 to 10.
      2. Write celsiusToFahrenheit(c) using the formula F = C × 9/5 + 32.
      3. Write a function max3(a, b, c) that returns the largest of three numbers without using Math.max.
      4. Rewrite your FizzBuzz from Chapter 4 as a function fizzbuzz(limit).
      5. Write a function applyTwice(fn, value) that returns fn(fn(value)). Test it with a function that
      doubles a number.

* [ ] Chapter 06 — Arrays

      Practice Exercise
      ------------------
      1. Given [3, 7, 2, 9, 4], print the largest number using a loop (no Math.max).
      2. Use map to convert an array of taka amounts into strings like '450 BDT'.
      3. Use filter to keep only names longer than 4 characters from an array of names.
      4. Use reduce to count how many numbers in an array are even.
      5. Combine filter + map: from an array of students with cgpa, produce an array of names of students
      with cgpa ≥ 3.5.
      6. Sort an array of objects by price from highest to lowest.
* [ ] Chapter 07 — Objects & JSON

      Practice Exercise
      ------------------
      1. Model yourself as an object with name, dept, semester, and skills (an array). Print a sentence
      using its properties.
      2. Add a method describe() to that object that returns a summary string using this.
      3. Destructure name and semester out of your object in one line.
      4. Write a function that takes an array of product objects and returns the total stock using reduce.
      5. Stringify an object, then parse it back, and prove the round trip worked by printing a property.

---

## ⚡ Part II — Modern JavaScript in Practice

* [ ] Chapter 08 — Scope, Hoisting & Closures

      Practice Exercise
      ------------------
      1. Write createBankAccount(initial) that returns an object with deposit and getBalance functions
      sharing a private balance via closure.
      2. Predict, then verify: what does a loop of let vs a loop calling setTimeout print? Search 'let vs var
      setTimeout loop' after trying.
      3. Explain in writing (3–4 sentences, your own words) what a closure is, as if teaching a friend.
      
* [ ] Chapter 09 — The DOM - JavaScript in the Browser

      Practice Exercise
      ------------------
      1. Build a counter page: a number display plus Increase, Decrease, and Reset buttons.
      2. Build a character counter: as the user types in a textarea, show 'X characters' live (use the 'input'
      event).
      3. Build the classic To-Do app: add tasks from an input, delete a task on click, and persist the list in
      localStorage. This is Mini Project 1 of the course — no AI assistance.
      
* [ ] Chapter 10 — Asynchronous JavaScript

      Practice Exercise
      ------------------
      1. Use setTimeout to print 'Time up!' after 3 seconds, and prove other code runs meanwhile.
      2. Write a promise-returning function coinFlip() that resolves 'Heads' or rejects 'Tails' randomly;
      handle both cases.
      3. Fetch https://jsonplaceholder.typicode.com/posts and print the titles of the first 5 posts.
      4. Build a small page with a button 'Get Joke' that fetches a random joke from a public joke API and
      displays it, with loading and error states. Deploy it — this is your first live app.
      
* [ ] Chapter 11 — Errors, Debugging & Clean Code

      Practice Exercise
      ------------------
      1. Deliberately create one SyntaxError, one ReferenceError, and one TypeError; screenshot each
      message and label its parts.
      2. Wrap JSON.parse of user-supplied text in try/catch and return a friendly message on failure.
      3. Take any messy solution you wrote earlier, rename its variables meaningfully, and split it into at
      least two functions.
      
* [ ] Chapter 12 — ES6+ Toolbox - Modules, Classes, Map/Set, and Friends

      Practice Exercise
      ------------------
      1. Split your grade-calculator into two files (logic + usage) with export/import and run it with Node.
      2. Create a class BankAccount with deposit, withdraw (reject overdraft), and getBalance.
      3. Remove duplicates from ["a","b","a","c","b"] in one line using Set.
      4. Use a Map to count how many times each word appears in a sentence.

---

## 🌳 Part III — Data Structures & Algorithms in JavaScript

* [ ] Chapter 13 — How to think about Algorithms - Big-O

      Practice Exercise
      ------------------
      1. State the Big-O of: (a) printing every pair from an array, (b) checking if a number is even, (c)
      summing an array.
      2. Write two versions of 'find the maximum': one with a loop and one using sort() then taking the
      last element. Which has better complexity and why?
      
* [ ] Chapter 14 — Searching Algorithms

      Practice Exercise
      ------------------
      1. Modify linearSearch to return how many comparisons it made before finding the target.
      2. Trace binary search for target 91 in the array above, writing low, mid, and high at every step.
      3. Why does binary search fail on an unsorted array? Construct a concrete failing example.
      4. Write countOccurrences(arr, target) using a single pass — what is its Big-O?
      
* [ ] Chapter 15 — Sorting Algorithms

      Practice Exercise
      ------------------
      1. Trace bubble sort on [3, 1, 2] and write the array state after every swap.
      2. Add a comparison counter to selection sort and print it for arrays of length 5, 10, and 20. Does
      growth look quadratic?
      3. Sort an array of student objects by cgpa descending using the built-in sort.
      4. In one paragraph: why is the early-exit 'swapped' flag useful in bubble sort?
      
* [ ] Chapter 16 — Stacks & Queues

      Practice Exercise
      ------------------
      1. Use a stack to reverse a string.
      2. Extend isBalanced to ignore all non-bracket characters and test it on a real code snippet.
      3. Simulate a hospital queue: enqueue five patients, dequeue two, and print who remains.
      4. Research: why is shift() on a large array O(n), and how would a 'circular queue' fix it? Write 4–5
      sentences.
      
* [ ] Chapter 17 — Recursion, Linked Lists & Hash Maps

      Practice Exercise
      ------------------
      1. Write a recursive sumTo(n) returning 1+2+...+n, then the loop version.
      2. Write a recursive function to reverse a string.
      3. Add an addEnd(value) method to LinkedList and state its Big-O.
      4. Using the frequency counter pattern, find the first non-repeating character in a string.
      5. Given an array, return the element that appears most often, in O(n).
      
* [ ] Chapter 18 — Trees and a Roadmap Forward

      Practice Exercise
      ------------------
      1. Insert [15, 10, 20, 8, 12] into a BST on paper and draw the resulting tree.
      2. Add a min() method to BST that returns the smallest value (hint: keep going left).
      3. Write a recursive countNodes(node) that returns how many nodes a tree has.
      4. Solve three problems this week: 'Reverse a string', 'Valid parentheses', and 'Two sum' — all using
      patterns from this book, all without AI.

---

# 🎯 Objectives

* Complete every practice exercise in the handbook.
* Improve JavaScript programming skills.
* Develop strong problem-solving ability.
* Learn Data Structures & Algorithms.
* Practice Git and GitHub consistently.

---

# 💻 Technologies Used

* JavaScript (ES6+)
* Node.js
* Git
* GitHub
* Visual Studio Code

---

# 🚀 Progress

| Part                         | Progress |
| ---------------------------- | -------- |
| Language Foundations         | ⬜ 0%     |
| Modern JavaScript            | ⬜ 0%     |
| Data Structures & Algorithms | ⬜ 0%     |

---

# 📌 Notes

* Every solution is written as part of my learning journey.
* I try to solve each exercise before checking any references.
* This repository will be updated regularly as I complete more chapters.

---

Happy Coding! 🚀
