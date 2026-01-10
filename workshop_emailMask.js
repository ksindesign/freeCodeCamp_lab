//* indexOf(), replace(), slice(), repeat()

// if the email address was myEmail@email.com, then the masked email address will be m*****l@email.com.

const email = 'freecodecamp@example.com';

function maskEmail(arg) {
  // Get the domain
  const emailMark = arg.indexOf('@');
  const domain = arg.slice(emailMark, arg.length);

  // Get the account
  const account = arg.slice(0, emailMark);

  // handle the mask
  const wordToMask = arg.slice(1, emailMark - 1);
  const maskNum = wordToMask.length;

  const mask = '*';

  // check
  const result =
    arg[0] + mask.repeat(maskNum) + arg[account.length - 1] + domain;
  // console.log('Result = ' + result);

  return result;
}

console.log(maskEmail(email));
