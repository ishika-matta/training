/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   A single file to contain functions


 * 
 * @description
 * 
 * @file        :   utility.js
 * @overview    :   The file that contains functions
 * @author      :   Ishika Matta
 * @version     :   1.0
 * @since       :   22-08-2019
*******************************************************************************/


var readline = require('readline-sync');
module.exports = {

/**
* @description used to take user input value
*/
  input() {
    console.log("Enter a value: ");
    var value = readline.question();
    return value;
  },

  /**
   * @description used to check is the user input string value is >=3
   */

  userName(name) {
    try{
      if(typeof name!='string') throw 'input must be a string'
      if (name.length < 3) throw 'input string length must be >=3'
    if (name.length >= 3)
      return name;
    else
      console.log("Invalid Input");
    }
    catch(err){
      return err;
    }
  },

  /**
   * @description used to cal percentage of heads and tails in flipping coin n times
   */


  coin(flipno) {
    var heads = 0;
    var tails = 0;
    if (flipno < 0)
      console.log("Invalid Input");
    else
      var i;
    for (i = 1; i <= flipno; i++) {
      /**
      * @description 
      * @var randomno to generate random numbers
      */
      var randomno = Math.random(0, 1);
      /**
      * @description if else block to increment heads or tails
      */

      if (randomno < 0.5)
        tails = tails + 1;
      else
        heads = heads + 1;
    }
    var pertails = tails / flipno;
    var perheads = heads / flipno;
    console.log("heads percentage is :" + perheads + " tails percentage is : " + pertails);
  },

  /**
   * @description to take a user input and check whether it is leap year or not
   */
  leapYear(year) {
    try{
      //console.log("year length---", year.length);
      
      if(typeof (year) !='number') throw "input must be a number"

      /**
       * @description 
       * @var yearlen calculating the length of th user input
       */

   var yearlen = year.toString().length;
   
    //console.log("yearlen-----", yearlen);
    
    if(yearlen!=4) throw "input length must be equal to 4"
    var bool=false;
    /**
   * @description if the length is equal to 4 then move ahead else the input is not a year
   */

    if (yearlen == 4) {

      /**
      * @description checking for leap year and century years
      */

      if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
         bool=true;
        //console.log(year + " is a leap year");
      else
         bool=false;
        //console.log(year + " is a not leap year");
    }
    else{
        console.log(year + " is an Invalid Input");}
        return bool;
    }
    catch(err){
      return err;
    }

    
  },

  /**
  * @description taking a user input and printing power of 2
  */


  powerof2(n) {
    /**
    * @description checking the condition of the input since 2^31 overflows an int
    */

    if (n >= 0 && n < 31) {
      /**
      * @description loop for printing power of 2 in descending order
      */

      for (var i = n; i >= 0; i--)
        /**
        * @description using Math.pow function to cal the power 
        */
        console.log("2^" + i + " = " + Math.pow(2, i));
    }
    else
      console.log("Invalid Input");
  },

  /**
  * @description taking a user input and prints its Nth harmonic number
  */

  harmonicNum(n) {
    var harmonic = 0;
    /**
    * @description to ensure that the user input is greater than 0
    */


    if (n == 0) {
      log.console("Number entered should be greater than 0");
    }
    /**
    * @description if the user input is greater than 0 calculate its harmonic number
    */
    else {
      /**
      * @description formula to compute harmonic number:1/1 + 1/2 + ... + 1/N 
      */

      for (var i = 1; i <= n; i++) {
        harmonic = harmonic + 1 / i;
      }
      /**
      * @description printing the Nth harmonic value 
      * @return the Nth harmonic value 
      */
      console.log("The Nth harmonic value is: " + harmonic);
      return harmonic;
    }
  },

  /**
  * @description to take a user input and print frime factors 
  */

  primeFactors(n) {
    console.log("The prime fators of " + n);
    /**
    * @description checking for even numbers 
    * since the smallest prime no is 2 check if the input is divisible by 2 and print 2
   */
    while (n % 2 == 0) {
      console.log(2);
      /**
      * @description since we are checking for even numbers so keep dividing the number by 2
     */
      n = n / 2;
    }

    /**
     * @description till here we would be left with number to be odd 
     */

    /**
    * @description since the next prime no is 3 we check for it 
    * the loop is iterated by +2 cause we are already done with even no
    * also to lessen the count the terminating condition is i*i<=n
    */
    for (var i = 3; i <= Math.sqrt(n); i += 2) {

      /**
       * @description check if n is divisible by n, print the value and further decompose n to n/i 
       */
      while (n % i == 0) {
        console.log(i);
        n = n / i;
      }

    }
    /**
     * @description if n is greater than 2 print the n as it will be a prime no now 
     */

    if (n > 2)
      console.log(n);
  },

  /**
  * @description gambler game
  * stake, goal and no of times the game is played is taken as inputs 
  */

  gambler(stake, goal, n) {
    /**
     * @description initialse @var win,loss,bet and iterating variable to 0
     */
    try{
    var win = 0;
    var loss = 0;
    var bet = 0;
    var i = 0;
    if(typeof (stake)!='number'||typeof (goal)!='number'||typeof(n)!='number') throw 'input must be a number'
    if(stake>goal) throw 'stake is > goal hence game cannot be played'
    if(stake<=0||goal<=0||n<=0) throw 'inputs cannot be 0 or negative'
    /**
     * @description since the gambler will be playing only when
     * the stake is positive
     * goal has not been acheived
     * iterating variable is less than the no of times he wants to play
     */
    while ((stake > 0) && (stake < goal) && i < n) {
      /**
       * @description the person plays a game so his bet is +1
       */
      bet++;
      /**
       * @description random value if is >0.5 then 
       * stake increments by 1
       * win case so increment win by 1
       */
      if (Math.random() > 0.5) {
        stake++;
        win++;
      }
      /**
      * @description random value if is <0.5 then 
      * stake decrements by 1
      * loss case so decrement loss by 1
      */
      else {
        stake--;
        loss++;
      }
      /**
      * @description since iteration happened so increment it by 1
      */
      i++;
    
    //console.log("Total bets are: " + bet);
    //console.log("Total wins are: " + win);
    /**
    * @description the win percentage is calculated by win/total no of bets played
    * here we are considering only the no of bets because a person can play n times and get bankrupt/win before it
    */
   
    //console.log("Win percentage is: " + win / bet + " Loss percentage is: " + loss / bet);
    }
    var ans= parseInt([bet, win, loss, win/bet, loss/bet]);
    return ans;
  }
  catch(err){
    return err;
  }
  },

  /**
  * @description taking user input and calculating the no of random no required to generate distinct coupon no
  */

  couponNo(n) {
    /**
    * @description taking an array to store the distinct no
    */
    var a = [];
    var distinct = 0;
    var nondistinct = 0;
    while (a.length < n) {
      /**
      * @description 
      * @var random generating random no between 0-10
      * to convert the decimals into an integer we have to parseInt it
      */
      let random = parseInt(Math.random() * 10, 0);
      /**
      * @description this very condition checks for distinct no and if true push them in the array
      */
      if (a.indexOf(random) == -1) {
        a.push(random);
        console.log(a);
        /**
        * @description since this happens only when the random no are distinct so increment the disyinct variable
        */
        distinct++;
      }
      else {
        /**
        * @description else the no will be repetitive so increment non distinct
        */
        console.log("repetitive", random);
        nondistinct++;
      }
    }
    /**
    * @description print the array
    *total random no needed will be the sum of distinct and non distinct no generated
    *since in the array we are pushing only distinct no so the total distinct no are array length/ the variable distinct
    */
    console.log(a);
    console.log("Total numbers needed: " + parseInt(nondistinct + distinct));
    console.log("Total non distinct numbers: " + nondistinct);
    console.log("Total distinct numbers: " + a.length);
  },

  /**
  * @description library for reading in 2D arrays from user
  */


  array2d(m, n) {
    /**
    * @description declaring a 1d array
    */

    var arr = new Array(m);
    for (var i = 0; i < m; i++) {
      /**
      * @description transforming the 1d array to 2d
      */
      arr[i] = new Array(n);
      for (var j = 0; j < n; j++) {
        /**
        * @description taking user input into the array
        */
        arr[i][j] = readline.question("input 2d values at :" + i + " " + j + " : ");
      }
    }
    /**
    * @description printing the array
    */
    console.log(arr);

  },

  /**
  * @description sum of 3 integers add to 0
  */

  triplet(n, arr) {
    /**
    * @description 
    * @var distinct the variable used to count the no of distinct triplets
    */
    var distinct = 0;
    /**
    * @description O(n^3) complexity
    */
    for (var i = 0; i < n; i++) {
      for (var j = i + 1; j < n; j++) {
        for (var k = j + 1; k < n; k++) {
          /**
          * @description using parseInt  for explicit type conversion of string into number
          */
          if (parseInt(arr[i], 0) + parseInt(arr[j], 0) + parseInt(arr[k], 0) == 0) {
            /**
            * @description printing the triplets
            * additionally counting the distinct
            */
            console.log(arr[i] + " " + arr[j] + " " + arr[k]);
            distinct++;
          }
        }

      }
    }

    /**
    * @description printing the no of distinct triplets
    * else counter distinct is equal to 0 the there were no triplets found
    */
    console.log("No of distinct triplets: " + distinct);
    if (distinct == 0)
      console.log("No triplets found");
  },

/**
* @description taking x,y coordinates user input and calculating the distance from the origin
*/

  eucledainDist(x, y) {
    /**
   * @description 
   * @var distance = sqrt(x*x + y*y)
   */
  try{
    if(typeof(x) != 'number' || typeof(y) != 'number') throw 'input should be number'
    var euc_dist = parseFloat(Math.pow(((Math.pow(x, 2)) + (Math.pow(y, 2))), 1 / 2));
    //console.log("The eucledian distance is: " + euc_dist);
    /**
   * @description 
   * @return euc_dist
   */
    return euc_dist;
  }
  catch(err){
  return err;
  }
  },

/**
* @description used to calculate the time elapse between two timings
*/

  stopWatch() {
    /**
    * @description 
    * @var start_time= using a default Date.now() function 
    */
    var start_time = Date.now();
    /**
    * @description taking any user input as the time till user enters will generate some delay
    */
    var delay = readline.question("Enter any random: ");
    /**
    * @description again take end_time using default date function
    * @var end_time= using a default Date.now() function 
    */
    var end_time = Date.now();
    /**
    * @description take the difference
    * @var difference
    */
    var d = end_time - start_time;
    console.log("Start date time in milisec: " + start_time);
    console.log("End date time in milisec: " + end_time);
    console.log("Time Elapsed in milisec is: " + d);
  },

/**
* @description finding roots of the equation a*x*x + b*x + c
*/

  quadRoot(a, b, c) {
    /**
   * @description delta = b*b - 4*a*c
   * @var root1: Root 1 of x = (-b + sqrt(delta))/(2*a)
   * @var root2: Root 2 of x = (-b - sqrt(delta))/(2*a)
   */

    var d = Math.pow(b, 2) - (4 * a * c);
    var root1 = (-b + Math.sqrt(d)) / 2 * a;
    var root2 = (-b - Math.sqrt(d)) / 2 * a;
    /**
    * @description printing roots
    * if roots are non existance it prints NanN, if roots are there they will get printed
    */
    console.log("Roots are: " + [root1, root2]);
  },

/**
* @description calculating windChill using 2 command line arguments
*/

  windChill(t, v) {
    /**
    * @description the formula is not valid if t is larger than 50 in absolute value or if v is larger than 120 or less than 3
    */
    if ((v > 3 && v < 120) && (t < 50)) {
      /**
      * @description formula
      * @var w = 35.74 + 0.6215x t + (0.4275x t - 35.75) x v^0.16
      */

      var w = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
      console.log("The wind chill is: " + w);
    }
    else
      console.log("Invalid Input");
  },

/**
* @description take 2 string inputs and check for anagrams
*/

  checkAnagram(str1, str2) {
    var flag = 0;
    /**
    * @description if string lengths are equal then only they will be a rearrangement
    */
    if (str1.length == str2.length) {
      for (var i = 0; i < str1.length; i++) {
        for (var j = 0; j < str2.length; j++) {
          /**
          * @description check if all characters in string1 are same as characters in string2
          */
          if (str1[i] == str2[j])
            /**
            * @description 
            * @var flag increment by 1
            */
            flag++;
        }
      }
      /**
      * @description check if count variable is equal to length
      */
      if (flag == str1.length)
        console.log("Anagrams");
      else
        console.log("Not Anagrams");;
    }
    else
      console.log("Not Anagrams");;
  },

/**
* @description finding fewest notes demoninations to be returned by the vending machine
*/

  vendingMachine(value) {
    /**
    * @description 
    * @var a storing the denomination
    * @var note array for storing no of notes of a particular type 
    */
    var a = [1, 2, 5, 10, 50, 100, 500, 1000];
    var note = [];
    /**
    * @description looping in descending order
    */
    for (var i = a.length - 1; i >= 0; i--) {
      /**
      * @description if the value is greater than a particular demonination
      */
      if (value >= a[i]) {
        /**
        * @description number of notes of aparticular type needed
        * remaining value 
        */
        note[i] = parseInt(value / a[i], 0);
        value = value - a[i] * note[i];
      }
    }
    /**
    * @description printing the denomination and the count
    * if count is equal to 0 it prints undefined
    */
    for (var i = a.length - 1; i >= 0; i--) {
      console.log("Denomination:" + a[i] + " " + " Count: " + note[i]);
    }
  },


/**
* @description finding the day of week using the Gregorian calendar
*/
  dayOfWeek(m, d, y) {
    /**
    * @description using formulae
    * @var y0 = y − (14 − m) / 12
    * @var x = y0 + y0/4 − y0/100 + y0/400
    * @var m0 = m + 12 × ((14 − m) / 12) − 2
    * @var d0 = (d + x + 31m0 / 12) mod 7
    */
    var y0 = parseInt(y - (14 - m) / 12);
    //console.log(y0);
    var x = parseInt(y0 + y0 / 4 - y0 / 100 + y0 / 400);
    //console.log(x);
    var m0 = m + 12 * ((14 - m) / 12) - 2;
    //console.log(m0);
    var d0 = (d + x + 31 * m0 / 12) % 7;
    console.log(d0);
    /**
    * @description print 0 for Sunday, 1 for Monday, 2 for Tuesday, and so forth.
    */
    if (d0 == 0)
      console.log("Sunday");
    if (d0 == 1)
      console.log("Monday");
    if (d0 == 2)
      console.log("Tuesday");
    if (d0 == 3)
      console.log("Wednesday");
    if (d0 == 4)
      console.log("Thursday");
    if (d0 == 5)
      console.log("Friday");
    if (d0 == 6)
      console.log("Saturday");
  },
/**
* @description given the temperature in fahrenheit as input outputs the temperature in Celsius or viceversa
*/
  
  tempConversion(tempc, tempf) {
    /**
    * @description 
    * @var tempInF to convert Celsius to Fahrenheit
    * @var tempInC to convert Fahrenheit to Celsius
    */
    var tempInF=((tempc * (9 / 5)) + 32);
    var tempInC=(tempf - 32) * (5 / 9);
    /**
    * @description 
    * @return converted tempertaures in an array
    */
    return [tempInC, tempInF];   
  },

/**
* @description taking user inputs and calculating the monthly payment
*/
  
  monthlyPayment(p, y, rate) {
    /**
    * @description using formulae
    * @var r calculate rate
    * @var pay calculates the monthly payment
    */
    var r = rate / (12 * 100);
    var n = 12 * y;
    var pay = (p * r) / (1 - Math.pow(1 + r, -n));
    /**
    * @description 
    * @return pay-the monthly pay calculated
    */
    return pay;
  },

/**
* @description calculating sqaure root using Newton Method
*/
  sqrt(c) {
    /**
    * @description 
    * @var t is initialised to c
    */
    var t = c;
    /**
    * @description check condition Math.abs(t - c/t) > epsilon*t where epsilon = 1e-15
    */
    while (Math.abs(t - (c / t)) > (Math.pow(10, -15)) * t) {
         /**
         * @description 
         * @var t replace t with the average of c/t and t
         */
      t = ((c / t) + t) / 2;
    }
    /**
    * @description 
    * @return t
    */
    return t;
  },
/**
* @description to convert decimal to binary
*/
  toBinary(n) {
    var r = [];
    var bin = 0;
    var p = 0;
    /**
    * @description loop till no is not equal to 0
    */
    while (n != 0) {
      /**
      * @description to convert decimal to binary
      * @var r remainder of number by 2
      * @var bin to store binary in powers
      * @var n replaced by quotient of 2
      */
      r = n % 2;
      bin = bin + r * Math.pow(10, p);
      n = parseInt(n / 2, 0);
      p++;
    }
    //this.padding(bin);
    return String(bin).padStart(8, '0');

  },

/**
* @description used to pass the binary into 32 bit padded form
*/

  padding(bin) {

    padbin = String(bin).padStart(32, '0');
    console.log(padbin);
  },

/**
* @description Swap nibbles and find the new number
*/  
  swapNibbles(binary) {
    /**
    * @description using default bits and then doing left and right shift on them
    */ 

    return ((binary & 0x0F) << 4 | (binary & 0xF0) >> 4);
  }
}