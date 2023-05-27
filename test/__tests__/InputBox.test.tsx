import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import InputBox from '../../src/components/UI/InputBox/InputBox';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../src/store/store';
import { InputBoxProps } from '../../src/types/types';

describe('InputBox', () => {
    
    const props: InputBoxProps = {
        inpType: 'text',
        name_ru: 'Тест',
        name_en: 'Test',
        func: jest.fn(),
    };
    
    beforeEach(() => {
        render(<MemoryRouter>
            <Provider store={store}>
                <InputBox {...props} />
            </Provider>
        </MemoryRouter>);
    })
    test('Рендер с правильным названием prop', () => {
        const input = screen.getByPlaceholderText(props.name_ru);
        expect(input).toBeInTheDocument();
    });

    test('Вызов функции при изменении значений', () => {
        const input = screen.getByTestId('inputBox');
        const value = 'testValue';
        fireEvent.change(input, { target: { value } });
        expect(props.func).toHaveBeenCalledWith(value);
    });
});