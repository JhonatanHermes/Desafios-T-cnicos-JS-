function duplicate(str) {
  const removeArray = [...new Set(str.split(','))];

  console.log(removeArray.join(','));  
}

duplicate('1,2,2,3,4,5'); 