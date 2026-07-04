const {test,expect}=require('@playwright/test')

test("My First Test", async function ({page}) {
expect(12).toBe(12);
})


test.skip("My Second Test", async function ({page}) {
    expect(100).toBe(101);
})

test("My Third Test", async function ({page}) {
    expect(2.0).toBe(2.0);
})

test("My Fourth Test", async function ({page}) {
    expect("Mahesh Holkar").toContain('Mahesh');
    expect(true).toBeTruthy()
})


test("My Fifth Test", async function ({page}) {
    expect(false).toBeFalsy()
})

test("My Sixth Test", async function ({page}) {
    expect("Mahesh Holkar".includes("Holkar")).toBeTruthy()
}) 

// test.only("My Fourth Test", async function ({page}) {
//     expect("Mahesh Holkar").toContain('Mahesh');
// })

