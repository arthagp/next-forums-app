/*
Test scenario leaderBoardReducer
    - should return the initial state when given by unknown action
    - should return the talks when given by RECEIVE_THREADS action
*/

import leaderBoardsReducer from "./reducer";
import { describe, it, expect } from 'vitest';

describe('leaderBoard function', () => {
    it('should return the initial state when given by unknown action', () => {
        // arrange
        const initialState = [];
        const action = { type: 'UNKNOWN' };
        // action
        const nextState = leaderBoardsReducer(initialState, action);
        // assert
        expect(nextState).toEqual(initialState);
    });

    it('should return the leaderboards when given by RECEIVE_LEADERBOARD action', () => {
        // arrange
        const initialState = [];
        const action = {
            type: 'RECEIVE_LEADERBOARD',
            payload: {
                leaderBoards: [
                    {
                        user: {
                            id: 'user-mQhLzINW_w5TxxYf',
                            name: 'Dimas Saputra',
                            email: 'dimas@dicoding.com',
                            avatar:
                                'https://ui-avatars.com/api/?name=Dimas Saputra&background=random'
                        },
                        score: 25
                    },
                    {
                        user: {
                            id: 'user-aROWej8yYA1sOfHN',
                            name: 'Dicoding',
                            email: 'admin@dicoding.com',
                            avatar: 'https://ui-avatars.com/api/?name=Dicoding&background=random'
                        },
                        score: 0
                    },
                ],
            },
        };

        // action
        const nextState = leaderBoardsReducer(initialState, action);

        // assert
        expect(nextState).toEqual(action.payload.leaderBoards);
    })
})