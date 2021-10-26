const _ = {
     clamp(number,lower,upper){
      let lowerClampedValue =  Math.max(number, lower)
      let clampedValue =  Math.min(lowerClampedValue, upper);
      return clampedValue
    },
     inRange(number,start,end){
        if (end === undefined){
          end = 0
        }
        if (start > end) {
          let newEnd = start
          let newStart = end
  
          if (number > newStart && number < newEnd){
            return true
          } else {
            return false
          };
        };
        if (number > start && number < end) {
          return true
        } else {
          return false
        }
  
      },
    }

// Do not write or modify code below this line.
module.exports = _;