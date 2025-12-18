
function obtenerPares(nums){
  let result= nums[0]
  for(let i = 0;i<nums.length;i++){
    if(result<nums[i]){
      result = nums[i]
    }
  
  }
  return result
} 