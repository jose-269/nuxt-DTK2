const htmlFavorite = require('./favoriteUserMail');


test('test html favorite con todos los campos', () => {

    const htmlResult =  () => htmlFavorite({
        name: 'Jose Luis',
        rut: '16213123-9',
        phone: '2123213',
        email: 'test@test.com'
    });


    expect(htmlResult).toBeTruthy();

    expect(htmlResult).not.toContain('{{');

    expect(htmlResult).not.toContain('}}');

   

});

test('test html favorite con campos vacios pero sin las variables en el html', () => {

    const htmlResult =  () => htmlFavorite({
        name: 'Jose Luis',
        
    });


    expect(htmlResult).toBeTruthy();

    expect(htmlResult).not.toContain('{{');

    expect(htmlResult).not.toContain('}}');
   

});