# Js-form-data-assigner
This is a recursive function which generates a formData object from nested values. When our formData is a huge nested object it becomes really hard to append to a FormData Object. Also, when handling dynamic form objects it's a pain in the ***. Use this simple Assigner which takes care of all these problems for you and returns a nice and formatted formData object with all appended values
 
## Instructions
Go to the src folder and download the formDataAssigner.js file.
Voila! Now use it in your production exactly how you like. :)

### Testing
At first clone this repo with this command:

```git
  git clone https://github.com/RejownAhmed/Js-form-data-assigner.git
```

**Install the dependencies:** ``npm i`` or ``yarn``

Check the test/index.js file for test formData object which will be used to be converted.

Now Simply Run this **command:** 
```npm run test``` or 
```yarn test```

This command will run the index file and show the output

#### Note:
To run on lower nodejs version environments, 
please import FormData inside src/formDataAssigner.js 
Otherwise it will throw an error

### Output: On nodejs 18+
```javascript
FormData {
  [Symbol(state)]: [
    { name: 'title', value: 'This is form Data' },
    { name: 'formData[0][title]', value: 'First section' },
    {
      name: 'formData[0][fields][0][title]',
      value: "first section's first field"
    },
    { name: 'formData[0][fields][0][image]', value: [File] },
    {
      name: 'formData[0][fields][1][title]',
      value: "first section's second field"
    },
    {
      name: 'formData[0][fields][1][children][0][title]',
      value: "Hi I am first sections second field's first child"
    },
    {
      name: 'formData[0][fields][1][children][1][title]',
      value: "Hi I am first sections second field's second child"
    },
    { name: 'formData[1][title]', value: 'Second section' },
    {
      name: 'formData[1][fields][0][title]',
      value: "Second section's first field"
    },
    {
      name: 'formData[1][fields][1][title]',
      value: "Second section's Second field"
    },
    { name: 'formData[2][title]', value: 'Third section' },
    {
      name: 'formData[2][fields][0][title]',
      value: "Third section's first field"
    },
    {
      name: 'formData[2][fields][1][title]',
      value: "Third section's Second field"
    },
    {
      name: 'formData[2][fields][2][title]',
      value: "Third section's third field"
    },
    {
      name: 'formData[2][fields][2][children][0][title]',
      value: "Hi I am third sections third field's first child"
    },
    {
      name: 'formData[2][fields][2][children][1][title]',
      value: "Hi I am third sections third field's second child"
    }
  ]
}
```
## Give this repo a star 😀
