export interface Word {
    word: string,
    id: number,
    pos: "adverb" | "adjective" | "verb" | "noun"
}

export interface ApiResponse<T> {
    message: string,
    data: T
}