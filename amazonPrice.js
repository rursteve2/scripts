const curl = new (require( 'curl-request' ))();
let url = "https://www.amazon.com/gp/product/B07FDJMC9Q"
priceAlert = () => {
    curl.setHeaders([
        'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
    ])
    .get(url)
    .then(({statusCode, body, headers}) => {
        console.log(statusCode, body, headers)
        console.log(document.body.getElementById("priceblock_ourprice"))

    })
    .catch((e) => {
        console.log(e)
    })
    
}
priceAlert()
// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://www.amazon.com/gp/product/B07FDJMC9Q", true);
// xhr.send();
 
// xhr.onreadystatechange = processRequest;
 
// function processRequest(e) {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         var response = JSON.parse(xhr.responseText);
//         // alert(response.ip);
//         console.log(response)
//     }
// }