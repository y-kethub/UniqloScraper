const { chromium, firefox, webkit } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  
  const page = await browser.newPage();

  var url = new RegExp('https?://[\w/:%#\$&\?\(\)~\.=\+\-]+'); //URLの正規表現
  if (url.test(process.argv[2])) {
    await page.goto(process.argv[2]);
    const name = await page.locator('#root > div:nth-child(3) > div > section > div.fr-ec-layout.fr-ec-layout--gutter-sm.fr-ec-layout--gutter-md.fr-ec-layout--gutter-lg.fr-ec-layout--span-4-sm.fr-ec-layout--span-12-md.fr-ec-layout--span-12-lg > h1');
    const summary = await page.locator('#root > div:nth-child(3) > div > section > div.fr-ec-layout.fr-ec-layout--gutter-sm.fr-ec-layout--gutter-md.fr-ec-layout--gutter-lg.fr-ec-layout--span-4-sm.fr-ec-layout--span-12-md.fr-ec-layout--span-12-lg > p');
    const price = await page.locator('//*[@class="fr-ec-content-alignment fr-ec-content-alignment--direction-row fr-ec-content-alignment--content-flex-start fr-ec-content-alignment--alignment-baseline fr-ec-price__amount fr-ec-price__amount--large"]');
    const category = await page.locator('#root > div:nth-child(3) > div > section > div:nth-child(1) > nav > ol > li');
    const colorGroup = await page.locator('//*[@id="product-color-picker"]/div[2]');
    const color = await colorGroup.locator('//input[@class="fr-ec-chip__input fr-ec-cursor-pointer"]');
    const sizeGroup = await page.locator('//*[@id="product-size-picker"]/div[2]');
    const size = await sizeGroup.locator('//input[@class="fr-ec-chip__input fr-ec-cursor-pointer"]');
    const stock = await page.locator('#alteration-method-dropdown-hint-error');

    console.log("product name: " + await name.innerText()); //商品名の表示
    console.log("summary: " + await summary.innerText());  //概要の表示
    console.log("price: " + await price.innerText());  //価格の表示

    //--- カテゴリの表示 ---//
    const categoryCnt = await category.count();
    process.stdout.write("category: ");
    for ( let i=0; i<categoryCnt; i++ ) {
        process.stdout.write( "/" +await category.nth(i).innerText() );
    }
    process.stdout.write('\n')

    //--- カラーの表示 ---//
    const colorCnt = await color.count();
    process.stdout.write("color: ");
    for ( let i=0; i<colorCnt; i++ ) {
        process.stdout.write( "/" +await color.nth(i).getAttribute("id") );
    }
    process.stdout.write('\n')

    //--- サイズの表示 ---//
    const sizeCnt = await size.count();
    process.stdout.write("size: ");
    for ( let i=0; i<sizeCnt; i++ ) {
        process.stdout.write( "/" +await size.nth(i).getAttribute("id") );
    }
    process.stdout.write('\n')

    console.log( "stock: " + await stock.innerText());  //在庫の表示

  }else{
    console.log('正規表現パターンに一致していません。');

  }


  await browser.close();
})();

