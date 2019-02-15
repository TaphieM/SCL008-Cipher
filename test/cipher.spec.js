describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',() => {
     
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG" )

    });

    it('debería retornar "Tgt Lmxiatgbx" para "Ana Stephanie" con offset 33',() => {
     
      assert.equal(cipher.encode(19,"Ana Stephanie"), "Tgt Lmxiatgbx" )

    });

    it('debería retornar "G44y/7:`{" para "S00k!3:^|" con offset 14',() => {
     
      assert.equal(cipher.encode(14,"S00k!3:^|"), "G44y/7:`{" )

    });

    it('debería retornar "apñlñzwpy" para "peñañolen" con offset 11',() => {
     
      assert.equal(cipher.encode(11,"peñañolen"), "apñlñzwpy" )

    });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () =>{
    
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ")

    });

    it('debería retornar "Ana Stephanie" para "Tgt Lmxiatgbx" con offset 33', () =>{
    
      assert.equal(cipher.decode(19,"Tgt Lmxiatgbx"),"Ana Stephanie")

    });

    it('debería retornar "S00k!3:^|" para "G44y/7:`{" con offset 14',() => {
     
      assert.equal(cipher.decode(14,"G44y/7:`{"), "S00k!3:^|" )

    });

    it('debería retornar "peñañolen" para "apñlñzwpy" con offset 11',() => {
     
      assert.equal(cipher.decode(11,"apñlñzwpy"), "peñañolen" )

    });


  });

});
