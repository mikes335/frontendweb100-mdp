describe('types', () => {
    describe('declaring variables', () => {
        it('using the let keyword', () => {
            let name: string | number = 'Floki';

            expect(name).toBe("Floki");

            name = "Thor";

            expect(name).toBe("Thor");

            name = 9876;

            expect(name).toBe(9876);

            let x: number | boolean;
        });
        it('a const keyword', () => {
            const PI = 3.14;

            const favoriteNumbers = [1, 2, 3, 4, 5, 6];
            favoriteNumbers[0] = 100;
            const movie = {
                title: 'Star Wars IV: Where It All Started',
                director: 'Lucas',
                yearReleased: 1978
            };

            movie.yearReleased = 1977;


        });
        it('why using var is bad for your health', () => {
            let burritos;
            const age = 22;
            if (age > 21) {
                var message = 'old enough'
                //let message = 'old enough'
            }

            expect(message).toBe('old enough');
            expect(burritos).toBeUndefined();
        });
        it('numeric literals', () => {
            let x: number;
            x = 12;
            x = 3.0;
            x = 3_000_000;
            x = 0xff;
            x = 0b10101;
            x = 0o744;
        });
        it('has booleans', () => {
            let x: boolean;
            x = true;
            x = false;

            expect("").toBeFalsy();
            expect(-1).toBeTruthy();

        });
        it('does not care if you use single or double quotes', () => {

            const f1 = "Bob";
            const f2 = 'Bob';
            expect(f1).toBe(f2);

            const f3 = "His name is Bob O'Connor";
            const fb = 'His name is Bob O\'Connor';
            const f4 = 'She said "Is it lunch time yet?"';
            const f4b = "She said \"Is it lunch time yet?\"";

        });
        it('has template string', () => {
            const f1 = "Bob";
            const f2 = `Bob`;
            expect(f1).toBe(f2);

            const f3 = `multi-
line
        strings!`;
            console.log(f3);
            const title = 'Walden', author = 'Thoreau';
            const info = `That book is called ${title} by ${author}`;
            console.log(info);
        });

        describe('arrays', () => {
            it('has them', () => {
                const things = [];
                things[0] = 'morning!';
                things[1] = 99
                things[999] = things;
                expect(things[999][0]).toBe('morning!');
                const numbers = [1, 2, 3];
                const friends: string[] = [];
                friends[0] = 'David';
                friends[1] = 'Dan';

                const stuff: Array<number | string> = [5, 6, 'yogurt'];
                //const stuff: (string | number)[] = [5,6,'yogurt'];
                const lotteryNumbers: Array<number> = [];

            });
            it('basic example', () => {

                let d1: [boolean, string, string];
                d1 = [false, 'tacos', 'beer'];



                // type ThingyWithLetters = string;

                // const name:ThingyWithLetters = 'Hello';

                type Age = number;
                type Person = [string, string, Age, string];

                const warren: Person = ['Warren', 'Ellis', 55, 'Musician'];
            });
            it('an example - oop style', () => {

                interface FormatNameResult {
                    fullName: string;
                    length: number;
                }
                // public string FormatName(first string, last string)
                function formatName(first: string, last: string): FormatNameResult {
                    const fullName = `${last}, ${first}`;
                    return {
                        fullName: fullName,
                        length: fullName.length
                    }
                }

                const result = formatName('Han', 'Solo');
                expect(result.fullName).toBe('Solo, Han');
                expect(result.length).toBe(9);

            });
            it('an example with a tuple', () => {

                type FormatNameResult = [string, number];

                function formatName(first: string, last: string): FormatNameResult {
                    const fullName = `${last}, ${first}`;
                    return [fullName, fullName.length];
                }

                const result = formatName('Han', 'Solo');

                // const name = result[0];

                // const len = result[1];
                const [name, len] = result;

                expect(name).toBe('Solo, Han');
                expect(len).toBe(9);

                const numbers = [1, 2, 3, 4, 5, 6, 7];

                const [first, ...others] = numbers;

                expect(first).toBe(1);
                expect(others).toEqual([2, 3, 4, 5, 6, 7]);

            });
            describe('object leterals', () => {
                it('an exmaple', () => {
                    interface Movie {
                        title: string,
                        director: string,
                        financial: {
                            openingWeekend: number,
                            totalBoxOffice: number
                        },
                        cast: {
                            [key: string]: string
                        }
                    };
                    const teenTitans = {
                        title: 'Teen Titans Go To the Movies',
                        director: 'Joe Schmidt',
                        financial: {
                            openingWeekend: 1_000_000,
                            totalBoxOffice: 3_252_832
                        },
                        cast: {
                            'Robin': 'Bill Jones',
                            'Starfire': 'Linda Carter'
                        }
                    };
                    expect(teenTitans.director).toBe('Joe Schmidt');
                    expect(teenTitans.financial.openingWeekend).toBe(1_000_000);
                    expect(teenTitans.cast['Robin']).toBe("Bill Jones");

                    const smallFoot: Movie = {
                        title: "Small foot",
                        director: "Sue Schmidt",
                        financial: {
                            openingWeekend: 450_000,
                            totalBoxOffice: 875_000
                        },
                        cast: {
                            "Jim": "LeBron James",
                            "Kim": "Rachel Mapel"
                        }
                    };
                });
            });
            it('if you wanted a C#-like dictionary', () => {

                interface Actor {
                    name: String;
                    role: String;
                }
                interface Dictionary<T> {
                    [key: string]: T
                }

                const cast: Dictionary<Actor> = {
                    'luke': { name: 'Mark Hammil', role: 'Luke Skywalker' },
                    'leia': { name: 'Carrie Fisher', role: 'General Organa' }
                };


                expect(cast['leia'].name).toBe('Carrie Fisher');

                const numbers: Dictionary<number> = {
                    'one': 1,
                    'two': 2,
                    'three': 3
                }

                expect(numbers['one'] + numbers['three']).toBe(4)
            });
        });
        describe('function literals', () => {
            it('has a few kinds', () => {

                // Named Function
                function add(a: number, b: number): number {
                    return a + b
                }

                expect(add(2, 2)).toBe(4);

                // anonymous immediately invoked function expression (IIFE)
                expect((function (a, b) { return a + b; })(3, 2)).toBe(5);

                type MathOp = (a: number, b: number) => number;

                const multiply: MathOp = function (a: number, b: number): number {
                    return a * b;
                }

                expect(multiply(3, 3)).toBe(9);

                // An Arrow Function
                const divide: MathOp = (a, b) => a / b;

                expect(divide(10, 2)).toBe(5);

                const divide2: MathOp = (a, b) => {
                    console.log(`About to divide a: ${a} b: ${b} `);
                    return a / b;
                }
                expect(divide2(20, 10)).toBe(2);
            });
        });
    });
});