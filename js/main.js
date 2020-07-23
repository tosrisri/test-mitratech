//SideBar Slider
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
document.querySelector('.menu-hamburger').onclick = function () {
  sidebar.classList.toggle('sidebar_small');
  mainContent.classList.toggle('main-content_large');
}





//Data Table Script
$(document).ready(function() {
    $('#Dtable').DataTable({
        "scrollY":        "220px",
        "scrollCollapse": true,
        "paging":         true
    });
    $('.menu-hamburger').click(function() {
        $('.menu-hamburger').toggleClass("is-active");
      });
});

//Bar Chart
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
type: 'bar',
data: {
  labels: ["Jan", "Feb", "March", "April", "May", "June"],
  datasets: [{
    label: 'No. of Invoices(in 100s) Approved & Paid',
    data: [12, 10, 3, 11, 5, 7],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
},
options: {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
}
});

//Donut Chart
var ctx = document.getElementById("myDoughnutChart");
var myDoughnutChart = new Chart(ctx, {
type: 'doughnut',
data: {
labels: ["Pending for Approvals", "Approved Vendors"],
datasets: [
  {
    data: [20, 80],
    backgroundColor: [
      "#f7b500",
      "#6236ff"
    ],
    borderColor: [
      "#ffffff",
      "#ffffff"
    ],
    borderWidth: [2, 2]
  }]
}});
