# Password Generator
https://bmcleod12.github.io/password123/

## Description

This application is intended to allow an employee to generate a random password based on criteria they’ve selected. After selecting to generate a password, a series of prompts and confirmations runs to collect the user's requirements, then presents a randomized password in the text box.

## Usage 

Open the webpage to give it a try: https://bmcleod12.github.io/password123/

After clicking the Generate Password button, you should be prompted to provide password criteria.

## Tests and Known Issues

Test 1:
Open the page in different browsers to confirm each element of the page renders as expected, then walk through the prompts and confirm a password is presented that meets the criteria.

Test 2:
Change the screen size and confirm the page elements respond to the viewport size.

Known Issue:
When entering a number less than 8 or greater than 128, the browser prompts you for another number until you enter a number between 8 and 128. The prompts then continue, but the password presented is the first number you had entered (either less than 8 or greater than 128).

The heart of the problem seems to be that each prompt/confirmation lives inside its own function, so if the code breaks out of the function that sets the password length, it isn't breaking out of the entire generatePassowrd function. I understood functions to only be responsible for one specific job, so it was intentionally designed this way, but continued analysis, testing, and reviewing others' password generators makes me rethink this approach. The whole code block may need to be rewritten when there is more time to do so.

## License

MIT License

Copyright (c) 2020 KU Boot Camp

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.