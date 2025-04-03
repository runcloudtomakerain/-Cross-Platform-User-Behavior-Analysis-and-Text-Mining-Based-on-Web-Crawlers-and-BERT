const crypto = require('crypto');
const web_min = require('./web_min.js');



// var y = {wbiImgKey: '839c8b697b0d44dc80e9a604592bb432', wbiSubKey: '02cd020b04d64aacad6b3a08d06f8eb0'};
//var y = "mode=3&oid=113576920553676&pagination_str=%7B%22offset%22%3A%22%7B%5C%22type%5C%22%3A1%2C%5C%22direction%5C%22%3A1%2C%5C%22session_id%5C%22%3A%5C%221774705072023010%5C%22%2C%5C%22data%5C%22%3A%7B%7D%7D%22%7D&plat=1&type=1&web_location=1315875&wts=1733115312";

// r的值：在localstorage中，索引wbi_img_urls的键的值，用localStorage.getItem('wbi_img_urls')获取
var r = 'https://i0.hdslb.com/bfs/wbi/7cd084941338484aae1ad9425b84077c.png-https://i0.hdslb.com/bfs/wbi/4932caff0ff746eab6f01bf08b70ac45.png'.split("-");
// console.log(r);
 function ft(e) {
    return e.substring(e.lastIndexOf("/") + 1, e.length).split(".")[0]
}
var o = ft(r[0]), i = ft(r[1]);
var a = (t = o + i, r1 = [],
    [46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49, 33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40, 61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11, 36, 20, 34, 44, 52].forEach((function(e) {
        t.charAt(e) && r1.push(t.charAt(e))
    })), r1.join("").slice(0, 32));

var arr1 = ['e', 'a', '1', 'd', 'b', '1', '2', '4', 'a', 'f', '3', 'c', '7', '0', '6', '2', '4', '7', '4', '6', '9', '3', 'f', 'a', '7', '0', '4', 'f', '4', 'f', 'f', '8', 'a', 'b', '4', 'a', '5', '0', '0', 'c', '8', 'e', '7', 'c', 'a', '0', '7', '8', '4', 'b', 'f', '9', '8', '0', '9', '5', 'b', '4', '8', 'c', 'd', '3', '4', '1'];


function result(p1){
    // var y = p1;
    // return p1;
    var y = encodeURI(p1).replace(/:/g,"%3A").replace(/,/g,'%2C');
    return web_min.add(y+a)

}

// var x = 'mode=3&oid=113430975484244&pagination_str={"offset":"{\\"type\\":1,\\"direction\\":1,\\"session_id\\":\\"1781687358730070\\",\\"data\\":{}}"}&plat=1&type=1&web_location=1315875&wts=1739930067'
// var y1 = 'mode=3&oid=113430975484244&pagination_str={"offset":"{\"type\":1,\"direction\":1,\"session_id\":\"1781687358730070\",\"data\":{}}"}&plat=1&type=1&web_location=1315875&wts=1739930067';
// console.log(result(encodeURI(x).replace(/:/g,"%3A").replace(/,/g,'%2C')));
// 'mode=3&oid=113430975484244&pagination_str={"offset":"{\\"type\\":1,\\"direction\\":1,\\"session_id\\":\\"1781687358730070\\",\\"data\\":{}}"}&plat=1&type=1&web_location=1315875&wts=1739930067'