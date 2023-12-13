import React from 'react';
import {
    describe, it, expect, afterEach, vi
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputRegister from './InputRegister';

describe('InputRegister component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should handle name typing correctly', async () => {
        // Arrange
        render(<InputRegister register={() => { }} />);
        const nameInput = await screen.getByPlaceholderText('Name');

        // Action
        await userEvent.type(nameInput, 'John Doe');

        // Assert
        expect(nameInput.value).toEqual('John Doe');
    });

    it('should handle email typing correctly', async () => {
        // Arrange
        render(<InputRegister register={() => { }} />);
        const emailInput = await screen.getByPlaceholderText('Email');

        // Action
        await userEvent.type(emailInput, 'john.doe@example.com');

        // Assert
        expect(emailInput.value).toEqual('john.doe@example.com');
    });

    it('should handle password typing correctly', async () => {
        // Arrange
        render(<InputRegister register={() => { }} />);
        const passwordInput = await screen.getByPlaceholderText('Password');

        // Action
        await userEvent.type(passwordInput, 'password123');

        // Assert
        expect(passwordInput.value).toEqual('password123');
    });

    it('should call register function when register button is clicked', async () => {
        // Arrange
        const mockRegister = vi.fn();
        render(<InputRegister register={mockRegister} />);
        const nameInput = await screen.getByPlaceholderText('Name');
        await userEvent.type(nameInput, 'John Doe');
        const emailInput = await screen.getByPlaceholderText('Email');
        await userEvent.type(emailInput, 'john.doe@example.com');
        const passwordInput = await screen.getByPlaceholderText('Password');
        await userEvent.type(passwordInput, 'password123');
        const registerButton = await screen.getByRole('button', { name: 'Register' });

        // Action
        await userEvent.click(registerButton);

        // Assert
        expect(mockRegister).toBeCalledWith({
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'password123',
        });
    });
});
