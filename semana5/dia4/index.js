/**
 * * chart de tipo barra
 */

const contenedorBarChart = document.querySelector("#bar-char").getContext("2d") //! es el area donde se va pintar mi chart
const barChart = new Chart(contenedorBarChart, {
    type: "bar",
    data: {
      labels: [
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
        "Domingo",
      ],
      datasets: [
        {
          label: "Numero de usuarios por dia",
          data: [20, 40, 10, 100, 50, 75, 200],
          borderWidth: 3,
          borderColor: "#f01",
          backgroundColor: [
            "#ab1",
            "#04EB77",
            "#0478EB",
            "#9704EB",
            "#EB04C8",
            "#EB0458",
            "#4EEB04",
          ]
        },
      ],
    },
  });





  const dataForChart = {
      labels: [`Computadoras`,`Celulares`,`Refrigeradoras`,`parlantes`],
      datasets: [
          {
              label: "Productos Electronicos",
              data: [100, 230, 300, 264],
              backgroundColor: ["red", "green", "blue", "violet"]
          }
      ]
  }

  
  const containerDoughnutChart = document.querySelector("#doughnut-chart").getContext("2d")
  const config = {
      type: "doughnut",
      data: dataForChart,
    }
    
    const donutChart = new Chart(containerDoughnutChart, config)
    
    
    //* grafico linel
    const containerLineChart = document.querySelector("#lineal-chart")
    const lineConfig = {
        type: "line",
        data: dataForChart,
    }
    const lineChart = new Chart(containerLineChart, lineConfig)
    
    
    //* Grafico en Burbujas
    
    dataForChart.datasets[0].data = [
        {
            x: 20,
            y: 30,
            r: 15,
        },
        {
            x: 40,
            y: 10,
            r: 10,
        },
        {
            x: 50,
            y: 20,
            r: 65,
        }
    ]
  const containerBubbleChart = document.querySelector("#bubble-chart")
  const bubbleConfig = {
      type: "bubble",
      data: dataForChart,
    }
    const bubbleChart = new Chart(containerBubbleChart, bubbleConfig)



    //* Grafico en Polar Chart

    const containerPolarChart = document.querySelector("#polar-chart").getContext("2d")
    dataForChart.datasets[0].data = [300, 350, 500, 255]
    const configPolar = {
        type: "polarArea",
        data: dataForChart,
    }
    const PolarChart = new Chart(containerPolarChart, configPolar)



    //* Grafico en radar

    const containerRadarChart = document.querySelector("#radar-chart")
    const configRadar = {
        type: "radar",
        data: dataForChart
    }
    const radarChart = new Chart(containerRadarChart, configRadar)

    //* Grafico 

    const containerScatterChart = document.querySelector("#scatter-chart")
    dataForChart.datasets[0].data = [
        {
            x: 10,
            y: 20
        }, {
            x: 15,
            y: 50
        },
        {
            x: 30,
            y: 20
        }, {
            x: 15,
            y: 80
        }
    ]

    const configScatter = {
        type: "scatter",
        data: dataForChart
    }
    const scatterChart = new Chart(containerScatterChart, configScatter)