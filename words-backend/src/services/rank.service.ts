import data from "../testData.json";
const scoresList = data.scoresList;



// Score list is unbounded array which may lead to preformance bottleneck if the scores count keep increasing
// We may use "Child proccess" to avoid blocking the main thread


export default function getRank(score: number) {
    return +(
        scoresList
            .filter((scoreRecord) => scoreRecord < score).length / scoresList.length * 100
    ).toFixed(2);
}

