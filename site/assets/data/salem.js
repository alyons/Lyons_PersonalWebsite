import importAll, { processImagePaths } from './importAll';

const images = importAll(require.context('../images/salem', false, /\.(png|jpe?g|svg)$/));

const salemData = {
  id: 'salem',
  preview: {
    title: 'Salem',
    text: `
    In 2021 I adopted a kitten and named him Lord Salem Windgrace Lyons, or just Salem.
    He is full of energy and dumb and doesn't let me sleep in.
    He throws his litter everywhere.
    He needs to be held randomly throughout the day.
    I love him so much.
    `,
    images: [images[15]],
    actions: [
      {
        type: 'pageRoute',
        to: '/content/salem',
        content: 'More Cat Pictures'
      }
    ]
  },
  content: {
    type: 'album',
    images: images
  }
};

export default salemData;
