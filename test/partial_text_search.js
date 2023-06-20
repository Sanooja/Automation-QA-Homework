Feature('Psychics Search - partial text search');

const searchScenarios = [
{searchWithText:'Matt'},
{searchWithText:'Myst'},
{searchWithText:'Ann'},
{searchWithText:'psy'}];

searchScenarios.forEach((scenario) => {
	Scenario(`Search for ${scenario.searchWithText}, all result should contain ${scenario.searchWithText.toLowerCase()}`, async({I}) => {
		var searchWithText = scenario.searchWithText
		I.amOnPage('/');
		I.fillField('searchText',searchWithText);
		I.click('//*[@id="search"]/button');
		const searchResult = await I.grabTextFromAll('.thumb-data-item--name');
		searchResult.forEach((result) => {
			var assert = require('assert');
			assert.equal(result.toLowerCase().includes(searchWithText.toLowerCase()),true);
		});
	});
});
