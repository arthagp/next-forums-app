/**
    Skenario Testing thunk asyncLeaderBoards
    - should dispatch action correctly when data fetching success
    - should dispatch action and call alert correctly when data fetching failed
*/

import {
    describe, beforeEach, afterEach, it, vi, expect,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncLeaderBoards, receiveLeaderBoardActionCreator } from './action';

const fakeLeaderBoardResponse = [
    {
        user: {
            id: 'user-mQhLzINW_w5TxxYf',
            name: 'Dimas Saputra',
            email: 'dimas@dicoding.com',
            avatar: 'https://ui-avatars.com/api/?name=DimasSaputra&background=random'
        },
        score: 25
    },
]

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncLeaderBoards thunk', () => {
    beforeEach(() => {
        api._leaderBoards = api.leaderBoards;
    });

    afterEach(() => {
        api._leaderBoards = api.leaderBoards;

        // delete backup data
        delete api._leaderBoards;
    });

    it('should dispatch action correctly when data fetching success', async () => {
        // arrange
        // stub implementation
        api.leaderBoards = () => Promise.resolve(fakeLeaderBoardResponse);
        // mock dispatch
        const dispatch = vi.fn();
        // action
        await asyncLeaderBoards()(dispatch);

        //asert
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(receiveLeaderBoardActionCreator(fakeLeaderBoardResponse));
        expect(dispatch).toHaveBeenCalledWith(hideLoading());

    })

    it('should dispatch action and call alert correctly when data fetching failed', async () => {
        // arrange
        // stub implementation
        api.leaderBoards = () => Promise.reject(fakeErrorResponse);
        // mock dispatch
        const dispatch = vi.fn();
        // mock alert
        window.alert = vi.fn();
        // action
        await asyncLeaderBoards()(dispatch);

        // assert
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
        expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    });
})