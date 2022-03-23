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
      accumulator: {
        power: 300,
        volume: 500,
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
  {
    name: 'SuperCar',
    brand: 'Model Volve',
    parameters: {
      brake: {
        count: 2,
        types: 'forward, back',
      },
      headlight: {
        count: 6,
        powerLight: 200,
      },
      wheels: {
        count: 4,
        size: 200,
        diameter: 100,
      },
    },
  },
];
