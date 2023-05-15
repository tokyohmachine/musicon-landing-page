// Get the contents of the element with ID 'ice-cream'
const templateSource = document.getElementById('templateHB').innerHTML;

// Compile the Handlebars template using the source code
const template = Handlebars.compile(templateSource);

// Define the context data for the template
const context = {
    title: 'Welcome to Musicon',
    body: 'Musicon is a budding musical storefront with a mission to share the joy of music. These magnificent auditory tools are designed with musical creators, like you, in mind. Hobbyists, beginners, and experts alike can appreciate the resplendent sounds supplied by each and every instrument we carry. Join us in delivering the euphoric vibrations of melodia to the citizens of the world!',
    instruments: [
      {
        image: 'IMAGES/eletrec-guitar.jpg',
        name: 'Electric Guitar',
        description: 'Join the legends of the \'50s and \'60s when the marriage of guitar and electricity created the most influential instrument of a generation. Note: picks sold separately.',
        price: '$599.99'
      },
      {
        image: 'IMAGES/bass-guitar.jpg',
        name: 'Bass Guitar',
        description: 'Experience the embodiment of funkadelic frequencies that is the bass guitar. Let the deep low notes of the bass guitar resonate with heartbeats everywhere.',
        price: '$624.99'
      },
      {
        image: 'IMAGES/drum-kit.jpg',
        name: 'Drum Kit',
        description: 'Ever thought, "one instrument isn\'t enough?" Find an answer in the Drum Kit. Coordinate a collections of drums and cymbals to dictate the rhythm of musical masterpiece.',
        price: '$649.00',
        sale: ' $349.00'
       
      },
      {
        image: 'IMAGES/eletronic-keyboard.jpg',
        name: 'Electric Keyboard',
        description: 'A piano welcomed to the 21th century. Pianists celebrate the compact form factor and the diversity of synthesized rhythms all in one masterful musical machine.',
        price: '$1,999.00',
        sale: '$1,699.89'
      },
      {
        image: 'IMAGES/violin.jpg',
        name: 'Violin',
        description: 'A versatile that is suited for any and all occasions. Those wearing tuxedos can strum together a classic. Others who prefer overalls can call it a fiddle and play some folk songs.',
        price: '$245.00'
      },
      {
        image: 'IMAGES/cornet.jpg' ,
        name: 'Trumpet' ,
        description: 'The YTR-2330 trumpets are the perfect instruments for beginning students.',
        price: '$10.005.00',
        sale: '$9875.00'
      }
    ]
  };

// Use the compiled template and context data to generate HTML
const compiledHtml = template(context);

// Get the element with ID 'scream'
const templateElement = document.getElementById('information').innerHTML = compiledHtml;




