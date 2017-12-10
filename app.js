const date = '2017-dec-03';

function getDates() {
  var dates = [];
  var endDate = moment('2017-12-09');
  var startDate = moment('2017-10-01');
  while(startDate.isSameOrBefore(endDate)) {
    dates.push(startDate.format('YYYY-MMM-DD').toLowerCase());
    startDate.add(1, 'days');
  }
  return dates;
}

function generateSelect(dates) {
  var selectBox = d3.select('#date-select')
  var options = selectBox
    .on('change',onChange)
    .selectAll('option')
    .data(dates);

  options.enter()
    .append('option')
    .attr('value', function(d) { return d; })
    .text(function(d) { return d; });

  selectBox.node().value = dates[dates.length - 1];
}

function onChange() {
  loadDate(this.value);
}

function formatTime(timeStr) {
  return moment(timeStr).fromNow();
}

function loadDate(selectedDate) {
  d3.json(`results/${selectedDate}.json`, function(data) {
    var contentWrapper = d3.select('.content');

    console.log(data[0]);

    var dataContent = contentWrapper
      .selectAll('div.row')
      .data(data, function(d) { return d.item_id; });

    var contentEnterWrapper = dataContent
      .enter()
      .append('div')
      .classed('row', true);

    dataContent.exit().remove();

    contentEnterWrapper
      .append('a')
      .classed('title', true)
      .attr('href', function(d) {
        return d.hn_url;
      })
      .text(function(d) {
        return `[${d.ratio.toFixed(2)}] ${d.title} (${d.comments}/${d.score})`;
      });

    contentEnterWrapper
      .append('div')
      .classed('secondary-text', true)
      .text(function(d) {
        return `by ${d.by} ${formatTime(d.submission_time)}`;
      });
  });
}

var dates = getDates();
generateSelect(dates);
loadDate(dates[dates.length - 1]);