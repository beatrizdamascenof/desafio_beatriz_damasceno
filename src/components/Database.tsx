export const lineChartData = {
    labels: [
        "Janeiro", 
        "Fevereiro",
        "Março",
        "Abril", 
        "Maio",
        "Junho", 
    ],

    datasets: [
        {
            label: "1 semestre/2024", 
            data: [3000, 4000, 4500, 5000, 6500, 3300],
            borderColor: "rgb(255, 0, 156)",
        },
        {
            label: "1 semestre/2025", 
            data: [4000, 4600, 4200, 7000, 6500, 2300],
            borderColor: "rgb(75, 192, 192)",
            
        },
    ],
};


export const barChartData = {
     labels: [
        "Equipamentos", 
        "Funcionários", 
        "Transporte", 
        "Prestadores de serviço", 
        "Aluguel"
        ],
     datasets: [
        {
            label: "Expenses", 
            data: [20000, 50000, 15500, 10400, 20000],
            backgroundColor: [
                "rgb(255, 0, 156)",
                "rgb(149, 0, 0)",
                "rgb(149, 164, 0)",
                "rgb(149, 90, 0)",
                "rgb(149, 90, 156)"
            ],
            borderColor: ["rgb(0, 0, 0)"],
            borderWidth: 1,
        },
     ]

};

export const pieChartData = {
    
    labels: [
        "React", 
        "Java", 
        "Spring Boot", 
        "Angular",
        "Python"
    ],
    
    datasets: [
        {
            label: "Time Spent",
            data: [20, 30, 15, 10, 25],
            backgroundColor: [
                "rgb(253, 143, 0)",
                "rgb(149, 90, 156)",
                "rgb(149, 0, 0)",
                "rgb(149, 164, 0)",
                "rgb(149, 90, 0)",
                "rgb(149, 90, 156)"
            ],
            hoverOffset: 4,
            borderWidth: 0.5,
            
        }
    ],
};
