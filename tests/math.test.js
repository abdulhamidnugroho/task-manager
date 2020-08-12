const { calculateTip } = require('../src/math')
const { TestScheduler } = require('jest')

test('Should calculate total with tip', () => {
    const total = calculateTip(10, .3)
     expect(total).toBe(13)
})

test('Should Calculate Total with default tip', () => {
    const total = calculateTip(10)
     expect(total).toBe(12.5)
})