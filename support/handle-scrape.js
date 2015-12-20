var fs = require('fs')
var http = require('http')

var config = {
  input: 'support/scraped.json',
  heroesFile: 'app/config/heroes.json',
  images: 'app/images/heroes',
  stylFile: 'app/component/player/heroes.styl'
}

function downloadImage (id, localPath, imgUrl) {
  var file = fs.createWriteStream(localPath);

  try {
    fs.mkdirSync('./' + config.images + '/' + id)
  } catch (e) {
  }

  console.log('  - downloading ' + imgUrl)
  http.get(imgUrl, function (response) {
    response.pipe(file);
  });
}

function writeHeroes (scraped) {
  console.log('Writing heroes to ' + config.heroesFile)
  fs.writeFileSync(config.heroesFile, JSON.stringify(scraped.heroes))
}

function writeStyles (scraped) {
  var stylContent = ''

  for (var id in scraped.images) {
    stylContent += "hero-icon(" + id + ")\n"

    var localPath = './' + config.images + '/' + id + '/icon_128.jpg'

    try {
      // check if file exists
      fs.statSync(localPath).isFile()
    } catch (e) {
      downloadImage(id, localPath, scraped.images[id])
    }
  }

  console.log('Writing styles to ' + config.stylFile)
  fs.writeFileSync(config.stylFile, stylContent)
}

function run () {
  var scraped = JSON.parse(fs.readFileSync(config.input))

  writeHeroes(scraped)
  writeStyles(scraped)

  try {
    fs.unlinkSync(config.input)
  } catch (e) {
  }
}

run()
