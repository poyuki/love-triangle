/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let trianglesCount=0,firstLove,secondLove,thirdLove;

    for(let i=0;i<preferences.length;i++){
        firstLove=preferences[i]-1;
        secondLove=preferences[preferences[i]-1]-1;
        thirdLove=preferences[preferences[preferences[i]-1]-1]-1;

        if(thirdLove===i&&firstLove!==i&&secondLove!==firstLove&&thirdLove!==secondLove) trianglesCount++;
    }

    return trianglesCount/3;
};
