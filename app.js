d3.json('results/2017-dec-01.json', function(data) {
  console.log(data);
  
  var dataContent = d3.select('.content')
    .selectAll('div')
    .data(data);

  var contentEnterWrapper = dataContent
    .enter()
    .append('div');

  contentEnterWrapper
    .append('a')
    .classed('title', true)
    .attr('href', function(d) {
      return d.hn_url;
    })
    .text(function(d) {
      return `${d.ratio.toFixed(2)} ${d.title} (${d.score}/${d.comments})`
    })
});
