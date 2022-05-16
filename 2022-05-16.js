// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
//Your task is to write a function maskify, which changes all but the last four characters into '#'.

/Im given a string (creditCardNumber). I need to split it into an array into to manipulate it using split
function maskify (creditCardNumber) {
 creditCardNumber = creditCardNumber.split('')
 //Now I need to loop through all of the items except for the last four, so I will make the iterator run while it is less than creditCardNumber - 4
 for (let i = 0; i < creditCardNumber.length-4; i++) {
   //Now I will assign '#' to each item in the iteration
   creditCardNumber[i] = '#'
 }
  //Now I will join them into a single string
  return creditCardNumber.join('')
 
}
