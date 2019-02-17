new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Labor", "Sexual", "Other"],
      datasets: [{
        label: "Percentage of human trafficking victims",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
        data: [19,80,1]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Human Trafficking Reasons'
      }
    }
});