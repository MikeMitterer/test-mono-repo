import 'jest-extended'

describe('ts_features', () => {
    // const logger = LoggerFactory.getLogger('test.ts_features');

    test('Optional chaining', /* async */ () => {
        const value: { name: string; age: number | undefined } = {
            name: 'Mike',
            age: undefined
        }
        expect(value?.age).toBeUndefined()

        value.age = 99
        expect(value?.age).toBe(99)
    })
})
