Feature('sign up overlay - Livestream');

Scenario('Verify sign up overlay on favourites ', async ({ I }) =>{
	I.amOnPage('/');
	I.forceClick('//span[text()="Live Experts"]');
	await I.click('//article[@data-type ="performer"][1]');
	//I.forceClick('//title[text()="Favorites"]');
	I.forceClick('//a[@href = "/en/favorite"]');
	I.see('Join Now');
});
Scenario('Verify sign up overlay on start session button ', async ({ I }) =>{
	I.amOnPage('/');
	I.forceClick('//span[text()="Live Experts"]');
	await I.click('//article[@data-type ="performer"][1]');
	I.forceClick('//span[text()="Start Private Session"]');
	I.see('Join Now', 'Button');
});
Scenario('Verify sign up overlay on get credits button ', async ({ I }) =>{
	I.amOnPage('/');
	I.forceClick('//span[text()="Live Experts"]');
	await I.click('//article[@data-type ="performer"][1]');
	I.forceClick('//div[@data-page-nav="get-credits"]');
	I.see('Join Now');
});
Scenario('Verify sign up overlay on get coins button ', async ({ I }) =>{
	I.amOnPage('/');
	I.forceClick('//span[text()="Live Experts"]');
	await I.click('//article[@data-type ="performer"][1]');
	I.forceClick('//span[text()="BUY CREDITS"]');
	I.see('Join Now');
});
Scenario('Verify sign up overlay on get surprise button ', async ({ I }) =>{
	I.amOnPage('/');
	I.forceClick('//span[text()="Live Experts"]');
	await I.click('//article[@data-type ="performer"][1]');
	var count;
	await I.wait(2);
	count = await I.grabNumberOfVisibleElements({xpath:'//div[contains(@data-testid,"surprise-Oranum")]'});
	console.log(count);
	for (let i=0; i<count; i++)
	{
		await I.forceClick({xpath:'//div[contains(@data-testid,"surprise-Oranum")]'});
		I.see('Join Now');
		I.forceClick('//a[@class = "mc_dialog__close js_close_dialog"]');
	} 
});

