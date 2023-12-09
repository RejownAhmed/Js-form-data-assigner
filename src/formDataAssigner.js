/**
 * @author Rejown Ahmed Zisan
 * @github RejownAhmedZisan
*/

//Use the below function in your project
const formDataAssigner = (dataObject, formData = new FormData(), parentKey) => {
  //Validations
  if (typeof dataObject !== 'object') {
    // Accept only objects
    throw new Error('This function only works with Javascript objects');
  }
  
  if (Array.isArray(dataObject)) {
    // No array is allowed
    throw new Error('Arrays cannot be dealt with this function');
  }
  
  // Destructure and get the key value pairs
  for (const key in dataObject) {
    // Object Field
    const field = dataObject[key];
    //Generate the key
    let appendKey = parentKey ? `${parentKey}[${key}]` : key;
    
    //If its a file
    if (field instanceof File) {
      formData.append(appendKey, field);

    }else if (typeof field === 'object' && !Array.isArray(field)){
      //If obj but not arr
      formDataAssigner(dataObject[key], formData, appendKey);
      
    } else if (Array.isArray(field)) {
      //If arr
      field.forEach((newObject, index) => {
        appendKey = parentKey ? `${parentKey}[${key}][${index}]` : `${key}[${index}]`;
        formDataAssigner(newObject, formData, appendKey);

      });

    } else {
      //If other
      appendKey = parentKey ? `${parentKey}[${key}]` : key;
      //Append the value to the key
      formData.append(appendKey, field);

    }
  }

  //Finally return generated formData;
  return formData;
};

export default formDataAssigner;