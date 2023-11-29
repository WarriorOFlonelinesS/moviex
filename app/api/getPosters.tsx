export const getPosters = async () => {
    // try {
    //     const indexes = Array.from(Array(8).keys());
    //     const promises = indexes.map(async (index) => {
    //         const response = await fetch(`https://api.themoviedb.org/3/movie/${index}?api_key=88850dae741dd06839de667d163566d7&with_genres=20`);
    //         const poster = await response.json();
    //         return poster;
    //     });

    //     const posters = await Promise.all(promises);
    //     return posters;
    // } catch (error) {
    //     console.error('Error fetching posters:', error);
    //     throw error; 
    // }
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=88850dae741dd06839de667d163566d7&with_genres=28`;
    const response = await fetch(url);
    const poster = await response.json();
    return poster;
};
