var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(chocolateBars, element){
  return [element, ...chocolateBars];
}