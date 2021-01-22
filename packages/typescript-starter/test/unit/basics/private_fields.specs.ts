import 'jest-extended'

describe('private_fields', () => {
    // const logger = LoggerFactory.getLogger('test.private_fields');

    class Person {
        // Geht mit 4.2 noch nicht
        // static #AGE = 42
        readonly #firstname: string
        readonly #lastname: string

        public get name(): string {
            return `${this.#firstname} ${this.#lastname}`
        }

        constructor(firstname: string, lastname: string) {
            this.#firstname = firstname
            this.#lastname = lastname
        }

        // Geht mit 4.2 noch nicht
        // #internal(): string {
        //     return `${this.#firstname} ${this.#lastname}`
        // }
    }

    test('Private field', /* async */ () => {
        const person = new Person('Mike', 'Mitterer')

        expect(person.name).toBe('Mike Mitterer')
    })
})
