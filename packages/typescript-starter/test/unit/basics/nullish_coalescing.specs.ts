import 'jest-extended'

describe('nullish_coalescing', () => {
    // const logger = LoggerFactory.getLogger('test.nullish_coalescing');

    // beforeEach(() => {
    // });
    //
    // afterEach(() => {
    // });

    test('Nullish Coalescing', /* async */ () => {
        const foo1 = {
            name: 'Mike'
        }
        const foo2 = undefined

        expect(foo1 ?? foo2).toBe(foo1)
        expect(foo2 ?? foo1).toBe(foo1)
        expect(foo2).toBeUndefined()
    })
})
