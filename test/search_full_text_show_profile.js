Feature('Psychics Search - Full text search');

const searchScenarios = [
{searchWithText:'MattWarren'},
{searchWithText:'MysticMilena'},
{searchWithText:'EternalFlame'}];

searchScenarios.forEach((scenario) => {
	Scenario(`Search for ${scenario.searchWithText}, ${scenario.searchWithText}'s profile should be displayed`, async({I}) => {
		var searchWithText = scenario.searchWithText
		I.amOnPage('/');
		I.fillField('searchText',searchWithText);
		await I.click( '//ul[@class="toolbar-autosuggest autosuggest"]/li[1]/a');
		I.see(searchWithText);
	});
});
