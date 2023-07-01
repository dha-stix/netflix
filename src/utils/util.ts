export const faqs = [
	{
		id: 1,
		title: "What is Netflix?",
		content:
			"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
	},
	{
		id: 2,
		title: "How much does Netflix cost?",
		content:
			"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.",
	},
	{
		id: 3,
		title: "Where can I watch?",
		content:
			"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. \nYou can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
	},
	{
		id: 4,
		title: "How do I cancel?",
		content:
			"Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
	},
	{
		id: 5,
		title: "What can I watch on Netflix?",
		content:
			"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
	},
	{
		id: 6,
		title: "Is Netflix good for kids?",
		content:
			"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.\nKids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
	},
];
const baseURL = "https://api.themoviedb.org/3";
export const imageBaseUrl = "https://image.tmdb.org/t/p/original";

export const requests = {
	fetchTrending: `${baseURL}/trending/all/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
	fetchNetflixOriginals: `${baseURL}/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_networks=213`,
	fetchTopRated: `${baseURL}/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
	fetchActionMovies: `${baseURL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=28`,
	fetchComedyMovies: `${baseURL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=35`,
	fetchHorrorMovies: `${baseURL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=27`,
	fetchRomanceMovies: `${baseURL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10749`,
	fetchDocumentaries: `${baseURL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=99`,
};

export interface Banner {
	backdrop_path: string,
	first_air_date: string,
	genre_ids: Number[],
	id: Number,
	name: string,
	origin_country: string[],
	original_language: string[],
	original_name: string,
	overview: string,
	popularity: Number,
	poster_path: string,
	vote_average: Number,
	vote_count: Number

}
export interface Element {
  type:
    | 'Bloopers'
    | 'Featurette'
    | 'Behind the Scenes'
    | 'Clip'
    | 'Trailer'
    | 'Teaser'
}

export async function fetchTrailer(movie: any, setTrailerURL: any) {
	try {
		      const data = await fetch(
				  `https://api.themoviedb.org/3/movie/${movie?.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=videos`)
		
				const response = await data.json()
		if (response?.videos) {
			const index = response.videos.results.findIndex((element: Element) => element.type === 'Trailer')

			setTrailerURL(`https://www.youtube.com/watch?v=${response.videos?.results[index]?.key}`)
			if (window.scrollY) {
				window.scroll(0, 0);
			}
			
		}
	} catch (err) {
		console.error("Error", err)
	}
}