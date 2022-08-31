import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setWords } from '../app/appSlice';
import { ApiResponse, Word } from '../interfaces/interfaces'

const baseQuery = fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BASE_URL}api/v1` })

const baseQueryWithDispatch: typeof baseQuery = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.data) {
        const words = result.data as { data: Word[] }

        api.dispatch(setWords(words.data))
    }

    return result
}

export const wordsApi = createApi({
    reducerPath: 'wordsApi',

    baseQuery: baseQueryWithDispatch,
    endpoints: (builder) => ({
        getWords: builder.query<Word[], undefined>({
            query: () => `/words`,
            transformResponse: (res: ApiResponse<Word[]>, meta, error) => res.data,

        }),
    }),
})

export const { useGetWordsQuery } = wordsApi