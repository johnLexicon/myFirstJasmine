class Calculator {

    add(a, b){
        return a + b;
    }

    subtract(a, b){
        return a - b;
    }

    toString(){
        return "Calculator";
    }
}

/*
describe is used to group multiple tests.
*/
describe('Calculator', function(){

    let calc = new Calculator();

    /*
    it is the actual spec (test).
    */
    it('should be able to add two numbers together', function(){
        expect(calc.add(1, 4)).toBe(5);
    });

    it('should be able to subtract', function(){
        expect(calc.subtract(4, 2)).toBe(2);
    });

    it('should not be undefined', function(){
        expect(calc).not.toBeUndefined();
        expect(calc).not.toBeNull();
    });

    it('should return string representation', function(){
        expect(calc.toString()).toMatch('Calculator');
        expect(calc.toString()).toContain('culator');
    });
})