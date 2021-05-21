class Calculator {
  sum(num) {
    if (num == undefined) {
      return 0;
    } else {
      const nums= num.split(",");
        if(nums.length>1){
            return parseInt(nums[0])+parseInt(nums[1]);
        }
       return parseInt(num);
    }
  }
}

export default Calculator;
