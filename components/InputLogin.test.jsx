/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle username typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import {
    describe, it, expect, afterEach, vi
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import InputLogin from './InputLogin';

expect.extend(matchers);

describe('LoginInput component', () => {
    // jadi ketika testing selesai yaitu dengan menggunakan method afterEach di jalankan ketika selesai, yaitu menjalankan method cleanup()
    afterEach(() => {
        cleanup(); // unmounted <- 
    });

    it('should handle email typing correctly', async () => {
        // Arrange
        render(<InputLogin login={() => { }} />);
        const emailInput = await screen.getByPlaceholderText('Email');

        // Action
        await userEvent.type(emailInput, 'zunos@mail.com');

        // Assert
        expect(emailInput).toHaveValue('zunos@mail.com');
    });

    // karena render ada dua kali sehingga pada render kedua kita ingin mengcek placeholder='Password', sehingga rtl memberikan error terdapat ambigu, jadi solusinya ketika test selesai kita bisa cleanUp dom nya sehingga tidak ada duplikasi pada test selanjutnya
    it('should handle password typing correctly', async () => {
        // Arrange
        render(<InputLogin login={() => { }} />);
        const passwordInput = await screen.getByPlaceholderText('Password');

        // Action
        await userEvent.type(passwordInput, 'passwordtest');

        // Assert
        expect(passwordInput).toHaveValue('passwordtest');
    });
    // // Catatan: Fungsi login perlu di-mock karena kita memiliki ekspektasi terhadap cara fungsi login dipanggil.
    it('should call login function when login button is clicked', async () => {
        // Arrange
        const mockLogin = vi.fn();
        render(<InputLogin login={mockLogin} />);
        const emailInput = await screen.getByPlaceholderText('Email');
        await userEvent.type(emailInput, 'zunos@mail.com');
        const passwordInput = await screen.getByPlaceholderText('Password');
        await userEvent.type(passwordInput, 'passwordtest');
        const loginButton = await screen.getByRole('button', { name: 'Login' });

        // Action
        await userEvent.click(loginButton);

        // Assert
        expect(mockLogin).toBeCalledWith({
            email: 'zunos@mail.com',
            password: 'passwordtest',
        });
    });
});
