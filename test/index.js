/**
 * @author Rejown Ahmed Zisan
 * @github RejownAhmedZisan
*/

import formDataAssigner from "../src/formDataAssigner.js";

// Create a PNG image with some sample data
const pngData = new Uint8Array([
  137, 80, 78, 71, 13, 10, 26, 10, // PNG signature
  // Add more PNG data here...
]);

// Create a Blob with the PNG data
const pngBlob = new Blob([pngData], { type: "image/png" });

// Create a File with the Blob
const pngFile = new File([pngBlob], "foo.png", { type: "image/png" });

const nestedFormData = {
  title: 'This is form Data',
  formData: [
    {
      title : 'First section',
      fields: [
        {
          title: 'first section\'s first field',
          image: pngFile
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