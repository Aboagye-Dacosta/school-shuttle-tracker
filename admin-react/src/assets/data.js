export const busData = [{
    id: 1,
    image: "/bus.jpg",
    driver: "james kruka",
    busNumber: "112GDS6",
    status: "inactive",
    destinations: [
        "Katanga","Independence Hall"
    ],
    created_at: new Date().toISOString(),
}]


export const driversData = [{
    id: 1,
    name: "Thomas Osborn",
    email: "dactsolee@gmail.com",
    image: "/default-user.jpg",
        created_at: new Date().toISOString(),
    address: "PO Box 1022",
    tel: "033273872783",
        busNumber:"8292932k"


}
]

export const usersData = [
    {
        id: 1,
        image: "/default-user.jpg",
        username: "James Hasten",
        email: "james@gmail.com",
        status: "blocked",
        logs: []
    }
]

export const managersData = [
    {
        id: 1,
        name: "Thomas Heyford",
        email: "thomas@gmail.com",
        role: "admin",
        image: "",
    },

]