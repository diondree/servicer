import React from 'react';

// Store Context is the global context that is managed by reducers.

const Store = React.createContext({
  services: [
    // Initial Data
    {
      id: 1,
      title: 'Lawn Maintenance',
      description: 'I will mow your lawn',
      email: 'test@test.com',
      provider: 'Test User'
    },
    {
      id: 1,
      title: 'Barber Services',
      description: 'I will cut your hair',
      email: 'test@test.com',
      provider: 'Test User'
    },
    {
      id: 1,
      title: 'Makeup',
      description: 'I will do your makeup',
      email: 'test@test.com',
      provider: 'Test User'
    }
  ]
});

export default Store;
