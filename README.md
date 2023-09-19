# project-calculator

In this project, I created an on-screen calculator. The calculator can add, subtract, multiply, and divide numbers. When the user clicks the number buttons, the numbers get added to an array called displayArray. When the user clicks an operator button, it joins those numbers as one and creates a variable called num1 or num2. The result of the operation can be viewed by either clicking the equals button or an operator button again. When clicking an operator button again, the result shown becomes the new num1 and then the user can input num2 again. 

Other features include a clear button the clears the display as well as any operations. A delete button which deletes the most recent digit input into the calculator before operating. A decimal button that allows users to input floating point numbers, and a percentage button which divides the number displayed on the screen by 100.

For numbers greater than 9,999,999,999, exponential notation is used since anything larger would overflow the display. Endless decimal values are also fixed to 9 places so they don't overflow off the screen. 