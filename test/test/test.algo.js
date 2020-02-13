const expect = chai.expect



describe("Se imprime la secuenta de fibo: ", ()=>{   
    it('al poner 2 la secuencia ess', ()=>{
        expect(fibo(2)).to.have.lengthOf(2)
        
    })
    it('al poner 4 la secuencia es', ()=>{
        expect(fibo(4)).to.have.lengthOf(4);
    })
    it('al poner 7 en la posision 5 deberia valer 8',()=>{
        let rpp= fibo(7);        
        expect(rpp[5]).to.equals(8);
    })
    it('al poner 7 el valor deberia ser 8',()=>{
        let rpp= fibo(7);        
        function myFunc(total, num) {
            return total + num;
        }
        expect(rpp.reduce(myFunc)).to.equals(13);
    })
})