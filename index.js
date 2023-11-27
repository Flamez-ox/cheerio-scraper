var http = require('http');
var request = require('request');
var cheerio = require('cheerio');

http.createServer(function (req, res) {
    request('https://onlineradiobox.com/genre/pop-/?cs=be.nostalgiebelgique&p=0', function (error, response,
        html) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html);
            var list_items = "";
            var lists = "";
            
            $('ul.tag-list li').each(function (i, element) {
                var a = $(this).text();
              
                list_items += "<td>" + a + "</td><br>";
                // console.log(a);
               
            });

           
            var html = "<tr>" + lists + "</tr>";
            //  html += "<tr>" + lists + "</tr>";
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(html);
        }
    });
}).listen(8080);
// console.log('Server is running at http://178.62.253.206:8080/');


const radioStations = $('.station__title__name').first().text();
const musicGenres = $('ul.stations__station__tags li a.ajax').first().text();
const url = $('li.stations__station figure.stations__station__title a').attr("href");