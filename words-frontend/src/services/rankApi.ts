import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiResponse } from '../interfaces/interfaces'

export const rankApi = createApi({
    reducerPath: 'rankApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BASE_URL}api/v1` }),
    endpoints: (builder) => ({
        getRank: builder.mutation<number, number>({
            query: (score: number) => ({
                url: `/rank`,
                method: "POST",
                body: { score }
            }),
            transformResponse: (res: ApiResponse<number>, meta, error) => res.data,

        }),
    }),
})

export const { useGetRankMutation } = rankApi