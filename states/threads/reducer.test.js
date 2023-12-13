/**
* test scenario for threadsReducer
*
* - talkReducers function
*  - should return the initial state when given by unknown action
*  - should return the talks when given by RECEIVE_THREADS action
*  - should return the talks with the new talk when given by ADD_THREAD action
*/

import { describe, it, expect } from 'vitest';
import threadsReducer from './reducer';

describe('threadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    // action
    const nextState = threadsReducer(initialState, action);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the thread when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        talks: [
          {
            id: 'thread-Np47p4jhUXYhrhRn',
            title: 'Bagaimana pengalamanmu belajar Redux?',
            body:
              'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
            category: 'redux',
            createdAt: '2023-05-29T07:55:52.266Z',
            ownerId: 'user-mQhLzINW_w5TxxYf',
            totalComments: 0,
            upVotesBy: ['user-FDoAWAqlP4JUmy1g'],
            downVotesBy: [],
          },
          {
            id: 'thread-IodoNondoNOjNON',
            title: 'Apakah Redux itu susah?',
            body:
              'Coba ceritakan dong, gimana pengalaman kalian belajar Redux?',
            category: 'redux',
            createdAt: '2023-05-29T07:55:52.266Z',
            ownerId: 'user-mQhLzINW_w5TxxYf',
            totalComments: 0,
            upVotesBy: ['user-OsnoJDio0wNndin'],
            downVotesBy: [],
          },
        ],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with the new thread when given by ADD_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-IodoNondoNOjNON',
        title: 'Apakah Redux itu susah?',
        body:
          'Coba ceritakan dong, gimana pengalaman kalian belajar Redux?',
        category: 'redux',
        createdAt: '2023-05-29T07:55:52.266Z',
        ownerId: 'user-mQhLzINW_w5TxxYf',
        totalComments: 0,
        upVotesBy: ['user-OsnoJDio0wNndin'],
        downVotesBy: [],
      },
    ];
    const action = {
      type: 'ADD_THREAD',
      payload: {
        talk: {
          id: 'thread-Np47p4jhUXYhrhRn',
          title: 'Bagaimana pengalamanmu belajar Redux?',
          body:
            'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
          category: 'redux',
          createdAt: '2023-05-29T07:55:52.266Z',
          ownerId: 'user-mQhLzINW_w5TxxYf',
          totalComments: 0,
          upVotesBy: ['user-FDoAWAqlP4JUmy1g'],
          downVotesBy: [],
        },
      },
    };
    // action
    const nextState = threadsReducer(initialState, action);
    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

});