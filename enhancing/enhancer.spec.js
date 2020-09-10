const enhancer = require('./enhancer.js');
// test away!

describe('.enhancer.js', ()=>{

    //testing .succeed function from enhancer
    describe("enhancer succeed", () => {
        it("succeed function must be called and return a new object with enhancement property increased by 1", () => {
            expect(enhancer.succeed({
                name: 'axe', 
                durability: 100, 
                enhancement: 20
            })).toMatchObject({
                name: 'axe', 
                durability: 100, 
                enhancement: 19
            });

            expect(enhancer.succeed({
                name: 'axe', 
                durability: 57, 
                enhancement: 19
            })).toMatchObject({
                name: 'axe', 
                durability: 57, 
                enhancement: 20
            });

            expect(enhancer.succeed({
                name: 'axe', 
                durability: 57, 
                enhancement: 2
            })).toMatchObject({
                name: 'axe', 
                durability: 57, 
                enhancement: 3
            });
        })
    })


    //testing .repair function from enhancer
    describe("enhancer repair", () => {
        it("repair function must be called and return an object with durability property equals to 100", () => {
            expect(enhancer.repair({
                name: 'axe', 
                durability: 98, 
                enhancement: '20'
            })).toMatchObject({
                name: 'axe', 
                durability: 100, 
                enhancement: '20'
            });

            expect(enhancer.repair({
                name: 'axe', 
                durability: 57, 
                enhancement: '20'
            })).toMatchObject({
                name: 'axe', 
                durability: 100, 
                enhancement: '20'
            });

        })
        //testing .fail function from enhancer
    describe('enhancer.fail',() => {
        it('.fail function must be called and return a new object with decreased durability level depending on enhancement level', ()=>{

            //If the item's enhancement is less than 15, the durability of the item is decreased by 5.
            expect(enhancer.fail({
                name: 'axe', 
                durability: 100, 
                enhancement: 14
            })).toMatchObject({
                name: 'axe', 
                durability: 95, 
                enhancement: 14
            });

            //If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
            expect(enhancer.fail({
                name: 'axe', 
                durability: 57, 
                enhancement: 15
            })).toMatchObject({
                name: 'axe', 
                durability: 47, 
                enhancement: 15
            });
            
            //If the item's enhancement level is greater than 16, 
            //the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
            expect(enhancer.fail({
                name: 'axe', 
                durability: 57, 
                enhancement: 18
            })).toMatchObject({
                name: 'axe', 
                durability: 47, 
                enhancement: 17
            });
        })
    })

    //for stretch
    //testing .get function from enhancer
    describe('enhancer.get',() => {
        it('.get function must be called and return a new object with the name property modified', ()=>{
            expect(enhancer.get(1,2,2,2)).toBeTruthy();
        })

    })
    })
})