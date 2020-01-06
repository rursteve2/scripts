const puppeteer = require('puppeteer');

( async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://example.com")
    await page.screenshot({path: 'example.png'})
    await browser.close()
})



function segment(x, arr) {
    // Write your code here
    let subArrs = []
    let minPriceArr = []
    for(let i = 0; i <= arr.length - x; i++) {
        let sub = arr.slice(i, i+x)
        subArrs.push(sub)
    }
    for(let i = 0; i < subArrs.length; i++) {
        let minVal;
        for(let j = 0; j < subArrs[i].length; j++) {
            let tempVal = subArrs[i][j]
            if(minVal == undefined) {
                minVal = tempVal
            } else {
                if(minVal > tempVal) {
                    minVal = tempVal
                }
            }
        }
        minPriceArr.push(minVal)
    }
    let maxPriceFromMin;
    for(let i = 0; i < minPriceArr.length; i++) {
        if(maxPriceFromMin == undefined) {
            maxPriceFromMin = minPriceArr[i]
        } else {
            if(maxPriceFromMin < minPriceArr[i]) {
                maxPriceFromMin = minPriceArr[i]
            }
        }
    }
    return maxPriceFromMin


}