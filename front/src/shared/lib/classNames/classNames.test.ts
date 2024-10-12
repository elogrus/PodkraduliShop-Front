import { compareClasses } from '.'

describe("compareClasses", () => {
    test('single class', () => {
        expect(compareClasses('test')).toBe('test');
    });

    test('true mod', () => {
        expect(compareClasses('test', { mod: true })).toBe('test mod');
    });

    test('false mod', () => {
        expect(compareClasses('test', { mod: false })).toBe('test');
    });

    test('multiple mods', () => {
        expect(compareClasses('test', { mod1: false, mod2: true, mod3: false, mod4: true })).toBe('test mod2 mod4');
    });

    test('additional single class', () => {
        expect(compareClasses('test', {}, ['cls1'])).toBe('test cls1');
    });

    test('additional multiple classes', () => {
        expect(compareClasses('test', {}, ['cls1', 'cls2'])).toBe('test cls1 cls2');
    });

    test('all together', () => {
        expect(compareClasses('test', { mod1: false, mod2: true, mod3: false, mod4: true }, ['cls1', 'cls2'])).toBe('test mod2 mod4 cls1 cls2');
    });
})
