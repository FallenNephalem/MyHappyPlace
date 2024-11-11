// Импортируем функции, которые мы хотим протестировать
const generate_random_card = require('./../static/js/card_generator_engine');

// // Группируем тесты с помощью describe
// describe('Math operations', () => {
//     // Тест для функции sum
//     test('adds 1 + 2 to equal 3', () => {
//         expect(
//             generate_random_card()
//             ).toBe(3);
//     });

//     // Тест для функции subtract
//     test('subtracts 2 - 1 to equal 1', () => {
//         expect(subtract(2, 1)).toBe(1);
//     });
// });

test("test card_generation", () => {
    for (let i = 0; i < 54; i++) {
        generate_random_card(); // Вызываем функцию 54 раза

    }
    expect(generate_random_card()).toBeNull(); 
})