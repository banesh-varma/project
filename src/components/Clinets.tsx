const listOfClients = [
  {
    id: 1,
    name: "Stellar Systems",
    contactNumber: "123-456-7890",
    address: "1 Galaxy Way, Cosmos City, AA 11111",
  },
  {
    id: 2,
    name: "Quantum Leap Inc.",
    contactNumber: "234-567-8901",
    address: "2 Innovation Plaza, Techburg, BB 22222",
  },
  {
    id: 3,
    name: "Synergy Solutions",
    contactNumber: "345-678-9012",
    address: "3 Venture Lane, Startupville, CC 33333",
  },
  {
    id: 4,
    name: "Apex Technologies",
    contactNumber: "456-789-0123",
    address: "4 Pinnacle Point, Summit City, DD 44444",
  },
  {
    id: 5,
    name: "Nexus Global",
    contactNumber: "567-890-1234",
    address: "5 Connection Blvd, Network Town, EE 55555",
  },
  {
    id: 6,
    name: "Horizon Industries",
    contactNumber: "678-901-2345",
    address: "6 Future Road, Progress City, FF 66666",
  },
  {
    id: 7,
    name: "Zenith Corp",
    contactNumber: "789-012-3456",
    address: "7 Acme Street, Metropolis, GG 77777",
  },
  {
    id: 8,
    name: "Vanguard Enterprises",
    contactNumber: "890-123-4567",
    address: "8 Leading Avenue, Pioneer Town, HH 88888",
  },
  {
    id: 9,
    name: "Catalyst Group",
    contactNumber: "901-234-5678",
    address: "9 Change Circle, Transformation City, II 99999",
  },
  {
    id: 10,
    name: "Precision Systems",
    contactNumber: "012-345-6789",
    address: "10 Accuracy Way, Precise Town, JJ 00000",
  },
  {
    id: 11,
    name: "Evergreen Holdings",
    contactNumber: "111-222-3333",
    address: "11 Nature Path, Green Valley, KK 10101",
  },
  {
    id: 12,
    name: "Titanium Solutions",
    contactNumber: "222-333-4444",
    address: "12 Strength Street, Fortitude City, LL 12121",
  },
  {
    id: 13,
    name: "Bright Future Ltd.",
    contactNumber: "333-444-5555",
    address: "13 Hope Lane, Optimism Town, MM 13131",
  },
  {
    id: 14,
    name: "Summit Innovations",
    contactNumber: "444-555-6666",
    address: "14 Peak Plaza, Altitude City, NN 14141",
  },
  {
    id: 15,
    name: "Prime Industries",
    contactNumber: "555-666-7777",
    address: "15 Top Road, Premier Town, OO 15151",
  },
  {
    id: 16,
    name: "Royal Ventures",
    contactNumber: "666-777-8888",
    address: "16 Crown Street, Regal City, PP 16161",
  },
  {
    id: 17,
    name: "United Global Enterprises",
    contactNumber: "777-888-9999",
    address: "17 Union Avenue, Unity Town, QQ 17171",
  },
  {
    id: 18,
    name: "Golden Age Corp",
    contactNumber: "888-999-0000",
    address: "18 Legacy Lane, Heritage City, RR 18181",
  },
];
const Clinets = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Clients</h1>
      <ul className="mt-5 grid grid-cols-3 max-md:grid-cols-2 gap-10">
      {
        listOfClients.map((client) => (
          <li key={client.id} className="border-2 border-gray-300 p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold">{client.name}</h2>
            <p className="text-sm text-gray-600">Contact Number: <strong>{client.contactNumber}</strong></p>
            <p className="text-sm text-gray-600">Address: <strong>{client.address}</strong></p>
          </li>
        ))  
      }
      </ul>
    </div>
  )
}

export default Clinets