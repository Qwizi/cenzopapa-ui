type Image = {
	id: number,
	url: string,
	height: number,
	width: number,
	posted_at: string,
	"author": number,
	"likes": number[],
	"likes_count": number
}
type Data = {
	count: number,
	next: string | null,
	previous: string | null,
	results: Image[]
}

export type {Image, Data}