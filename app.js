const date = '2017-dec-03';

d3.json(`results/${date}.json`, function(data) {
  
  var contentWrapper = d3.select('.content');

  contentWrapper.append('div')
    .classed('info', true)
    .text('[Ratio] Title (Comment/Score)')

  contentWrapper.append('div')
    .classed('date-picker', true)
    .text(`Select a date: ${date}`)

  var dataContent = contentWrapper
    .selectAll('div.row')
    .data(data);

  var contentEnterWrapper = dataContent
    .enter()
    .append('div')
    .classed('row', true);

  contentEnterWrapper
    .append('a')
    .classed('title', true)
    .attr('href', function(d) {
      return d.hn_url;
    })
    .text(function(d) {
      return `[${d.ratio.toFixed(2)}] ${d.title} (${d.comments}/${d.score})`;
    })

  contentWrapper.append('p')
    .append('a')
    .attr('href', function(d) {
      return 'https://github.com/paradite/hn-ratio';
    })
    .text(function(d) {
      return 'GitHub';
    })
});
