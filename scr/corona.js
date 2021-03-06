const fetch = require('node-fetch');

let baseURL = `https://corona.lmao.ninja/v2/`

module.exports = {
    findData: async function ({ country }) {
        if (country !== "all") {
        const query = encodeURI(country)
        if (!query) throw new Error("Example Usage => coronaInfo.find({ country: \"USA\" })")

        const response = await fetch(`${baseURL}countries/${query}`, { method: "GET" });

        let res = await response.json();

        if (res.message == "Country not found or doesn't have any cases") throw new Error("Country not found or doesn't have any cases");

        const d = new Date(res.updated);
        const newdate = d.toLocaleDateString();

        const uptatedTime = (newdate) ?
            newdate : "Invalid Date.";

        const Cases = (res.cases) ?
            res.cases : "No Cases.";

        const Deaths = (res.deaths) ?
            res.deaths : "No Deaths.";

        const todayCases = (res.todayCases) ?
            res.todayCases : "No Cases Today.";

        const todayDeaths = (res.todayDeaths) ?
            res.todayDeaths : "No One Died Today.";

        const tests = (res.tests) ?
            res.tests : "No Tests.";

        const active = (res.active) ?
            res.active : "No Active Cases.";

        const critical = (res.critical) ?
            res.critical : "No Critical Cases.";

        const recovered = (res.recovered) ?
            res.recovered : "No Rescued.";

        const todayRecovered = (res.todayRecovered) ?
            res.todayRecovered : "No Rescuers Today.";

        const data = {
            updatedDate: uptatedTime,
            cases: Cases.toLocaleString(),
            todayCases: todayCases.toLocaleString(),
            deaths: Deaths.toLocaleString(),
            todayDeaths: todayDeaths.toLocaleString(),
            countryName: res.country,
            countryFlag: res.countryInfo.flag,
            testCount: tests.toLocaleString(),
            active: active.toLocaleString(),
            critical: critical.toLocaleString(),
            recovered: recovered.toLocaleString(),
            todayRecovered: todayRecovered.toLocaleString(),
        };
        return data;
        }
        if (country == "all") {
            const response = await fetch(`${baseURL}all`, { method: "GET" });

        let res = await response.json();

        const d = new Date(res.updated);
        const newdate = d.toLocaleDateString();

        const updatedTime = (newdate) ?
            newdate : "Invalid Date.";

        const Cases = (res.cases) ?
            res.cases : "No Cases.";

        const Deaths = (res.deaths) ?
            res.deaths : "No Deaths.";

        const todayCases = (res.todayCases) ?
            res.todayCases : "No Cases Today.";

        const todayDeaths = (res.todayDeaths) ?
            res.todayDeaths : "No One Died Today.";

        const tests = (res.tests) ?
            res.tests : "No Tests.";

        const active = (res.active) ?
            res.active : "No Active Cases.";

        const critical = (res.critical) ?
            res.critical : "No Critical Cases.";

        const recovered = (res.recovered) ?
            res.recovered : "No Rescued.";

        const todayRecovered = (res.todayRecovered) ?
            res.todayRecovered : "No Rescuers Today.";

        const data = {
            updatedDate: updatedTime,
            cases: Cases.toLocaleString(),
            deaths: Deaths.toLocaleString(),
            todayCases: todayCases.toLocaleString(),
            todayDeaths: todayDeaths.toLocaleString(),
            tests: tests.toLocaleString(),
            active: active.toLocaleString(),
            critical: critical.toLocaleString(),
            recovered: recovered.toLocaleString(),
            todayRecovered: todayRecovered.toLocaleString(),
        };

        return data;

        }
    },
}
