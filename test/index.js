/**
 * @author Rejown Ahmed Zisan
 * @github RejownAhmedZisan
*/

import formDataAssigner from "../src/formDataAssigner.js";

const nestedFormData = {
  title: 'This is form Data',
  formData: [
    {
      title : 'First section',
      fields: [
        {
          title: 'first section\'s first field'
        },
        {
          title: 'first section\'s second field',
          children: [
            {
              'title': 'Hi I am first section\s second field\'s first child'
            },
            {
              'title': 'Hi I am first section\s second field\'s second child'
            },
          ]
        },
      ]
    },
    {
      title : 'Second section',
      fields: [
        {
          title: 'Second section\'s first field'
        },
        {
          title: 'Second section\'s Second field'
        },
      ]
    },
    {
      title : 'Third section',
      fields: [
        {
          title: 'Third section\'s first field'
        },
        {
          title: 'Third section\'s Second field'
        },
        {
          title: 'Third section\'s third field',
          children: [
            {
              'title': 'Hi I am third section\s third field\'s first child'
            },
            {
              'title': 'Hi I am third section\s third field\'s second child'
            },
          ]
        },
      ]
    }
  ]
};

const formData = formDataAssigner(nestedFormData); // Returns a formData object;

console.dir(formData);