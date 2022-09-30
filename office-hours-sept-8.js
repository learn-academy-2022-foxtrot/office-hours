// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

let myPassword = "isawesome!"
if(myPassword.length > 12 && myPassword.includes("!")) {
  console.log("That is a mighty strong password!")
} else if(myPassword.length > 8 && myPassword.includes("!")) {
  console.log("That password is strong enough.")
} else {
  console.log("That is not a valid password.")
}

console.log(myPassword.toUpperCase().charAt(2))
console.log(myPassword.indexOf("!"))
console.log(myPassword.length)

console.log(myPassword.slice(2, 9).toUpperCase())