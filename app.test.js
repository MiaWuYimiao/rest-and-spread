it('should create array of odds', function(){
    expect(filterOutOdds(3,4,6)).toEqual([4,6]);
})

it('should find right min', function(){
    expect(findMin(1,4,12,-3)).toEqual(-3);
    expect(findMin(1,-1)).toEqual(-1);
    expect(findMin(3,1)).toEqual(1);
})

it('should merge two objects', function(){
    expect(mergeObjects({a:1, b:2}, {c:3, d:4})).toEqual({a:1, b:2, c:3, d:4});
})

it('should write right double and return args', function(){
    expect(doubleAndReturnArgs([1,2,3], 4, 4)).toEqual([1,2,3,8,8]);
    expect(doubleAndReturnArgs([2],10,4)).toEqual([2,20,8]);
})

it('should combine two arrays', function(){
    let array1 = [1,2,4];
    let array2 = [3,5,5];
    expect(extend(array1, array2)).toEqual([1,2,4,3,5,5]);
    expect(array1).toEqual([1,2,4]);
    expect(array2).toEqual([3,5,5]);
})

it('should add new key val', function(){
    let obj = {drink : 'water', dessert : 'icecream', entre : 'steak'};
    const key = 'side';
    const value = 'salad';
    expect(addKeyVal(obj, key, value)).toEqual({drink : 'water', dessert : 'icecream', entre : 'steak', side : 'salad'});
    expect(obj).toEqual({drink : 'water', dessert : 'icecream', entre : 'steak'});
})

