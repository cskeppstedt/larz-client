// this is a phantomjs script, run like this:
// ./node_modules/.bin/phantomjs support/scrape.phantom.js

var fs = require('fs')
var page = require('webpage').create()

var config = {
  url: 'http://www.heroesofnewerth.com/heroes/',
  output: 'support/scraped.json'
}

function scrape () {
  var data = {
    heroes: {},
    images: {}
  };

  jQuery('.gridView.wrapper').find('a[href^="/heroes"]').each(function () {
      $el = $(this)
      var id = $el.attr('href').match(/\/([0-9]+)/)[1]
      var bgCss = $el.find('.heroIcon').css('background-image')

      data.heroes[id] = $el.parent().text().trim()
      data.images[id] = bgCss.match(/url\(['"]?([^'"]+)['"]?\)/)[1].trim()
  })

  return data;
}

page.open(config.url, function (status) {
  if (status !== 'success') {
    console.error('FAIL to load the address')
  } else {
    var results = page.evaluate(scrape)
    console.log('Writing scrape results to ' + config.output)
    fs.write(config.output, JSON.stringify(results))
  }

  phantom.exit()
})
