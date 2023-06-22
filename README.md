# Random String Generator

## Using the randString() function:

#### The randString(length, set) takes two parameters, LENGTH and SET.

<b>LENGTH</b> -> The desired length of the output string <b>(INTEGER)</b>

<b>SET</b> -> The desired characters that will compose the output string <b>(STRING)</b>

------------------------------------

### You can calculate the amount of unique strings that can be generated using this formula:

<b>lenght of SET</b> to the power of <b>LENGTH</b>

---------------

Example: If you function call looks like this: randString(5, "ABC")

The formula will be:

3 to the power of 5

As the length of SET is 3 and LENGTH is 5.

The amount of unique possible strings will be 243

The output strings will be 5 characters long and will contain only "A", "B" or "C"

Examples:

ABCBA  
ABACB  
ABCCB  
