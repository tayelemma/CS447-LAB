/**
 * Exercise 2
 *  1. Explain why do we want sometimes to use setImmediate instead of using setTimeout?
 * 
 *      ANSWER: If we want to schedules a callback to run at check phase of the event loop
 *              after IO events' callbacks and before setTimeout and setInterval. 
 *          
 *     
 *  2. Explain the difference between process.nextTick and setImmediate?
 * 
 *      ANSWER: process. nextTick() is used to schedule a callback function
 *               to be invoked in the next iteration of the Event Loop. setImmediate() method is used to execute a function right after the current event loop finishes
 * 
 * 
 *  3. Name 10 global modules/methods available in Node environment.
 * 
 *      ANSWER: __dirname, __filename,clearImmediate,clearInterval, Event,exports, global,module, 
 *              process, require(), Response, setImmediate, 
 */