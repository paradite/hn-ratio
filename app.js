let reverseSort = false;
let selectedDate;

function getDates() {
  const generatedDates = [];
  const endDate = moment().add(-1, 'days');
  const startDate = moment('2017-10-01');
  while (startDate.isSameOrBefore(endDate)) {
    generatedDates.push(startDate.format('YYYY-MMM-DD').toLowerCase());
    startDate.add(1, 'days');
  }
  return generatedDates;
}

function formatTime(timeStr) {
  return moment(timeStr).fromNow();
}

function render() {
  d3.json(`results/${selectedDate}.json`, (data) => {
    if (reverseSort) {
      data.reverse();
    }

    const contentWrapper = d3.select('.content');

    const dataContent = contentWrapper
      .selectAll('div.row')
      .data(data, d => d.item_id);

    const contentEnterWrapper = dataContent
      .enter()
      .append('div')
      .classed('row', true);

    dataContent.order();

    dataContent.exit().remove();

    contentEnterWrapper
      .append('a')
      .classed('title', true)
      .attr('href', d => d.hn_url)
      .text(d => `[${d.ratio.toFixed(2)}] ${d.title} (${d.comments}/${d.score})`);

    contentEnterWrapper
      .append('div')
      .classed('secondary-text', true)
      .text(d => `by ${d.by} ${formatTime(d.submission_time)}`);
  });
}

function onDateChange() {
  selectedDate = this.value;
  render();
}

function generateSelect(dates) {
  const selectBox = d3.select('#date-select');
  const options = selectBox
    .on('change', onDateChange)
    .selectAll('option')
    .data(dates);

  options.enter()
    .append('option')
    .attr('value', d => d)
    .text(d => d);

  selectBox.node().value = dates[dates.length - 1];
}

function reverse() {
  reverseSort = !reverseSort;
  render();
}

function setUp() {
  const dates = getDates();
  generateSelect(dates);
  selectedDate = dates[dates.length - 1];
  d3.select('#reverse-btn')
    .on('click', reverse);
}

setUp();
render();
