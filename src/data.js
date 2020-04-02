let mockData = [
  {
    order: {
      name: "Bolts & Nuts",
      id: "43f#234",
      summary: "Weekly top-up"
    },
    cost: {
      subtotal: 32.6,
      tax: 4.35,
      shipping: 2.55
    },
    items: [
      {
        quantity: 100,
        id: "AABBCC1",
        description: "The AABBCC1 stuff"
      }
    ],
    shippingAddress: "1 One Street, Camberwick Green, Trumptonshire",
    raisedBy: "Mr. Pugh",
    creationDate: new Date(2013, 2, 1),
    modifiedDate: new Date(2013, 2, 1),
    comments: "This order should not be delivered at the weekend"
  },
  {
    order: {
      name: "Nuts & Bolts",
      id: "234EF#34F",
      summary: "Monthly re-stocking"
    },
    cost: {
      subtotal: 36.2,
      tax: 5.34,
      shipping: 5.25
    },
    items: [
      {
        quantity: 100,
        id: "123ABC",
        description: "WiFi smart bolts"
      },
      {
        quantity: 99,
        id: "321CBA",
        description: "Bluetooth nuts"
      }
    ],
    shippingAddress: "Mrs S Northrop, 213 Sample Avenue, NO23 5HP",
    raisedBy: "Mr N Grumman",
    creationDate: new Date(2019, 11, 21),
    modifiedDate: new Date(2019, 11, 25),
    comments: ""
  },
  {
    order: {
      name: "Wine",
      id: "LTH55341",
      summary: "Monthly re-stocking"
    },
    cost: {
      subtotal: 104.15,
      tax: 21.05,
      shipping: 7.8
    },
    items: [
      {
        quantity: 6,
        id: "MB442",
        description: "Malbec"
      },
      {
        quantity: 3,
        id: "RJ803",
        description: "Rioja"
      },
      {
        quantity: 3,
        id: "CY22",
        description: "Chiraz"
      }
    ],
    shippingAddress: "Mr L. Bachuss, 4 Hell Lane, Utopia",
    raisedBy: "Mr R. Smiley",
    creationDate: new Date(2019, 3, 30),
    modifiedDate: new Date(2019, 3, 30),
    comments: "Handle with care"
  },
  {
    order: {
      name: "Cheese",
      id: "8754",
      summary: "Emergency order"
    },
    cost: {
      subtotal: 104,
      tax: 21,
      shipping: 7
    },
    items: [
      {
        quantity: 1,
        id: "ST1",
        description: "Stilton"
      },
      {
        quantity: 3,
        id: "RL1",
        description: "Red Leicester"
      }
    ],
    shippingAddress:
      "Ms A. Marshall, 8, Welland Vale Road, Tilehurst, Reading RG1 1AA",
    raisedBy: "Mr. C. Macy",
    creationDate: new Date(2020, 2, 3),
    modifiedDate: new Date(2019, 2, 4),
    comments: "Keep chilled - below 5 centrigrade."
  }
];

export default mockData;
