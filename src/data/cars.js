export default [
  {
    name: 'BMW',
    brand: 'M5',
    parameters: {
      engine: {
        weight: 10,
        volume: 3,
        power: 230,
      },
      transmission: {
        maxSpeed: 250,
        gearsCount: 5,
        type: 'manual',
      },
      fuel: {
        fullTank: 200,
        type: 'A92',
      },
    },
  },
  {
    name: 'Tesla',
    brand: 'Model S',
    parameters: {
      engine: {
        weight: 25,
        volume: 2,
        power: 500,
      },
      transmission: {
        maxSpeed: 350,
        gearsCount: 5,
        type: 'auto',
      },
      fuel: {
        fullTank: 350,
        type: 'electro',
      },
    },
  },
];
