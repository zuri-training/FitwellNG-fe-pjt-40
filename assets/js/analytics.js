google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawTopX);

function drawTopX() {
  var data = new google.visualization.DataTable();
  data.addColumn('timeofday', '  ');
  data.addColumn('number', ' ');
  data.addColumn('number', ' ');

  data.addRows([
    [{ v: [8, 0, 0], f: 'Mon' }, 1, 0.25],
    [{ v: [9, 0, 0], f: 'Tue' }, 2, 0.5],
    [{ v: [10, 0, 0], f: 'Wed' }, 3, 1],
    [{ v: [11, 0, 0], f: 'Thu' }, 4, 2.25],
    [{ v: [12, 0, 0], f: 'Fri' }, 5, 2.25],
    [{ v: [13, 0, 0], f: 'Sat' }, 6, 3],
    [{ v: [14, 0, 0], f: 'Sun' }, 7, 4],
  ]);

  var options = {
    chart: {},
    axes: {
      x: {
        0: { side: 'top' },
        100: { side: 'bottom' },
      },
    },

    vAxis: {
      title: 'Rating (scale of 1-1000)',
    },
  };

  var materialChart = new google.charts.Bar(
    document.getElementById('chart_div')
  );
  materialChart.draw(data, options);
}
