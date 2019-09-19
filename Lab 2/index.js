const arrayUtils = require('./arrayUtils');
const stringUtils = require('./stringUtils');

// Head Tests
try {
    // Should Pass
    const headOne = arrayUtils.head([2, 3, 4]);
    console.log('head passed successfully');
 } catch (e) {
    console.error('head failed test case');
 }
 try {
    // Should Fail
    const headTwo = arrayUtils.head(1234);
    console.error('head did not error');
 } catch (e) {
    console.log('head failed successfully');
 }



 // Last Tests
try {
    // Should Pass
    const headOne = arrayUtils.last([1, 2, 3]);
    console.log('last passed successfully');
 } catch (e) {
    console.error('last failed test case');
 }
 try {
    // Should Fail
    const headTwo = arrayUtils.last(1234);
    console.error('last did not error');
 } catch (e) {
    console.log('last failed successfully');
 }



 // countElements Tests
try { 
    // Should Pass
    const headOne = arrayUtils.countElements([2, 3, 4],0);
    console.log('countElements passed successfully');
 } catch (e) {
    console.error('countElements failed test case');
 }
 try {
    // Should Fail
    const headTwo = arrayUtils.countElements(1234);
    console.error('countElements did not error');
 } catch (e) {
    console.log('countElements failed successfully');
 }



 // capitalize Tests
try { 
    // Should Pass
    const headOne = stringUtils.capitalize('hello');
    console.log('capitalize passed successfully');
 } catch (e) {
    console.error('capitalize failed test case');
 }
 try {
    // Should Fail
    const headTwo = stringUtils.capitalize(5);
    console.error('capitalize did not error');
 } catch (e) {
    console.log('capitalize failed successfully');
 }
