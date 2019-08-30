const assert=require('chai').assert;
const bst=require('../../utility/utility');

describe('Number of BST', function(){

    
   it('input must not be large',function(){
        let result=bst.nBST(200);
        assert.equal(result,"input too large");
    });
   it('inputs must be positive',function(){
        let result=bst.nBST(-4);
        assert.equal(result,"inputs cannot be negative");
    });
    

    
    it('input should not be a string',function(){
        let result=bst.nBST("");
        assert.equal(result,"input must be a number");
    });
    it('input should not be a null',function(){
        let result=bst.nBST(null);
        assert.equal(result,"input must be a number");
    });
    it('input should not be undefined',function(){
        let result=bst.nBST(undefined);
        assert.equal(result,"input must be a number");
    });
    it('input should not be boolean',function(){
        let result=bst.nBST(true);
        assert.equal(result,"input must be a number");
    });
});
